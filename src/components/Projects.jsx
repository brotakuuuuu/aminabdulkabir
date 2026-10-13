import { PROJECTS } from '../data.js'
import { Arrow, SectionHeading } from './ui.jsx'

function ProjectCard({ project, index }) {
  const { name, image, description, tools, live, code } = project
  return (
    <article className="reveal group flex flex-col">
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-ink-2"
      >
        {image ? (
          <img
            src={image}
            alt={`${name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-widest text-mute">
            Image coming soon
          </div>
        )}
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Arrow />
        </span>
      </a>

      <div className="mt-6 flex items-baseline gap-4">
        <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="font-display text-3xl leading-tight md:text-4xl">{name}</h3>
      </div>
      <p className="mt-3 leading-relaxed text-mute">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {tools.map((t) => (
          <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-mute">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-6 text-sm font-semibold">
        <a href={live} target="_blank" rel="noopener noreferrer" className="group/l inline-flex items-center gap-1.5 border-b border-accent pb-0.5 text-accent">
          Live <Arrow />
        </a>
        {code && (
          <a href={code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border-b border-line pb-0.5 transition-colors hover:border-paper">
            <i className="devicon-github-original" /> Code
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <SectionHeading index="03" label="Selected work" title="Projects" />
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
