import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

const focus = ['Machine Learning', 'Computer Vision', 'NLP', 'Intelligent Automation']

export default function Hero() {
  const reduce = useReducedMotion()
  const a = (d: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d } }
  const social =
    'grid h-11 w-11 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-glow/60 hover:text-white'

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28">
      {/* Background: grid, drifting aurora glows, thin lines and corner marks (all CSS) */}
      <div className="grid-bg animate-drift absolute inset-0" aria-hidden="true" />
      <div className="aurora pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-electric/20 blur-[120px]" aria-hidden="true" />
      <div className="aurora pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-soft/15 blur-[120px]" style={{ animationDelay: '-6s' }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-28 hidden h-24 w-24 border-r border-t border-cyan-glow/30 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-24 right-[14%] hidden h-16 w-16 rotate-45 border border-electric/25 lg:block" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div {...a(0)} className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-slate-300">
          <span className="status-dot h-2.5 w-2.5 rounded-full bg-cyan-glow" aria-hidden="true" />
          Exploring AI &amp; Building Projects
        </motion.div>

        <motion.p {...a(0.08)} className="eyebrow mt-8 tracking-[0.2em]">AI &amp; DATA SCIENCE ENGINEER</motion.p>

        <motion.h1 {...a(0.16)} className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          Building <span className="text-gradient">Intelligent Solutions</span> for Real-World Problems.
        </motion.h1>

        <motion.p {...a(0.24)} className="mt-6 font-display text-2xl text-white sm:text-3xl">{profile.name}</motion.p>

        <motion.p {...a(0.32)} className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
          I'm an Artificial Intelligence and Data Science student passionate about Machine Learning, Computer Vision, NLP, and intelligent automation. I enjoy building practical AI-powered applications that solve real-world problems.
        </motion.p>

        <motion.div {...a(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">Explore My Projects</a>
          <a href={profile.resumeUrl} download="Ram_Praveen_C_Resume.pdf" className="btn-ghost">
            <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
          </a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </motion.div>

        <motion.div {...a(0.48)} className="mt-8 flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={social}><Github className="h-5 w-5" aria-hidden="true" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={social}><Linkedin className="h-5 w-5" aria-hidden="true" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email" className={social}><Mail className="h-5 w-5" aria-hidden="true" /></a>
        </motion.div>

        <motion.ul {...a(0.56)} className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-500">
          {focus.map((f) => <li key={f}>{f}</li>)}
        </motion.ul>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-white sm:block">
        <ArrowDown className="h-5 w-5 animate-float" aria-hidden="true" />
      </a>
    </section>
  )
}
