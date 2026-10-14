import { RESUME_URL, SOCIALS } from '../data.js'
import { Arrow, Button, SocialIcon } from './ui.jsx'

export default function Hero() {
  return (
    <section id="home" className="flex min-h-svh flex-col justify-center pb-20 pt-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="mb-3 flex items-center gap-4 font-display text-3xl leading-none md:mb-5 md:text-5xl">
          <span aria-hidden className="h-px w-10 bg-accent md:w-16" />
          <span>
            Hello there! <em className="text-accent">I am</em>
          </span>
        </p>

        <h1 className="font-display text-[17vw] leading-[0.85] tracking-tight md:text-[10.5rem]">
          <span className="block">Amin</span>
          <span className="block italic text-mute">
            Abdulkabir
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-2xl font-semibold md:text-3xl">
              Fullstack Developer<span className="text-accent">.</span>
            </p>
            <p className="text-lg leading-relaxed text-mute">
              Ever passionate and vibrant about combining frontends and backends to transform raw ideas into reality.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="#contact">
              Contact me <Arrow />
            </Button>
            <Button href={RESUME_URL} variant="ghost" external>
              Resume <Arrow />
            </Button>
          </div>
        </div>

        <ul className="mt-12 flex gap-2">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon icon={s.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
