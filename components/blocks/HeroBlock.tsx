import Link from "next/link"
import Image from "next/image"
import { Phone, Shield, Clock, Star, Zap } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface HeroBlockProps {
  h1: string
  subhead: string
  ctaText?: string
  ctaHref?: string
  bgDark?: boolean
}

export function HeroBlock({
  h1,
  subhead,
  ctaText = "Get a Free Quote",
  ctaHref = "/get-a-quote",
  bgDark = false,
}: HeroBlockProps) {
  return (
    <section className={`relative overflow-hidden ${bgDark ? "text-white" : "bg-paper"} section-pad`}>
      {bgDark && (
        <>
          <Image
            src="/images/dusk-shot-of-the-houston-texas-skyline-34d9a2-1024.jpg"
            alt=""
            fill
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
            quality={65}
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
        </>
      )}
      <div className="container-site relative">
        <div className="max-w-3xl">
          <h1 className={`font-heading text-4xl md:text-6xl leading-tight mb-4 ${bgDark ? "text-white" : "text-ink"}`}>
            {h1}
          </h1>
          <p className={`text-lg md:text-xl mb-8 leading-relaxed ${bgDark ? "text-mist" : "text-steel"}`}>
            {subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary">
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
            <Link
              href={ctaHref}
              className={bgDark
                ? "inline-flex items-center justify-center gap-2 rounded border-2 border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink min-h-[48px]"
                : "btn-secondary"
              }
            >
              {ctaText}
            </Link>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "24/7 Service" },
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Zap, label: "Same-Day Available" },
              { icon: Star, label: "Upfront Pricing" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className={`flex items-center gap-2 text-sm font-semibold ${bgDark ? "text-mist" : "text-steel"}`}>
                <Icon className="w-4 h-4 text-rust flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
