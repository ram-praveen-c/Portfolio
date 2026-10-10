export default function PipelineArt() {
  return (
    <div className="relative h-full w-full bg-ink-900 p-4" role="img" aria-label="Illustration of an analytics dashboard with sentiment bars and feedback clusters">
      <div className="grid h-full grid-cols-[1.1fr_1fr] gap-3" aria-hidden="true">
        <div className="glass rounded-xl p-3">
          <p className="text-[10px] text-slate-400">Sentiment mix</p>
          <div className="mt-3 flex h-3 overflow-hidden rounded-full">
            <span className="w-[50%] bg-cyan-glow" /><span className="w-[25%] bg-slate-500" /><span className="w-[25%] bg-violet-soft" />
          </div>
          <div className="mt-4 flex h-14 items-end gap-1.5">
            {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-electric/70" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <svg viewBox="0 0 120 100" className="glass h-full w-full rounded-xl">
          {[[30, 30, 14, '#22d3ee'], [70, 40, 18, '#3b82f6'], [45, 72, 11, '#8b5cf6'], [92, 76, 8, '#22d3ee']].map(([x, y, r, c], i) => (
            <circle key={i} cx={x as number} cy={y as number} r={r as number} fill={c as string} fillOpacity=".35" stroke={c as string} />
          ))}
        </svg>
      </div>
      <p className="absolute bottom-2 right-4 text-[10px] text-slate-500">Illustrative, not real data</p>
    </div>
  )
}
