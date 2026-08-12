import type { Skill } from '../data/content'

/** Near-black brand marks need a light fill on the dark canvas. */
function iconColor(color?: string): string {
  if (!color) return 'FFFFFF'
  const hex = color.replace('#', '').toLowerCase()
  if (hex === '000000' || hex === '000' || hex === '181717') return 'FFFFFF'
  return hex
}

export default function SkillBadge({ skill }: { skill: Skill }) {
  const color = iconColor(skill.color)

  return (
    <span className="skill-badge">
      {skill.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/${color}`}
          alt=""
          className="skill-badge-icon"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : (
        <span className="skill-badge-fallback" aria-hidden>
          ◆
        </span>
      )}
      <span>{skill.name}</span>
    </span>
  )
}
