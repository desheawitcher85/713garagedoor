import { Star } from "lucide-react"
import Link from "next/link"
import { reviews } from "@/lib/reviews"

const featured = reviews.slice(0, 6)

export function ReviewCarousel() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2">What Houston Homeowners Say</h2>
        <p className="text-steel mb-8 text-sm max-w-xl">
          Real feedback from customers across Greater Houston: spring repairs, opener installs, emergency calls, and full replacements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {featured.map((review) => (
            <div key={`${review.name}-${review.service}`} className="bg-paper border border-cream rounded-lg p-5 flex flex-col gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-rust fill-rust" : "text-cream fill-cream"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-steel leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-ink">{review.name}</p>
                <p className="text-xs text-steel">{review.location} &middot; {review.service}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/reviews" className="text-sm font-semibold text-rust hover:text-rust-dark transition-colors">
          Read all {reviews.length} reviews &rarr;
        </Link>
      </div>
    </section>
  )
}
