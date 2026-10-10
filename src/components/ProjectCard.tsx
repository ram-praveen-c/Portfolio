import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/content'
import Pipeline from './Pipeline'
import PipelineArt from './art/PipelineArt'
import SafeDriveArt from './art/SafeDriveArt'
import VoiceArt from './art/VoiceArt'

const art = { 'safe-drive': <SafeDriveArt />, jarvis: <VoiceArt />, 'review-intel': <PipelineArt /> }

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="card card-hover grid overflow-hidden lg:grid-cols-2">
      <div className="aspect-[16/9] overflow-hidden border-b border-white/10 lg:aspect-auto lg:min-h-[18rem] lg:border-b-0 lg:border-r [&>svg]:object-cover">
        {art[project.id]}
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <p className="text-sm text-cyan-glow">{project.kind}</p>
        <h3 className="mt-1 text-2xl font-semibold">{project.name}</h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-400"><span className="font-medium text-white">Problem. </span>{project.problem}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400"><span className="font-medium text-white">Solution. </span>{project.solution}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{project.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
        <ul className="mt-4 space-y-1 text-sm text-slate-400">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-glow" aria-hidden="true" />{f}</li>
          ))}
        </ul>
        {project.id === 'review-intel' && <div className="mt-4 hidden xl:block"><Pipeline /></div>}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <button type="button" onClick={onOpen} className="btn-primary" aria-haspopup="dialog">
            View Details<span className="sr-only"> for {project.name}</span>
          </button>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github className="h-4 w-4" aria-hidden="true" /> GitHub</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn-ghost"><ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo</a>}
        </div>
      </div>
    </article>
  )
}
