import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function StickyCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phoneE164}`}
      className="fixed bottom-4 left-0 right-0 mx-4 z-50 md:hidden flex items-center justify-center gap-2 bg-rust text-white font-bold text-base uppercase tracking-wide py-4 rounded shadow-lg"
    >
      <Phone className="w-5 h-5" />
      Call {siteConfig.phone}
    </a>
  )
}
