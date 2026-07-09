import { CONTACT } from '../data/content'

export default function About() {
  return (
    <section className="pt-10 pb-16">
      <h1 className="text-[15px] lowercase tracking-tight text-ink">hello</h1>

      <p className="mt-8 max-w-[520px] text-[15px] leading-relaxed text-soft">
        I'm a Software Engineering student at Western Governors University. I
        build full-stack web apps, sometimes with AI in the loop when the
        project needs it.
      </p>

      <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-soft">
        I work mostly in Next.js, TypeScript, Tailwind, and PostgreSQL. I'm in
        CodePath's bootcamp right now while shipping samehere and Aced.
      </p>

      <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-soft">
        When I'm not coding, I'm usually reading up on something new or
        sketching the next thing I want to build.
      </p>

      <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-soft">
        Still early in my career with a lot left to learn.{' '}
        <a
          className="font-bold text-ink no-underline transition-colors hover:text-accent"
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          connect with me here.
        </a>
      </p>
    </section>
  )
}
