import { useCallback, useState } from 'react'
import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const close = useCallback(() => setOpenId(null), [])
  const open = projects.find((p) => p.id === openId)
  return (
    <section id="projects" className="section">
      <SectionHeading eyebrow="Projects" title="Things I've built." intro="Computer vision, voice and language: three projects where AI does something useful." />
      <div className="space-y-8">
        {projects.map((p) => (
          <Reveal key={p.id}><ProjectCard project={p} onOpen={() => setOpenId(p.id)} /></Reveal>
        ))}
      </div>
      {open && <ProjectModal project={open} onClose={close} />}
    </section>
  )
}
