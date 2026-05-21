import Link from "next/link"
import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface CTABannerProps {
  heading?: string
  subtext?: string
  ctaText?: string
  ctaHref?: string
  variant?: "dark" | "rust"
}

export function CTABanner({
  heading = "Ready to Fix Your Garage Door?",
  subtext = "Same-day service across Greater Houston. Call now or get a free quote online.",
  ctaText = "Get a Free Quote",
  ctaHref = "/get-a-quote",
  variant = "dark",
}: CTABannerProps) {
  const bg = variant === "rust" ? "bg-rust" : "bg-ink"
  const textColor = "text-white"
  const subColor = variant === "rust" ? "text-white/80" : "text-mist"

  return (
    <section className={`${bg} section-pad`}>
      <div className="container-site text-center">
        <h2 className={`font-heading text-3xl md:text-5xl ${textColor} mb-4`}>{heading}</h2>
        <p className={`${subColor} text-lg mb-8 max-w-xl mx-auto`}>{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-ink font-bold uppercase tracking-wide px-8 py-3 rounded min-h-[48px] hover:bg-cream transition-colors"
          >
            <Phone className="w-4 h-4 text-rust" />
            {siteConfig.phone}
          </a>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 border border-white text-white font-bold uppercase tracking-wide px-8 py-3 rounded min-h-[48px] hover:bg-white/10 transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}
