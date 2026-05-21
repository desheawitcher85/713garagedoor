import type { Metadata } from "next"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { siteConfig } from "@/lib/site-config"
import {
  generalFaqs,
  repairFaqs,
  springFaqs,
  openerFaqs,
  installationFaqs,
  commercialFaqs,
  emergencyFaqs,
  houstonFaqs,
  costFaqs,
} from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door FAQs | 713 Garage Door Houston",
  description:
    "Answers to the most common garage door questions from Houston homeowners. Springs, openers, cost, emergencies, and Houston-specific climate issues.",
  alternates: { canonical: `${siteConfig.url}/faq` },
}

const allFaqs = [
  ...generalFaqs,
  ...repairFaqs,
  ...springFaqs,
  ...openerFaqs,
  ...installationFaqs,
  ...emergencyFaqs,
  ...houstonFaqs,
  ...costFaqs,
]

export default function FAQPage() {
  const crumbs = buildBreadcrumbItems("/faq")
  const categories = [
    { label: "General", faqs: generalFaqs },
    { label: "Repair", faqs: repairFaqs },
    { label: "Springs", faqs: springFaqs },
    { label: "Openers", faqs: openerFaqs },
    { label: "Installation", faqs: installationFaqs },
    { label: "Emergency Service", faqs: emergencyFaqs },
    { label: "Houston-Specific", faqs: houstonFaqs },
    { label: "Cost & Pricing", faqs: costFaqs },
  ]

  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={allFaqs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
            Frequently Asked Garage Door Questions
          </h1>
          <p className="text-mist text-lg max-w-2xl">
            Direct answers to the questions Houston homeowners ask most. No fluff, no upsell.
          </p>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="space-y-12">
            {categories.map(({ label, faqs }) => (
              <div key={label}>
                <h2 className="font-heading text-2xl text-ink mb-6 pb-2 border-b border-cream">{label}</h2>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-cream rounded-lg p-5">
                      <h3 className="font-semibold text-ink mb-2">{faq.question}</h3>
                      <p className="text-sm text-steel leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still Have Questions?"
        subtext="Call us directly. We answer every question honestly and with no pressure to book."
        ctaText="Get a Free Quote"
        ctaHref="/get-a-quote"
      />
    </>
  )
}
