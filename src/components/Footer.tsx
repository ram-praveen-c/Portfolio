import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  const l = 'grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-glow/60 hover:text-white'
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-3">
          <a className={l} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github className="h-4 w-4" aria-hidden="true" /></a>
          <a className={l} href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin className="h-4 w-4" aria-hidden="true" /></a>
          <a className={l} href={`mailto:${profile.email}`} aria-label="Send an email"><Mail className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
