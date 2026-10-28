import type { Skill } from '../data/content'

// Official logos from Simple Icons, masked so they draw in the sheet's ink.
export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span className="chip">
      {skill.slug ? (
        <span
          className="chip-icon"
          aria-hidden="true"
          style={{ ['--icon' as string]: `url(https://cdn.simpleicons.org/${skill.slug})` }}
        />
      ) : null}
      {skill.name}
    </span>
  )
}
