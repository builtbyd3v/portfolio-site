import { projects, type Project } from '@/data/content'

function ProjectEntry({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
        <span className="text-sm text-muted-foreground">{project.status}</span>
      </div>
      <p className="mt-2 max-w-prose text-[15px] leading-7 text-muted-foreground">
        {project.body}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{project.meta}</p>
      {project.image ? (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="mt-5 w-full rounded-lg border border-border object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
        />
      ) : null}
    </>
  )

  if (!project.href) {
    return <article>{inner}</article>
  }

  return (
    <article>
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="group block no-underline"
      >
        {inner}
      </a>
    </article>
  )
}

export default function Workbench() {
  return (
    <div className="mt-10 grid gap-16">
      {projects.map((project) => (
        <ProjectEntry key={project.title} project={project} />
      ))}
    </div>
  )
}
