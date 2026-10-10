import { ChevronRight } from 'lucide-react'
import { pipelineSteps } from '../data/content'

export default function Pipeline() {
  return (
    <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center" aria-label="Product Review Intelligence workflow">
      {pipelineSteps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-lg border border-cyan-glow/30 bg-cyan-glow/10 px-3 py-2 text-sm text-white">{s}</span>
          {i < pipelineSteps.length - 1 && <ChevronRight className="hidden h-4 w-4 text-slate-500 sm:block" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  )
}
