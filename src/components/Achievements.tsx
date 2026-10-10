import { Award, BadgeCheck, MonitorPlay, Trophy } from 'lucide-react'
import { achievements } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = { Award: Trophy, Participation: Award, Showcase: MonitorPlay, Certification: BadgeCheck }

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionHeading eyebrow="Achievements" title="Recognition and learning." />
      <ul className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => {
          const I = icons[a.type as keyof typeof icons]
          const win = a.type === 'Award'
          return (
            <li key={a.title}>
              <Reveal delay={i * 0.05} className="h-full">
                <div className={`card card-hover h-full p-6 ${win ? 'border-cyan-glow/40' : ''}`}>
                  <div className="flex items-center justify-between">
                    <I className={`h-6 w-6 ${win ? 'text-cyan-glow' : 'text-slate-400'}`} aria-hidden="true" />
                    <span className={`tag ${win ? 'border-cyan-glow/40 text-cyan-glow' : ''}`}>{a.type}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{a.text}</p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
