import { CONTACT } from '../data/content'

export default function About() {
  return (
    <section className="pt-10 pb-16">
      <h1 className="text-[15px] lowercase tracking-tight text-ink">hello</h1>

      <p className="mt-8 max-w-[520px] text-[15px] leading-relaxed text-soft">
        I'm a Software Engineering student at Western Governors University,
        building full-stack and AI-powered web applications. I have a passion for
        coding, learning, and building things that solve real problems.
      </p>

      <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-soft">
        I work mostly in React, TypeScript, Node.js, and PostgreSQL, with a
        growing focus on AI-integrated workflows. Right now I'm deepening my
        full-stack and AI engineering through CodePath while shipping practical
        tools for career prep, learning, and software development.
      </p>

      <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-soft">
        When I'm not programming, you can catch me leveling up my craft, chasing
        new ideas, and figuring out what to build next.
      </p>

      <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-soft">
        I still have much more to learn, and I'm always open to exploring new
        opportunities,{' '}
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
