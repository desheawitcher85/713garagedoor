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
import { repairFaqs, generalFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Repair Houston | Same-Day Service | 713 Garage Door",
  description:
    "Fast, reliable garage door repair across Greater Houston. Same-day service, 24/7 emergency response, upfront pricing. Call 713-535-9301.",
  alternates: { canonical: `${siteConfig.url}/garage-door-repair` },
}

const pageFaqs = [...repairFaqs, ...generalFaqs.slice(0, 3)]

const diyVsProRows = [
  { factor: "Broken spring", option1: "Dangerous: under high tension. Injury risk is real.", option2: "Safe replacement in 60-90 min. Warranted." },
  { factor: "Off-track door", option1: "Can cause door collapse if forced. Don't try.", option2: "Track realignment + safety check. Same day." },
  { factor: "Worn rollers/hinges", option1: "Safe DIY if you know what you're doing.", option2: "Full inspection included. Finds other issues." },
  { factor: "Dead remote", option1: "New battery, then reprogram. Absolutely DIY.", option2: "Not needed. 5-minute fix." },
  { factor: "Snapped cable", option1: "Cables are under spring tension. Not safe.", option2: "Cable + drum inspection + replacement. Warranted." },
  { factor: "Bent panel", option1: "Cosmetic bends OK to leave. Structural bends affect alignment.", option2: "Panel swap or full door assessment." },
]

export default function GarageDoorRepairPage() {
  const crumbs = buildBreadcrumbItems("/garage-door-repair")
  return (
    <>
      <ServiceSchema
        serviceType="Garage Door Repair"
        description="Broken springs, off-track doors, cable replacement, panel damage, and more. Same-day service across Houston."
      />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <HeroBlock
        h1="Garage Door Repair in Houston, TX"
        subhead="Broken springs, off-track doors, stuck panels, snapped cables. Same-day repair across Greater Houston with a 1-year parts and labor warranty."
        bgDark
      />

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto prose-custom">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8 not-prose">
            <p className="text-sm text-steel">
              Most Houston garage door repairs cost $185-$450 and take 60-90 minutes. The most common issue is a broken torsion spring. We offer same-day service across Greater Houston with no after-hours surcharge. Call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a> or <Link href="/get-a-quote" className="text-rust font-bold">get a free quote online</Link>.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Common Garage Door Problems We Fix in Houston</h2>
          <p className="text-steel leading-relaxed mb-4">
            Houston's humid subtropical climate creates repair patterns that techs in dry markets rarely see. Springs corrode faster. Wooden panels warp after a few wet summers. Opener motors work harder in the heat. Below are the issues we handle most.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Broken torsion or extension springs (most common emergency call in Houston)",
              "Snapped or frayed lift cables",
              "Door off track: one or both sides",
              "Bent or cracked steel panels after vehicle impact",
              "Wooden panel rot from Gulf humidity",
              "Opener motor failure or gear strip",
              "Worn rollers causing grinding or noise",
              "Broken hinges or bent tracks",
              "Weather seal replacement after hurricane season",
              "Remote and keypad programming issues",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <DefinitionBox
            term="Torsion spring"
            definition="A tightly-wound steel spring mounted horizontally above your garage door that stores the energy needed to lift the door. When it snaps, the door becomes too heavy for the opener motor to lift. You'll hear a loud bang and the door won't open."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Our Repair Process</h2>
          <p className="text-steel leading-relaxed mb-4">
            Every repair call follows the same sequence: diagnose first, quote before touching anything, fix with warranted parts, test everything twice before we leave.
          </p>

          <ol className="space-y-4 mb-6">
            {[
              { step: "1. Diagnosis", desc: "We inspect the full door system (springs, cables, tracks, rollers, opener), not just the obvious symptom. The thing that broke is often downstream of the actual cause." },
              { step: "2. Firm Quote", desc: "You get a written price before we start. No surprises, no upselling. If we find additional issues, we tell you and you decide." },
              { step: "3. Same-Day Repair", desc: "We stock common springs, cables, rollers, and opener parts on the truck. Most jobs are completed in 60-90 minutes without a return visit." },
              { step: "4. Full Test", desc: "We test the door through 5 cycles, check the balance, verify safety reversal on the opener, and confirm the remote works before we consider the job done." },
            ].map(({ step, desc }) => (
              <li key={step} className="text-sm text-steel">
                <strong className="text-ink">{step}:</strong> {desc}
              </li>
            ))}
          </ol>

          <Callout variant="pro-tip">
            Before calling for a repair, pull the red release cord on your opener to disconnect it, then try to lift the door manually. If it feels impossibly heavy, the spring is almost certainly broken. If it opens easily by hand but the opener won't run it, the issue is with the opener.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Affects the Cost of Garage Door Repair in Houston?</h2>
          <p className="text-steel leading-relaxed mb-4">
            Most repairs land between $185 and $450. The factors below move that number up or down. For a firm quote, use our <Link href="/get-a-quote" className="text-rust hover:underline">quote form</Link>.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Type of repair: spring replacement costs more than roller replacement",
              "Number of springs: single spring vs. dual-spring system",
              "Door size: 2-car and 3-car doors require larger, more expensive parts",
              "Part grade: standard springs vs. high-cycle or galvanized springs",
              "Emergency timing: same price 24/7, no surcharge for nights or weekends",
              "Opener involvement: if the opener also needs work, that's a separate line item",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <span className="text-rust font-bold flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Why Houston Homeowners Choose 713 Garage Door</h2>
          <p className="text-steel leading-relaxed mb-4">
            We've been handling Houston's specific repair patterns for {siteConfig.yearsInBusiness} years. That means we stock parts suited to Houston's climate: galvanized and zinc-plated springs for corrosion resistance, sealed opener motors for humidity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: "No After-Hours Surcharge", desc: "Same rate at 2am as at 2pm. No weekend or holiday premium." },
              { title: "1-Year Warranty", desc: "Standard warranty on all parts and labor. Lifetime warranty on premium springs." },
              { title: "Stocked Trucks", desc: "Common springs, cables, and parts on every truck. Most jobs done in one visit." },
              { title: "Licensed & Insured", desc: "Full general liability and workers comp. Proof of insurance available on request." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border border-cream rounded-lg p-4">
                <h3 className="font-semibold text-ink text-sm mb-1">{title}</h3>
                <p className="text-xs text-steel">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Areas We Serve for Garage Door Repair</h2>
          <p className="text-steel leading-relaxed mb-4">
            We cover all of Greater Houston with same-day availability. Below are the neighborhoods where we work most. Don't see yours listed? Call. We likely serve it.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { name: "The Heights", href: "/service-area/the-heights" },
              { name: "Memorial", href: "/service-area/memorial" },
              { name: "Sugar Land", href: "/service-area/sugar-land" },
              { name: "Katy", href: "/service-area/katy" },
              { name: "The Woodlands", href: "/service-area/the-woodlands" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-steel">
            Also serving: River Oaks, West University, Bellaire, Cypress, Pearland, Spring, Tomball, Humble, Kingwood, and Friendswood.
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">How Houston Weather Wears Out Garage Doors</h2>
          <p className="text-steel leading-relaxed mb-4">
            Houston averages over 80% relative humidity through the summer. Steel springs corrode 20-30% faster in coastal humid climates than in dry markets. Wooden panels absorb moisture and warp or crack. Opener motors run harder to compensate for stiff, weather-affected hardware.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            We see the effects clearly: doors in The Heights and Memorial with original springs from the early 2000s routinely fail. Builder doors in Sugar Land and Katy that are 10-12 years old start showing their first spring failures. The solution isn't constant repair. It's using the right materials from the start.
          </p>

          <Callout variant="houston-example">
            A homeowner in the Heights called us after their carriage-style wooden door stopped moving overnight. The spring had failed, and three of the wooden panels had warped enough to jam in the tracks. We replaced the springs with galvanized high-cycle units and the panels with composite wood-look steel. Two years later, no issues.
          </Callout>

          <ComparisonTable
            heading="DIY vs. Professional Repair: When Each Makes Sense"
            col1Label="DIY"
            col2Label="Call a Pro"
            rows={diyVsProRows}
          />

          <p className="text-steel text-sm mt-4">
            See also: <Link href="/garage-door-spring-repair" className="text-rust hover:underline">Spring Repair</Link> | <Link href="/garage-door-opener-repair" className="text-rust hover:underline">Opener Repair</Link> | <Link href="/emergency-garage-door-service" className="text-rust hover:underline">Emergency Service</Link> | <Link href="/resources/garage-door-wont-open-troubleshooting" className="text-rust hover:underline">Troubleshooting Guide</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Ready to Get Your Door Fixed?</h2>
              <p className="text-steel mb-6">Same-day service available. No after-hours surcharge. Free quote before any work starts.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Garage Door Problem in Houston?" subtext="Same-day repair across all of Greater Houston. Call or get a quote online." />
    </>
  )
}
