import { CONTACT } from '@/data/content'

export default function Hero() {
  return (
    <section className="px-6 pt-16 pb-20 sm:pt-24 sm:pb-28" aria-label="Introduction">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
          Building skills for Summer 2027.
        </h1>
        <p className="mt-5 max-w-[40rem] text-[15px] leading-7 text-muted-foreground">
          WGU software engineering student in {CONTACT.location}. Full-stack and
          AI engineering. DSA, CodePath, and freelance work right now.
        </p>
        <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href="#work"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            View work
          </a>
          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Resume
          </a>
        </p>
      </div>
    </section>
  )
}
