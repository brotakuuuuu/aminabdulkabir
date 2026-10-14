import { SKILLS } from '../data.js'
import { SectionHeading, SocialIcon } from './ui.jsx'

function SkillTile({ skill }) {
  return (
    <li
      className="group flex aspect-square flex-col items-center justify-center gap-3 bg-ink shadow-[0_0_0_1px_var(--color-line)] transition-colors hover:bg-ink-2"
      style={{ '--c': skill.color }}
    >
      <span className="text-mute transition-colors group-hover:text-(--c)">
        <SocialIcon icon={skill.icon} className="h-9 w-9 md:h-12 md:w-12" />
      </span>
      <span className="text-center font-mono text-[11px] uppercase tracking-wider text-mute transition-colors group-hover:text-paper">
        {skill.name}
      </span>
    </li>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-ink-2/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <SectionHeading index="02" label="Toolkit" title="Skills" />

        <div className="space-y-16">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="grid gap-6 md:grid-cols-[12rem_1fr]">
              <div>
                <h3 className="font-display text-3xl italic">{group}</h3>
                <p className="mt-1 font-mono text-xs text-mute">{String(items.length).padStart(2, '0')} tools</p>
              </div>
              <ul className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-4 lg:grid-cols-5">
                {items.map((s) => (
                  <SkillTile key={s.name} skill={s} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
