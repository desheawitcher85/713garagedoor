import { Phone, ClipboardList, CheckCircle } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call or Submit",
    desc: "Call us directly at " + siteConfig.phone + " or fill out the quote form. Tell us what's happening and your location.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Same-Day Quote",
    desc: "A technician confirms the job and gives you a firm quote before any work starts. No pressure, no surprises.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Job Done Right",
    desc: "Most jobs are completed same day. We clean up, test everything twice, and don't leave until you're satisfied.",
  },
]

export function HowItWorksSteps() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2">How It Works</h2>
        <p className="text-steel mb-10 max-w-xl">Three steps from problem to fixed.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
<div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-rust rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono-label text-3xl font-bold text-cream">{step.number}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-ink">{step.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-10 flex gap-4">
          <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <Link href="/get-a-quote" className="btn-secondary">
            Get a Quote Online
          </Link>
        </div>
      </div>
    </section>
  )
}
