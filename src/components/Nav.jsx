import { useEffect, useState } from 'react'
import { NAV } from '../data.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 ${
          scrolled ? 'border-line bg-ink' : 'border-transparent'
        }`}
      >
        <a href="#home" className="font-display text-2xl italic">
          Amin<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="rounded-full px-4 py-2 text-sm text-mute transition-colors hover:bg-ink-2 hover:text-paper"
              >
                {n.text}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-paper ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-paper ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex-col justify-center bg-ink px-8 md:hidden ${open ? 'flex' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-4">
          {NAV.map((n, i) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 font-display text-6xl"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {n.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
