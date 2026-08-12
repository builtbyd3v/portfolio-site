import { experience, education, skills } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import TimelineItem from './components/TimelineItem'
import SkillBadge from './components/SkillBadge'

function SectionHeader({ title, note }: { title: string; note?: string }) {
  return (
    <Reveal className="section-header">
      <h2>{title}</h2>
      {note && <p>{note}</p>}
      <div className="section-rule" />
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

        <div className="section-shell">
          <section id="education" className="section-block">
            <SectionHeader
              title="Education"
              note="Competency-based degree, backed by focused bootcamps."
            />
            <div className="ml-1 border-l border-line">
              {education.map((e, i) => (
                <TimelineItem key={e.org} period={e.period} delayIndex={i}>
                  <h3 className="font-display text-[19px] font-medium text-ink">
                    {e.org}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-accent-strong">{e.detail}</p>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-[1.6] text-body">
                    {e.body}
                  </p>
                </TimelineItem>
              ))}
            </div>
          </section>

          <section id="skills" className="section-block">
            <SectionHeader title="Skills" note="The stack I reach for." />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group, i) => (
                <Reveal key={group.label} delayIndex={i}>
                  <div className="skill-panel">
                    <p className="text-[13px] font-medium tracking-[0.02em] text-ink">
                      {group.label}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <SkillBadge key={item.name} skill={item} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="experience" className="section-block">
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
