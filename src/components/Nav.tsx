import { useEffect, useState } from 'react'
import { CONTACT } from '../data/content'
import { GitHubIcon, XIcon, LinkedInIcon, ResumeIcon } from '../icons'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

// Social icons hide on the smallest screens; the resume icon always stays.
const SOCIAL_ICONS = [
  { href: CONTACT.github, label: 'GitHub', Icon: GitHubIcon },
  { href: CONTACT.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: CONTACT.x, label: 'X', Icon: XIcon },
]

const SECTION_IDS = LINKS.map((l) => l.href.slice(1))

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      // The current section is the last one whose top has passed a line 35%
      // down the viewport. Deterministic — never goes stale between sections.
      const line = window.innerHeight * 0.35
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // The last section (contact/footer) sits at the page bottom and can never
      // scroll its top up to the line — force it active once we hit the bottom.
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
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream/80 backdrop-blur-md transition-colors ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-6 py-3.5">
        <a
          href="#top"
          className="font-display text-[17px] font-semibold tracking-[-0.02em] text-ink"
        >
          Dev Goswami
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-cream/60 px-1.5 py-1 backdrop-blur md:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 text-[14px] transition-colors ${
                  isActive
                    ? 'bg-ink text-offwhite'
                    : 'text-body hover:bg-tint hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          {SOCIAL_ICONS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="hidden h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-tint active:opacity-80 sm:grid"
            >
              <Icon className="h-[16px] w-[16px]" />
            </a>
          ))}
          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-tint active:opacity-80"
          >
            <ResumeIcon className="h-[16px] w-[16px]" />
          </a>
        </div>
      </div>
    </header>
  )
}
