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
    <footer
      id="contact"
      className="relative flex min-h-[100svh] scroll-mt-20 flex-col justify-center overflow-hidden py-28"
    >
      {/* Warm gradient wash filling the full closing section (DESIGN.md §6). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1000px circle at 50% 78%, rgba(244, 164, 96, 0.18), transparent 62%),' +
            'radial-gradient(760px circle at 22% 100%, rgba(236, 128, 160, 0.14), transparent 60%),' +
            'radial-gradient(720px circle at 85% 92%, rgba(14, 165, 233, 0.08), transparent 60%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-[1120px] px-6">
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            Let&rsquo;s build something.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.5] text-body">
            Open to internships and early-career software roles. The fastest way
            to reach me is email.
          </p>

          <div className="mt-8">
            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-dark inline-flex rounded-md bg-ink px-5 py-3 text-[15px] text-offwhite transition-opacity hover:opacity-90 active:opacity-80"
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] text-muted">
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
