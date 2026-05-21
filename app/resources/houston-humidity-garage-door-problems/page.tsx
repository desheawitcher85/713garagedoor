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
import { houstonFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Why Houston Humidity Wrecks Garage Doors (And How to Fight Back)",
  description:
    "How Houston's Gulf humidity damages springs, panels, openers, and cables, and what maintenance habits actually extend door life in Houston's climate.",
  alternates: { canonical: `${siteConfig.url}/resources/houston-humidity-garage-door-problems` },
}

const pageFaqs = houstonFaqs

const materialRows = [
  { factor: "Humidity resistance", option1: "Excellent: won't rot or warp", option2: "Poor: absorbs moisture, swells, rots" },
  { factor: "Spring corrosion", option1: "Standard: same risk. Galvanized: significantly better.", option2: "Springs unaffected; door material is the issue" },
  { factor: "Maintenance frequency", option1: "Annual minimum", option2: "Annual minimum + sealant every 1-2 years" },
  { factor: "Cost", option1: "$1,200-$3,500 installed", option2: "$2,000-$5,000+ installed" },
  { factor: "Lifespan in Houston", option1: "20-30 years with reasonable maintenance", option2: "10-20 years without consistent sealing" },
  { factor: "Curb appeal", option1: "Carriage-style steel looks like wood; composite available", option2: "Genuine wood aesthetic" },
]

export default function HoustonHumidityPage() {
  const crumbs = buildBreadcrumbItems("/resources/houston-humidity-garage-door-problems")
  return (
    <>
      <ArticleSchema
        headline="Why Houston Humidity Wrecks Garage Doors (And How to Fight Back)"
        description="How Houston's Gulf humidity damages springs, panels, openers, and cables, and the maintenance habits that extend door life."
        url={`${siteConfig.url}/resources/houston-humidity-garage-door-problems`}
      />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="text-xs text-mist uppercase tracking-wide mb-3">Houston-Specific Guide</div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
            How Houston Humidity Damages Garage Doors (And What to Do About It)
          </h1>
          <p className="text-mist text-lg max-w-2xl">The Gulf climate is genuinely hard on garage door hardware. Here's what it does and how to fight it.</p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Houston's Gulf humidity, consistently above 75% through summer and regularly above 90%, accelerates spring corrosion (shortening lifespan by 20-30%), rots wooden panels, strains opener motors through heavier door operation, and degrades weather seals faster than in dry climates. The fixes: galvanized springs, steel or composite doors, sealed-motor openers, and annual maintenance in March-April before peak season.
            </p>
          </blockquote>

          <KeyTakeaways points={[
            "Houston's average summer humidity exceeds 75%. That's Gulf Coast levels, not North Texas levels.",
            "Standard steel springs corrode 20-30% faster in humid climates. Galvanized springs resist this.",
            "Wooden garage door panels absorb moisture and warp, crack, or rot within 5-10 Houston summers.",
            "Opener motors work harder when springs are stiff or corroded, accelerating wear.",
            "Annual maintenance before hurricane season (May) and peak heat (March-April) is the minimum.",
            "Steel and composite doors are significantly better suited to Houston than real wood.",
          ]} />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Houston's Humidity: What the Numbers Actually Mean</h2>
          <p className="text-steel leading-relaxed mb-4">
            Houston regularly records relative humidity above 80% between June and October. On mornings after overnight rain, readings above 90% are common. The combination of high heat (95-100 degrees) and high humidity creates conditions that stress metal hardware and degrade organic materials quickly.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            For comparison: Phoenix, Arizona averages 20-25% humidity in summer. Denver averages 40-50%. Even Dallas averages 10-15 percentage points drier than Houston. The delta matters for garage doors.
          </p>
          <p className="text-steel leading-relaxed mb-6">
            The garage itself amplifies this. Most residential garages in Houston are not climate-controlled. The garage temperature tracks closely with outdoor temperature and humidity, sometimes running 5-15 degrees hotter. That combination of extreme heat and high humidity is what the hardware inside lives in.
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Houston Humidity Does to Your Springs</h2>
          <p className="text-steel leading-relaxed mb-4">
            Standard carbon steel garage door springs are not coated for corrosion resistance. Moisture in the air oxidizes the steel surface over time. Each humidity cycle, hot and moist during the day and slightly cooler and still humid at night, works the oxidation deeper into the metal.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            The result is springs that fail before they reach their rated cycle count. A spring rated for 10,000 cycles might fail at 6,000-7,000 in Houston because the metal has been weakened by oxidation, not mechanical fatigue. This is why Houston homeowners tend to see spring failures at 5-7 years rather than the national average of 7-10 years.
          </p>

          <Callout variant="houston-example">
            We replaced springs in a Heights bungalow in 2019. Standard steel, $235 for the pair. Called back in 2022. Both springs had failed again in just 3 years. The older, narrower garage had minimal airflow, and humidity had accelerated the corrosion significantly. We upgraded to galvanized high-cycle springs ($350) with a coating designed for coastal environments. Two years later, no issues.
          </Callout>

          <DefinitionBox
            term="Galvanized spring"
            definition="A garage door spring coated with a layer of zinc through a galvanization process. The zinc layer acts as a barrier against moisture and oxidation, dramatically slowing the corrosion that shortens standard spring life in humid climates. Worth the $60-$100 premium for any Houston home."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Houston Humidity Does to Wooden Panels</h2>
          <p className="text-steel leading-relaxed mb-4">
            Wood is hygroscopic: it absorbs moisture from the air and expands, then releases it and contracts. In Houston's climate, this cycle happens constantly. Over 5-10 summers, that expansion and contraction causes paint to peel, seams to open, and panels to warp or crack.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            A wooden door that looks fine in January can have 3 or 4 visibly warped panels by August if it hasn't been sealed in a couple of years. Once panels warp enough, the door no longer sits in the tracks correctly, creating grinding, jamming, and eventual off-track failures.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Wood doors in Houston require annual cleaning, sanding, and sealing. Most homeowners don't do this consistently, which is why we see so many wooden door replacements in the Heights, Montrose, and older Memorial neighborhoods.
          </p>

          <ComparisonTable
            heading="Steel vs. Wood Doors in Houston's Climate"
            col1Label="Steel Door"
            col2Label="Real Wood Door"
            rows={materialRows}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Houston Humidity Does to Openers</h2>
          <p className="text-steel leading-relaxed mb-4">
            Opener motors aren't designed to run in saturated air. Electronic components (circuit boards, capacitors, sensor wiring) degrade faster when moisture can reach them. For chain-drive and belt-drive openers (which have motors exposed to garage air), the Houston environment ages the electronics faster than the mechanical components.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            Additionally: humidity-degraded springs become stiffer over time, which means the opener motor works harder on every cycle to compensate. An opener rated for a 150-pound door starts to behave like it's lifting 180 pounds. That extra motor load accumulates across thousands of cycles.
          </p>

          <Callout variant="did-you-know">
            LiftMaster and Chamberlain jackshaft openers mount on the wall beside the door rather than hanging from the ceiling. The motor is fully enclosed and sealed. In Houston's climate, jackshaft openers tend to outlast ceiling-mounted chain or belt drives because the motor is much better protected from the ambient humidity. Worth the $100-$200 premium when you're already replacing a unit.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">The Houston Maintenance Schedule That Actually Works</h2>
          <p className="text-steel leading-relaxed mb-4">
            The minimum: once a year. The standard: twice a year, once in March or April before peak heat and humidity, and once in May before hurricane season. Here's what each visit should cover.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { task: "Spring inspection", detail: "Check for surface oxidation, discoloration, or elongated coils. Lubricate with a silicone-based or lithium grease product rated for metal springs." },
              { task: "Cable inspection", detail: "Check for fraying, rust staining, or cable that has worked off its drum. Cables corrode at the bottom anchor point where they're closest to ground moisture." },
              { task: "Roller inspection", detail: "Steel rollers develop flat spots from heat cycling. Nylon rollers degrade over 3-5 years. Check for cracking and wobble." },
              { task: "Weather seal check", detail: "The bottom seal and side seals crack and compress in Houston heat. A compromised seal lets humidity (and pests) into the garage. Replacement costs $30-$80 in parts." },
              { task: "Track alignment", detail: "Houston heat warps tracks slightly over time. Check that the door moves smoothly through the full range without catching or grinding." },
              { task: "Door balance test", detail: "Disconnect the opener, lift the door halfway manually, let go. A properly balanced door stays in place. A door that falls is spring-under-tension: rebalance needed." },
            ].map(({ task, detail }) => (
              <div key={task} className="bg-white border border-cream rounded p-4">
                <p className="font-semibold text-ink text-sm mb-1">{task}</p>
                <p className="text-xs text-steel">{detail}</p>
              </div>
            ))}
          </div>

          <Callout variant="pro-tip">
            Use a silicone spray or white lithium grease on hinges, rollers, and the spring coil. Never use WD-40 on garage door springs. It's a solvent, not a lubricant, and it breaks down the coating on coated springs. WD-40 is for removing rust, not preventing it.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Best Materials for Houston Garage Doors</h2>
          <p className="text-steel leading-relaxed mb-4">
            <strong className="text-ink">Steel with polyurethane core:</strong> The best all-around choice for Houston. Steel doesn't rot, handles humidity well, and the insulated core reduces heat transfer. For maximum humidity resistance, look for galvanized or zinc-bonded hardware on the hinges and tracks.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            <strong className="text-ink">Composite wood-look:</strong> Steel skin with a wood-textured overlay. Gives the carriage-style aesthetic common in Heights, Memorial, and older Houston neighborhoods without the maintenance burden of real wood.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            <strong className="text-ink">Aluminum frame with glass:</strong> Popular in The Woodlands and newer construction. Aluminum doesn't corrode, and modern tempered glass panels handle Houston temperature swings well. Higher cost, but low maintenance.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            <strong className="text-ink">Real wood:</strong> Beautiful. High maintenance in Houston. Requires annual sealing, paint touch-ups, and monitoring for warping. Only recommended for homeowners who will commit to the maintenance schedule.
          </p>

          <p className="text-sm text-steel mt-8">
            Related: <Link href="/garage-door-repair" className="text-rust hover:underline">Garage Door Repair</Link> | <Link href="/garage-door-spring-repair" className="text-rust hover:underline">Spring Repair</Link> | <Link href="/garage-door-installation" className="text-rust hover:underline">New Installation</Link>
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Frequently Asked Questions</h2>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />
      <CTABanner heading="Ready to Protect Your Houston Garage Door?" subtext="Annual maintenance, galvanized spring upgrades, and weather-appropriate installs. Same-day service." />
    </>
  )
}
