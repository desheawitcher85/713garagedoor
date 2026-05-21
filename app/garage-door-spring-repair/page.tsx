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
import { springFaqs, houstonFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Spring Repair Houston | Same-Day Spring Replacement",
  description:
    "Broken garage door spring in Houston? Same-day torsion and extension spring replacement. Lifetime spring warranty available. Call 713-535-9301.",
  alternates: { canonical: `${siteConfig.url}/garage-door-spring-repair` },
}

const pageFaqs = [...springFaqs, ...houstonFaqs.slice(0, 2)]

const springPricing = [
  { service: "Single torsion spring", lowEnd: "$185", typical: "$235", highEnd: "$285", notes: "Most common residential install" },
  { service: "Dual torsion spring (both)", lowEnd: "$260", typical: "$320", highEnd: "$390", notes: "Recommended: replace both at same time" },
  { service: "Extension spring pair", lowEnd: "$150", typical: "$195", highEnd: "$250", notes: "Older door style, 2 springs per door" },
  { service: "High-cycle upgrade (25k+)", lowEnd: "$310", typical: "$380", highEnd: "$450", notes: "Best value for frequently used doors" },
  { service: "Galvanized spring (humidity rated)", lowEnd: "$280", typical: "$350", highEnd: "$420", notes: "Recommended for Houston's humid climate" },
]

const torsionVsExtensionRows = [
  { factor: "Location", option1: "Horizontal, above door center", option2: "Along horizontal tracks, both sides" },
  { factor: "Common on", option1: "Newer doors, larger doors", option2: "Older homes, lighter doors" },
  { factor: "Typical lifespan", option1: "10,000-25,000 cycles", option2: "8,000-15,000 cycles" },
  { factor: "Replacement cost", option1: "$185-$390", option2: "$150-$250" },
  { factor: "DIY difficulty", option1: "High: dangerous", option2: "High: still dangerous" },
  { factor: "Houston humidity impact", option1: "Moderate: galvanized versions available", option2: "Higher: often in open track position" },
]

export default function SpringRepairPage() {
  const crumbs = buildBreadcrumbItems("/garage-door-spring-repair")
  return (
    <>
      <ServiceSchema serviceType="Garage Door Spring Repair" description="Torsion and extension spring replacement. Most jobs done same day. Lifetime spring warranty available." />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <HeroBlock
        h1="Garage Door Spring Repair in Houston, TX"
        subhead="Broken spring? We replace torsion and extension springs same day across Greater Houston. Lifetime warranty available on premium springs."
        bgDark
      />

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              A broken garage door spring is the most common emergency repair in Houston. It causes a loud bang and leaves the door too heavy to open. Most spring replacements cost $185-$390 and are completed same day. Don't attempt DIY. Torsion springs are under extreme tension and cause serious injury when mishandled.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Signs Your Garage Door Spring Is Broken</h2>
          <p className="text-steel leading-relaxed mb-4">
            A broken spring almost always announces itself. Here's what to look and listen for.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Loud bang from the garage, often mistaken for a car backfire",
              "Door won't open at all, or opens a few inches and stops",
              "Door feels extremely heavy when you try to lift it manually",
              "Opener motor runs but the door doesn't move",
              "Visible gap in the spring coil above the door",
              "Door is uneven: one side sits higher than the other",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="reality-check">
            If you suspect a broken spring, stop operating the opener immediately. Running your opener with a broken spring puts strain on the motor, can damage the gears, and risks a door falling unexpectedly. Manual operation (slowly, with the door balanced by hand) is OK to free a trapped car, but call us before trying to use it normally again.
          </Callout>

          <DefinitionBox
            term="Torsion spring"
            definition="A tightly-wound steel coil mounted horizontally on a metal shaft above the center of your garage door. It stores mechanical energy when the door closes and releases it to help lift the door when opening. One broken torsion spring makes most residential doors impossible to lift safely."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Torsion Spring vs. Extension Spring: What's the Difference?</h2>
          <p className="text-steel leading-relaxed mb-4">
            Most modern Houston homes have torsion springs. Older homes, especially those built before the 1990s, often have extension springs. The repair process and cost differ between the two.
          </p>

          <ComparisonTable
            col1Label="Torsion Spring"
            col2Label="Extension Spring"
            rows={torsionVsExtensionRows}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Why Springs Fail Faster in Houston's Humid Climate</h2>
          <p className="text-steel leading-relaxed mb-4">
            Standard steel springs corrode in humid environments. Houston's Gulf-influenced humidity, consistently above 75% from May through October, accelerates surface oxidation on the spring coils. That oxidation weakens the metal and leads to early failure.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Standard springs rated for 10,000 cycles sometimes fail at 6,000-7,000 cycles in Houston because corrosion has weakened the coil before it's mechanically worn out. Galvanized and zinc-plated springs resist this. They cost $60-$100 more but last significantly longer.
          </p>

          <Callout variant="houston-example">
            We replaced a pair of standard torsion springs in a Sugar Land home in 2021. The homeowner called back 2 years later. Both springs had snapped again. On the second visit, we upgraded to galvanized high-cycle springs. Those are rated for 25,000 cycles and coated to resist corrosion. Same door, much longer lifespan.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Affects the Cost of Spring Replacement in Houston?</h2>
          <p className="text-steel leading-relaxed mb-4">
            Get an exact quote from our <Link href="/get-a-quote" className="text-rust hover:underline">quote form</Link>. Our <Link href="/resources/garage-door-spring-replacement-cost-houston" className="text-rust hover:underline">Houston spring cost guide</Link> has the full breakdown. Here's the short version.
          </p>

          <PricingTable rows={springPricing} heading="Houston Spring Replacement Pricing" />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Should You Replace One Spring or Both?</h2>
          <p className="text-steel leading-relaxed mb-4">
            If both springs are the same age, replace both. This is the clearest piece of advice in garage door repair. The second spring is under the same fatigue as the first. If one failed, the other will follow in weeks or months. Two separate service calls cost more than one.
          </p>

          <Callout variant="pro-tip">
            When you call for a spring replacement, ask about upgrading to high-cycle springs at the same time. The labor is identical. You're just paying for a better spring. For a door used 4+ times a day, the upgrade typically pays for itself in 3-4 years vs. calling us again on a standard spring.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Areas We Serve for Spring Repair</h2>
          <p className="text-steel leading-relaxed mb-4">
            Same-day spring replacement across Greater Houston. Most suburban calls (<Link href="/service-area/sugar-land" className="text-rust hover:underline">Sugar Land</Link>, <Link href="/service-area/katy" className="text-rust hover:underline">Katy</Link>, <Link href="/service-area/the-woodlands" className="text-rust hover:underline">The Woodlands</Link>) get same-day service. <Link href="/service-area/the-heights" className="text-rust hover:underline">Heights</Link> and <Link href="/service-area/memorial" className="text-rust hover:underline">Memorial</Link> are typically reached within 2 hours for emergency calls.
          </p>

          <p className="text-sm text-steel">
            Related pages: <Link href="/garage-door-repair" className="text-rust hover:underline">Garage Door Repair</Link> | <Link href="/emergency-garage-door-service" className="text-rust hover:underline">Emergency Service</Link> | <Link href="/resources/signs-your-garage-door-spring-is-broken" className="text-rust hover:underline">7 Signs Your Spring Is Broken</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Spring Broken? We're Ready.</h2>
              <p className="text-steel mb-6">Same-day replacement. Galvanized options for Houston's climate. No after-hours surcharge.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Broken Spring in Houston?" subtext="Same-day replacement. Lifetime warranty on premium springs. No after-hours surcharge." />
    </>
  )
}
