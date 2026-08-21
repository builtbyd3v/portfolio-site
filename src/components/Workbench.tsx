import { projects, skills, type Project } from '../data/content'
import Reveal from './Reveal'
import SkillBadge from './SkillBadge'

function techChips(meta: string): string[] {
  return meta
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5)
}

const PREVIEW_NAMES = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Python',
  'Tailwind CSS',
  'Git',
]

const STACK_PREVIEW = PREVIEW_NAMES.map((name) =>
  skills.flatMap((group) => group.items).find((item) => item.name === name),
).filter((item): item is NonNullable<typeof item> => Boolean(item))

function ProjectPanel({
  project,
  delayIndex,
}: {
  project: Project
  delayIndex: number
}) {
  const inner = (
    <>
      <header className="workbench-panel-header">
        <div>
          <span className="workbench-stage-mark">
            <span aria-hidden className="workbench-stage-dot" />
            {project.stage}
          </span>
          <h3>{project.title}</h3>
        </div>
        <span className="workbench-panel-meta">{project.status}</span>
      </header>
      {project.image && (
        <div className="workbench-panel-media">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        </div>
      )}
      <div className="workbench-panel-body">
        <p>{project.body}</p>
        <div className="workbench-chips">
          {techChips(project.meta).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {project.href && (
          <div className="workbench-panel-cta">
            <span>{project.cta ?? 'Visit site'}</span>
            <span aria-hidden>→</span>
          </div>
        )}
      </div>
    </>
  )

  const className = 'workbench-panel h-full'

  return (
    <Reveal delayIndex={delayIndex} className="min-w-0 h-full">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className={className}
        >
          {inner}
        </a>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </Reveal>
  )
}

export default function Workbench({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="work"
      className={`workbench${compact ? ' workbench-compact' : ''}`}
      aria-label="Selected work"
    >
      <Reveal className="workbench-intro">
        <p className="workbench-kicker">Selected work</p>
        <h2>Projects</h2>
        <p>Freelance is listed under experience.</p>
      </Reveal>

      <Reveal delayIndex={0} className="workbench-now">
        <div className="workbench-now-panel" aria-label="Right now">
          <div className="workbench-now-copy">
            <span className="workbench-stage-mark">
              <span aria-hidden className="workbench-stage-dot workbench-stage-dot-live" />
              Right now
            </span>
            <h3>I want a Summer 2027 internship.</h3>
            <p>
              DSA and interview prep through CodePath, the WGU degree, and
              freelance Next.js I can talk through in an interview.
            </p>
          </div>
          <div className="workbench-now-facts">
            <div className="workbench-status-row is-accent">
              <strong>Targeting</strong>
              <span>Summer 2027 internship</span>
            </div>
            <div className="workbench-status-row">
              <strong>Now</strong>
              <span>CodePath · WGU · freelance Next.js</span>
            </div>
            <div className="workbench-status-row">
              <strong>Degree</strong>
              <span>B.S. Software Engineering · Fall 2027</span>
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
        {projects.map((project, i) => (
          <ProjectPanel
            key={project.title}
            project={project}
            delayIndex={i + 1}
          />
        ))}
      </div>
    </section>
  )
}
