import { projects, experience, education, skills } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import ProjectCard from './components/ProjectCard'
import TimelineItem from './components/TimelineItem'
import SkillBadge from './components/SkillBadge'

function SectionHeader({ title, note }: { title: string; note?: string }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-[-0.025em] text-ink">
          {title}
        </h2>
      </div>
      {note && <p className="mt-3 max-w-[52ch] text-[15px] text-muted">{note}</p>}
      <div className="mt-7 h-px w-full bg-line" />
    </Reveal>
  )
}

function App() {
  return (
    <>
      <Nav />
      <span id="top" />
      <main>
        <Hero />

        <div className="mx-auto w-full max-w-[1120px] px-6">
          <section id="work" className="scroll-mt-24 py-24">
            <SectionHeader title="Selected work" note="Two products I designed, built, and shipped to production." />
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal key={project.title} delayIndex={i}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="education" className="scroll-mt-24 py-24">
            <SectionHeader title="Education" note="Competency-based degree, backed by focused bootcamps." />
            <div className="ml-1 border-l border-line">
              {education.map((e, i) => (
                <TimelineItem key={e.org} period={e.period} delayIndex={i}>
                  <h3 className="font-display text-[19px] font-medium text-ink">
                    {e.org}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-accent">{e.detail}</p>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-[1.6] text-body">
                    {e.body}
                  </p>
                </TimelineItem>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-24 py-24">
            <SectionHeader title="Skills" note="The stack I reach for." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group, i) => (
                <Reveal key={group.label} delayIndex={i}>
                  <div className="h-full rounded-xl border border-line bg-cream p-5">
                    <p className="text-[13px] font-medium tracking-[0.02em] text-ink">
                      {group.label}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <SkillBadge key={item.name} skill={item} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="experience" className="scroll-mt-24 py-24">
            <SectionHeader title="Experience" />
            <div className="ml-1 border-l border-line">
              {experience.map((e, i) => (
                <TimelineItem key={e.org} period={e.period} delayIndex={i}>
                  <h3 className="font-display text-[19px] font-medium text-ink">
                    {e.role}, {e.org}
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-[1.6] text-body">
                    {e.body}
                  </p>
                </TimelineItem>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  )
}

export default App
