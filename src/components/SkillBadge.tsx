import type { Skill } from '../data/content'

function iconColor(color?: string): string {
  if (!color) return '111111'
  const hex = color.replace('#', '').toLowerCase()
  if (hex === 'ffffff' || hex === 'fff') return '111111'
  return hex
}

export default function SkillBadge({ skill }: { skill: Skill }) {
  const src =
    skill.icon ??
    (skill.slug
      ? `https://cdn.simpleicons.org/${skill.slug}/${iconColor(skill.color)}`
      : null)

  return (
    <span className="skill-badge">
      {src && (
        <img
          src={src}
          alt=""
          className="h-4 w-4"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      {skill.name}
    </span>
  )
}
