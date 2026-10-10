import { Briefcase } from 'lucide-react'
import Pipeline from './Pipeline'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading eyebrow="Experience" title="Internship." />
      <Reveal>
        <div className="relative border-l border-white/10 pl-8">
          <span className="absolute -left-[17px] top-1 grid h-8 w-8 place-items-center rounded-full border border-cyan-glow/50 bg-ink-900 text-cyan-glow">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="card p-6 sm:p-8">
            <p className="text-sm text-cyan-glow">AI Developer Intern</p>
            <h3 className="mt-1 text-2xl font-semibold">Hostwire Systems</h3>
            <p className="mt-4 max-w-prose leading-relaxed text-slate-400">
              Worked on Product Review Intelligence, a Python-based system that collects product-related discussions from public sources and uses Machine Learning and NLP to understand user opinions, identify common feedback and complaints, filter irrelevant content, and generate meaningful product insights.
            </p>
            <p className="mt-3 max-w-prose leading-relaxed text-slate-400">
              The business purpose: help teams understand what users actually say about a product without reading every discussion by hand.
            </p>
            <div className="mt-6"><Pipeline /></div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {['Python', 'Machine Learning', 'NLP'].map((t) => <li key={t} className="tag">{t}</li>)}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
