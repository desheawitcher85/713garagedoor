import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Phone, Clock, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Quote Request Received | 713 Garage Door Houston",
  description: "Your quote request has been received. We will call you back within 30 minutes during business hours.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <section className="section-pad bg-paper min-h-[70vh] flex items-center">
      <div className="container-site max-w-xl">

        <div className="bg-white border border-cream rounded-xl p-8 md:p-12 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-rust/10 flex items-center justify-center">
              <CheckCircle className="w-9 h-9 text-rust" />
            </div>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-ink mb-3">
            We Got Your Request
          </h1>
          <p className="text-steel leading-relaxed mb-8">
            Someone from our team will call you back within 30 minutes during business hours. If your situation is urgent, call us directly right now.
          </p>

          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="btn-primary w-full justify-center mb-4"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phone}
          </a>

          <div className="flex items-center justify-center gap-2 text-sm text-mist mb-8">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>Available 24/7. No after-hours surcharge.</span>
          </div>

          <div className="border-t border-cream pt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="text-sm font-semibold text-steel hover:text-ink transition-colors flex items-center gap-1">
              Back to home
            </Link>
            <span className="hidden sm:block text-cream">|</span>
            <Link href="/resources" className="text-sm font-semibold text-rust hover:text-rust-dark transition-colors flex items-center gap-1">
              Read our garage door guides <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
