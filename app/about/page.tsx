import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Shield, Clock, Zap, Users } from "lucide-react"
import { CTABanner } from "@/components/blocks/CTABanner"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About 713 Garage Door | Houston-Owned Garage Door Service",
  description:
    "713 Garage Door is a Houston-based garage door repair and installation company serving Greater Houston with same-day service and no after-hours surcharge.",
  alternates: { canonical: `${siteConfig.url}/about` },
}

export default function AboutPage() {
  const crumbs = buildBreadcrumbItems("/about")
  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">About 713 Garage Door</h1>
          <p className="text-mist text-lg max-w-2xl">
            Houston-based garage door repair and installation. Same-day service, no after-hours surcharge, honest pricing.
          </p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <h2 className="font-heading text-3xl text-ink mb-4">Who We Are</h2>
          <p className="text-steel leading-relaxed mb-4">
            713 Garage Door is a Houston-based garage door service company covering Greater Houston, Harris County, Fort Bend County, and Montgomery County. We do residential and commercial garage door repair, installation, spring replacement, opener service, and emergency calls.
          </p>
          <p className="text-steel leading-relaxed mb-4">
            The 713 area code is more than a business name. It's a commitment to serving the city. Houston is our market, and we built the business around Houston's specific needs: a humid climate that's hard on steel springs and wooden panels, a hurricane season that demands wind-rated hardware, and a sprawling metro that needs fast, reliable response across a wide coverage area.
          </p>

          <h2 className="font-heading text-3xl text-ink mb-4">What We Believe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Zap,
                title: "Transparent Pricing",
                desc: "Quote before work. No surprises. What we say it costs is what you pay. This is non-negotiable for us.",
              },
              {
                icon: Clock,
                title: "No After-Hours Surcharge",
                desc: "Same rate at 2am as at 2pm. A homeowner shouldn't pay extra for a midnight spring failure.",
              },
              {
                icon: Shield,
                title: "Quality Parts",
                desc: "We use parts that last. Galvanized springs for Houston's humidity. Sealed motors for the heat. We'd rather do the job right once.",
              },
              {
                icon: Users,
                title: "Local Knowledge",
                desc: "Heights bungalows, Memorial 3-car doors, Sugar Land HOA requirements, Woodlands premium installs. We know Houston's neighborhoods.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-cream rounded-lg p-5">
                <Icon className="w-5 h-5 text-rust mb-3" />
                <h3 className="font-semibold text-ink mb-2">{title}</h3>
                <p className="text-sm text-steel">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-3xl text-ink mb-4">How We Work</h2>
          <p className="text-steel leading-relaxed mb-4">
            Every job follows the same process. You call or submit a quote request. We respond quickly. A technician diagnoses the issue, gives you a firm quote, and if you approve, completes the work. Most jobs are done same day.
          </p>
          <p className="text-steel leading-relaxed mb-8">
            We don't do high-pressure sales. If you need a spring replacement, we replace the spring. If your whole door system needs work, we tell you that honestly and give you options. The decision is always yours.
          </p>

          <h2 className="font-heading text-3xl text-ink mb-4">Our Service Area</h2>
          <p className="text-steel leading-relaxed mb-4">
            We cover all of Greater Houston: the city proper plus Harris County, Fort Bend County, and Montgomery County. That includes <Link href="/service-area/the-heights" className="text-rust hover:underline">The Heights</Link>, <Link href="/service-area/memorial" className="text-rust hover:underline">Memorial</Link>, <Link href="/service-area/sugar-land" className="text-rust hover:underline">Sugar Land</Link>, <Link href="/service-area/katy" className="text-rust hover:underline">Katy</Link>, and <Link href="/service-area/the-woodlands" className="text-rust hover:underline">The Woodlands</Link>, plus dozens of surrounding communities.
          </p>

          <div className="bg-cream rounded-lg p-6 mt-8">
            <p className="text-sm font-semibold text-ink mb-2">Ready to work with us?</p>
            <p className="text-sm text-steel mb-4">Get a free quote or call directly. Same rate 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
              <Link href="/get-a-quote" className="btn-secondary w-fit">Get a Quote Online</Link>
            </div>
          </div>
        </div>
      </article>

      <CTABanner heading="Ready to Work with 713 Garage Door?" subtext="Same-day service across Greater Houston. Honest pricing. No surcharge." />
    </>
  )
}
