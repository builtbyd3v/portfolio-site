import { type ReactNode } from 'react'
import Reveal from './Reveal'

type TimelineItemProps = {
  period: string
  children: ReactNode
  delayIndex?: number
}

/**
 * One node on a vertical timeline. The connecting rail is the parent's left
 * border; this item places an accent-ringed dot on it and reveals in on scroll.
 */
export default function TimelineItem({ period, children, delayIndex = 0 }: TimelineItemProps) {
  return (
    <Reveal delayIndex={delayIndex} className="relative pb-12 pl-8 last:pb-0">
      <span
        aria-hidden
        className="absolute top-1.5 -left-[6px] h-[11px] w-[11px] rounded-full border-2 border-accent bg-cream"
      />
      <div className="text-[13px] tracking-[0.04em] text-muted">{period}</div>
      <div className="mt-1.5">{children}</div>
    </Reveal>
  )
}
