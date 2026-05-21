import type { Metadata } from "next"
import Link from "next/link"
import { KeyTakeaways } from "@/components/blocks/KeyTakeaways"
import { Callout } from "@/components/blocks/Callout"
import { DefinitionBox } from "@/components/blocks/DefinitionBox"
import { ComparisonTable } from "@/components/blocks/ComparisonTable"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { ArticleSchema } from "@/components/schema/ArticleSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { openerFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "How Long Do Garage Door Openers Last? (Plus 5 Signs It's Time to Replace)",
  description:
    "Average garage door opener lifespan is 10-15 years, shorter in Houston's climate. 5 signs your opener needs replacement and how to decide: repair vs. replace.",
  alternates: { canonical: `${siteConfig.url}/resources/how-long-do-garage-door-openers-last` },
}

const pageFaqs = openerFaqs.slice(0, 5)

const repairVsReplaceRows = [
  { factor: "Opener age", option1: "Under 10 years: repair first", option2: "12+ years: replacement often cheaper long-term" },
  { factor: "Repair cost", option1: "Under $200: usually worth repairing", option2: "Over $350: approaching new unit territory" },
  { factor: "Problem type", option1: "Single component: gear, sensor, board", option2: "Multiple failures or motor seized" },
  { factor: "Smart features", option1: "myQ-compatible: retrofit kit available", option2: "Pre-2010 unit: smart features not compatible" },
  { factor: "Noise level", option1: "Suddenly loud: usually fixable", option2: "Always been loud, getting worse" },
  { factor: "Drive type", option1: "Belt or jackshaft: worth preserving", option2: "Old chain drive: often better to upgrade" },
]

const fiveSignsToReplace = [
  {
    sign: "1",
    title: "It's Older Than 12 Years and Has Had Multiple Repairs",
    desc: "One repair in 12 years is normal. Two or three starts to indicate systemic wear. At some point, you're paying to keep a failing unit alive when a new opener with a fresh warranty and smart features would cost less over the next 5 years.",
  },
  {
    sign: "2",
    title: "It's Not Compatible with Smart Home Systems",
    desc: "Openers made before 2010 generally can't be upgraded to smart connectivity. If you want app-based monitoring, remote access, and integration with Google Home or Amazon Alexa, a new unit is the only path. Modern LiftMaster and Chamberlain openers with myQ start around $250 for the unit itself.",
  },
  {
    sign: "3",
    title: "It Makes a Loud Grinding or Grinding Noise on Every Cycle",
    desc: "Some grinding indicates a worn drive chain or gear. That's often fixable. But persistent grinding on every cycle, especially on an older chain-drive unit, usually means the drivetrain is worn throughout, not just one component.",
  },
  {
    sign: "4",
    title: "It's a Chain Drive and You're Tired of the Noise",
    desc: "Chain-drive openers are the loudest type. If your home has living space above or adjacent to the garage, the vibration and noise of a chain drive gets old. Belt-drive and jackshaft openers are dramatically quieter and worth the $100-$200 price premium when you're already replacing the unit.",
  },
  {
    sign: "5",
    title: "The Motor Runs Inconsistently, Especially in Hot Weather",
    desc: "Intermittent operation that gets worse in summer is a sign the motor capacitor or thermal protection circuit is failing due to heat damage. In Houston garages that reach 100+ degrees in July and August, this is a common failure mode for older units.",
  },
]

export default function OpenerLifespanPage() {
  const crumbs = buildBreadcrumbItems("/resources/how-long-do-garage-door-openers-last")
  return (
    <>
      <ArticleSchema
        headline="How Long Do Garage Door Openers Last?"
        description="Average opener lifespan is 10-15 years. In Houston, expect shorter. 5 signs to replace, and how to decide between repair and replacement."
        url={`${siteConfig.url}/resources/how-long-do-garage-door-openers-last`}
      />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="text-xs text-mist uppercase tracking-wide mb-3">Lifespan Guide</div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
            How Long Do Garage Door Openers Last? (And When to Replace Yours)
          </h1>
          <p className="text-mist text-lg max-w-2xl">The honest answer, with Houston-specific adjustments.</p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Most residential garage door openers last 10-15 years under normal use. In Houston's heat and humidity, expect 9-12 years for chain-drive units and 12-15 years for belt-drive or jackshaft models. The 5 signs it's time to replace are listed below. If you're seeing two or more, replacement is usually the smarter call over repair.
            </p>
          </blockquote>

          <KeyTakeaways points={[
            "Average opener lifespan: 10-15 years nationally; 9-12 years in Houston for chain-drive units.",
            "Houston heat and humidity degrade motor capacitors and circuit boards faster than dry climates.",
            "Belt-drive and jackshaft openers outlast chain-drive in Houston and run significantly quieter.",
            "LiftMaster and Chamberlain myQ-equipped models tend to hold up best in humid heat.",
            "Repair is usually better for openers under 10 years old; replacement is often smarter at 12+.",
            "Smart opener upgrades (myQ) require a new unit on openers made before 2010.",
          ]} />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">How Long Should a Garage Door Opener Last?</h2>
          <p className="text-steel leading-relaxed mb-4">
            The national average for residential opener lifespan is 10-15 years. Actual lifespan varies based on use frequency, drive type, brand, and environment. A door that cycles 6+ times daily ages faster than one that opens once in the morning and once at night.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Houston's environment shortens this range. Ambient garage temperatures regularly exceed 100 degrees in summer. Humidity above 70% is common year-round. Both factors degrade electronic components, lubrication, and drive mechanisms faster than the national average conditions those lifespan estimates assume.
          </p>

          <DefinitionBox
            term="Smart opener"
            definition="A garage door opener with integrated Wi-Fi that connects to LiftMaster's myQ or Chamberlain's myQ app. Lets you open, close, and monitor your garage door from your phone. Compatible with Google Assistant, Amazon Alexa, and Apple Home on select models."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Opener Types and Their Lifespans in Houston</h2>
          <div className="space-y-4 mb-8">
            {[
              { type: "Chain drive", lifespan: "9-12 years in Houston", notes: "Most common, lowest cost, loudest. Chain stretch and gear wear accelerate in heat. Good value for budget installs, but expect earlier replacement." },
              { type: "Belt drive", lifespan: "12-16 years in Houston", notes: "Quieter than chain. Rubber belt handles temperature cycles better than metal chain. Worth the $50-$80 premium for living spaces adjacent to the garage." },
              { type: "Screw drive", lifespan: "Varies widely", notes: "Fewer parts than chain or belt. Cold climates favor screw drive; Houston heat can cause issues with lubrication consistency in the drive mechanism." },
              { type: "Jackshaft", lifespan: "15-20 years", notes: "Mounts on the wall beside the door rather than the ceiling. Motor is enclosed, which protects it from garage heat and humidity. Best choice for Houston's climate but costs more upfront." },
            ].map(({ type, lifespan, notes }) => (
              <div key={type} className="bg-white border border-cream rounded-lg p-4">
                <div className="flex items-start justify-between mb-1">
                  <p className="font-semibold text-ink">{type}</p>
                  <span className="text-xs bg-rust/10 text-rust px-2 py-0.5 rounded font-semibold">{lifespan}</span>
                </div>
                <p className="text-xs text-steel">{notes}</p>
              </div>
            ))}
          </div>

          <Callout variant="houston-example">
            The most common opener replacement we do in Houston is a 2008-2012 chain-drive unit in a Katy or Sugar Land home. The homeowner says the door sounds rough and works intermittently, especially on hot afternoons. We inspect and find the motor capacitor has degraded (a $75 part) but the gears are also worn, the drive chain is stretched, and the safety sensor wiring has moisture damage. At that point, repair cost approaches new-unit territory and we recommend replacement. Most of these customers end up with a belt-drive or jackshaft LiftMaster with myQ: quieter, smarter, and built for another 15 years.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">5 Signs Your Opener Is Ready to Be Replaced</h2>
          <div className="space-y-6 mb-8">
            {fiveSignsToReplace.map(({ sign, title, desc }) => (
              <div key={sign} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rust text-white font-bold text-sm flex items-center justify-center">{sign}</span>
                <div>
                  <h3 className="font-semibold text-ink mb-1">{title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ComparisonTable
            heading="Repair vs. Replace: The Decision Matrix"
            col1Label="Repair"
            col2Label="Replace"
            rows={repairVsReplaceRows}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Does a New Opener Cost in Houston?</h2>
          <p className="text-steel leading-relaxed mb-4">
            New opener installation in Houston runs $450-$800 fully installed, depending on the drive type and features. That includes the unit, installation, safety sensor alignment, and remote programming.
          </p>
          <div className="space-y-2 mb-6">
            {[
              { label: "Basic chain drive with remote", price: "$450-$550 installed" },
              { label: "Belt drive with myQ smart connectivity", price: "$550-$700 installed" },
              { label: "Jackshaft with battery backup", price: "$700-$900 installed" },
            ].map(({ label, price }) => (
              <div key={label} className="flex items-center justify-between bg-white border border-cream rounded px-4 py-2 text-sm">
                <span className="text-ink font-medium">{label}</span>
                <span className="text-rust font-bold">{price}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-steel">
            Related: <Link href="/garage-door-opener-repair" className="text-rust hover:underline">Opener Repair Service</Link> | <Link href="/resources/garage-door-wont-open-troubleshooting" className="text-rust hover:underline">Troubleshooting Guide</Link>
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Frequently Asked Questions</h2>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />
      <CTABanner heading="Opener Issues in Houston?" subtext="Same-day repair or replacement. All major brands. Smart opener installs available." />
    </>
  )
}
