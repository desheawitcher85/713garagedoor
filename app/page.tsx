import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Droplets, Wind } from "lucide-react"
import { HeroBlock } from "@/components/blocks/HeroBlock"
import { ServiceGrid } from "@/components/blocks/ServiceGrid"
import { TrustBadges } from "@/components/blocks/TrustBadges"
import { HowItWorksSteps } from "@/components/blocks/HowItWorksSteps"
import { ServiceAreaMap } from "@/components/blocks/ServiceAreaMap"
import { ReviewCarousel } from "@/components/blocks/ReviewCarousel"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { QuoteForm } from "@/components/blocks/QuoteForm"
import { siteConfig } from "@/lib/site-config"
import { generalFaqs, houstonFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: `Houston Garage Door Repair | 24/7 Same-Day Service | ${siteConfig.name}`,
  description:
    "Fast, reliable garage door repair across Greater Houston. Same-day service, 24/7 emergency response, upfront pricing. No after-hours surcharge. Call 713-535-9301.",
  alternates: { canonical: siteConfig.url },
}

const homeFaqs = [...generalFaqs.slice(0, 5), ...houstonFaqs.slice(0, 3)]

export default function HomePage() {
  return (
    <>
      <HeroBlock
        h1="Houston Garage Door Repair, Installation & Service"
        subhead="Same-day service across Greater Houston. Broken springs, stuck doors, opener failures, new installs. Available 24/7 with no after-hours surcharge."
        bgDark
      />

      <ServiceGrid />
      <TrustBadges />
      <HowItWorksSteps />

      {/* Houston climate angle */}
      <section className="section-pad bg-ink text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
                Houston's Climate Is Hard on Garage Doors
              </h2>
              <p className="text-mist leading-relaxed mb-4">
                The Gulf's humidity accelerates spring corrosion, rots wooden panels, and strains opener motors. Houston doors need more attention than doors in dry climates, and more of them fail between June and September.
              </p>
              <p className="text-mist leading-relaxed mb-6">
                We built our maintenance schedules and material recommendations around Houston's specific climate. That means recommending steel doors with polyurethane cores for humidity resistance, high-cycle springs that outlast standard units in humid air, and sealed motor units that handle the heat.
              </p>
              <Link href="/resources/houston-humidity-garage-door-problems" className="text-rust hover:text-white font-semibold transition-colors">
                Read: Why Houston Humidity Damages Garage Doors &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Droplets, stat: "80%+", label: "Average Houston summer humidity" },
                { icon: Wind, stat: "130 mph", label: "Design wind speed for Harris County" },
                { icon: Phone, stat: "Same Day", label: "Service for most Greater Houston calls" },
                { icon: Phone, stat: "1 Year", label: "Standard parts and labor warranty" },
              ].map(({ icon: Icon, stat, label }) => (
                <div key={label} className="bg-steel/30 rounded-lg p-4">
                  <Icon className="w-6 h-6 text-rust mb-2" />
                  <p className="font-heading text-2xl text-white">{stat}</p>
                  <p className="text-xs text-mist">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaMap />

      {/* Recent jobs placeholder */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2">Recent Jobs in Houston</h2>
          <p className="text-steel mb-8 text-sm">A sample of work completed across the Houston metro.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                area: "The Heights",
                type: "Spring Replacement",
                desc: "Dual torsion spring replacement on a 1940s bungalow with a narrow single-car garage.",
                img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=320&fit=crop&q=80",
                alt: "Craftsman-style home with attached garage in Houston Heights",
              },
              {
                area: "Memorial",
                type: "Opener Upgrade",
                desc: "LiftMaster myQ smart opener installed on a 3-car garage. Remote access from the homeowner's phone.",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=320&fit=crop&q=80",
                alt: "Modern Houston home with three-car garage",
              },
              {
                area: "Sugar Land",
                type: "Full Door Replacement",
                desc: "Builder-grade door replaced with insulated steel. HOA-compliant carriage style.",
                img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=320&fit=crop&q=80",
                alt: "Suburban Houston home with new carriage-style garage door",
              },
            ].map((job) => (
              <div key={job.area} className="bg-paper border border-cream rounded-lg overflow-hidden">
                <div className="relative h-40">
                  <Image src={job.img} alt={job.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-rust font-semibold uppercase tracking-wide mb-1">{job.area}</p>
                  <h3 className="font-semibold text-ink mb-1">{job.type}</h3>
                  <p className="text-xs text-steel leading-relaxed">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewCarousel />

      {/* Quote form section */}
      <section className="section-pad bg-paper" id="quote-form">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-ink mb-4">
                Get a Free Quote Today
              </h2>
              <p className="text-steel mb-6">
                Fill out the form and we'll call you back within 30 minutes during business hours. For immediate help, call us directly.
              </p>
              <div className="space-y-4">
                {[
                  "No pressure. Firm quote before any work starts.",
                  "Same-day scheduling for most Houston locations.",
                  "No after-hours surcharge, ever.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rust text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">&#10003;</span>
                    <p className="text-sm text-steel">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <FAQBlock faqs={homeFaqs} />
      <CTABanner
        heading="Need Garage Door Service in Houston?"
        subtext="Call now for same-day service or get a free quote online. No after-hours surcharge."
        variant="dark"
      />
    </>
  )
}
