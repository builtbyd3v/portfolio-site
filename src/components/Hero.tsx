import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
} from 'react'
import { CONTACT } from '../data/content'

const LINE_ONE = ['Building', 'things'] as const
const LINE_TWO = ['people', 'actually', 'use.'] as const

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
            <span>Open to roles</span>
            Internships and early-career SWE
            <span aria-hidden>→</span>
          </a>
        </div>

        <h1>
          <RevealWords words={LINE_ONE} offset={0} />
          <br />
          <RevealWords words={LINE_TWO} offset={LINE_ONE.length} />
        </h1>

        <p className="hero-subhead">
          Software engineering student shipping samehere — a live student
          network built with Next.js, TypeScript, and Supabase.
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

      <a href="#work" className="hero-scroll" aria-label="Scroll to work">
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden />
      </a>
    </section>
  )
}
