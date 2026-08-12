type MarkProps = {
  className?: string
  /** Soft draw-in on mount. Defaults to true. */
  animate?: boolean
}

/**
 * Geometric interlocking DG mark from public/brand-drafts.
 * animate fades/scales the mark in after the wordmark contracts.
 */
export default function BrandMark({ className = '', animate = true }: MarkProps) {
  return (
    <img
      src="/brand-drafts/logo-dg-geometric-clear.png"
      alt=""
      width={48}
      height={48}
      className={`brand-mark-img${animate ? ' brand-mark-group' : ''} ${className}`.trim()}
      draggable={false}
    />
  )
}
