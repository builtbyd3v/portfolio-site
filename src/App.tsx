import {
  CONTACT,
  projects,
  openSource,
  experience,
  education,
  skills,
} from './data/content'
import type { Project } from './data/content'
import Layout from './components/Layout'
import Section from './components/Section'
import Entry from './components/Entry'
import SkillBadge from './components/SkillBadge'
import AboutPortrait from './components/AboutPortrait'
import ContributionGraph from './components/ContributionGraph'

function ProjectEntry({ project }: { project: Project }) {
  return (
    <Entry period={project.status}>
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
      {project.note ? (
        <p className="mt-0.5 text-[13px] text-faint italic">{project.note}</p>
      ) : null}
      <ul className="mt-2 max-w-[520px] list-disc space-y-1.5 pl-4 text-[14px] leading-relaxed text-soft">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Entry>
  )
}

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
              AI that runs on real hardware, from voice agents in a VR headset
              to ML models small enough to run on a phone, and I ship
              full-stack products solo.
            </p>
            <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-soft">
              Right now that means the WGU degree, expected Fall 2027,
              launching samehere.dev in November, and looking for Summer 2027
              SWE and AI internships.
            </p>
          </div>
          <AboutPortrait />
        </section>

        <Section id="projects" title="Projects">
          {projects.map((project) => (
            <ProjectEntry key={project.title} project={project} />
          ))}
        </Section>

        <Section id="open-source" title="Open Source">
          {openSource.map((project) => (
            <ProjectEntry key={project.title} project={project} />
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
          {experience.map((item) => (
            <Entry key={item.org} period={item.period}>
              <h3 className="text-[15px] font-normal text-ink">{item.org}</h3>
              <p className="mt-1 text-[13px] text-faint">{item.detail}</p>
              <ul className="mt-2 max-w-[520px] list-disc space-y-1.5 pl-4 text-[14px] leading-relaxed text-soft">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Entry>
          ))}
        </Section>
      </Layout>
    </>
  )
}
