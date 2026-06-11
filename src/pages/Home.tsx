import { Link } from 'react-router-dom'
import { projects, experience, education, skills } from '../data/content'
import Section from '../components/Section'
import Entry from '../components/Entry'
import SkillBadge from '../components/SkillBadge'

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <Link
          to="/about"
          className="group inline-flex items-center gap-1.5 text-[16px] font-medium text-ink transition-colors hover:text-accent"
        >
          learn more about me
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <Section id="projects" title="Projects">
        {projects.map((p) => (
          <Entry key={p.title} period={p.status}>
            <a
              className="text-[15px] transition-colors hover:underline hover:underline-offset-4"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              {p.title}
            </a>
            <p className="mt-1 text-[13px] text-faint">{p.meta}</p>
            <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-soft">
              {p.body}
            </p>
          </Entry>
        ))}
      </Section>

      <Section id="experience" title="Experience">
        {experience.map((e) => (
          <Entry key={e.org} period={e.period}>
            <h3 className="text-[15px]">
              {e.role}, {e.org}
            </h3>
            <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-soft">
              {e.body}
            </p>
          </Entry>
        ))}
      </Section>

      <Section id="education" title="Education">
        {education.map((e) => (
          <Entry key={e.org} period={e.period}>
            <h3 className="text-[15px]">{e.org}</h3>
            <p className="mt-1 text-[13px] text-faint">{e.detail}</p>
            <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-soft">
              {e.body}
            </p>
          </Entry>
        ))}
      </Section>

      <Section id="skills" title="Skills">
        <dl className="flex flex-col gap-7">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="text-[11px] uppercase tracking-[0.1em] text-faint">
                {group.label}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <SkillBadge key={item.name} skill={item} />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
