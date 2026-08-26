import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { SkillGroup } from '../data/content'
import SkillBadge from './SkillBadge'

export default function SkillTabs({ groups }: { groups: SkillGroup[] }) {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const group = groups[active]

  return (
    <div className="skill-tabs-wrap">
      <div className="skill-tabs" role="tablist" aria-label="Skill groups">
        {groups.map((item, index) => {
          const selected = index === active
          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={selected}
              className={selected ? 'is-active' : undefined}
              onClick={() => setActive(index)}
            >
              {selected && !reduce ? (
                <motion.span
                  layoutId="skill-pill"
                  className="skill-tab-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              ) : null}
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>

      {group ? (
        <motion.div
          key={group.label}
          role="tabpanel"
          className="skill-panel-items"
          initial={reduce ? false : { opacity: 0, y: 8, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {group.items.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </motion.div>
      ) : null}
    </div>
  )
}
