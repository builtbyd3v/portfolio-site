import BrandMark from './BrandMark'

/** Animated brand: wordmark draws in, then contracts to the DG mark. */
export default function BrandLink() {
  return (
    <a href="#top" className="brand-link" aria-label="Dev Goswami — home">
      <span className="brand-link-shell">
        <span className="brand-link-stack" aria-hidden>
          <span className="brand-wordmark">
            <span>Dev</span>
            <span>Goswami</span>
          </span>
          <span className="brand-mark-wrap">
            <BrandMark className="brand-mark-svg" />
          </span>
        </span>
      </span>
    </a>
  )
}
