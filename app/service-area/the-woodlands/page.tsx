import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { QuoteForm } from "@/components/blocks/QuoteForm"
import { Callout } from "@/components/blocks/Callout"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema"
import { siteConfig } from "@/lib/site-config"
import { generalFaqs, houstonFaqs, installationFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Repair The Woodlands TX | Premium Service",
  description:
    "The Woodlands garage door repair and replacement. Premium installs, smart openers, full-view glass, carriage-style. Serving Indian Springs, Sterling Ridge, and more.",
  alternates: { canonical: `${siteConfig.url}/service-area/the-woodlands` },
}

const pageFaqs = [
  ...generalFaqs.slice(0, 3),
  ...houstonFaqs.slice(0, 2),
  {
    question: "Do you install full-view glass garage doors in The Woodlands?",
    answer: "Yes. Full-view glass and aluminum frame doors are popular in The Woodlands for contemporary home redesigns and new construction. We install Clopay, Amarr, and custom glass panel systems. Most full-view glass jobs are quoted on-site due to the variation in sizes and glass options.",
  },
  {
    question: "Can you match the look of our existing carriage-style door in a different material?",
    answer: "Yes. Steel carriage-style and composite wood-look doors are available in virtually every style, color, and hardware combination. Many homeowners in Indian Springs and Sterling Ridge have replaced original wood doors with composite alternatives that are visually identical from the street.",
  },
]

export default function TheWoodlandsPage() {
  const crumbs = buildBreadcrumbItems("/service-area/the-woodlands")
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-rust" />
            <span className="text-mist text-sm">The Woodlands, TX | 77380 | 77381 | 77382 | 77384 | 77389</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
            Garage Door Repair in The Woodlands, TX
          </h1>
          <p className="text-mist text-lg max-w-2xl">
            Premium garage door service for The Woodlands' design-conscious homeowners. Full-view glass, carriage-style, smart openers, and same-day emergency repair across Indian Springs, Sterling Ridge, and all villages.
          </p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Same-day garage door service across The Woodlands and ZIP codes 77380, 77381, 77382, 77384, and 77389. The Woodlands market skews toward premium replacements: full-view glass, composite wood-look, and carriage-style doors with smart opener systems. Call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a>.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Common Garage Door Issues in The Woodlands</h2>
          <p className="text-steel leading-relaxed mb-4">
            The Woodlands is Montgomery County's premier master-planned community. Homes are well-maintained and design-conscious. The garage door repair work here tends toward premium replacements, aesthetic upgrades, and technology installs rather than emergency repairs.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Design-conscious replacement: full-view glass, carriage-style, premium wood-look composite",
              "Smart opener upgrades: LiftMaster myQ and whole-home automation integration",
              "Premium carriage-style doors with custom hardware finishes",
              "Spring failures on original doors that are now 15-20 years old",
              "Opener motor failures on units installed during original construction",
              "Pre-hurricane season inspections and reinforcement kit installs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="houston-example">
            A Sterling Ridge homeowner wanted to upgrade their 2006 raised-panel steel door to a full-view glass door as part of a front exterior refresh. We installed a 16x7 aluminum-frame full-view glass door with insulated glass panels, a jackshaft LiftMaster opener (no overhead track needed), and bronze hardware. The job ran $4,200 installed. The homeowner's first comment after completion was that it transformed the front of the house.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">We Service Homes Near These Woodlands Landmarks</h2>
          <ul className="space-y-1 mb-6">
            {["Market Street", "Cynthia Woods Mitchell Pavilion", "Hughes Landing", "The Woodlands Town Center", "Indian Springs", "Sterling Ridge", "Cochran's Crossing"].map((landmark) => (
              <li key={landmark} className="flex items-center gap-2 text-sm text-steel">
                <MapPin className="w-3 h-3 text-rust flex-shrink-0" />
                {landmark}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Services Available in The Woodlands</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { name: "Garage Door Repair", href: "/garage-door-repair" },
              { name: "Spring Repair", href: "/garage-door-spring-repair" },
              { name: "Opener Repair & Upgrade", href: "/garage-door-opener-repair" },
              { name: "New Door Installation", href: "/garage-door-installation" },
              { name: "Emergency Service", href: "/emergency-garage-door-service" },
              { name: "Commercial", href: "/commercial-garage-doors" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Adjacent Areas We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "Katy", href: "/service-area/katy" },
              { name: "Sugar Land", href: "/service-area/sugar-land" },
              { name: "Memorial", href: "/service-area/memorial" },
              { name: "The Heights", href: "/service-area/the-heights" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-steel">Also serving: Spring, Tomball, Conroe, Kingwood, Humble.</p>

          <p className="text-sm text-steel mt-8">
            Related: <Link href="/garage-door-installation" className="text-rust hover:underline">New Installation</Link> | <Link href="/get-a-quote" className="text-rust hover:underline">Free Quote</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Garage Door Service in The Woodlands</h2>
              <p className="text-steel mb-6">Premium installs, smart openers, same-day emergency service. No surcharge.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Garage Door Problem in The Woodlands?" subtext="Premium service. Same-day availability. Full-view glass and smart opener specialists." />
    </>
  )
}
