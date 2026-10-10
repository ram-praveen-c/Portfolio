import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-400">{intro}</p>}
    </Reveal>
  )
}
