import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
} from 'react'
import { CONTACT } from '../data/content'

const LINE_ONE = ['Building', 'skills'] as const
const LINE_TWO = ['for', 'Summer', '2027.'] as const

function RevealWords({
  words,
  offset,
}: {
  words: readonly string[]
  offset: number
}) {
  return words.map((word, index) => (
    <span key={`${word}-${index}`}>
      {index > 0 ? ' ' : null}
      <span
        className="hero-word"
        style={{ '--word-index': offset + index } as CSSProperties}
      >
        {word}
      </span>
    </span>
  ))
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    function skipIntroWhenHidden() {
      const bounds = hero?.getBoundingClientRect()
      if (
        document.visibilityState === 'hidden' ||
        !bounds ||
        bounds.top >= window.innerHeight - 40 ||
        bounds.bottom <= 40
      ) {
        hero?.classList.add('hero-skip-intro')
      }
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      hero.classList.add('hero-skip-intro')
      return
    }

    skipIntroWhenHidden()
    document.addEventListener('visibilitychange', skipIntroWhenHidden)
    return () =>
      document.removeEventListener('visibilitychange', skipIntroWhenHidden)
  }, [])

  return (
    <section ref={heroRef} className="hero" aria-label="Introduction">
      <div className="hero-copy">
        <div className="hero-announcement">
          <a href="#contact" className="hero-announce">
            <span>Summer 2027</span>
            Software engineer intern
            <span aria-hidden>→</span>
          </a>
        </div>

        <h1>
          <RevealWords words={LINE_ONE} offset={0} />
          <br />
          <RevealWords words={LINE_TWO} offset={LINE_ONE.length} />
        </h1>

        <p className="hero-subhead">
          WGU software engineering student in {CONTACT.location}. Full-stack and
          AI engineering. DSA, CodePath, and freelance work right now.
        </p>

        <div className="hero-actions">
          <div className="hero-action hero-action-primary">
            <a href="#work" className="btn-primary">
              View work
            </a>
          </div>
          <div className="hero-action hero-action-secondary">
            <a
              href={CONTACT.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
