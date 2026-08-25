import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { animate, useMotionValue, useReducedMotion } from 'motion/react'
import { CONTACT } from '@/data/content'
import {
  currentStreak,
  fetchContributions,
  localIso,
  monthLabels,
  weeksFromDays,
  type ContributionData,
  type ContributionDay,
} from '@/lib/github-contributions'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

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

function CountPop({ value }: { value: number }) {
  const reduce = useReducedMotion()
  const motionValue = useMotionValue(0)
  const [text, setText] = useState('0')

  useEffect(() => {
    if (reduce) return
    const controls = animate(motionValue, value, {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    })
    const unsubscribe = motionValue.on('change', (latest) => {
      setText(formatCount(Math.round(latest)))
    })
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [motionValue, reduce, value])

  if (reduce) return <span>{formatCount(value)}</span>
  return <span>{text}</span>
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
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          {data ? (
            <p className="text-3xl font-semibold tracking-tight">
              <CountPop value={data.total} />
            </p>
          ) : error ? (
            <p className="text-sm text-muted-foreground">
              Could not load the live graph.
            </p>
          ) : (
            <Skeleton className="h-9 w-28" />
          )}
          <p className="mt-1 text-sm text-muted-foreground">
            contributions in the last year
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {streak > 0 ? <span>{formatCount(streak)}-day streak</span> : null}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            @{USER}
          </a>
        </div>
      </div>

      {error && !data ? (
        <p className="mt-4 text-sm text-muted-foreground">
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            Open the GitHub profile
          </a>{' '}
          to see the contribution graph.
        </p>
      ) : (
        <div
          ref={scrollRef}
          className="contrib-scroll mt-6"
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
                    className={cn(
                      'contrib-day',
                      !day && (data ? 'is-pad' : 'is-loading'),
                      isToday && 'is-today',
                    )}
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

      <div
        className="mt-4 flex items-center justify-end gap-1 text-[11px] text-muted-foreground"
        aria-hidden
      >
        <span className="mr-1">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className="contrib-day" data-level={level} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  )
}

function emptyWeeks(): (ContributionDay | null)[][] {
  return Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => null))
}
