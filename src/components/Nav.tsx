import { useEffect, useState } from 'react'
import { CONTACT } from '../data/content'
import BrandLink from './BrandLink'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = LINKS.map((l) => l.href.slice(1))

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const line = window.innerHeight * 0.35
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) current = SECTION_IDS[SECTION_IDS.length - 1]
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-nav-shell">
        <BrandLink />

        <nav className="site-nav-links" aria-label="Primary">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'is-active' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <a
          href={CONTACT.resume}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
