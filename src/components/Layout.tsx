import { CONTACT } from '../data/content'
import { GitHubIcon, XIcon, LinkedInIcon, ResumeIcon } from '../icons'

const LINKS = [
  { href: '#projects', label: 'projects' },
  { href: '#activity', label: 'activity' },
  { href: '#education', label: 'education' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page mx-auto w-full max-w-[640px] px-6">
      <header className="flex flex-col gap-4 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <a href="#top" className="site-name text-[15px] tracking-tight lowercase">
          dev goswami
        </a>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-soft sm:justify-end">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            className="nav-link"
            href={CONTACT.resume}
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
          >
            <ResumeIcon className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <main>{children}</main>

      <footer id="contact" className="scroll-mt-8 border-t border-line py-14">
        <p className="max-w-[480px] text-[15px] text-soft">
          Open to internships and early-career software roles. Email is the
          fastest way to reach me.
        </p>
        <a href={`mailto:${CONTACT.email}`} className="mail-link mt-5 inline-block text-[15px] font-medium">
          {CONTACT.email}
        </a>
        <div className="mt-6 flex items-center gap-5">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-link"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="icon-link"
          >
            <XIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-8 text-[12px] text-faint">
          © {new Date().getFullYear()} Dev Goswami
        </p>
      </footer>
    </div>
  )
}
