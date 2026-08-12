type MarkProps = {
  className?: string
  /** Soft draw-in on mount. Defaults to true. */
  animate?: boolean
}

/**
 * Locked interlocking DG mark from public/brand-drafts.
 * animate fades/scales the mark in after the wordmark contracts.
 */
export default function BrandMark({ className = '', animate = true }: MarkProps) {
  return (
    <img
      src="/brand-drafts/logo-dg-locked.png"
      alt=""
      width={32}
      height={32}
      className={`brand-mark-img${animate ? ' brand-mark-group' : ''} ${className}`.trim()}
      draggable={false}
    />
  )
}
