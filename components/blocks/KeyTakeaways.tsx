import { CheckCircle } from "lucide-react"

interface KeyTakeawaysProps {
  points: string[]
  heading?: string
}

export function KeyTakeaways({ points, heading = "Key Takeaways" }: KeyTakeawaysProps) {
  return (
    <div className="bg-cream border border-cream rounded-lg p-6 my-6">
      <h3 className="font-heading text-xl text-ink mb-4">{heading}</h3>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-steel">
            <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
