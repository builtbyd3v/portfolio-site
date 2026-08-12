import { projects, skills } from '../data/content'
import Reveal from './Reveal'
import SkillBadge from './SkillBadge'

function techChips(meta: string): string[] {
  return meta
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5)
}

const STACK_PREVIEW = skills
  .flatMap((group) => group.items)
  .filter((item) => item.slug)
  .slice(0, 8)

export default function Workbench({ compact = false }: { compact?: boolean }) {
  const [samehere, aced] = projects

  return (
    <section
      id="work"
      className={`workbench${compact ? ' workbench-compact' : ''}`}
      aria-label="Selected work"
    >
      <Reveal className="workbench-intro">
        <p className="workbench-kicker">Selected work</p>
        <h2>Live products, not mockups.</h2>
        <p>samehere is the active build. Aced is a shipped interview trainer.</p>
      </Reveal>

      <Reveal delayIndex={0} className="workbench-now">
        <div className="workbench-now-panel" aria-label="Right now">
          <div className="workbench-now-copy">
            <span className="workbench-stage-mark">
              <span aria-hidden className="workbench-stage-dot workbench-stage-dot-live" />
              Right now
            </span>
            <h3>Focused on samehere. Open to internships.</h3>
            <p>
              Actively building and iterating samehere while finishing a B.S. in
              Software Engineering at WGU.
            </p>
          </div>
          <div className="workbench-now-facts">
            <div className="workbench-status-row">
              <strong>Building</strong>
              <span>samehere</span>
            </div>
            <div className="workbench-status-row">
              <strong>Degree</strong>
              <span>B.S. Software Engineering · WGU</span>
            </div>
            <div className="workbench-status-row is-accent">
              <strong>Open to</strong>
              <span>Internships · early-career SWE</span>
            </div>
          </div>
          <div className="workbench-now-stack" aria-label="Core stack">
            {STACK_PREVIEW.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="workbench-grid workbench-grid-products">
        <Reveal delayIndex={1} className="min-w-0 h-full">
          <a
            href={samehere.href}
            target="_blank"
            rel="noreferrer"
            className="workbench-panel workbench-panel-featured h-full"
          >
            <header className="workbench-panel-header">
              <div>
                <span className="workbench-stage-mark">
                  <span aria-hidden className="workbench-stage-dot workbench-stage-dot-live" />
                  Active
                </span>
                <h3>{samehere.title}</h3>
              </div>
              <span className="workbench-panel-meta">{samehere.status}</span>
            </header>
            {samehere.image && (
              <div className="workbench-panel-media">
                <img
                  src={samehere.image}
                  alt={`${samehere.title} preview`}
                  loading="lazy"
                />
              </div>
            )}
            <div className="workbench-panel-body">
              <p>{samehere.body}</p>
              <div className="workbench-chips">
                {techChips(samehere.meta).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="workbench-panel-cta">
                <span>Visit site</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delayIndex={2} className="min-w-0 h-full">
          <a
            href={aced.href}
            target="_blank"
            rel="noreferrer"
            className="workbench-panel h-full"
          >
            <header className="workbench-panel-header">
              <div>
                <span className="workbench-stage-mark">
                  <span aria-hidden className="workbench-stage-dot" />
                  Shipped
                </span>
                <h3>{aced.title}</h3>
              </div>
              <span className="workbench-panel-meta">Live</span>
            </header>
            {aced.image && (
              <div className="workbench-panel-media">
                <img
                  src={aced.image}
                  alt={`${aced.title} preview`}
                  loading="lazy"
                />
              </div>
            )}
            <div className="workbench-panel-body">
              <p>{aced.body}</p>
              <div className="workbench-chips">
                {techChips(aced.meta).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="workbench-panel-cta">
                <span>Visit site</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
