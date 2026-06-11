import type { Skill } from '../data/content'

export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line/60 px-2.5 py-1 text-[13px] whitespace-nowrap text-soft">
      {skill.slug && (
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
          alt=""
          className="h-4 w-4"
          loading="lazy"
          // Hide the icon if the CDN is unreachable instead of showing a broken image.
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      {skill.name}
    </span>
  )
}
