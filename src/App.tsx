import { experience, education, skills } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import ProofCard from './components/ProofCard'
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
            <div className="proof-grid">
              {education.map((e, i) => (
                <ProofCard
                  key={e.org}
                  period={e.period}
                  eyebrow="Education"
                  title={e.org}
                  detail={e.detail}
                  delayIndex={i}
                  featured={i === 0}
                >
                  <p>{e.body}</p>
                </ProofCard>
              ))}
            </div>
          </section>

          <section id="skills" className="section-block">
            <SectionHeader title="Skills" note="The stack I reach for." />
            <div className="skills-grid">
              {skills.map((group, i) => (
                <Reveal key={group.label} delayIndex={i}>
                  <div className="skill-panel">
                    <p className="skill-panel-label">{group.label}</p>
                    <div className="skill-panel-items">
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
            <SectionHeader
              title="Experience"
              note="Leadership under pressure — the soft skills that transfer."
            />
            <div className="proof-grid proof-grid-single">
              {experience.map((e, i) => (
                <ProofCard
                  key={e.org}
                  period={e.period}
                  eyebrow="Experience"
                  title={`${e.role}`}
                  detail={e.org}
                  delayIndex={i}
                  featured
                >
                  <p>{e.body}</p>
                </ProofCard>
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
