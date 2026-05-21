import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle } from "lucide-react"
import { HeroBlock } from "@/components/blocks/HeroBlock"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { QuoteForm } from "@/components/blocks/QuoteForm"
import { Callout } from "@/components/blocks/Callout"
import { ComparisonTable } from "@/components/blocks/ComparisonTable"
import { ServiceSchema } from "@/components/schema/ServiceSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { emergencyFaqs, generalFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Emergency Garage Door Repair Houston | 24/7 Same-Hour Service",
  description:
    "Garage door stuck open or won't close? 24/7 emergency response across Houston. Most calls answered same hour. No after-hours surcharge.",
  alternates: { canonical: `${siteConfig.url}/emergency-garage-door-service` },
}

const pageFaqs = [...emergencyFaqs, ...generalFaqs.slice(0, 3)]

const emergencyVsScheduledRows = [
  { factor: "Security risk", option1: "High: home unsecured", option2: "Low: door operating normally" },
  { factor: "Response time", option1: "Same hour for most Houston locations", option2: "Same day or next available" },
  { factor: "Cost", option1: "$145-$650, same rate as daytime service", option2: "$95-$450 for standard repairs" },
  { factor: "When to call", option1: "Door stuck open, crashed, off track, won't close", option2: "Noise, slow operation, intermittent issues" },
  { factor: "After-hours charge", option1: "None, ever", option2: "Not applicable" },
]

export default function EmergencyPage() {
  const crumbs = buildBreadcrumbItems("/emergency-garage-door-service")
  return (
    <>
      <ServiceSchema serviceType="Emergency Garage Door Service" description="24/7 response across Houston. Stuck doors, broken cables, security issues. Most calls answered same hour." />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      {/* Bold emergency hero */}
      <section className="bg-alert text-white section-pad">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="font-mono-label text-sm font-bold uppercase tracking-widest mb-3 text-white/80">24/7 Emergency Service</p>
            <h1 className="font-heading text-4xl md:text-6xl text-white leading-tight mb-4">
              24/7 Emergency Garage Door Service in Houston, TX
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Door stuck open? Won't close? Off track? We respond same hour across Greater Houston. No after-hours surcharge, ever.
            </p>
            <a href={`tel:${siteConfig.phoneE164}`} className="inline-flex items-center gap-2 bg-white text-alert font-bold text-lg uppercase tracking-wide px-8 py-4 rounded min-h-[56px] hover:bg-white/90 transition-colors">
              <Phone className="w-5 h-5" /> Call {siteConfig.phone} Now
            </a>
          </div>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              For a true garage door emergency (door stuck open, crashed down, or won't close), call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a> right now. We respond same hour across Houston with no after-hours surcharge. Most emergency calls are under $350.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What Counts as a Garage Door Emergency?</h2>
          <p className="text-steel leading-relaxed mb-4">
            An emergency is anything that leaves your home or business unsecured or physically dangerous. These situations need same-hour response. Don't wait until morning.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Door stuck in the open position: home is unsecured",
              "Door crashed down and won't open: car trapped or threshold blocked",
              "Cable snapped: door hanging at an angle under spring tension",
              "Door came off track during a storm or vehicle impact",
              "Spring broke overnight: door won't open before work",
              "Opener failed with car trapped inside the garage",
              "Break-in attempt damaged the door mechanism",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-alert flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="heads-up">
            If your door is stuck open and you cannot wait for a tech, you can manually lock the door tracks by placing a locking clamp or C-clamp on the track below the lowest roller. This won't fix the door but prevents someone from lifting it from outside while you wait. Call us immediately.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Greater Houston Same-Hour Response Coverage</h2>
          <p className="text-steel leading-relaxed mb-4">
            We maintain response coverage across all of Greater Houston for emergency calls. Here's what to expect by area:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Inside Loop 610: typically 1-2 hours any hour of the day",
              "The Heights, Memorial, River Oaks: 1-2 hours",
              "Sugar Land and Fort Bend County: 1.5-3 hours",
              "Katy and West Houston: 1.5-3 hours",
              "The Woodlands and Montgomery County: 2-3 hours",
              "Humble, Kingwood, Spring: 2-3 hours",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <span className="text-rust font-bold flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-steel">
            Response times are estimates. Call us for a real-time ETA for your location. Emergency lines: <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a>
          </p>

          <ComparisonTable
            heading="Emergency vs. Scheduled Service: What's the Difference?"
            col1Label="Emergency Call"
            col2Label="Scheduled Service"
            rows={emergencyVsScheduledRows}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What to Do While You Wait</h2>
          <p className="text-steel leading-relaxed mb-4">
            A few things to do between the call and the tech's arrival:
          </p>
          <ol className="space-y-3 mb-6">
            {[
              "Don't keep operating the opener. You can damage the motor if the spring is broken.",
              "Pull the red release cord to disconnect the opener if you need to manually move the door.",
              "If the door is stuck open: bring valuables inside the garage into the house.",
              "If the door is stuck closed with your car inside: pull the release cord and lift manually. If it's too heavy, the spring is broken. Call us first.",
              "Keep kids and pets away from the door. An off-track or broken-cable door can fall unexpectedly.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-steel">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rust text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>

          <Callout variant="reality-check">
            There's no after-hours rate hike here. We made that decision when we launched. A homeowner shouldn't have to choose between paying an emergency premium and leaving their house unsecured overnight. The rate is the same regardless of when you call.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Emergency Service Areas in Houston</h2>
          <p className="text-steel leading-relaxed mb-4">
            Emergency response covers all five primary service areas: <Link href="/service-area/the-heights" className="text-rust hover:underline">The Heights</Link>, <Link href="/service-area/memorial" className="text-rust hover:underline">Memorial</Link>, <Link href="/service-area/sugar-land" className="text-rust hover:underline">Sugar Land</Link>, <Link href="/service-area/katy" className="text-rust hover:underline">Katy</Link>, <Link href="/service-area/the-woodlands" className="text-rust hover:underline">The Woodlands</Link>, plus all surrounding Greater Houston communities.
          </p>

          <p className="text-sm text-steel">
            Related: <Link href="/garage-door-repair" className="text-rust hover:underline">General Repair</Link> | <Link href="/garage-door-spring-repair" className="text-rust hover:underline">Spring Repair</Link> | <Link href="/resources/garage-door-wont-open-troubleshooting" className="text-rust hover:underline">Troubleshooting</Link>
          </p>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />

      <section className="bg-alert section-pad">
        <div className="container-site text-center">
          <h2 className="font-heading text-4xl text-white mb-4">Garage Door Emergency in Houston?</h2>
          <p className="text-white/80 mb-8 text-lg">Call now. Same-hour response. No surcharge.</p>
          <a href={`tel:${siteConfig.phoneE164}`} className="inline-flex items-center gap-2 bg-white text-alert font-bold text-xl uppercase tracking-wide px-10 py-5 rounded min-h-[64px]">
            <Phone className="w-6 h-6" /> {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  )
}
