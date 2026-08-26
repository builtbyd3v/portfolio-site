import { experience, education, skills } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Workbench from './components/Workbench'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import ProofCard from './components/ProofCard'
import SkillTabs from './components/SkillTabs'
import ContributionMap from './components/ContributionMap'

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

        <div className="section-shell section-shell-work">
          <Workbench />
        </div>

        <div className="section-shell">
          <section id="activity" className="section-block">
            <SectionHeader
              title="Activity"
              note="GitHub, last 12 months."
            />
            <Reveal>
              <ContributionMap />
            </Reveal>
          </section>

          <section id="education" className="section-block">
            <SectionHeader
              title="Education"
              note="WGU and CodePath."
            />
            <div className="proof-grid proof-grid-single">
              {education.map((e, i) => (
                <ProofCard
                  key={e.org}
                  period={e.period}
                  eyebrow="Education"
                  title={e.org}
                  detail={e.detail}
                  delayIndex={i}
                  featured
                >
                  <p>{e.body}</p>
                </ProofCard>
              ))}
            </div>
          </section>

          <section id="skills" className="section-block">
            <SectionHeader title="Skills" />
            <Reveal>
              <div className="skill-panel">
                <SkillTabs groups={skills} />
              </div>
            </Reveal>
          </section>

          <section id="experience" className="section-block">
            <SectionHeader title="Experience" />
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
