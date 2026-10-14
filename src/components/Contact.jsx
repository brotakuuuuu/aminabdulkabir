import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAIL, EMAILJS } from '../data.js'
import { Arrow, SectionHeading } from './ui.jsx'

const field =
  'peer w-full border-b border-line bg-transparent pb-3 pt-6 text-lg text-paper outline-none transition-colors placeholder:text-transparent focus:border-accent'
const label =
  'pointer-events-none absolute left-0 top-6 font-mono text-xs uppercase tracking-widest text-mute transition-all peer-focus:top-0 peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, e.target, { publicKey: EMAILJS.publicKey })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-ink-2/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <SectionHeading index="04" label="Contact" title={<>Contact <em className="text-mute">me</em></>} />

        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-display text-4xl leading-tight md:text-5xl">
              Have an idea? <em className="text-accent">Let's build it.</em>
            </p>
            <p className="mt-6 max-w-sm text-lg text-mute">
              Fill in the form below to reach out to me for prompt response.
            </p>
            <a href={`mailto:${EMAIL}`} className="mt-8 inline-block border-b border-line pb-1 font-mono text-sm transition-colors hover:border-accent hover:text-accent">
              {EMAIL}
            </a>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="relative">
              <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Name" required className={field} />
              <label htmlFor="name" className={label}>Name</label>
            </div>
            <div className="relative">
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className={field} />
              <label htmlFor="email" className={label}>Email</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Message" required className={`${field} resize-none`} />
              <label htmlFor="message" className={label}>Message</label>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-accent px-8 font-semibold text-ink transition-colors hover:bg-paper disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'} <Arrow />
              </button>
              <p role="status" className="font-mono text-xs">
                {status === 'sent' && <span className="text-accent">Message sent. Thank you!</span>}
                {status === 'error' && <span className="text-red-400">Something went wrong. Please try again.</span>}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
