import type { Project } from '../data/content'
import SkillBadge from './SkillBadge'
import ProjectMedia from './ProjectMedia'

export default function ProjectSheet({ project }: { project: Project }) {
  return (
    <article className="sheet rise">
      <div className="sheet-head">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="text-[1.875rem]">{project.title}</h3>
          <a className="link mono muted text-[13px]" href={project.href} target="_blank" rel="noreferrer">
            {project.link}
          </a>
        </div>
        <span className="mono text-[13px]">{project.date}</span>
      </div>
      {project.awards ? (
        <div className="award-band">
          {project.awards.map((award) => (
            <p key={award} className="award-title">
              {award}
            </p>
          ))}
          <p className="award-event">{project.event}</p>
        </div>
      ) : null}
      <div className="sheet-body">
        <div className="sheet-main">
          <p className="muted text-[14px]">{project.context}</p>
          <ul className="points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="sheet-side">
          {project.media ? <ProjectMedia media={project.media} title={project.title} /> : null}
          <div>
            <p className="fig">{project.fig}</p>
            <div className="dim mt-4" aria-hidden="true" />
            <p className="muted mt-3 text-[13px]">{project.figLabel}</p>
          </div>
          <div className="chips">
            {project.stack.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
