import type { Skill } from '../data/content'

export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-tint px-3 py-1 text-[13px] whitespace-nowrap text-body">
      {skill.slug && (
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
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
