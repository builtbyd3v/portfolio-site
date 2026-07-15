import { CONTACT } from '../data/content'
import { GitHubIcon } from '../icons'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div
        aria-hidden
        className="hero-wash wash-drift pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto w-full max-w-[1120px] px-6 pt-28 pb-20">
        <p className="fade-up text-[14px] font-medium tracking-[0.16em] text-muted uppercase">
          Dev Goswami &mdash; Software Engineer
        </p>

        <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(3rem,8.5vw,6rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-ink">
          <span className="block overflow-hidden pb-[0.05em]">
            <span className="line-inner">Building things</span>
          </span>
          <span className="block overflow-hidden pb-[0.05em]">
            <span className="line-inner d-2">
              people{' '}
              <span className="relative inline-block">
                actually use
                <span
                  aria-hidden
                  className="underline-grow absolute -bottom-1 left-0 h-[4px] w-full bg-accent"
                />
              </span>
              .
            </span>
          </span>
        </h1>

        <p className="fade-up d-3 mt-7 max-w-[54ch] text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.45] text-body">
          Software engineering student building full-stack web apps with Next.js,
          TypeScript, Tailwind, and PostgreSQL &mdash; sometimes with AI in the loop.
        </p>

        <div className="fade-up d-4 mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="btn-dark rounded-md bg-ink px-5 py-2.5 text-[15px] text-offwhite transition-opacity hover:opacity-90 active:opacity-80"
          >
            View work
          </a>
          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line-strong px-5 py-2.5 text-[15px] text-ink transition-opacity hover:opacity-70 active:opacity-80"
          >
            Resume
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-tint active:opacity-80"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
        </div>

        <div className="fade-up d-5 mt-14 flex flex-col gap-1.5 border-t border-line pt-6 text-[14px] text-muted sm:flex-row sm:items-center sm:gap-3">
          <span className="font-medium tracking-[0.08em] text-ink uppercase">
            Currently
          </span>
          <span className="hidden sm:inline" aria-hidden>
            &middot;
          </span>
          <span>
            B.S. Software Engineering @ WGU &middot; CodePath bootcamp &middot; shipping
            samehere &amp; Aced
          </span>
        </div>
      </div>

      {/* Scroll cue — hero fills the viewport, so signal there's more below. */}
      <a
        href="#work"
        aria-label="Scroll to work"
        className="fade-up d-5 absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-opacity hover:opacity-60 sm:flex"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="h-8 w-px animate-pulse bg-line-strong" aria-hidden />
      </a>
    </section>
  )
}
