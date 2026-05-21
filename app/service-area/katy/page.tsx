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
import { generalFaqs, houstonFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Repair Katy TX | Same-Day Service for Cinco Ranch",
  description:
    "Garage door repair in Katy, TX. Cinco Ranch, Cross Creek, Firethorne, and surrounding. Warranty-era fixes, opener upgrades, hurricane prep.",
  alternates: { canonical: `${siteConfig.url}/service-area/katy` },
}

const pageFaqs = [
  ...generalFaqs.slice(0, 3),
  ...houstonFaqs.slice(0, 2),
  {
    question: "Do you service Cinco Ranch and Cross Creek Ranch in Katy?",
    answer: "Yes. We're in Cinco Ranch and Cross Creek Ranch regularly. Katy's newer communities have some of the most active garage door service patterns in the area: newer homes, frequent use, builder-grade openers starting to show their age.",
  },
  {
    question: "My new Katy home's garage door tracks are misaligned. Is that a warranty issue?",
    answer: "It depends on when the home was built and the builder's warranty terms. Settling in the first year or two can knock tracks out of alignment. We can realign the tracks and advise on whether the issue warrants a warranty claim with the builder.",
  },
]

export default function KatyPage() {
  const crumbs = buildBreadcrumbItems("/service-area/katy")
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-rust" />
            <span className="text-mist text-sm">Katy, TX | 77449 | 77450 | 77494</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
            Garage Door Repair in Katy, TX
          </h1>
          <p className="text-mist text-lg max-w-2xl">
            Same-day garage door service throughout Katy, TX: Cinco Ranch, Cross Creek Ranch, Firethorne, and all surrounding communities. Warranty-era repairs, opener upgrades, hurricane reinforcement.
          </p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Same-day garage door repair across Katy: 77449, 77450, and 77494. Katy's newer construction brings specific issues: builder-grade opener failures, track misalignment from settling, and pre-hurricane-season maintenance. Call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a> for same-day service.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Common Garage Door Issues in Katy</h2>
          <p className="text-steel leading-relaxed mb-4">
            Katy is one of the fastest-growing parts of the Houston metro. Most homes in Katy were built in the last 15 years. That creates a specific repair profile: warranty-era issues from settling and use, builder-grade components failing on their normal schedule, and homeowners preparing for their first hurricane season with an older door.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Track misalignment from foundation settling in newer construction",
              "Builder-grade opener motor failure at 8-12 years",
              "Missing or deteriorated bottom weather seals, common in all-new construction",
              "Cinco Ranch HOA requirements for replacement doors",
              "Hurricane reinforcement kits for homes approaching first major storm season",
              "Smart opener upgrades for newer homeowners",
              "Spring failures as warranty-era doors reach the 10-year mark",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="houston-example">
            A 2014 home in Cinco Ranch called us because the opener ran but the door barely moved. The builder-grade chain-drive opener had stripped the drive gear, a very common 10-year failure on chain-drive units. We replaced the opener with a belt-drive LiftMaster with myQ, which runs quieter, handles Katy's humidity better, and lets the homeowner monitor the door remotely.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">We Service Homes Near These Katy Landmarks</h2>
          <ul className="space-y-1 mb-6">
            {["Katy Mills", "LaCenterra at Cinco Ranch", "Cinco Ranch", "Cross Creek Ranch", "Firethorne", "Kelliwood"].map((landmark) => (
              <li key={landmark} className="flex items-center gap-2 text-sm text-steel">
                <MapPin className="w-3 h-3 text-rust flex-shrink-0" />
                {landmark}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Pre-Hurricane Season Maintenance in Katy</h2>
          <p className="text-steel leading-relaxed mb-4">
            Hurricane season in Greater Houston runs June through November. The garage door is the largest opening on most Katy homes and one of the most vulnerable in high winds. We recommend a pre-season inspection each May to check spring tension, cable condition, track alignment, and weather seals.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            For homes with standard doors, hurricane reinforcement kits ($75-$200 installed) add significant resistance. New homes that haven't had their first wind inspection often have minor issues that compound quickly under storm conditions.
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Adjacent Areas We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "Memorial", href: "/service-area/memorial" },
              { name: "Sugar Land", href: "/service-area/sugar-land" },
              { name: "The Woodlands", href: "/service-area/the-woodlands" },
              { name: "The Heights", href: "/service-area/the-heights" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-steel">Also serving: Cypress, Fulshear, Richmond, Brookshire, Sealy.</p>

          <p className="text-sm text-steel mt-8">
            Related: <Link href="/garage-door-repair" className="text-rust hover:underline">Repair</Link> | <Link href="/garage-door-installation" className="text-rust hover:underline">Installation</Link> | <Link href="/resources/houston-humidity-garage-door-problems" className="text-rust hover:underline">Houston Humidity Guide</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Garage Door Service in Katy</h2>
              <p className="text-steel mb-6">Same-day service. Builder-grade repairs and upgrades. Hurricane prep available.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Garage Door Problem in Katy?" subtext="Same-day service for Cinco Ranch, Cross Creek, and all of Katy. No surcharge." />
    </>
  )
}
