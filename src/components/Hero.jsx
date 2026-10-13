import { RESUME_URL, SKILLS, SOCIALS } from '../data.js'
import { Arrow, Button, SocialIcon } from './ui.jsx'

const allSkills = [...SKILLS.Frontend, ...SKILLS.Backend]

export default function Hero() {
  return (
    <section id="home" className="grain relative flex min-h-svh flex-col justify-between pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className="rise mb-6 inline-flex items-center gap-3 rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-mute">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Hello there! I am
        </p>

        <h1 className="font-display text-[17vw] leading-[0.85] tracking-tight md:text-[10.5rem]">
          <span className="rise block" style={{ animationDelay: '100ms' }}>Amin</span>
          <span className="rise block italic text-mute" style={{ animationDelay: '220ms' }}>
            Abdulkabir
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="rise max-w-xl" style={{ animationDelay: '380ms' }}>
            <p className="mb-3 text-2xl font-semibold md:text-3xl">
              Fullstack Developer<span className="text-accent">.</span>
            </p>
            <p className="text-lg leading-relaxed text-mute">
              Ever passionate and vibrant about combining frontends and backends to transform raw ideas into reality.
            </p>
          </div>

          <div className="rise flex flex-wrap gap-3" style={{ animationDelay: '500ms' }}>
            <Button href="#contact">
              Contact me <Arrow />
            </Button>
            <Button href={RESUME_URL} variant="ghost" external>
              Resume <Arrow />
            </Button>
          </div>
        </div>

        <ul className="rise mt-12 flex gap-2" style={{ animationDelay: '620ms' }}>
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mute transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <SocialIcon icon={s.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-line py-5">
        <div className="marquee flex w-max gap-12">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-mute">
              <i className={`${s.icon} text-lg`} />
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
