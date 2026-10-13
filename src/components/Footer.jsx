import { EMAIL, SOCIALS } from '../data.js'
import { SocialIcon } from './ui.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="font-mono text-xs text-mute">© {EMAIL}, 2025. All rights reserved</p>
        <ul className="flex gap-5">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-mute transition-colors hover:text-accent">
                <SocialIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
