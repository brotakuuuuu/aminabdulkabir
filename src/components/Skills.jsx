import { SKILLS } from '../data.js'
import { SectionHeading } from './ui.jsx'

function SkillTile({ skill }) {
  return (
    <li
      className="group relative flex aspect-square flex-col items-center justify-center gap-3 bg-ink shadow-[0_0_0_1px_var(--color-line)] transition-colors duration-300 hover:bg-ink-2"
      style={{ '--c': skill.color }}
    >
      <i className={`${skill.icon} text-4xl text-mute transition-all duration-300 group-hover:scale-110 group-hover:text-(--c) md:text-5xl`} />
      <span className="text-center font-mono text-[11px] uppercase tracking-wider text-mute transition-colors group-hover:text-paper">
        {skill.name}
      </span>
      <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-(--c) transition-transform duration-300 group-hover:scale-x-100" />
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
            <div key={group} className="reveal grid gap-6 md:grid-cols-[12rem_1fr]">
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
