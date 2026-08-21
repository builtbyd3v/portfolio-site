import Reveal from './Reveal'
import { CONTACT } from '../data/content'
import { GitHubIcon, XIcon, LinkedInIcon } from '../icons'

const socials = [
  { href: CONTACT.github, label: 'GitHub', Icon: GitHubIcon },
  { href: CONTACT.x, label: 'X', Icon: XIcon },
  { href: CONTACT.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
]

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="section-shell">
        <Reveal>
          <h2>Hiring for Summer 2027?</h2>
          <p className="site-footer-copy">
            I want a software engineering internship. US citizen, willing to
            relocate, based in {CONTACT.location}. Email is the fastest way to
            reach me.
          </p>

          <div className="mt-8">
            <a href={`mailto:${CONTACT.email}`} className="btn-primary">
              {CONTACT.email}
            </a>
          </div>

          <div className="site-footer-bar">
            <p className="m-0 text-[14px] text-muted">
              &copy; {new Date().getFullYear()} Dev Goswami
            </p>
            <div className="flex items-center gap-5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-ink transition-opacity hover:opacity-60"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
