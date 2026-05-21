import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle } from "lucide-react"
import { HeroBlock } from "@/components/blocks/HeroBlock"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { QuoteForm } from "@/components/blocks/QuoteForm"
import { Callout } from "@/components/blocks/Callout"
import { DefinitionBox } from "@/components/blocks/DefinitionBox"
import { ComparisonTable } from "@/components/blocks/ComparisonTable"
import { ServiceSchema } from "@/components/schema/ServiceSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { commercialFaqs, generalFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Commercial Garage Door Repair Houston | Warehouse, Loading Dock",
  description:
    "Commercial garage door service for Houston warehouses, distribution, and retail. Same-day repair, scheduled maintenance, dock equipment.",
  alternates: { canonical: `${siteConfig.url}/commercial-garage-doors` },
}

const pageFaqs = [...commercialFaqs, ...generalFaqs.slice(0, 3)]

const scheduledVsEmergencyRows = [
  { factor: "Cost", option1: "Standard rates: lower cost per visit", option2: "Higher per-call rate; downtime costs more" },
  { factor: "Downtime risk", option1: "Issues caught before they cause failure", option2: "Zero notice; operations stop" },
  { factor: "Parts availability", option1: "Tech knows your equipment; parts pre-ordered", option2: "May require wait for specialty commercial parts" },
  { factor: "Scheduling", option1: "Off-hours maintenance: no disruption", option2: "Disrupts operations when it happens" },
  { factor: "Warranty", option1: "Parts and labor warranty; service records maintained", option2: "Standard repair warranty only" },
]

export default function CommercialPage() {
  const crumbs = buildBreadcrumbItems("/commercial-garage-doors")
  return (
    <>
      <ServiceSchema serviceType="Commercial Garage Door Service" description="Rolling steel, sectional, and high-speed doors. Warehouse, distribution, automotive, retail." />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <HeroBlock
        h1="Commercial Garage Door Service in Houston, TX"
        subhead="Same-day repair and scheduled maintenance for Houston warehouses, distribution centers, loading docks, and retail. No downtime on our watch."
        bgDark
      />

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Commercial garage door repair in Houston is quoted on-site. A stuck loading dock door costs more in downtime than it does to fix. We prioritize commercial emergency calls with same-day response across Greater Houston, including the port district, Westchase, Greenspoint, and Katy Freeway industrial corridors.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Commercial Door Types We Service</h2>
          <p className="text-steel leading-relaxed mb-4">
            Commercial garage doors are built differently than residential units: heavier, faster cycling, and under far more use. We handle all the major types found in Houston's industrial and commercial buildings.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Rolling steel coiling doors (warehouse and distribution)",
              "Sectional steel doors (retail and light industrial)",
              "High-speed roll-up doors (cold storage, automotive, food service)",
              "Fire-rated sectional and rolling steel doors",
              "Coiling grilles and security gates (retail storefronts)",
              "Overhead coiling doors for automotive dealerships",
              "Dock levelers and dock seals",
              "Pit and edge-of-dock levelers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <DefinitionBox
            term="High-speed roll-up door"
            definition="A commercial door designed to open and close in under 5 seconds. Used in cold storage, automotive, and food-service facilities where temperature control is critical. They require regular maintenance to keep the bottom seal and drive mechanism in spec."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Houston Port and Warehouse District Experience</h2>
          <p className="text-steel leading-relaxed mb-4">
            The Houston Ship Channel and surrounding industrial corridors represent one of the densest concentrations of commercial garage door inventory in the country. We've worked in the port district, the Greenway Plaza area, the Westchase warehouse corridor, and the massive distribution centers along the Katy Freeway.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            The environment at port-adjacent facilities is particularly tough on doors: salt air, extreme heat, heavy truck traffic, and around-the-clock cycling. We understand the maintenance requirements and stock the commercial-grade parts that these facilities need.
          </p>

          <Callout variant="from-the-field">
            A loading dock door at a distribution center near the Ship Channel failed at 4am on a Monday. The incoming truck couldn't unload and the receiving manager was calling us from the dock. We had a tech there by 6am with the correct replacement torsion spring for the 14-foot door. Operations resumed before the morning shift. That's the standard we hold ourselves to for commercial calls.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Industries We Serve in Houston</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {[
              "Warehousing & Distribution",
              "Automotive Dealerships",
              "Cold Storage",
              "Food Service Facilities",
              "Retail Strip Centers",
              "Self-Storage Facilities",
              "Healthcare Facilities",
              "Municipal Buildings",
              "Industrial Manufacturing",
            ].map((industry) => (
              <div key={industry} className="bg-cream rounded px-3 py-2 text-xs text-ink font-semibold text-center">
                {industry}
              </div>
            ))}
          </div>

          <ComparisonTable
            heading="Scheduled Maintenance vs. Emergency-Only: The Cost Comparison"
            col1Label="Scheduled Maintenance"
            col2Label="Emergency-Only Approach"
            rows={scheduledVsEmergencyRows}
          />

          <Callout variant="pro-tip">
            Commercial door failures cost more in downtime than in parts. A 14-foot dock door spring costs $300-$500. The cost of a delayed truck delivery, overtime labor, or a missed shipment window can exceed that in an hour. Annual maintenance contracts with us average $150-$300 per door per year and prevent most unplanned failures.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Service Areas for Commercial Work</h2>
          <p className="text-steel leading-relaxed mb-4">
            We serve commercial accounts across all of Greater Houston, including Harris County, Fort Bend County, and Montgomery County. Emergency response is available around the clock. See all areas: <Link href="/service-area" className="text-rust hover:underline">service area map</Link>.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Also relevant: <Link href="/emergency-garage-door-service" className="text-rust hover:underline">24/7 Emergency Service</Link> | <Link href="/garage-door-repair" className="text-rust hover:underline">General Repair</Link> | <Link href="/get-a-quote" className="text-rust hover:underline">Request a Quote</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Commercial Door Down?</h2>
              <p className="text-steel mb-6">Same-day emergency response for Houston commercial accounts. Annual maintenance contracts available.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Commercial Garage Door Issue in Houston?" subtext="Same-day response. Annual maintenance contracts. All commercial door types." />
    </>
  )
}
