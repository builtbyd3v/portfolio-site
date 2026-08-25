import { CONTACT } from '@/data/content'

const socials = [
  { href: CONTACT.github, label: 'GitHub' },
  { href: CONTACT.x, label: 'X' },
  { href: CONTACT.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer id="contact" className="px-6 pt-16 pb-10">
      <div className="mx-auto max-w-3xl border-t border-border pt-16">
        <h2 className="text-xl font-medium tracking-tight">
          Hiring for Summer 2027?
        </h2>
        <p className="mt-3 max-w-prose text-[15px] leading-7 text-muted-foreground">
          I want a software engineering internship. US citizen, willing to
          relocate, based in {CONTACT.location}. Email is the fastest way to
          reach me.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-6 inline-block text-sm font-medium underline-offset-4 hover:underline"
        >
          {CONTACT.email}
        </a>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dev Goswami</p>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
