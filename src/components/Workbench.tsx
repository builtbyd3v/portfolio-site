import { projects, skills } from '../data/content'
import Reveal from './Reveal'

function techChips(meta: string): string[] {
  return meta
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5)
}

const STACK_PREVIEW = skills
  .flatMap((group) => group.items.map((item) => item.name))
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

      <div className="workbench-grid">
        <Reveal delayIndex={0} className="workbench-panel-samehere min-w-0 h-full">
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

        <Reveal delayIndex={1} className="min-w-0 h-full">
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

        <Reveal delayIndex={2} className="min-w-0 h-full">
          <div className="workbench-panel h-full" aria-label="Current status">
            <header className="workbench-panel-header">
              <div>
                <span className="workbench-stage-mark">
                  <span aria-hidden className="workbench-stage-dot" />
                  Status
                </span>
                <h3>Right now</h3>
              </div>
              <span className="workbench-panel-meta">stack</span>
            </header>
            <div className="workbench-panel-body">
              <div className="workbench-status">
                <div className="workbench-status-row">
                  <strong>Degree</strong>
                  <span>B.S. Software Engineering · WGU</span>
                </div>
                <div className="workbench-status-row">
                  <strong>Focus</strong>
                  <span>Shipping samehere &amp; Aced</span>
                </div>
                <div className="workbench-status-row">
                  <strong>Open to</strong>
                  <span>Internships · early-career SWE</span>
                </div>
              </div>
              <div className="workbench-chips" aria-label="Core stack">
                {STACK_PREVIEW.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
