import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CTABanner } from "@/components/blocks/CTABanner"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Garage Door Resources | 713 Garage Door Houston",
  description:
    "Practical guides for Houston homeowners. Spring costs, troubleshooting, lifespan questions, and Houston-specific humidity advice.",
  alternates: { canonical: `${siteConfig.url}/resources` },
}

const posts = [
  {
    slug: "garage-door-spring-replacement-cost-houston",
    title: "Garage Door Spring Replacement Cost in Houston (2026 Guide)",
    excerpt: "Specific Houston price ranges for torsion and extension spring replacement, plus what drives the cost up or down.",
    category: "Cost",
    readTime: "6 min",
  },
  {
    slug: "signs-your-garage-door-spring-is-broken",
    title: "7 Signs Your Garage Door Spring Is Broken",
    excerpt: "How to recognize a broken spring before it leaves you stranded. What to do, and what not to do, when you suspect a break.",
    category: "Diagnosis",
    readTime: "5 min",
  },
  {
    slug: "garage-door-wont-open-troubleshooting",
    title: "Garage Door Won't Open: 10-Step Troubleshooting Guide",
    excerpt: "Walk through 10 diagnostics in order, from the easiest fixes to the ones that need a professional.",
    category: "Troubleshooting",
    readTime: "8 min",
  },
  {
    slug: "how-long-do-garage-door-openers-last",
    title: "How Long Do Garage Door Openers Last?",
    excerpt: "Average opener lifespan, factors that shorten it in Houston, and the 5 signs it's time to replace rather than repair.",
    category: "Lifespan",
    readTime: "5 min",
  },
  {
    slug: "houston-humidity-garage-door-problems",
    title: "Why Houston Humidity Wrecks Garage Doors (And How to Fight Back)",
    excerpt: "How Gulf humidity damages springs, panels, openers, and cables, and the maintenance habits that extend door life in Houston.",
    category: "Houston-Specific",
    readTime: "7 min",
  },
]

export default function ResourcesPage() {
  const crumbs = buildBreadcrumbItems("/resources")
  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Garage Door Resources for Houston Homeowners</h1>
          <p className="text-mist text-lg max-w-2xl">
            Practical guides written for Houston's climate and neighborhoods. No filler, no national averages that don't apply here.
          </p>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="bg-white border border-cream rounded-lg p-6 hover:border-rust hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-rust/10 text-rust text-xs font-semibold px-2 py-0.5 rounded">{post.category}</span>
                  <span className="text-xs text-mist">{post.readTime} read</span>
                </div>
                <h2 className="font-heading text-xl text-ink mb-3 group-hover:text-rust transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-steel leading-relaxed mb-4">{post.excerpt}</p>
                <span className="flex items-center gap-1 text-xs font-semibold text-rust group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Questions Not Answered Here?" subtext="Call us directly. Honest answers with no pressure to book." ctaText="Get a Free Quote" ctaHref="/get-a-quote" />
    </>
  )
}
