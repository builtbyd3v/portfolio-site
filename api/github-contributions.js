const USER = 'builtbyd3v'
const GITHUB_URL = `https://github.com/users/${USER}/contributions`
const FALLBACK_URL = `https://github-contributions-api.jogruber.de/v4/${USER}`

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
  const heading = /(\d[\d,]*)\s+contributions?\s+in\s+the\s+last\s+year/i.exec(html)
  const total = heading
    ? Number(heading[1].replaceAll(',', ''))
    : contributions.reduce((sum, day) => sum + day.count, 0)

  return { total, contributions }
}

function json(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=1800')
  res.status(status).json(body)
}

async function fromGithub() {
  const response = await fetch(GITHUB_URL, {
    headers: {
      Accept: 'text/html',
      'User-Agent': 'builtbyd3v-portfolio (https://builtbyd3v.com)',
    },
  })
  if (!response.ok) throw new Error(`github ${response.status}`)
  const data = parseGithubCalendar(await response.text())
  if (data.contributions.length < 300) {
    throw new Error('github calendar incomplete')
  }
  return data
}

async function fromFallback() {
  const response = await fetch(`${FALLBACK_URL}?y=last`, {
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error(`fallback ${response.status}`)
  const data = await response.json()
  const contributions = data?.contributions ?? []
  if (contributions.length < 300) {
    throw new Error('fallback calendar incomplete')
  }
  return { total: Number(data.total?.lastYear), contributions }
}

export default async function handler(req, res) {
  try {
    json(res, 200, await fromGithub())
  } catch {
    try {
      json(res, 200, await fromFallback())
    } catch {
      json(res, 502, { error: 'contributions_unavailable' })
    }
  }
}
