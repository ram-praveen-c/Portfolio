export default function VoiceArt() {
  const bars = [30, 55, 80, 40, 95, 60, 100, 45, 85, 35, 70, 50, 90, 40, 65, 30]
  return (
    <div className="relative grid h-full w-full place-items-center bg-ink-900" role="img" aria-label="Illustration of a voice waveform">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,.22),transparent_60%)]" aria-hidden="true" />
      <div className="relative flex h-24 items-center gap-1.5" aria-hidden="true">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-1.5 origin-center animate-wave rounded-full bg-gradient-to-t from-electric to-cyan-glow"
            style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>
      <div className="glass absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs text-slate-300">Listening for a command</div>
    </div>
  )
}
