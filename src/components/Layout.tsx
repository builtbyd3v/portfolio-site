import { NavLink } from 'react-router-dom'
import { CONTACT } from '../data/content'
import { GitHubIcon, XIcon, LinkedInIcon, ResumeIcon } from '../icons'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'font-bold text-accent'
    : 'transition-colors hover:underline hover:underline-offset-4'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[640px] px-6">
      <header className="flex items-baseline justify-between gap-6 py-10">
        <span className="text-[15px] lowercase tracking-tight">dev goswami</span>
        <nav className="flex items-center gap-6 text-[14px] text-soft">
          <NavLink className={navClass} to="/" end>
            projects
          </NavLink>
          <NavLink className={navClass} to="/about">
            about
          </NavLink>
          <a
            className="transition-colors hover:underline hover:underline-offset-4"
            href={`mailto:${CONTACT.email}`}
          >
            contact
          </a>
          <a
            className="text-ink transition-colors hover:text-accent"
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

      <footer className="border-t border-line py-14">
        <p className="max-w-[480px] text-[15px] text-soft">
          Open to internships and early-career software roles.
        </p>
        <div className="mt-6 flex items-center gap-5">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="text-ink transition-colors hover:text-accent"
          >
            <XIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink transition-colors hover:text-accent"
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
