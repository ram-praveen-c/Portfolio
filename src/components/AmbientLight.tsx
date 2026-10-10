import { useEffect, useRef } from 'react'

/** Cursor-following glow. Rendered only on fine pointers (not touch) and when motion is allowed. */
export default function AmbientLight() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!ok || !ref.current) return
    const el = ref.current
    el.style.display = 'block'
    const move = (e: MouseEvent) => { el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)` }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ display: 'none' }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.10),transparent_65%)] will-change-transform"
    />
  )
}
