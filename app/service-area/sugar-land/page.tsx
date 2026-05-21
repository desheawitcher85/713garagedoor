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
  title: "Garage Door Repair Sugar Land TX | Same-Week Replacement",
  description:
    "Sugar Land garage door repair and replacement. Builder-grade doors restored or replaced. HOA-compliant options. Serving Telfair, First Colony, and more.",
  alternates: { canonical: `${siteConfig.url}/service-area/sugar-land` },
}

const pageFaqs = [
  ...generalFaqs.slice(0, 3),
  ...houstonFaqs.slice(0, 2),
  {
    question: "Do you work in Telfair and First Colony in Sugar Land?",
    answer: "Yes. We service both master-planned communities regularly. HOA compliance is important in both. We know the design guidelines and can help you select a replacement door that meets them.",
  },
  {
    question: "My builder-grade door is 12 years old and the spring just broke. Should I replace the whole door?",
    answer: "Not necessarily. If the door and tracks are in good condition, replacing the springs and doing a tune-up is often the right call. If the panels are also showing wear or the opener is failing, a full replacement may be more cost-effective over the next 5 years. We'll walk you through both options.",
  },
]

export default function SugarLandPage() {
  const crumbs = buildBreadcrumbItems("/service-area/sugar-land")
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-rust" />
            <span className="text-mist text-sm">Sugar Land, TX | 77478 | 77479 | 77498</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
            Garage Door Repair in Sugar Land, TX
          </h1>
          <p className="text-mist text-lg max-w-2xl">
            Same-day garage door service throughout Sugar Land. Builder-grade door repair and HOA-compliant replacement options for Telfair, First Colony, Greatwood, and all Sugar Land master-planned communities.
          </p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Same-day garage door repair in Sugar Land for ZIP codes 77478, 77479, and 77498. Builder-grade doors built in 2010-2015 are now hitting their first major repair window: springs, openers, and weather seals. We do same-day repairs and same-week door replacements with HOA-compliant options. Call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a>.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Common Garage Door Problems in Sugar Land</h2>
          <p className="text-steel leading-relaxed mb-4">
            Sugar Land's master-planned communities were largely built between 2000 and 2015. That means a significant chunk of doors are now 10-20 years old, squarely in the first major repair and replacement window. The pattern we see most often in Sugar Land is builder-spec hardware reaching its design life all at once.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Builder-grade springs (rated 10,000 cycles) failing at the 10-12 year mark",
              "Opener motor failures on units installed at construction",
              "Weather seal replacement: original seals crack and shrink in Houston heat",
              "HOA compliance requirements for replacement doors",
              "First Colony and Telfair design-guideline replacement inquiries",
              "Bent panels from vehicle bumps, common in garage-heavy family homes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="pro-tip">
            If your Sugar Land home was built between 2005 and 2015 and you've had one spring fail, consider replacing both springs with high-cycle galvanized units at the same visit. You're at the age where the second spring is likely close behind. The upgrade runs $60-$100 more but saves a second service call.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">We Service Homes Near These Sugar Land Landmarks</h2>
          <p className="text-steel leading-relaxed mb-4">
            We work throughout Sugar Land, from the Sugar Land Town Square area out to Constellation Field and the Telfair and First Colony communities. Fort Bend County roads are familiar territory for our techs.
          </p>
          <ul className="space-y-1 mb-6">
            {["Sugar Land Town Square", "Constellation Field", "Telfair", "First Colony", "Greatwood", "Riverstone"].map((landmark) => (
              <li key={landmark} className="flex items-center gap-2 text-sm text-steel">
                <MapPin className="w-3 h-3 text-rust flex-shrink-0" />
                {landmark}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">HOA-Compliant Garage Door Replacements in Sugar Land</h2>
          <p className="text-steel leading-relaxed mb-4">
            HOA design guidelines matter in Sugar Land's master-planned communities. Most require certain door styles, colors, and hardware finishes to maintain neighborhood consistency. We work with all the major HOAs in Fort Bend County and know the common approval requirements.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Bring your HOA design guidelines when you schedule. We'll match available door options to the requirements and help you get the replacement pre-approved before we order.
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Adjacent Areas We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "Katy", href: "/service-area/katy" },
              { name: "The Woodlands", href: "/service-area/the-woodlands" },
              { name: "Memorial", href: "/service-area/memorial" },
              { name: "The Heights", href: "/service-area/the-heights" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-steel">Also serving: Pearland, Missouri City, Stafford, Richmond, Rosenberg.</p>

          <p className="text-sm text-steel mt-8">
            Related: <Link href="/garage-door-repair" className="text-rust hover:underline">Repair Services</Link> | <Link href="/garage-door-installation" className="text-rust hover:underline">New Installation</Link> | <Link href="/get-a-quote" className="text-rust hover:underline">Free Quote</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Garage Door Service in Sugar Land</h2>
              <p className="text-steel mb-6">Builder-grade repair, HOA-compliant replacement, same-day scheduling.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Garage Door Problem in Sugar Land?" subtext="HOA-compliant options. Same-day service. No after-hours surcharge." />
    </>
  )
}
