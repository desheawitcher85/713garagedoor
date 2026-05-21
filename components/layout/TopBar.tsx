import { Phone, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function TopBar() {
  return (
    <div className="bg-ink text-white py-2">
      <div className="container-site flex items-center justify-between text-sm">
        <a
          href={`tel:${siteConfig.phoneE164}`}
          className="flex items-center gap-2 font-mono-label font-semibold text-rust hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4" />
          {siteConfig.phone}
        </a>
        <div className="flex items-center gap-2 text-mist">
          <Clock className="w-4 h-4" />
          <span>24/7 Service Available. No After-Hours Surcharge.</span>
        </div>
      </div>
    </div>
  )
}
