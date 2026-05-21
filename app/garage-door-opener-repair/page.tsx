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
import { openerFaqs, generalFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Opener Repair Houston | LiftMaster, Chamberlain, Genie",
  description:
    "Opener not working? We service all major brands across Houston. Smart opener installs, motor replacement, remote programming. Same-day service.",
  alternates: { canonical: `${siteConfig.url}/garage-door-opener-repair` },
}

const pageFaqs = [...openerFaqs, ...generalFaqs.slice(0, 3)]

const repairVsReplaceRows = [
  { factor: "Opener age", option1: "Under 10 years: repair first", option2: "Over 12 years: replacement often makes sense" },
  { factor: "Problem type", option1: "Single component: gear, circuit board, sensor", option2: "Multiple components failing, or motor seized" },
  { factor: "Noise level", option1: "Sudden new noise: usually fixable", option2: "Loud, grinding for years: likely worn out" },
  { factor: "Smart features", option1: "myQ-compatible models can get retrofit kits", option2: "Older models can't integrate with smart home" },
  { factor: "Cost comparison", option1: "Repairs typically $125-$350", option2: "New opener installed: $450-$800" },
  { factor: "Warranty", option1: "1-year parts and labor on the repair", option2: "New unit warranty: 1-5 years by brand" },
]

export default function OpenerRepairPage() {
  const crumbs = buildBreadcrumbItems("/garage-door-opener-repair")
  return (
    <>
      <ServiceSchema serviceType="Garage Door Opener Repair" description="Service for LiftMaster, Chamberlain, Genie, Linear, Sommer, and more. Motors, gears, remotes, smart openers." />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <HeroBlock
        h1="Garage Door Opener Repair in Houston, TX"
        subhead="LiftMaster, Chamberlain, Genie, and all major brands serviced same day. Motor replacement, gear strip repair, smart opener install, remote programming."
        bgDark
      />

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Opener repairs in Houston typically run $125-$350. The most common issue is a stripped gear, a $150-$200 fix on most LiftMaster and Chamberlain models. If the motor runs but the door doesn't move, check the spring first (that's a different job). Call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a> for same-day service.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Opener Problems We Fix in Houston</h2>
          <p className="text-steel leading-relaxed mb-4">
            Opener failures come in a few flavors. The most common is a stripped nylon drive gear, the plastic gear that engages the drive rail. It's a factory design choice that keeps the opener from damaging itself under load, which means it wears out first.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Motor runs but door doesn't move (stripped gear or broken spring)",
              "Opener doesn't respond to remote or keypad",
              "Grinding, clicking, or squealing during operation",
              "Door reverses immediately after touching the floor (limit switch off)",
              "Safety sensor light blinking: misaligned or dirty sensors",
              "Opener works from wall button but not remote (receiver issue)",
              "Smart features not connecting (myQ app, Wi-Fi module)",
              "Remote only works within 5 feet of the opener (antenna issue)",
              "Opener trips the circuit breaker (wiring or capacitor issue)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="pro-tip">
            Before calling for an opener repair, check two things: (1) Is the opener unplugged or tripped at the outlet? (2) Try a new battery in the remote. These two issues cause 30% of opener "failures." If neither fixes it, the problem is inside the unit.
          </Callout>

          <DefinitionBox
            term="Smart opener"
            definition="A garage door opener with Wi-Fi connectivity that lets you monitor and control your door from a smartphone app. LiftMaster's myQ and Chamberlain's myQ platform are the most common. These allow remote open/close, real-time status alerts, and integration with smart home systems like Google Home and Amazon Alexa."
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Brands We Service</h2>
          <p className="text-steel leading-relaxed mb-4">
            We carry replacement parts for the most common brands on every truck. No waiting on parts orders for standard repairs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {[
              "LiftMaster (owned by Chamberlain Group)",
              "Chamberlain",
              "Genie",
              "Linear",
              "Sommer",
              "Craftsman",
              "Wayne Dalton",
              "Overhead Door",
              "Ryobi",
            ].map((brand) => (
              <div key={brand} className="bg-cream rounded px-3 py-2 text-xs text-ink font-semibold">
                {brand}
              </div>
            ))}
          </div>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">How Houston Heat and Humidity Affect Openers</h2>
          <p className="text-steel leading-relaxed mb-4">
            Houston's summer temperatures, regularly above 95 degrees in the garage, put extra strain on opener motors. Heat degrades capacitors and circuit boards faster than in cooler climates. Humidity seeps into non-sealed motor housings and causes corrosion on contact points.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            The openers that hold up best in Houston are LiftMaster and Chamberlain models with jackshaft or enclosed motor designs that seal the motor from ambient air. Belt-drive units also run cooler than chain-drive models. If you're replacing an old chain-drive opener, a belt-drive or jackshaft unit is worth the $50-$100 upcharge in Houston's climate.
          </p>

          <Callout variant="houston-example">
            We see a lot of chain-drive openers from the late 2000s failing around the 12-year mark in Houston homes. The combination of heat cycles and humidity has degraded the drive chain and the nylon gear. In most cases, the customer gets a new belt-drive LiftMaster with myQ for roughly $600 installed: quieter, smarter, and built for another 15 years.
          </Callout>

          <ComparisonTable
            heading="Repair vs. Replace: How to Decide"
            col1Label="Repair It"
            col2Label="Replace It"
            rows={repairVsReplaceRows}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Service Areas for Opener Repair</h2>
          <p className="text-steel leading-relaxed mb-4">
            Same-day opener repair and installation across Greater Houston. We serve <Link href="/service-area/the-heights" className="text-rust hover:underline">The Heights</Link>, <Link href="/service-area/memorial" className="text-rust hover:underline">Memorial</Link>, <Link href="/service-area/sugar-land" className="text-rust hover:underline">Sugar Land</Link>, <Link href="/service-area/katy" className="text-rust hover:underline">Katy</Link>, <Link href="/service-area/the-woodlands" className="text-rust hover:underline">The Woodlands</Link>, and all surrounding communities.
          </p>

          <p className="text-sm text-steel mt-6">
            Related: <Link href="/garage-door-repair" className="text-rust hover:underline">General Repair</Link> | <Link href="/emergency-garage-door-service" className="text-rust hover:underline">24/7 Emergency</Link> | <Link href="/resources/how-long-do-garage-door-openers-last" className="text-rust hover:underline">How Long Do Openers Last?</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Opener Not Working?</h2>
              <p className="text-steel mb-6">Same-day repair or replacement. All major brands. Smart opener installs available.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Opener Issue in Houston?" subtext="Same-day service for all major brands. Smart opener installs. No after-hours surcharge." />
    </>
  )
}
