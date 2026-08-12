import { type ReactNode } from 'react'
import Reveal from './Reveal'

type ProofCardProps = {
  period: string
  eyebrow?: string
  title: string
  detail?: string
  children?: ReactNode
  delayIndex?: number
  featured?: boolean
}

/** Dark surface proof card — replaces the old timeline rail. */
export default function ProofCard({
  period,
  eyebrow,
  title,
  detail,
  children,
  delayIndex = 0,
  featured = false,
}: ProofCardProps) {
  return (
    <Reveal
      delayIndex={delayIndex}
      className={`proof-card${featured ? ' proof-card-featured' : ''}`}
    >
      <div className="proof-card-meta">
        {eyebrow && <span className="proof-card-eyebrow">{eyebrow}</span>}
        <span className="proof-card-period">{period}</span>
      </div>
      <h3 className="proof-card-title">{title}</h3>
      {detail && <p className="proof-card-detail">{detail}</p>}
      {children && <div className="proof-card-body">{children}</div>}
    </Reveal>
  )
}
