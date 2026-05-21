import type { Metadata } from "next"
import { Phone, Clock, CheckCircle, Shield } from "lucide-react"
import { QuoteForm } from "@/components/blocks/QuoteForm"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Get a Free Garage Door Quote in Houston | 713 Garage Door",
  description:
    "Get a free garage door repair or installation quote in Houston. Response within 30 minutes during business hours. No pressure, no obligation.",
  alternates: { canonical: `${siteConfig.url}/get-a-quote` },
}

const whatHappensNext = [
  { step: "1", title: "We Call You Back", desc: "Within 30 minutes during normal hours, or first thing in the morning if you submit at night." },
  { step: "2", title: "We Ask a Few Questions", desc: "Door size, what's happening, how urgent. Helps us give you an accurate quote and make sure we have the right parts." },
  { step: "3", title: "You Get a Firm Quote", desc: "No vague ranges. A real number for the job before any tech rolls out." },
  { step: "4", title: "We Schedule the Work", desc: "Same-day, next day, or whenever works for you. Most jobs are done the same week you call." },
]

export default function GetAQuotePage() {
  const crumbs = buildBreadcrumbItems("/get-a-quote")
  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
              Get a Free Garage Door Quote in Houston
            </h1>
            <p className="text-mist text-lg">
              Fill out the form below and we'll call you back within 30 minutes during business hours. No pressure. No obligation. Firm price before any work starts.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl text-ink mb-6">Why Get a Quote from Us?</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: CheckCircle, text: "No pressure. We quote, you decide. No obligation to book." },
                  { icon: Clock, text: "Call-back within 30 minutes during business hours." },
                  { icon: Shield, text: "Firm price before any work starts. No surprises." },
                  { icon: Phone, text: "Same rate 24/7. No after-hours surcharge." },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-rust flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-steel">{text}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl text-ink mb-4">What Happens Next</h3>
              <div className="space-y-4">
                {whatHappensNext.map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rust text-white font-bold text-sm flex items-center justify-center">
                      {step}
                    </span>
                    <div>
                      <p className="font-semibold text-ink text-sm">{title}</p>
                      <p className="text-xs text-steel mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-cream rounded-lg">
                <p className="text-sm font-semibold text-ink mb-1">Need service right now?</p>
                <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold text-lg font-mono-label hover:text-rust-dark flex items-center gap-2">
                  <Phone className="w-5 h-5" /> {siteConfig.phone}
                </a>
                <p className="text-xs text-mist mt-1">Available 24/7. No after-hours surcharge.</p>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
