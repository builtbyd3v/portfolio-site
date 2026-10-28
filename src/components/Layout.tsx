import { CONTACT } from '../data/content'
import { GitHubIcon, XIcon, LinkedInIcon, ResumeIcon } from '../icons'

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#activity', label: 'Activity' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="page flex items-center justify-between gap-6 py-4">
          <a href="#top" className="display caps text-[18px] no-underline">
            Dev Goswami
          </a>
          <nav className="flex items-center gap-7">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link max-sm:hidden">
                {link.label}
              </a>
            ))}
            <a
              className="icon-btn"
              href={CONTACT.resume}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              title="Resume"
            >
              <ResumeIcon className="h-[18px] w-[18px]" />
            </a>
          </nav>
        </div>
      </header>

      <div className="page">
        <main>{children}</main>

        <footer id="contact" className="contact">
          <div>
            <h2 className="section-title">Get in touch</h2>
            <p className="mt-3 text-[17px] text-ink-2">Email is the fastest way to reach me.</p>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-primary mt-6">
              {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-link">
              <GitHubIcon className="h-[22px] w-[22px]" />
            </a>
            <a href={CONTACT.x} target="_blank" rel="noreferrer" aria-label="X" className="icon-link">
              <XIcon className="h-5 w-5" />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link">
              <LinkedInIcon className="h-[21px] w-[21px]" />
            </a>
          </div>
        </footer>
        <p className="muted pb-10 text-[12px]">© {new Date().getFullYear()} Dev Goswami</p>
      </div>
    </>
  )
}
