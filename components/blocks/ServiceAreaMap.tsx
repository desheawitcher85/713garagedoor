import Link from "next/link"
import { neighborhoods } from "@/lib/neighborhoods"
import { MapPin } from "lucide-react"

export function ServiceAreaMap() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2">Our Service Area</h2>
        <p className="text-steel mb-8 max-w-2xl">
          We cover all of Greater Houston: Harris County, Fort Bend County, and Montgomery County. Same-day availability in all areas below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/service-area/${n.slug}`}
              className="flex items-start gap-3 bg-white border border-cream rounded-lg p-4 hover:border-rust hover:shadow-sm transition-all group"
            >
              <MapPin className="w-5 h-5 text-rust flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-ink group-hover:text-rust transition-colors">{n.name}</h3>
                <p className="text-xs text-mist mt-0.5">{n.zip.join(", ")}</p>
                <p className="text-xs text-steel mt-1 line-clamp-2">{n.homeStyle}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-steel">
          Also serving:{" "}
          <span className="text-ink">
            River Oaks, West University, Bellaire, Cypress, Pearland, Spring, Tomball, Humble, Kingwood, and Friendswood
          </span>
        </p>
        <div className="mt-4">
          <Link href="/service-area" className="text-rust font-semibold hover:underline text-sm">
            View full service area map &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
