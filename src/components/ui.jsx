export function SectionHeading({ index, label, title }) {
  return (
    <div className="reveal mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
      <h2 className="font-display text-5xl leading-none tracking-tight md:text-7xl">{title}</h2>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
        <span className="text-accent">{index}</span> / {label}
      </p>
    </div>
  )
}

export function Button({ href, children, variant = 'solid', external, ...rest }) {
  const base =
    'group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300'
  const styles =
    variant === 'solid'
      ? 'bg-accent text-ink hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--color-accent)]'
      : 'border border-line text-paper hover:border-paper'
  const Tag = href ? 'a' : 'button'
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Tag href={href} className={`${base} ${styles}`} {...extra} {...rest}>
      {children}
    </Tag>
  )
}

export function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function SocialIcon({ icon, className = 'h-5 w-5' }) {
  return <span aria-hidden className={`mask-icon ${className}`} style={{ '--src': `url(${icon})` }} />
}
