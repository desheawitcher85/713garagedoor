import type { Metadata } from "next"
import { Star } from "lucide-react"
import { CTABanner } from "@/components/blocks/CTABanner"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { reviews } from "@/lib/reviews"

export const metadata: Metadata = {
  title: "Reviews | 713 Garage Door Houston",
  description:
    "Read reviews from Houston homeowners who have used 713 Garage Door for garage door repair, spring replacement, and opener service.",
  alternates: { canonical: `${siteConfig.url}/reviews` },
}

export default function ReviewsPage() {
  const crumbs = buildBreadcrumbItems("/reviews")
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">What Houston Homeowners Say About Us</h1>
          <p className="text-mist text-lg max-w-2xl">
            We ask for honest feedback after every job. Positive or critical, we want reviews that accurately reflect the work.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-rust fill-rust" />
              ))}
            </div>
            <span className="text-white font-semibold">{avgRating} average</span>
            <span className="text-mist text-sm">· {reviews.length} reviews</span>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <div key={`${review.name}-${review.service}`} className="bg-white border border-cream rounded-lg p-6 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-rust fill-rust" : "text-cream fill-cream"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-steel leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="pt-2 border-t border-cream">
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-steel">{review.location} &middot; {review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Get on the Schedule?" subtext="Same-day service. Upfront pricing. No after-hours surcharge." />
    </>
  )
}
