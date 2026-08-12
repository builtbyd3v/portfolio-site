import { useEffect, useState } from 'react'
import { CONTACT } from '../data/content'
import BrandLink from './BrandLink'
import {
  GitHubIcon,
  XIcon,
  LinkedInIcon,
  ResumeIcon,
  MailIcon,
} from '../icons'

const LINKS = [
  { href: '#work', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
]

const SECTION_IDS = LINKS.map((l) => l.href.slice(1))

const ACTIONS = [
  {
    href: CONTACT.resume,
    label: 'Resume',
    Icon: ResumeIcon,
    external: true,
  },
  {
    href: `mailto:${CONTACT.email}`,
    label: 'Email',
    Icon: MailIcon,
    external: false,
  },
  {
    href: CONTACT.github,
    label: 'GitHub',
    Icon: GitHubIcon,
    external: true,
  },
  {
    href: CONTACT.x,
    label: 'X',
    Icon: XIcon,
    external: true,
  },
  {
    href: CONTACT.linkedin,
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    external: true,
  },
] as const

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

        <div className="site-nav-actions" aria-label="Contact and profiles">
          {ACTIONS.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              <Icon className="site-nav-action-icon" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
