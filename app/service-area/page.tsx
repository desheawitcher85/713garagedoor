import type { Metadata } from "next"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { neighborhoods, adjacentAreas } from "@/lib/neighborhoods"
import { houstonFaqs, generalFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Service Area | Houston Garage Door Repair Coverage Map",
  description:
    "713 Garage Door serves all of Greater Houston: Harris, Fort Bend, and Montgomery counties. See our full service area for same-day garage door repair.",
  alternates: { canonical: `${siteConfig.url}/service-area` },
}

const areaFaqs = [
  ...houstonFaqs.slice(0, 3),
  ...generalFaqs.slice(6, 9),
]

export default function ServiceAreaPage() {
  const crumbs = buildBreadcrumbItems("/service-area")
  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Our Houston Service Area</h1>
            <p className="text-mist text-lg">
              We serve all of Greater Houston: Harris County, Fort Bend County, and Montgomery County. Same-day service availability across all areas listed below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-site">
          <h2 className="font-heading text-3xl text-ink mb-4">Primary Service Areas</h2>
          <p className="text-steel mb-8">These five areas have dedicated service pages with neighborhood-specific pricing, common issues, and local landmarks. Click any area for details.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/service-area/${n.slug}`}
                className="bg-white border border-cream rounded-lg p-6 hover:border-rust hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-rust flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-xl text-ink group-hover:text-rust transition-colors">{n.name}</h3>
                    <p className="text-xs text-mist">{n.zip.join(", ")}</p>
                  </div>
                </div>
                <p className="text-sm text-steel leading-relaxed mb-3">{n.homeStyle}</p>
                <p className="text-xs text-rust font-semibold">Service in {n.name} &rarr;</p>
              </Link>
            ))}
          </div>

          <h2 className="font-heading text-3xl text-ink mb-4">Other Areas We Serve</h2>
          <p className="text-steel mb-6 text-sm">
            Our coverage extends to all of Harris, Fort Bend, and Montgomery counties. These communities receive the same same-day service as our primary areas. They just don't have dedicated neighborhood pages yet.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {adjacentAreas.map((area) => (
              <span key={area} className="bg-cream text-ink text-sm font-medium px-3 py-1.5 rounded">
                {area}
              </span>
            ))}
          </div>

          <div className="bg-white border border-cream rounded-lg p-6 mb-8">
            <h3 className="font-heading text-xl text-ink mb-3">County Coverage</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.serviceArea.counties.map((county) => (
                <div key={county} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rust flex-shrink-0" />
                  <span className="text-sm font-semibold text-ink">{county}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-steel">
            Don't see your neighborhood or ZIP code listed? Call us at{" "}
            <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a>
            {" "}Chances are we cover it.
          </p>
        </div>
      </section>

      <FAQBlock faqs={areaFaqs} heading="Service Area Questions" />
      <CTABanner heading="Ready for Same-Day Service in Houston?" subtext="Call now or get a free quote online. Serving all of Greater Houston." />
    </>
  )
}
