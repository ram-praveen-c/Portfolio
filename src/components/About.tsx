import { education, focusAreas, profile } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About" title="Practical AI, built to be used." />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="max-w-prose text-lg leading-relaxed">{profile.summary}</p>
          <p className="mt-5 max-w-prose leading-relaxed text-slate-400">
            I care more about building working systems than only studying theory: a camera that notices a tired driver, a voice assistant that handles a task hands-free, a pipeline that turns scattered feedback into insight.
          </p>
          <p className="mt-5 text-sm text-slate-500">Languages: {profile.languages.join(', ')}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Education</h3>
            <ol className="relative mt-5 space-y-6 border-l border-white/10 pl-6">
              {education.map((e) => (
                <li key={e.school} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-glow shadow-[0_0_12px_#22d3ee]" aria-hidden="true" />
                  <p className="text-sm text-cyan-glow">{e.years}</p>
                  <p className="font-medium text-white">{e.degree}</p>
                  <p className="text-sm text-slate-400">{e.school}</p>
                  <p className="text-sm text-slate-500">{e.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((f, i) => (
          <li key={f.title}>
            <Reveal delay={i * 0.05} className="h-full">
              <div className="card card-hover h-full p-5">
                <Icon name={f.icon} className="h-6 w-6 text-cyan-glow" />
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{f.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
