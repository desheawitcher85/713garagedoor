import { AlertTriangle, Lightbulb, Info, MapPin, Wrench } from "lucide-react"

type CalloutVariant = "pro-tip" | "reality-check" | "heads-up" | "houston-example" | "from-the-field" | "did-you-know"

const variantConfig: Record<
  CalloutVariant,
  { label: string; icon: React.ElementType; bg: string; border: string; iconColor: string }
> = {
  "pro-tip": {
    label: "Pro Tip",
    icon: Lightbulb,
    bg: "bg-rust/5",
    border: "border-rust/30",
    iconColor: "text-rust",
  },
  "reality-check": {
    label: "Reality Check",
    icon: AlertTriangle,
    bg: "bg-alert/5",
    border: "border-alert/30",
    iconColor: "text-alert",
  },
  "heads-up": {
    label: "Heads Up",
    icon: Info,
    bg: "bg-steel/5",
    border: "border-steel/30",
    iconColor: "text-steel",
  },
  "houston-example": {
    label: "Houston Example",
    icon: MapPin,
    bg: "bg-rust/5",
    border: "border-rust/30",
    iconColor: "text-rust",
  },
  "from-the-field": {
    label: "From the Field",
    icon: Wrench,
    bg: "bg-ink/5",
    border: "border-ink/20",
    iconColor: "text-ink",
  },
  "did-you-know": {
    label: "Did You Know",
    icon: Info,
    bg: "bg-steel/5",
    border: "border-steel/30",
    iconColor: "text-steel",
  },
}

interface CalloutProps {
  variant: CalloutVariant
  children: React.ReactNode
}

export function Callout({ variant, children }: CalloutProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div className={`${config.bg} border-l-4 ${config.border} rounded-r-lg p-4 my-6`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.iconColor}`} />
        <div>
          <p className="font-bold text-sm text-ink mb-1">{config.label}</p>
          <div className="text-sm text-steel leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
