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
import { PricingTable } from "@/components/blocks/PricingTable"
import { ServiceSchema } from "@/components/schema/ServiceSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { installationFaqs, generalFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Installation Houston | New Doors Installed Same-Week",
  description:
    "New garage door installation in Houston. Steel, wood, glass, and hurricane-rated models. Free quote. Most jobs installed within 5 business days.",
  alternates: { canonical: `${siteConfig.url}/garage-door-installation` },
}

const pageFaqs = [...installationFaqs, ...generalFaqs.slice(0, 2)]

const materialRows = [
  { factor: "Cost", option1: "Lowest ($800-$1,400 installed)", option2: "$1,600-$3,500+ installed" },
  { factor: "Humidity resistance", option1: "Excellent. Won't rot.", option2: "Needs annual sealing; prone to warping" },
  { factor: "Insulation", option1: "Excellent with polyurethane core (R-16+)", option2: "Decent, depends on core" },
  { factor: "Curb appeal", option1: "Clean, modern look; carriage style available", option2: "High-end traditional aesthetic" },
  { factor: "Maintenance", option1: "Low: paint touch-up every 5-7 years", option2: "High: sealing, painting annually in Houston" },
  { factor: "HOA approval", option1: "Usually approved in all styles", option2: "Easily approved; premium look" },
]

const installPricing = [
  { service: "Basic steel (single car)", lowEnd: "$1,200", typical: "$1,500", highEnd: "$1,900", notes: "8x7 or 9x7, galvanized, R-value 6-9" },
  { service: "Insulated steel (2-car)", lowEnd: "$1,600", typical: "$2,200", highEnd: "$2,800", notes: "16x7, polyurethane core, R-16+" },
  { service: "Carriage-style steel (2-car)", lowEnd: "$2,000", typical: "$2,600", highEnd: "$3,400", notes: "Decorative hardware included" },
  { service: "Full-view glass (2-car)", lowEnd: "$2,800", typical: "$3,600", highEnd: "$4,500", notes: "Aluminum frame, tempered glass panels" },
  { service: "Hurricane-rated door", lowEnd: "$2,400", typical: "$3,100", highEnd: "$4,200", notes: "Harris County wind-load compliant" },
]

export default function InstallationPage() {
  const crumbs = buildBreadcrumbItems("/garage-door-installation")
  return (
    <>
      <ServiceSchema serviceType="Garage Door Installation" description="New garage door installation. All major brands. Hurricane-rated options for Greater Houston." />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <HeroBlock
        h1="Garage Door Installation in Houston, TX"
        subhead="New garage door installation with most jobs completed within 5 business days. Hurricane-rated options, smart opener installs, HOA-compliant styles."
        bgDark
      />

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              New garage door installation in Houston runs $1,200-$4,500 installed, depending on door size, material, and style. Most jobs are scheduled and completed within 5 business days. Hurricane-rated options are available and worth it for homes in flood-prone zones. Get a free quote at <Link href="/get-a-quote" className="text-rust font-bold">713garagedoor.com/get-a-quote</Link>.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What We Install in Houston</h2>
          <p className="text-steel leading-relaxed mb-4">
            We install all major door styles and brands. The most popular choices in Greater Houston are insulated steel (best for the climate), carriage-style steel (HOA-friendly with the look of wood), and full-view glass (popular in Memorial and The Woodlands).
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Insulated steel with polyurethane core (best for Houston humidity and heat)",
              "Carriage-style steel doors: wood look without wood maintenance",
              "Full-view glass and aluminum frame doors",
              "Hurricane-rated and wind-load certified doors",
              "Composite wood-look panels",
              "Custom sizing for older homes with non-standard openings",
              "LiftMaster, Chamberlain, and Genie opener installs with new doors",
              "Smart opener package with myQ app connectivity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <DefinitionBox
            term="R-value"
            definition="A measure of insulation effectiveness. A higher R-value means better insulation. Standard steel doors have an R-value of 6-9. Doors with polyurethane foam cores reach R-16 or higher. For Houston's summer heat, a higher R-value door noticeably reduces garage temperature and protects items stored inside."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Hurricane-Rated and Wind-Load Requirements in Houston</h2>
          <p className="text-steel leading-relaxed mb-4">
            Harris County has wind-load requirements for new garage door installations. Standard residential installations must meet the applicable wind-speed design code for the county. Most homes in Greater Houston are in areas that require doors rated for at least 110-130 mph wind speeds.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            A hurricane-rated door has reinforced panels, heavier track systems, and certified hardware that can handle the lateral wind load. They cost 15-25% more than standard doors of the same style. Wind reinforcement kits are also available for existing standard doors at $75-$200 installed, not a full upgrade but better than nothing.
          </p>

          <Callout variant="heads-up">
            If you're in a flood zone or have had storm damage before, a hurricane-rated garage door is worth the investment. The garage door is the largest opening on most homes. It's the first thing to fail under high wind loads, and that failure can pressurize the attic and lift the roof. This isn't fearmongering; it's physics.
          </Callout>

          <PricingTable rows={installPricing} heading="Houston Installation Pricing" />

          <ComparisonTable
            heading="Steel vs. Wood: Which Is Right for Houston?"
            col1Label="Steel Door"
            col2Label="Real Wood Door"
            rows={materialRows}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Our Installation Process</h2>
          <p className="text-steel leading-relaxed mb-4">
            A typical installation runs 4-8 hours depending on door size and whether an opener is included.
          </p>
          <ol className="space-y-3 mb-6">
            {[
              { n: "1", t: "Free Quote", d: "We measure your opening, discuss style preferences, and price the job before anything is ordered." },
              { n: "2", t: "Order & Schedule", d: "Most standard doors are in stock or available within 3-5 business days. Custom sizes take longer." },
              { n: "3", t: "Remove Old Door", d: "We remove and dispose of the old door and hardware. No extra charge for removal." },
              { n: "4", t: "Install New Door", d: "Track, springs, door sections, opener (if applicable), and all hardware installed." },
              { n: "5", t: "Test & Balance", d: "We test balance, safety reversal, travel limits, and remote programming before we leave." },
            ].map(({ n, t, d }) => (
              <li key={n} className="flex items-start gap-3 text-sm text-steel">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rust text-white text-xs flex items-center justify-center font-bold">{n}</span>
                <span><strong className="text-ink">{t}:</strong> {d}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Service Areas for Installation</h2>
          <p className="text-steel leading-relaxed mb-4">
            We install new doors across Greater Houston, including <Link href="/service-area/the-heights" className="text-rust hover:underline">The Heights</Link>, <Link href="/service-area/memorial" className="text-rust hover:underline">Memorial</Link>, <Link href="/service-area/sugar-land" className="text-rust hover:underline">Sugar Land</Link>, <Link href="/service-area/katy" className="text-rust hover:underline">Katy</Link>, and <Link href="/service-area/the-woodlands" className="text-rust hover:underline">The Woodlands</Link>.
          </p>

          <p className="text-sm text-steel">
            Related: <Link href="/garage-door-repair" className="text-rust hover:underline">Garage Door Repair</Link> | <Link href="/resources/houston-humidity-garage-door-problems" className="text-rust hover:underline">Houston Humidity Guide</Link> | <Link href="/get-a-quote" className="text-rust hover:underline">Get a Free Quote</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Ready for a New Door?</h2>
              <p className="text-steel mb-6">Free quote. Most installs within 5 business days. Hurricane-rated options available.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="New Garage Door for Your Houston Home?" subtext="Free quote. Most installs within 5 business days. All major styles and brands." />
    </>
  )
}
