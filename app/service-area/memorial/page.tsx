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
  title: "Garage Door Repair Memorial Houston | Premium Installs & Repair",
  description:
    "Memorial garage door repair and replacement. Three-car doors, smart openers, premium installs across 77024, 77079, and 77043.",
  alternates: { canonical: `${siteConfig.url}/service-area/memorial` },
}

const pageFaqs = [
  ...generalFaqs.slice(0, 3),
  ...houstonFaqs.slice(0, 2),
  {
    question: "Do you install 3-car garage doors in Memorial?",
    answer: "Yes. Triple-door installations are common in Memorial's larger homes. We stock 3-car door sections, heavy-duty spring systems, and the track hardware required for wider openings. Most 3-car installs are completed in 6-8 hours.",
  },
  {
    question: "Can you upgrade our existing opener to smart home connectivity in Memorial?",
    answer: "Yes. LiftMaster myQ and Chamberlain myQ retrofits are available for most openers installed after 2010. Older units may need a full replacement for smart features. We'll tell you which is the better call when we assess the opener.",
  },
]

export default function MemorialPage() {
  const crumbs = buildBreadcrumbItems("/service-area/memorial")
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-rust" />
            <span className="text-mist text-sm">Memorial, Houston | 77024 | 77079 | 77043</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
            Garage Door Repair in Memorial, Houston
          </h1>
          <p className="text-mist text-lg max-w-2xl">
            Premium garage door service for Memorial's larger homes. Three-car doors, smart opener upgrades, full-view glass installs, and same-day emergency service.
          </p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Same-day garage door service across Memorial and ZIP codes 77024, 77079, and 77043. Memorial's larger homes often need specialty work: 3-car doors, premium carriage-style replacements, and smart opener systems. Call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a> for a same-day quote.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Common Garage Door Issues in Memorial</h2>
          <p className="text-steel leading-relaxed mb-4">
            Memorial homes from the 1980s and 1990s are now at the age where major components fail. Springs sized for the original builder-spec door may no longer match replacement doors. Opener motors from 2008-2012 are at or past their service life. This is Memorial's garage door repair era.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "2-car and 3-car doors aging past their original spring cycle count",
              "Opener motor failures on 12-15 year old units",
              "Smart opener upgrades: homeowners want app-based control",
              "Full-view glass door replacements for contemporary redesigns",
              "Premium carriage-style replacements for home exterior refreshes",
              "Spring failures on 3-car doors requiring oversized replacement components",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="houston-example">
            A Memorial home off Memorial Drive had a 3-car door system where the center door spring failed. The 16x7-foot center door required a heavy-duty dual torsion system with a different spring rating than the side doors. We replaced all three spring systems at once (the two side doors were at 90% of their cycle life) and upgraded to a belt-drive LiftMaster with myQ. The homeowner can now monitor all three doors from their phone.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">We Service Homes Near These Memorial Landmarks</h2>
          <p className="text-steel leading-relaxed mb-4">
            Our technicians cover all of Memorial, from the Memorial City Mall area out to Town & Country Village and Memorial Park. We know the roads and we're on them daily.
          </p>
          <ul className="space-y-1 mb-6">
            {["Memorial City Mall", "Memorial Park", "Town & Country Village", "Memorial Bend", "Bunker Hill Village"].map((landmark) => (
              <li key={landmark} className="flex items-center gap-2 text-sm text-steel">
                <MapPin className="w-3 h-3 text-rust flex-shrink-0" />
                {landmark}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Services Available in Memorial</h2>
          <p className="text-steel mb-4 text-sm">All six services available same-day in Memorial and surrounding ZIP codes:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { name: "Garage Door Repair", href: "/garage-door-repair" },
              { name: "Spring Repair", href: "/garage-door-spring-repair" },
              { name: "Opener Repair", href: "/garage-door-opener-repair" },
              { name: "New Installation", href: "/garage-door-installation" },
              { name: "Emergency Service", href: "/emergency-garage-door-service" },
              { name: "Commercial", href: "/commercial-garage-doors" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Adjacent Areas We Also Cover</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "The Heights", href: "/service-area/the-heights" },
              { name: "Sugar Land", href: "/service-area/sugar-land" },
              { name: "Katy", href: "/service-area/katy" },
              { name: "The Woodlands", href: "/service-area/the-woodlands" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-steel">Also serving: River Oaks, West University, Bellaire, Energy Corridor, Spring Branch, Westchase.</p>

          <p className="text-sm text-steel mt-8">
            See also: <Link href="/get-a-quote" className="text-rust hover:underline">Get a Quote</Link> | <Link href="/resources/houston-humidity-garage-door-problems" className="text-rust hover:underline">Houston Humidity Guide</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Garage Door Service in Memorial</h2>
              <p className="text-steel mb-6">Premium installs, same-day repair, smart opener upgrades. No surcharge.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Garage Door Problem in Memorial?" subtext="Same-day service. Premium installs. Smart openers. No after-hours surcharge." />
    </>
  )
}
