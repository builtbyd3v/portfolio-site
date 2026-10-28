import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { CONTACT } from '../data/content'
import {
  bestDay,
  fetchContributions,
  longestStreak,
  monthLabels,
  weeksFromDays,
  type ContributionData,
  type ContributionDay,
} from '../lib/github-contributions'

const USER = CONTACT.github.replace(/\/$/, '').split('/').pop() ?? 'builtbyd3v'

function formatCount(n: number) {
  return new Intl.NumberFormat('en-US').format(n)
}

function prettyDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(
    new Date(`${date}T00:00:00`),
  )
}

function dayLabel(day: ContributionDay) {
  if (day.count === 0) return `No contributions on ${prettyDate(day.date)}`
  const noun = day.count === 1 ? 'contribution' : 'contributions'
  return `${formatCount(day.count)} ${noun} on ${prettyDate(day.date)}`
}

function emptyWeeks() {
  return Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => null))
}

export default function ContributionGraph() {
  const [data, setData] = useState<ContributionData | null>(null)
  const [error, setError] = useState(false)
  const [seen, setSeen] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const tipRef = useRef<HTMLDivElement>(null)

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

  // Starts the fill-in wave the first time the grid scrolls into view.
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setSeen(true)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const weeks = data ? weeksFromDays(data.contributions) : emptyWeeks()
  const labels = monthLabels(weeks)
  const best = data ? bestDay(data.contributions) : null

  function showTip(event: PointerEvent<HTMLDivElement>) {
    const tip = tipRef.current
    if (!tip) return
    const cell =
      event.target instanceof HTMLElement
        ? event.target.closest<HTMLElement>('[data-label]')
        : null
    if (!cell) {
      tip.hidden = true
      return
    }
    const box = event.currentTarget.getBoundingClientRect()
    const rect = cell.getBoundingClientRect()
    const x = rect.left - box.left + rect.width / 2
    tip.textContent = cell.dataset.label ?? ''
    tip.hidden = false
    tip.style.left = `${Math.min(Math.max(x, 90), box.width - 90)}px`
    tip.style.top = `${rect.top - box.top}px`
  }

  function hideTip() {
    if (tipRef.current) tipRef.current.hidden = true
  }

  return (
    <div className="sheet contrib">
      {data ? (
        <dl className="contrib-stats">
          <div>
            <dt>Contributions, last year</dt>
            <dd>
              <a className="link" href={CONTACT.github} target="_blank" rel="noreferrer">
                {formatCount(data.total)}
              </a>
            </dd>
          </div>
          <div>
            <dt>Longest streak</dt>
            <dd>{longestStreak(data.contributions)} days</dd>
          </div>
          {best ? (
            <div>
              <dt>Best day, {prettyDate(best.date)}</dt>
              <dd>{formatCount(best.count)}</dd>
            </div>
          ) : null}
        </dl>
      ) : (
        <p className="text-[15px] text-ink-2">
          {error ? (
            <>
              Could not load the live graph. See it on{' '}
              <a className="link" href={CONTACT.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </>
          ) : (
            'Loading contributions…'
          )}
        </p>
      )}

      <div
        ref={gridRef}
        className={`contrib-grid${seen && data ? ' is-live' : ''}`}
        style={{ ['--weeks' as string]: String(weeks.length) }}
        role="img"
        aria-label={
          data
            ? `GitHub contribution heatmap: ${formatCount(data.total)} contributions in the last year.`
            : 'GitHub contribution heatmap, loading.'
        }
        onPointerOver={showTip}
        onPointerLeave={hideTip}
      >
        <div className="contrib-months" aria-hidden="true">
          {labels.map((label) => (
            <span
              key={`${label.label}-${label.weekIndex}`}
              style={{ left: `${(label.weekIndex / weeks.length) * 100}%` }}
            >
              {label.label}
            </span>
          ))}
        </div>
        <div className="contrib-weeks" aria-hidden="true">
          {weeks.map((week, wi) => (
            <div key={wi} className="contrib-week" style={{ ['--wi' as string]: String(wi) }}>
              {week.map((day, di) =>
                day ? (
                  <span
                    key={day.date}
                    data-label={dayLabel(day)}
                    className={`contrib-day is-l${day.level}`}
                  />
                ) : (
                  <span key={`${wi}-${di}`} className="contrib-day is-empty" />
                ),
              )}
            </div>
          ))}
        </div>
        <div ref={tipRef} className="contrib-tip" hidden />
      </div>
    </div>
  )
}
