import { GraduationCap } from 'lucide-react'
import { education } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading eyebrow="Education" title="Where I studied." />
      <ol className="relative space-y-6 border-l border-white/10 pl-8">
        {education.map((e) => (
          <li key={e.school} className="relative">
            <span className="absolute -left-[49px] top-5 grid h-8 w-8 place-items-center rounded-full border border-cyan-glow/50 bg-ink-900 text-cyan-glow">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </span>
            <Reveal>
              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm text-cyan-glow">{e.years}</p>
                  <span className="tag">{e.status}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{e.degree}</h3>
                <p className="text-slate-400">{e.school}</p>
                <p className="mt-2 text-sm text-slate-300">{e.detail}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
