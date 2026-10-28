import { projects, openSource, experience, education, skills } from './data/content'
import Layout from './components/Layout'
import Section from './components/Section'
import Hero from './components/Hero'
import ProjectSheet from './components/ProjectSheet'
import SkillBadge from './components/SkillBadge'
import ContributionGraph from './components/ContributionGraph'

export default function App() {
  return (
    <>
      <span id="top" />
      <Layout>
        <Hero />

        <Section id="projects" title="Projects">
          {projects.map((project) => (
            <ProjectSheet key={project.title} project={project} />
          ))}
        </Section>

        <Section id="open-source" title="Open source">
          {openSource.map((project) => (
            <ProjectSheet key={project.title} project={project} />
          ))}
        </Section>

        <Section id="activity" title="Activity">
          <ContributionGraph />
        </Section>

        <Section id="skills" title="Skills">
          <div className="border-t border-rule">
            {skills.map((group) => (
              <div key={group.label} className="skill-row">
                <h3 className="font-body text-[15px] font-medium">{group.label}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <SkillBadge key={item.name} skill={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <section className="section record">
          <div id="education">
            <h2 className="section-title">Education</h2>
            <div className="mt-8 border-t border-rule">
              {education.map((item) => (
                <div key={item.org} className="record-row">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[1.25rem]">{item.org}</h3>
                    <span className="mono muted text-[12px]">{item.period}</span>
                  </div>
                  <p className="muted mt-1.5 text-[14px]">{item.detail}</p>
                  {item.body ? <p className="mt-3 text-[15px] leading-relaxed">{item.body}</p> : null}
                  {item.points ? (
                    <ul className="points text-[15px]">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="mt-8 border-t border-rule">
              {experience.map((item) => (
                <div key={item.org} className="record-row">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[1.25rem]">{item.org}</h3>
                    <span className="mono muted text-[12px]">{item.period}</span>
                  </div>
                  <p className="muted mt-1.5 text-[14px]">{item.detail}</p>
                  <ul className="points text-[15px]">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
