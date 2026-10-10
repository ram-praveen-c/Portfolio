import { Check, Copy, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { profile } from '../data/content'
import Reveal from './Reveal'

/**
 * Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) in a .env file to send messages directly.
 * Without it, the form validates and opens the visitor's email app with the message pre-filled.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

type Fields = { name: string; email: string; subject: string; message: string }
type Status = { kind: 'idle' | 'ok' | 'error'; text: string }

function validate(f: Fields) {
  const e: Partial<Fields> = {}
  if (f.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (f.subject.trim().length < 3) e.subject = 'Enter a subject (at least 3 characters).'
  if (f.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

export default function Contact() {
  const [f, setF] = useState<Fields>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle', text: '' })
  const [copied, setCopied] = useState(false)

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setStatus({ kind: 'error', text: `Could not copy automatically. My email is ${profile.email}.` })
    }
  }

  async function submit(ev: FormEvent) {
    ev.preventDefault()
    const v = validate(f)
    setErrors(v)
    if (Object.keys(v).length) {
      setStatus({ kind: 'error', text: 'Fix the highlighted fields and try again.' })
      return
    }
    if (ENDPOINT) {
      try {
        const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) })
        if (!r.ok) throw new Error()
        setStatus({ kind: 'ok', text: 'Message sent. Thank you!' })
        setF({ name: '', email: '', subject: '', message: '' })
      } catch {
        setStatus({ kind: 'error', text: `Message not sent. Please email ${profile.email} directly.` })
      }
      return
    }
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setStatus({ kind: 'ok', text: 'Your email app should open with the message ready. Press send there to deliver it.' })
  }

  const input = (k: keyof Fields) =>
    `mt-1.5 w-full rounded-xl border bg-ink-900 px-4 py-3 text-white placeholder:text-slate-600 ${errors[k] ? 'border-red-400/70' : 'border-white/10'}`
  const row = 'flex items-center gap-3 text-slate-300 transition hover:text-white'

  return (
    <section id="contact" className="section">
      <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-6 sm:p-10 md:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/20 blur-3xl" aria-hidden="true" />
        <h2 className="relative max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Have an Interesting Problem to Solve? Let's Build Something Intelligent.
        </h2>
        <div className="relative mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <a href={`mailto:${profile.email}`} className={row}><Mail className="h-5 w-5 text-cyan-glow" aria-hidden="true" />{profile.email}</a>
              <button type="button" onClick={copyEmail} aria-label="Copy email address" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-300 hover:border-cyan-glow/60">
                {copied ? <Check className="h-4 w-4 text-cyan-glow" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              </button>
              <span className="sr-only" role="status">{copied ? 'Email copied' : ''}</span>
              {copied && <span className="text-xs text-cyan-glow" aria-hidden="true">Copied</span>}
            </div>
            <a href={profile.phoneHref} className={row}><Phone className="h-5 w-5 text-cyan-glow" aria-hidden="true" />{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={row}><Linkedin className="h-5 w-5 text-cyan-glow" aria-hidden="true" />linkedin.com/in/praveen-c24</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={row}><Github className="h-5 w-5 text-cyan-glow" aria-hidden="true" />github.com/ram-praveen-c</a>
            <p className="flex items-center gap-3 text-slate-300"><MapPin className="h-5 w-5 text-cyan-glow" aria-hidden="true" />{profile.location}</p>
            <a href={profile.resumeUrl} download="Ram_Praveen_C_Resume.pdf" className="btn-ghost mt-4"><Download className="h-4 w-4" aria-hidden="true" /> Download Resume</a>
          </div>

          <form onSubmit={submit} noValidate className="space-y-4" aria-label="Contact form">
            {(['name', 'email', 'subject'] as const).map((k) => (
              <div key={k}>
                <label htmlFor={`f-${k}`} className="text-sm font-medium text-white">{k[0].toUpperCase() + k.slice(1)}</label>
                <input id={`f-${k}`} type={k === 'email' ? 'email' : 'text'} value={f[k]} onChange={set(k)} className={input(k)}
                  autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'off'}
                  aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} />
                {errors[k] && <p id={`e-${k}`} className="mt-1 text-sm text-red-300">{errors[k]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="f-message" className="text-sm font-medium text-white">Message</label>
              <textarea id="f-message" rows={5} value={f.message} onChange={set('message')} className={input('message')}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />
              {errors.message && <p id="e-message" className="mt-1 text-sm text-red-300">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-primary">{ENDPOINT ? 'Send message' : 'Open in email app'}</button>
            <p role="status" aria-live="polite" className={`text-sm ${status.kind === 'error' ? 'text-red-300' : 'text-cyan-glow'}`}>{status.text}</p>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
