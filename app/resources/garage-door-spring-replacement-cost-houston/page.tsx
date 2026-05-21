import type { Metadata } from "next"
import Link from "next/link"
import { KeyTakeaways } from "@/components/blocks/KeyTakeaways"
import { Callout } from "@/components/blocks/Callout"
import { DefinitionBox } from "@/components/blocks/DefinitionBox"
import { ComparisonTable } from "@/components/blocks/ComparisonTable"
import { PricingTable } from "@/components/blocks/PricingTable"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { ArticleSchema } from "@/components/schema/ArticleSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { springFaqs, costFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Spring Replacement Cost in Houston (2026 Guide)",
  description:
    "How much does garage door spring replacement cost in Houston in 2026? Real torsion and extension spring price ranges plus what drives the cost up or down.",
  alternates: { canonical: `${siteConfig.url}/resources/garage-door-spring-replacement-cost-houston` },
}

const pageFaqs = [...springFaqs.slice(0, 4), ...costFaqs.slice(0, 3)]

const springPricing = [
  { service: "Single torsion spring", lowEnd: "$185", typical: "$235", highEnd: "$285", notes: "Most common: single-spring residential door" },
  { service: "Dual torsion (both springs)", lowEnd: "$260", typical: "$320", highEnd: "$390", notes: "Best option: replace both at same time" },
  { service: "Extension spring pair", lowEnd: "$150", typical: "$195", highEnd: "$250", notes: "Older door style; springs run along tracks" },
  { service: "High-cycle springs (25,000+)", lowEnd: "$310", typical: "$380", highEnd: "$450", notes: "Best ROI for frequently used doors" },
  { service: "Galvanized/zinc-plated springs", lowEnd: "$280", typical: "$350", highEnd: "$420", notes: "Recommended for Houston's humidity" },
]

const tierRows = [
  { factor: "Spring type", option1: "Standard steel torsion", option2: "High-cycle galvanized", option3: "Commercial-grade" },
  { factor: "Cycle rating", option1: "10,000 cycles", option2: "25,000-50,000 cycles", option3: "100,000+ cycles" },
  { factor: "Houston lifespan", option1: "3-6 years with humidity", option2: "8-14 years", option3: "15-25 years" },
  { factor: "Price range", option1: "$185-$285", option2: "$280-$450", option3: "$450+" },
  { factor: "Warranty", option1: "1 year", option2: "Lifetime (our shop)", option3: "Varies" },
]

export default function SpringCostPage() {
  const crumbs = buildBreadcrumbItems("/resources/garage-door-spring-replacement-cost-houston")
  return (
    <>
      <ArticleSchema
        headline="Garage Door Spring Replacement Cost in Houston (2026 Guide)"
        description="How much does garage door spring replacement cost in Houston in 2026?"
        url={`${siteConfig.url}/resources/garage-door-spring-replacement-cost-houston`}
      />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="text-xs text-mist uppercase tracking-wide mb-3">Cost Guide</div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
            How Much Does Garage Door Spring Replacement Cost in Houston?
          </h1>
          <p className="text-mist text-lg max-w-2xl">2026 pricing for torsion and extension spring replacement in the Greater Houston area.</p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Garage door spring replacement in Houston runs $185-$450. A single torsion spring is $185-$285. Replacing both springs at once (strongly recommended) runs $260-$390. Upgrading to high-cycle galvanized springs for Houston's humidity costs $280-$450 and is worth it for frequently used doors.
            </p>
          </blockquote>

          <KeyTakeaways points={[
            "Single torsion spring replacement in Houston: $185-$285. Dual replacement: $260-$390.",
            "Replacing both springs at once costs less than two separate service calls. Do it.",
            "Standard springs last 3-6 years in Houston's humidity vs. 7-10 years in dry climates.",
            "Galvanized high-cycle springs cost $60-$100 more but last significantly longer in the Gulf climate.",
            "Never attempt spring replacement yourself. Torsion springs are under extreme tension and cause serious injury.",
            "No after-hours surcharge: same rate for a midnight spring failure as a Tuesday afternoon repair.",
          ]} />

          <p className="text-steel leading-relaxed mb-4">
            A broken garage door spring is the most common emergency call a Houston homeowner makes. The loud bang in the middle of the night, the door that won't open before work. It happens to almost everyone eventually. What varies is how much it costs to fix and whether the fix lasts.
          </p>
          <p className="text-steel leading-relaxed mb-6">
            This guide covers real 2026 Houston pricing, what drives costs up and down, and why the upgrade options matter more in Houston than anywhere else.
          </p>

          <PricingTable rows={springPricing} heading="2026 Houston Spring Replacement Pricing" />

          <DefinitionBox
            term="Torsion spring"
            definition="A tightly-wound steel coil mounted above the center of your garage door on a horizontal shaft. When you close the door, the spring winds tighter and stores energy. When you open the door, it releases that energy to help lift the door. One broken torsion spring makes most residential doors impossible to lift safely."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Drives Spring Replacement Costs in Houston</h2>
          <p className="text-steel leading-relaxed mb-4">
            Two spring replacement jobs in the same ZIP code can come back with quotes $150 apart. Here's what causes that difference.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { factor: "Single vs. dual spring system", detail: "Most residential doors use one torsion spring. Larger and heavier doors (3-car doors in Memorial and The Woodlands, some commercial-adjacent residential) use two springs. Replacing both adds $75-$150." },
              { factor: "Spring type", detail: "Standard steel vs. galvanized vs. high-cycle: see the comparison table below. The spring you choose is the most important cost variable." },
              { factor: "Door size and weight", detail: "Heavier doors need springs with more torque. A 9x7 single-car door uses a different spring than a 16x7 2-car door. Parts cost more for larger doors." },
              { factor: "Labor: same-day vs. scheduled", detail: "No difference in our pricing, but some shops charge more for same-day. We don't." },
              { factor: "Combined repairs", detail: "If the cable also broke when the spring snapped, that's an additional $95-$160. We'll tell you what's needed before we start." },
            ].map(({ factor, detail }) => (
              <div key={factor} className="bg-white border border-cream rounded p-4">
                <p className="font-semibold text-ink text-sm mb-1">{factor}</p>
                <p className="text-xs text-steel">{detail}</p>
              </div>
            ))}
          </div>

          <ComparisonTable
            heading="Standard vs. High-Cycle vs. Galvanized Springs: Which Is Right for Houston?"
            col1Label="Standard Steel"
            col2Label="High-Cycle Galvanized"
            rows={tierRows.map(r => ({ ...r, option2: r.option2 }))}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Why Houston Springs Fail Faster</h2>
          <p className="text-steel leading-relaxed mb-4">
            Standard steel springs are rated for cycle counts, not years. But in Houston's Gulf-influenced humidity, consistently above 75% from May through October, the coil surface oxidizes. That oxidation happens between cycles, slowly weakening the metal. A spring rated for 10,000 cycles might fail at 7,000 in Houston because corrosion has compromised the steel before the mechanical wear-out point.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Galvanized springs resist this. Zinc coating inhibits oxidation and extends the spring's actual service life even in high-humidity conditions. The cost premium ($60-$100 over standard) pays back in 2-3 fewer service calls over the door's lifetime.
          </p>

          <Callout variant="houston-example">
            A Sugar Land homeowner replaced both torsion springs with standard steel in 2020. By 2023, one had failed again. Three years in Houston's summer humidity had accelerated the corrosion. On the second visit, she upgraded to galvanized high-cycle springs and hasn't called back since. The upgrade added $90 to the first job. The avoided second service call saved $300.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Should You Replace One Spring or Both?</h2>
          <p className="text-steel leading-relaxed mb-4">
            Replace both. This is the clearest cost advice in this guide. If your springs are the same age (and they almost always are), the second spring is at the same fatigue level as the first. It will fail within weeks or months of the first. Two service calls cost more than one, roughly $200-$300 more. Replacing both at the same visit adds $75-$100 to the single-spring price.
          </p>

          <Callout variant="pro-tip">
            When you call for a spring replacement, ask about upgrading to a high-cycle galvanized set at the same time. The labor cost is the same whether we install standard or premium springs. You're only paying for the better parts. For a door used 4+ times daily (common in family homes with kids and two working adults), the upgrade pays for itself in 2-3 years.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Is Spring Replacement a DIY Job?</h2>
          <p className="text-steel leading-relaxed mb-4">
            No. Torsion springs are under 150-300 pounds of torque. A mistake during winding or removal can release that energy violently. Broken wrists, broken arms, and worse are well-documented outcomes. Most hardware stores won't sell residential-grade torsion springs for exactly this reason.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Extension springs (the older style that runs along the tracks) are slightly less dangerous but still hazardous to work with. For spring work, call a professional.
          </p>

          <p className="text-sm text-steel mt-8">
            Related: <Link href="/garage-door-spring-repair" className="text-rust hover:underline">Spring Repair Service</Link> | <Link href="/resources/signs-your-garage-door-spring-is-broken" className="text-rust hover:underline">7 Signs Your Spring Is Broken</Link> | <Link href="/get-a-quote" className="text-rust hover:underline">Get a Free Quote</Link>
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Frequently Asked Questions</h2>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />
      <CTABanner heading="Ready to Fix Your Broken Spring?" subtext="Same-day service. Galvanized high-cycle springs available. No after-hours surcharge." />
    </>
  )
}
