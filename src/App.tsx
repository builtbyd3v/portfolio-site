import { education, experience, skills } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Workbench from './components/Workbench'
import ContributionMap from './components/ContributionMap'
import ProofRow from './components/ProofRow'
import Footer from './components/Footer'

function Heading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 text-xl font-medium tracking-tight"
    >
      {children}
    </h2>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#work" className="skip-link">
        Skip to work
      </a>
      <Nav />
      <span id="top" />
      <main>
        <Hero />

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <Heading id="work">Projects</Heading>
          <Workbench />
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <Heading id="activity">Activity</Heading>
          <div className="mt-8">
            <ContributionMap />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-16">
          <Heading id="education">Education</Heading>
          <div className="mt-6">
            {education.map((item) => (
              <ProofRow
                key={item.org}
                title={item.org}
                detail={item.detail}
                period={item.period}
              >
                {item.body}
              </ProofRow>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-16">
          <Heading id="experience">Experience</Heading>
          <div className="mt-6">
            {experience.map((item) => (
              <ProofRow
                key={item.org}
                title={item.role}
                detail={item.org}
                period={item.period}
              >
                {item.body}
              </ProofRow>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8">
          <Heading id="skills">Skills</Heading>
          <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-[8.5rem_1fr]">
            {skills.map((group) => (
              <div key={group.label} className="contents">
                <dt className="text-[13px] font-medium text-muted-foreground sm:pt-0.5">
                  {group.label}
                </dt>
                <dd className="text-[15px] leading-7">
                  {group.items.map((item) => item.name).join(', ')}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <Footer />
    </div>
  )
}
