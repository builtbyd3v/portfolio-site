import { useEffect, useState } from 'react'
import { CONTACT } from '../data/content'
import {
  calendarYearDays,
  fetchContributions,
  monthLabels,
  weeksFromDays,
  type ContributionData,
  type ContributionDay,
} from '../lib/github-contributions'

const USER = CONTACT.github.replace(/\/$/, '').split('/').pop() ?? 'builtbyd3v'
const YEAR = new Date().getFullYear()

function formatCount(n: number) {
  return new Intl.NumberFormat('en-US').format(n)
}

function dayLabel(day: ContributionDay) {
  const pretty = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${day.date}T00:00:00`))
  if (day.count === 0) return `No contributions on ${pretty}`
  const noun = day.count === 1 ? 'contribution' : 'contributions'
  return `${formatCount(day.count)} ${noun} on ${pretty}`
}

function emptyWeeks() {
  return Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => null))
}

export default function ContributionGraph() {
  const [data, setData] = useState<ContributionData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    fetchContributions(USER, controller.signal, YEAR)
      .then(setData)
      .catch((err: unknown) => {
        if (controller.signal.aborted) return
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError(true)
      })
    return () => controller.abort()
  }, [])

  const yearDays = data ? calendarYearDays(data.contributions, YEAR) : []
  const weeks = yearDays.length ? weeksFromDays(yearDays) : emptyWeeks()
  const labels = monthLabels(weeks)
  const total = yearDays.reduce((sum, day) => sum + day.count, 0)

  return (
    <div>
      <p className="text-[14px] text-soft">
        {data ? (
          <>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="contrib-link"
            >
              {formatCount(total)} contributions on GitHub
              <span aria-hidden="true">↗</span>
            </a>{' '}
            in {YEAR}.
          </>
        ) : error ? (
          <>
            Could not load the live graph.{' '}
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              GitHub
            </a>
          </>
        ) : (
          'Loading contributions…'
        )}
      </p>

      <div
        className="contrib-grid"
        style={{ ['--weeks' as string]: String(weeks.length) }}
      >
        <div className="contrib-months">
          {labels.map((label) => (
            <span
              key={`${label.label}-${label.weekIndex}`}
              style={{ left: `${(label.weekIndex / weeks.length) * 100}%` }}
            >
              {label.label}
            </span>
          ))}
        </div>
        <div className="contrib-weeks">
          {weeks.map((week, wi) => (
            <div key={wi} className="contrib-week">
              {week.map((day, di) =>
                day ? (
                  <span
                    key={day.date}
                    title={dayLabel(day)}
                    className={`contrib-day is-l${day.level}`}
                  />
                ) : (
                  <span key={`${wi}-${di}`} className="contrib-day is-empty" />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
