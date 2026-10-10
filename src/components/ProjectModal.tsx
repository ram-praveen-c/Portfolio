import { Github, X, ExternalLink } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../data/content'
import Pipeline from './Pipeline'

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const key = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', key)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', key)
      prev?.focus()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-ink-800 p-6 sm:p-8">
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project details" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white hover:border-cyan-glow/60">
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-sm text-cyan-glow">{project.kind}</p>
        <h3 id="project-title" className="mt-1 text-2xl font-semibold sm:text-3xl">{project.name}</h3>
        <dl className="mt-6 space-y-5 text-slate-300">
          <div><dt className="text-sm font-medium text-white">Problem</dt><dd className="mt-1 text-slate-400">{project.problem}</dd></div>
          <div><dt className="text-sm font-medium text-white">Solution</dt><dd className="mt-1 text-slate-400">{project.solution}</dd></div>
          <div>
            <dt className="text-sm font-medium text-white">Implemented features</dt>
            <dd><ul className="mt-2 list-disc space-y-1 pl-5 text-slate-400">{project.features.map((f) => <li key={f}>{f}</li>)}</ul></dd>
          </div>
          <div><dt className="text-sm font-medium text-white">Potential applications</dt><dd className="mt-1 text-slate-400">{project.applications}</dd></div>
          {project.id === 'review-intel' && (
            <div><dt className="mb-2 text-sm font-medium text-white">Workflow</dt><dd><Pipeline /></dd></div>
          )}
        </dl>
        <ul className="mt-6 flex flex-wrap gap-2">{project.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
        {project.note && <p className="mt-5 text-sm text-slate-500">{project.note}</p>}
        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github className="h-4 w-4" aria-hidden="true" /> GitHub</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo</a>}
          </div>
        )}
      </div>
    </div>
  )
}
