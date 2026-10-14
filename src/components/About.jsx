import { RESUME_URL } from '../data.js'
import { Arrow, Button, SectionHeading } from './ui.jsx'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading index="01" label="About" title={<>About <em className="text-mute">me</em></>} />

      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <p className="font-display text-3xl leading-tight md:text-4xl">
          A devoted full-stack developer with a passion for crafting{' '}
          <em className="text-accent">scalable, user-centric</em> solutions.
        </p>

        <div className="space-y-6 text-lg leading-relaxed text-mute">
          <p>
            My name is <span className="text-paper">Amin Abdulkabir</span>, and I am a devoted full-stack developer with
            a passion for crafting scalable, user-centric solutions. With years of experience in the industry, I've honed
            my skills in various programming languages such as Javascript, python and a few other notable languages and
            frameworks.
          </p>
          <p>
            Throughout my career, I have dedicated a reasonable quantity of time towards self development, and thus, have
            reached a point whereby I believe my expertise would be one of a kind in this dynamic yet broad industry.
          </p>
          <p>
            I have <span className="text-paper">2 years of hands-on experience</span> in building projects, having
            provided quality frontend and backend for various projects and worked with several clients. Find attached, the
            link to my resume for more in-depth reference.
          </p>
          <div className="pt-4">
            <Button href={RESUME_URL} external>
              Resume <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
