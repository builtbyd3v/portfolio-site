const USER = 'builtbyd3v'
const GITHUB_URL = `https://github.com/users/${USER}/contributions`
const FALLBACK_URL = `https://github-contributions-api.jogruber.de/v4/${USER}`

function currentYear() {
  return new Date().getFullYear()
}

export function requestedYear(value) {
  const year = Number(value)
  if (!Number.isInteger(year) || year < 2008 || year > currentYear() + 1) {
    return currentYear()
  }
  return year
}

function clampLevel(value) {
  const n = Number(value)
  if (!Number.isFinite(n) || n <= 0) return 0
  if (n >= 4) return 4
  return Math.trunc(n)
}

function parseCount(text) {
  if (!text) return null
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (/^no contribution/i.test(normalized)) return 0
  const match = /^(\d+)\s+contribution/i.exec(normalized)
  return match ? Number(match[1]) : null
}

export function parseGithubCalendar(html) {
  const tips = new Map()
  for (const match of html.matchAll(/<tool-tip\b([^>]*)>(.*?)<\/tool-tip>/gis)) {
    const forId = /\sfor="([^"]+)"/.exec(match[1])?.[1]
    if (forId) tips.set(forId, match[2].replace(/\s+/g, ' ').trim())
  }

  const byDate = new Map()
  for (const match of html.matchAll(
    /<(?:td|rect)\b[^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*>/gi,
  )) {
    const tag = match[0]
    if (!/data-level=/.test(tag)) continue
    const date = match[1]
    const level = clampLevel(/data-level="(\d+)"/.exec(tag)?.[1])
    const id = /\sid="([^"]+)"/.exec(tag)?.[1]
    const count = parseCount(id ? tips.get(id) : '')
    byDate.set(date, {
      date,
      count: count ?? 0,
      level,
    })
  }

  const contributions = [...byDate.values()].sort((a, b) =>
    a.date.localeCompare(b.date),
  )
  const heading = /(\d[\d,]*)\s+contributions?\s+in\s+(\d{4})/i.exec(html)
  const headingYear = heading ? Number(heading[2]) : null
  const headingTotal = heading
    ? Number(heading[1].replaceAll(',', ''))
    : contributions.reduce((sum, day) => sum + day.count, 0)

  return {
    total: headingYear
      ? { [headingYear]: headingTotal, lastYear: headingTotal }
      : { lastYear: headingTotal },
    contributions,
  }
}

export function forYear(data, year) {
  const prefix = `${year}-`
  const contributions = (data?.contributions ?? []).filter(
    (day) => typeof day?.date === 'string' && day.date.startsWith(prefix),
  )
  const listed = data?.total
  const yearTotal =
    typeof listed === 'number'
      ? listed
      : Number(listed?.[year] ?? listed?.lastYear)
  const total = Number.isFinite(yearTotal)
    ? yearTotal
    : contributions.reduce((sum, day) => sum + day.count, 0)

  return {
    total: { [year]: total, lastYear: total },
    contributions,
  }
}

function json(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=1800')
  res.status(status).json(body)
}

async function fromGithub(year) {
  const response = await fetch(
    `${GITHUB_URL}?from=${year}-01-01&to=${year}-12-31`,
    {
      headers: {
        Accept: 'text/html',
        'User-Agent': 'builtbyd3v-portfolio (https://builtbyd3v.com)',
      },
    },
  )
  if (!response.ok) throw new Error(`github ${response.status}`)
  const scoped = forYear(parseGithubCalendar(await response.text()), year)
  if (scoped.contributions.length < 300) {
    throw new Error('github calendar incomplete')
  }
  return scoped
}

async function fromFallback(year) {
  const response = await fetch(`${FALLBACK_URL}?y=${year}`, {
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error(`fallback ${response.status}`)
  const scoped = forYear(await response.json(), year)
  if (scoped.contributions.length < 300) {
    throw new Error('fallback calendar incomplete')
  }
  return scoped
}

export default async function handler(req, res) {
  const year = requestedYear(req.query?.year)
  try {
    json(res, 200, await fromGithub(year))
  } catch {
    try {
      json(res, 200, await fromFallback(year))
    } catch {
      json(res, 502, { error: 'contributions_unavailable' })
    }
  }
}
