import { Brain, Code2, Eye, MessageSquareText, Wrench, Zap } from 'lucide-react'

const map = { brain: Brain, code: Code2, eye: Eye, message: MessageSquareText, wrench: Wrench, zap: Zap }
export type IconName = keyof typeof map

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  const C = map[name]
  return <C className={className} aria-hidden="true" />
}
