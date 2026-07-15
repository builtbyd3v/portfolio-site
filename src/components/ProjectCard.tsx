import type { Project } from '../data/content'

/** Splits the meta string ("React · TypeScript · ...") into chips. */
function techChips(meta: string): string[] {
  return meta.split('·').map((s) => s.trim()).filter(Boolean)
}

/** Dark generated cover shown when a project has no real preview image. */
function GeneratedCover({ title, tagline }: { title: string; tagline?: string }) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-ink p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(420px circle at 80% 0%, rgba(14,165,233,0.28), transparent 60%),' +
            'radial-gradient(360px circle at 0% 100%, rgba(236,128,160,0.18), transparent 60%)',
        }}
      />
      {tagline && (
        <span className="relative text-[12px] tracking-[0.12em] text-offwhite/55 uppercase">
          {tagline}
        </span>
      )}
      <span className="relative font-display text-[34px] font-semibold tracking-[-0.02em] text-offwhite">
        {title}
      </span>
    </div>
  )
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream p-3 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-line-strong"
    >
      {/* Accent bar that sweeps across the top edge on hover. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
      />

      {/* Preview banner: real image, or a generated cover. */}
      <div className="aspect-[16/10] overflow-hidden rounded-xl border border-line">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <GeneratedCover title={project.title} tagline={project.tagline} />
        )}
      </div>

      <div className="flex flex-1 flex-col px-4 pt-5 pb-4">
        <div className="flex items-center justify-between">
          <span className="text-[13px] tabular-nums text-muted/60">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.status}
          </span>
        </div>

        <h3 className="mt-3 font-display text-[24px] font-medium tracking-[-0.015em] text-ink">
          {project.title}
        </h3>

        <p className="mt-2 grow text-[14px] leading-[1.55] text-muted">{project.body}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {techChips(project.meta).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line px-2 py-0.5 text-[12px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[14px] text-ink">
          <span>Visit site</span>
          <span
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden
          >
            &rarr;
          </span>
        </div>
      </div>
    </a>
  )
}
