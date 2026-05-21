import type { Metadata } from "next"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { QuoteForm } from "@/components/blocks/QuoteForm"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact 713 Garage Door | Houston Garage Door Service",
  description:
    "Contact 713 Garage Door for same-day garage door repair in Houston. Call, email, or fill out our quote form. 24/7 availability.",
  alternates: { canonical: `${siteConfig.url}/contact` },
}

export default function ContactPage() {
  const crumbs = buildBreadcrumbItems("/contact")
  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Contact Us</h1>
          <p className="text-mist text-lg">Reach us by phone, email, or the form below. Same-day response, 24/7.</p>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl text-ink mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-rust" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm mb-0.5">Phone</p>
                    <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold text-lg font-mono-label hover:text-rust-dark transition-colors">
                      {siteConfig.phone}
                    </a>
                    <p className="text-xs text-mist mt-1">Available 24/7. No after-hours surcharge.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-rust" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm mb-0.5">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-rust hover:underline">
                      {siteConfig.email}
                    </a>
                    <p className="text-xs text-mist mt-1">For non-urgent inquiries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-rust" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm mb-0.5">Hours</p>
                    <p className="text-steel text-sm">24 hours a day, 7 days a week</p>
                    <p className="text-xs text-mist mt-1">Same rate any hour.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-rust" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm mb-0.5">Service Area</p>
                    <p className="text-steel text-sm">Greater Houston Metro</p>
                    <p className="text-xs text-mist mt-1">Harris County, Fort Bend County, Montgomery County</p>
                    <p className="text-xs text-mist">No physical storefront. We come to you.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-lg p-4">
                <p className="text-sm font-semibold text-ink mb-1">Service Area Coverage</p>
                <p className="text-xs text-steel mb-2">We serve all of Greater Houston, including:</p>
                <div className="flex flex-wrap gap-1">
                  {["The Heights", "Memorial", "Sugar Land", "Katy", "The Woodlands", "River Oaks", "Pearland", "Cypress", "Spring", "Humble"].map((area) => (
                    <span key={area} className="text-xs bg-white border border-cream text-ink px-2 py-0.5 rounded">{area}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-rust/10 border border-rust/20 rounded-lg">
                <p className="text-sm font-semibold text-ink">Emergency? Call now.</p>
                <p className="text-xs text-steel mt-1 mb-3">Door stuck open, off-track, or crashed? Don't wait.</p>
                <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary text-sm">
                  <Phone className="w-4 h-4" /> Call {siteConfig.phone}
                </a>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
