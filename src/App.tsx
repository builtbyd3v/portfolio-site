import {
  CONTACT,
  projects,
  experienceSoon,
  education,
  skills,
} from './data/content'
import Layout from './components/Layout'
import Section from './components/Section'
import Entry from './components/Entry'
import SkillBadge from './components/SkillBadge'
import AboutPortrait from './components/AboutPortrait'
import ContributionGraph from './components/ContributionGraph'

export default function App() {
  return (
    <>
      <span id="top" />
      <Layout>
        <section id="about" className="about-block pt-2 pb-8">
          <div className="about-copy">
            <p className="max-w-[520px] text-[15px] leading-relaxed text-soft">
              Software engineering student at Western Governors University in{' '}
              <span className="accent-text">{CONTACT.location}</span>. I build
              full-stack web apps, sometimes with AI in the loop when the
              project needs it.
            </p>
            <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-soft">
              I work mostly in Next.js, TypeScript, Tailwind, and PostgreSQL.
              Right now that means the WGU degree and a Summer 2027 internship
              search.
            </p>
          </div>
          <AboutPortrait />
        </section>

        <Section id="projects" title="Projects">
          {projects.map((project) => (
            <Entry key={project.title} period={project.status}>
              {project.href ? (
                <a className="text-link text-[15px]" href={project.href} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              ) : (
                <h3 className="text-[15px] font-normal text-ink">
                  {project.title}
                </h3>
              )}
              <p className="mt-1 text-[13px] text-faint">{project.meta}</p>
              <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-soft">
                {project.body}
              </p>
            </Entry>
          ))}
        </Section>

        <Section id="activity" title="Activity">
          <ContributionGraph />
        </Section>

        <Section id="skills" title="Skills">
          <dl className="flex flex-col gap-7">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="skill-kicker text-[11px] font-medium tracking-[0.08em] uppercase">
                  {group.label}
                </dt>
                <dd className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <SkillBadge key={item.name} skill={item} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education">
          {education.map((item) => (
            <Entry key={item.org} period={item.period}>
              <h3 className="text-[15px] font-normal text-ink">{item.org}</h3>
              <p className="mt-1 text-[13px] text-faint">{item.detail}</p>
              {item.body ? (
                <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-soft">
                  {item.body}
                </p>
              ) : null}
              {item.points ? (
                <ul className="mt-2 max-w-[520px] list-disc space-y-1.5 pl-4 text-[14px] leading-relaxed text-soft">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </Entry>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          <Entry period={experienceSoon.period}>
            <h3 className="text-[15px] font-normal text-ink">
              {experienceSoon.title}
            </h3>
            <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-soft">
              {experienceSoon.body}
            </p>
          </Entry>
        </Section>
      </Layout>
    </>
  )
}
