import { Database, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { siGit, siGithub, siOpencv, siOpenjdk, siPython } from 'simple-icons'
import { skillGroups } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const brand = (i: { path: string }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d={i.path} /></svg>
)

const icons: Record<string, ReactNode> = {
  Python: brand(siPython),
  Java: brand(siOpenjdk),
  OpenCV: brand(siOpencv),
  Git: brand(siGit),
  GitHub: brand(siGithub),
  SQL: <Database className="h-4 w-4" aria-hidden="true" />,
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading eyebrow="Skills" title="Tools I work with." intro="Grouped by what I use them for. No scores, just the stack behind my projects." />
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="card card-hover h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-violet-soft/30 text-cyan-glow">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="tag inline-flex items-center gap-2 transition hover:border-cyan-glow/50 hover:text-white">
                    {icons[s] ?? <Sparkles className="h-4 w-4" aria-hidden="true" />}
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
