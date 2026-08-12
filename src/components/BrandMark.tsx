type MarkProps = {
  className?: string
  /** Soft draw-in on mount. Defaults to true. */
  animate?: boolean
}

/** DG monogram — geometric D with nested G and blue arc accent. */
export default function BrandMark({ className = '', animate = true }: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#1a1a1a" />
      <path
        className={animate ? 'brand-mark-stroke' : undefined}
        d="M9 8.5h7.2c4.7 0 7.8 2.9 7.8 7.5s-3.1 7.5-7.8 7.5H9V8.5Z"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinejoin="round"
        pathLength="1"
      />
      <path
        className={animate ? 'brand-mark-stroke brand-mark-stroke-delay' : undefined}
        d="M14.2 13.2h3.1c1.85 0 3 1.1 3 2.8s-1.15 2.8-3 2.8h-3.1v-5.6Z"
        stroke="#ffffff"
        strokeWidth="1.7"
        strokeLinejoin="round"
        pathLength="1"
      />
      <path
        className={animate ? 'brand-mark-arc' : undefined}
        d="M22.5 9.2a9.2 9.2 0 0 1 0 13.6"
        stroke="#0075de"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength="1"
      />
    </svg>
  )
}
