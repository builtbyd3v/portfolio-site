type MarkProps = {
  className?: string
  /** Soft draw-in on mount. Defaults to true. */
  animate?: boolean
}

/**
 * Interlocking DG monogram from the locked draft:
 * thick blocky D with a nested G in the open right.
 */
export default function BrandMark({ className = '', animate = true }: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="7"
        fill="#0a0a0a"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1.5"
      />
      <g className={animate ? 'brand-mark-group' : undefined}>
        {/* D bowl */}
        <path
          fill="#ffffff"
          d="M8 7.4h9.6c4.55 0 7.45 2.7 7.45 6.9v3.4c0 4.2-2.9 6.9-7.45 6.9H8V7.4Z"
        />
        {/* D counter */}
        <path
          fill="#0a0a0a"
          d="M11.4 10.7v10.6h6.1c2.55 0 4.05-1.4 4.05-3.9v-2.8c0-2.5-1.5-3.9-4.05-3.9H11.4Z"
        />
        {/* Nested G */}
        <path
          fill="#ffffff"
          d="M19.15 12.55c1.2 0 1.95.7 1.95 1.85v.35h-4.15v-1.05c0-.75.65-1.15 2.2-1.15Zm-4.95 3.55h6.85v2.35h-2.35l.85 2.15h-2.4l-.75-1.85h-2.2v-2.65Z"
        />
      </g>
    </svg>
  )
}
