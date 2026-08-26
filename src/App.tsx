import type { ReactNode } from 'react'
import {
  CONTACT,
  education,
  experience,
  projects,
  skills,
} from './data/content'
import ContributionMap from './components/ContributionMap'
import { useTheme } from './components/theme-provider'

function Slash({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

function Block({
  id,
  title,
  href,
  children,
  action,
}: {
  id?: string
  title: string
  href?: string
  children?: ReactNode
  action?: ReactNode
}) {
  const heading = (
    <h2 id={id} className="scroll-mt-6 text-base font-medium underline">
      {title}
    </h2>
  )

  const inner = (
    <>
      {heading}
      {children ? (
        <div className="flex flex-col gap-2 text-sm leading-relaxed [&>p]:m-0">{children}</div>
      ) : null}
      {action}
    </>
  )

  if (!href) {
    return <section className="flex flex-col gap-2">{inner}</section>
  }

  return (
    <section>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-2 no-underline"
      >
        {inner}
      </a>
    </section>
  )
}

export default function App() {
  const { toggleTheme } = useTheme()

  return (
    <div className="flex min-h-svh flex-col bg-background font-sans text-sm text-foreground antialiased">
      <a href="#work" className="skip-link">
        Skip to work
      </a>
      <main className="flex flex-1 flex-col">
        <div className="flex w-full flex-1 p-6 md:p-24">
          <div className="flex w-full max-w-104 flex-col gap-12 text-left">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium">
              <Slash href="#top">Dev Goswami</Slash>
              <span aria-hidden>/</span>
              <Slash href={CONTACT.github} external>
                github
              </Slash>
              <span aria-hidden>/</span>
              <Slash href={CONTACT.x} external>
                x
              </Slash>
              <span aria-hidden>/</span>
              <Slash href={CONTACT.linkedin} external>
                linkedin
              </Slash>
              <span aria-hidden>/</span>
              <button type="button" className="link-btn" onClick={toggleTheme}>
                theme
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <p id="top" className="text-balance text-sm leading-loose">
                WGU software engineering student in {CONTACT.location}. Full-stack
                and AI engineering. DSA, CodePath, and freelance work right now.
                Building skills for a Summer 2027 internship.
              </p>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noreferrer"
                className="sys-btn"
              >
                Resume
              </a>
            </div>

            {projects.map((project, index) => (
              <Block
                key={project.title}
                id={index === 0 ? 'work' : undefined}
                title={project.title}
                href={project.href}
                action={
                  project.href ? (
                    <span className="sys-btn self-start">Visit site</span>
                  ) : null
                }
              >
                {project.body}
              </Block>
            ))}

            <section id="activity" className="flex flex-col gap-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-2 no-underline"
              >
                <h2 className="scroll-mt-6 text-base font-medium underline">
                  github
                </h2>
              </a>
              <ContributionMap />
            </section>

            {education.map((item, index) => (
              <Block
                key={item.org}
                id={index === 0 ? 'education' : undefined}
                title={item.org}
              >
                <p>
                  {item.detail}. {item.period}.
                </p>
                <p>{item.body}</p>
              </Block>
            ))}

            {experience.map((item, index) => (
              <Block
                key={item.org}
                id={index === 0 ? 'experience' : undefined}
                title={`${item.role}, ${item.org}`}
              >
                <p>{item.period}.</p>
                <p>{item.body}</p>
              </Block>
            ))}

            <Block id="skills" title="skills">
              <dl className="flex flex-col gap-3">
                {skills.map((group) => (
                  <div key={group.label}>
                    <dt className="text-neutral-600 dark:text-neutral-400">
                      {group.label}
                    </dt>
                    <dd>
                      {group.items.map((item) => item.name).join(', ')}
                    </dd>
                  </div>
                ))}
              </dl>
            </Block>

            <Block id="contact" title="contact">
              <p>
                I want a software engineering internship. US citizen, willing to
                relocate, based in {CONTACT.location}. Email is the fastest way
                to reach me.
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
            </Block>
          </div>
        </div>
      </main>
    </div>
  )
}
