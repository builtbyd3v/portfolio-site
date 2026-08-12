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
      {!compact && (
        <Reveal className="workbench-intro">
          <h2>Selected work</h2>
          <p>Two products I designed, built, and shipped to production.</p>
        </Reveal>
      )}

      {compact && (
        <div className="workbench-intro workbench-intro-compact">
          <p className="workbench-kicker">Selected work</p>
          <h2>Live products, not mockups.</h2>
        </div>
      )}

      <Reveal delayIndex={0} className="workbench-now">
        <div className="workbench-now-panel" aria-label="Right now">
          <div className="workbench-now-copy">
            <span className="workbench-stage-mark">
              <span aria-hidden className="workbench-stage-dot workbench-stage-dot-live" />
              Right now
            </span>
            <h3>Open to internships and early-career SWE roles.</h3>
            <p>
              Shipping samehere and Aced while finishing a B.S. in Software
              Engineering at WGU.
            </p>
          </div>
          <div className="workbench-now-facts">
            <div className="workbench-status-row">
              <strong>Degree</strong>
              <span>B.S. Software Engineering · WGU</span>
            </div>
            <div className="workbench-status-row">
              <strong>Focus</strong>
              <span>samehere · Aced · interview prep</span>
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
            className="workbench-panel h-full"
          >
            <header className="workbench-panel-header">
              <div>
                <span className="workbench-stage-mark">
                  <span aria-hidden className="workbench-stage-dot" />
                  Product
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
                  Product
                </span>
                <h3>{aced.title}</h3>
              </div>
              <span className="workbench-panel-meta">{aced.status}</span>
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
