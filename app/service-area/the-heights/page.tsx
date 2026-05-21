import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { QuoteForm } from "@/components/blocks/QuoteForm"
import { Callout } from "@/components/blocks/Callout"
import { ServiceGrid } from "@/components/blocks/ServiceGrid"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema"
import { siteConfig } from "@/lib/site-config"
import { generalFaqs, houstonFaqs, repairFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Repair The Heights Houston | Same-Day Service",
  description:
    "Same-day garage door repair in The Heights and 77008. Historic homes, modern installs, carriage-style specialty work. Call 713-535-9301.",
  alternates: { canonical: `${siteConfig.url}/service-area/the-heights` },
}

const pageFaqs = [
  ...generalFaqs.slice(0, 4),
  ...houstonFaqs.slice(0, 2),
  {
    question: "Do you work on older single-car garages in The Heights?",
    answer: "Yes. Heights garages are some of the most varied work we do: narrow openings, custom-sized doors, original hardware from the 1940s-1960s that needs specialty matching. We bring the right parts for older Heights homes.",
  },
  {
    question: "Can you replace a wooden carriage-style door in The Heights without losing the historic look?",
    answer: "Yes. We install composite and steel carriage-style doors that match the aesthetic of original wooden doors without the maintenance burden. HOA and historic district guidelines can usually be met with current door options.",
  },
]

export default function TheHeightsPage() {
  const crumbs = buildBreadcrumbItems("/service-area/the-heights")
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-rust" />
            <span className="text-mist text-sm">Houston Heights | 77007 | 77008 | 77018</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
            Garage Door Repair in The Heights, Houston
          </h1>
          <p className="text-mist text-lg max-w-2xl">
            Same-day garage door repair for Houston Heights homes. Historic bungalows, Victorian-era garages, carriage-style doors, modern infill. We've worked on them all.
          </p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Same-day garage door service throughout The Heights and surrounding ZIP codes 77007, 77008, and 77018. Most calls inside Loop 610 are reached within 2 hours. Spring repair, opener repair, off-track doors, and full installations available. Call <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a>.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Common Garage Door Problems in The Heights</h2>
          <p className="text-steel leading-relaxed mb-4">
            The Heights is one of Houston's most architecturally varied neighborhoods. Homes range from 1910s bungalows to 1950s brick ranches to 2020s modern infill. Each era brings its own garage door challenges.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Original single-car garages with narrow 8-foot openings: replacement doors require custom or non-standard sizing",
              "Wooden carriage-style doors damaged by Gulf humidity: warping, rot, and sticking",
              "Older hardware incompatible with modern openers: requires adapter work",
              "Carriage-style door springs that require different tensioning than standard doors",
              "New construction homes with builder-grade openers not up to the frequency of daily use",
              "Historic district homes needing replacement doors that maintain the original aesthetic",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-steel">
                <CheckCircle className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <Callout variant="houston-example">
            A 1940s bungalow on Oxford Street had an original single-car garage with a 9x7 opening and wooden door panels that had warped after 30+ Houston summers. We replaced the wood panels with composite wood-look steel, installed galvanized springs to handle the humidity, and added a belt-drive LiftMaster opener. The door now looks period-correct from the street and works reliably.
          </Callout>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">We Service Homes Near These Heights Landmarks</h2>
          <p className="text-steel leading-relaxed mb-4">
            We work throughout Houston Heights and nearby, from the 19th Street shopping district and White Oak Music Hall area down to the Heights Mercantile and Donovan Park neighborhoods. If you're in Houston Heights, we're nearby.
          </p>
          <ul className="space-y-1 mb-6">
            {["19th Street shopping district", "White Oak Music Hall", "Donovan Park", "Heights Mercantile", "Heights Boulevard Historic District"].map((landmark) => (
              <li key={landmark} className="flex items-center gap-2 text-sm text-steel">
                <MapPin className="w-3 h-3 text-rust flex-shrink-0" />
                {landmark}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Why Heights Homeowners Choose 713 Garage Door</h2>
          <p className="text-steel leading-relaxed mb-4">
            The Heights has some of the most interesting and challenging garage door work in Houston. We've been doing it for {siteConfig.yearsInBusiness} years. That means we show up with the right parts: non-standard spring sizes, composite panel options, and opener models that fit tight attic spaces above narrow garages.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Same-Day Response", desc: "Most Heights calls reached within 2 hours." },
              { title: "Specialty Hardware", desc: "We stock non-standard parts for older Heights homes." },
              { title: "No After-Hours Surcharge", desc: "Same rate at midnight as at noon." },
              { title: "1-Year Warranty", desc: "All parts and labor. Premium springs are lifetime." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border border-cream rounded p-3">
                <p className="font-semibold text-ink text-sm">{title}</p>
                <p className="text-xs text-steel mt-0.5">{desc}</p>
              </div>
            ))}
          </div>

          <div className="my-6 p-4 bg-cream rounded-lg">
            <p className="font-heading text-lg text-ink mb-2">Recent Jobs Near The Heights</p>
            <div className="space-y-3">
              {[
                { type: "Spring Replacement", note: "Dual torsion spring on 1950s brick ranch, 77008" },
                { type: "Opener Install", note: "LiftMaster myQ belt-drive on modern infill home, 77007" },
              ].map((job) => (
                <div key={job.type} className="text-xs text-steel">
                  <strong className="text-ink">{job.type}:</strong> {job.note}
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Adjacent Neighborhoods We Also Serve</h2>
          <p className="text-steel mb-4 text-sm">
            Service extends to neighboring areas from The Heights base:
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "Memorial", href: "/service-area/memorial" },
              { name: "Sugar Land", href: "/service-area/sugar-land" },
              { name: "Katy", href: "/service-area/katy" },
              { name: "The Woodlands", href: "/service-area/the-woodlands" },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="bg-cream text-ink text-xs font-semibold px-3 py-1.5 rounded hover:bg-rust hover:text-white transition-colors">
                {name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-steel">Also serving: River Oaks, Montrose, Midtown, Garden Oaks, Oak Forest, Spring Branch.</p>

          <p className="text-sm text-steel mt-8">
            Services available in The Heights: <Link href="/garage-door-repair" className="text-rust hover:underline">Repair</Link> | <Link href="/garage-door-spring-repair" className="text-rust hover:underline">Springs</Link> | <Link href="/garage-door-opener-repair" className="text-rust hover:underline">Opener Repair</Link> | <Link href="/garage-door-installation" className="text-rust hover:underline">Installation</Link> | <Link href="/emergency-garage-door-service" className="text-rust hover:underline">Emergency</Link> | <Link href="/commercial-garage-doors" className="text-rust hover:underline">Commercial</Link>
          </p>
        </div>
      </article>

      <ServiceGrid />
      <FAQBlock faqs={pageFaqs} />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <QuoteForm />
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl text-ink mb-4">Garage Door Service in The Heights</h2>
              <p className="text-steel mb-6">Same-day service. No surcharge. Historic home specialists.</p>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary w-fit">
                <Phone className="w-4 h-4" /> Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Garage Door Problem in The Heights?" subtext="Same-day service. No after-hours surcharge. Specialty work on historic Heights homes." />
    </>
  )
}
