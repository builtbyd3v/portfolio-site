export type ContributionDay = {
  date: string
  count: number
  level: number
}

export type ContributionData = {
  total: number
  contributions: ContributionDay[]
}

const FALLBACK_URL =
  'https://github-contributions-api.jogruber.de/v4/{user}?y=last'
const CACHE_KEY = 'gh-contrib-v1'
const CACHE_MS = 60 * 60 * 1000

function clampLevel(value: unknown): number {
  const n = Number(value)
  if (!Number.isFinite(n) || n <= 0) return 0
  if (n >= 4) return 4
  return Math.trunc(n)
}

function normalize(raw: unknown): ContributionData | null {
  if (!raw || typeof raw !== 'object') return null
  const record = raw as {
    total?: { lastYear?: number } | number
    contributions?: unknown
  }
  if (!Array.isArray(record.contributions) || record.contributions.length < 300) {
    return null
  }

  const contributions: ContributionDay[] = record.contributions
    .map((entry) => {
      if (!entry || typeof entry !== 'object') return null
      const day = entry as { date?: unknown; count?: unknown; level?: unknown }
      if (typeof day.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(day.date)) {
        return null
      }
      return {
        date: day.date,
        count: Math.max(0, Number(day.count) || 0),
        level: clampLevel(day.level),
      }
    })
    .filter((day): day is ContributionDay => day !== null)
    .sort((a, b) => a.date.localeCompare(b.date))

  if (contributions.length < 300) return null

  const listedTotal =
    typeof record.total === 'number'
      ? record.total
      : Number(record.total?.lastYear)
  const total = Number.isFinite(listedTotal)
    ? listedTotal
    : contributions.reduce((sum, day) => sum + day.count, 0)

  return { total, contributions }
}

function readCache(): ContributionData | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as { at?: number; data?: unknown }
    if (typeof parsed.at !== 'number' || Date.now() - parsed.at > CACHE_MS) {
      return null
    }
    return normalize(parsed.data)
  } catch {
    return null
  }
}

function writeCache(data: ContributionData) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ at: Date.now(), data }),
    )
  } catch {
    /* private mode */
  }
}

export async function fetchContributions(
  user: string,
  signal: AbortSignal,
): Promise<ContributionData> {
  const cached = readCache()
  if (cached) return cached

  const sources = [
    '/api/github-contributions',
    FALLBACK_URL.replace('{user}', user),
  ]
  if (import.meta.env.DEV) sources.shift()

  for (const url of sources) {
    try {
      const response = await fetch(url, { signal })
      if (!response.ok) continue
      const data = normalize(await response.json())
      if (!data) continue
      writeCache(data)
      return data
    } catch (error) {
      if (signal.aborted) throw error
    }
  }

  throw new Error('contributions_unavailable')
}

export function localIso(date = new Date()): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function currentStreak(days: ContributionDay[]): number {
  const byDate = new Map(days.map((day) => [day.date, day.count]))
  const cursor = new Date()
  if ((byDate.get(localIso(cursor)) ?? 0) === 0) {
    cursor.setDate(cursor.getDate() - 1)
  }

  let streak = 0
  while ((byDate.get(localIso(cursor)) ?? 0) > 0) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

export function weeksFromDays(days: ContributionDay[]): (ContributionDay | null)[][] {
  const weeks: (ContributionDay | null)[][] = []
  let week: (ContributionDay | null)[] = []

  const first = days[0]
  if (first) {
    const pad = new Date(`${first.date}T00:00:00`).getDay()
    for (let i = 0; i < pad; i += 1) week.push(null)
  }

  for (const day of days) {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }
  return weeks
}

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

export function monthLabels(weeks: (ContributionDay | null)[][]) {
  const labels: { weekIndex: number; label: string }[] = []
  let previousMonth = -1
  let previousWeek = -10

  weeks.forEach((week, weekIndex) => {
    const day = week.find((entry) => entry !== null)
    if (!day) return
    const month = Number(day.date.slice(5, 7)) - 1
    if (month === previousMonth) return
    if (weekIndex - previousWeek < 2 && labels.length > 0) {
      previousMonth = month
      return
    }
    labels.push({ weekIndex, label: MONTHS[month] })
    previousMonth = month
    previousWeek = weekIndex
  })

  return labels
}
