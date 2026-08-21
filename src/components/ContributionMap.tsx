import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { CONTACT } from '../data/content'
import {
  currentStreak,
  fetchContributions,
  localIso,
  monthLabels,
  weeksFromDays,
  type ContributionData,
  type ContributionDay,
} from '../lib/github-contributions'
import { GitHubIcon } from '../icons'

const USER =
  CONTACT.github.replace(/\/$/, '').split('/').pop() ?? 'builtbyd3v'

const DOW = ['', 'Mon', '', 'Wed', '', 'Fri', ''] as const

function formatCount(n: number) {
  return new Intl.NumberFormat('en-US').format(n)
}

function dayLabel(day: ContributionDay) {
  const when = new Date(`${day.date}T00:00:00`)
  const pretty = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(when)
  if (day.count === 0) return `No contributions on ${pretty}`
  const noun = day.count === 1 ? 'contribution' : 'contributions'
  return `${formatCount(day.count)} ${noun} on ${pretty}`
}

export default function ContributionMap() {
  const [data, setData] = useState<ContributionData | null>(null)
  const [error, setError] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetchContributions(USER, controller.signal)
      .then(setData)
      .catch((err: unknown) => {
        if (controller.signal.aborted) return
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError(true)
      })
    return () => controller.abort()
  }, [])

  const weeks = data ? weeksFromDays(data.contributions) : emptyWeeks()
  const labels = monthLabels(weeks)
  const streak = data ? currentStreak(data.contributions) : 0
  const today = localIso()

  useEffect(() => {
    const scroller = scrollRef.current
    if (!scroller || !data) return
    scroller.scrollLeft = scroller.scrollWidth
  }, [data])

  return (
    <div className="contrib-panel">
      <div className="contrib-head">
        <div>
          <p className="contrib-kicker">
            <span aria-hidden className="workbench-stage-dot workbench-stage-dot-live" />
            GitHub
          </p>
          <p className="contrib-total">
            {data ? (
              <>
                <strong>{formatCount(data.total)}</strong> contributions in the
                last year
              </>
            ) : error ? (
              'Could not load the live graph.'
            ) : (
              'Loading contributions…'
            )}
          </p>
        </div>
        <div className="contrib-meta">
          {streak > 0 && (
            <span>
              {formatCount(streak)}-day streak
            </span>
          )}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="contrib-profile"
          >
            <GitHubIcon className="contrib-profile-icon" />
            @{USER}
          </a>
        </div>
      </div>

      {error && !data ? (
        <p className="contrib-fallback">
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            Open the GitHub profile
          </a>{' '}
          to see the contribution graph.
        </p>
      ) : (
        <div
          ref={scrollRef}
          className="contrib-scroll"
          tabIndex={0}
          aria-label="GitHub contribution calendar"
        >
          <div
            className="contrib-calendar"
            style={{ '--contrib-weeks': weeks.length } as CSSProperties}
          >
            <div className="contrib-months" aria-hidden>
              {labels.map((label) => (
                <span
                  key={`${label.label}-${label.weekIndex}`}
                  style={{ gridColumn: label.weekIndex + 2 }}
                >
                  {label.label}
                </span>
              ))}
            </div>
            {DOW.map((label, row) => (
              <span
                key={`dow-${row}`}
                className="contrib-dow"
                style={{ gridRow: row + 2 }}
                aria-hidden
              >
                {label}
              </span>
            ))}
            {weeks.map((week, weekIndex) =>
              week.map((day, row) => {
                const level = day?.level ?? 0
                const isToday = day?.date === today
                return (
                  <span
                    key={`${weekIndex}-${row}`}
                    className={`contrib-day${
                      day ? '' : data ? ' is-pad' : ' is-loading'
                    }${isToday ? ' is-today' : ''}`}
                    style={{
                      gridColumn: weekIndex + 2,
                      gridRow: row + 2,
                    }}
                    data-level={day ? level : undefined}
                    title={day ? dayLabel(day) : undefined}
                  />
                )
              }),
            )}
          </div>
        </div>
      )}

      <div className="contrib-legend" aria-hidden>
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className="contrib-day" data-level={level} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}

function emptyWeeks(): (ContributionDay | null)[][] {
  return Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => null))
}
