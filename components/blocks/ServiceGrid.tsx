import Link from "next/link"
import { Wrench, Package, AlertTriangle, Settings, Warehouse, Phone, ArrowRight } from "lucide-react"
import { services } from "@/lib/services"

const iconMap: Record<string, React.ElementType> = {
  wrench: Wrench,
  package: Package,
  "alert-triangle": AlertTriangle,
  settings: Settings,
  warehouse: Warehouse,
  phone: Phone,
}

export function ServiceGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2">Our Services</h2>
        <p className="text-steel mb-8 max-w-2xl">
          Same-day service on every job we accept. Upfront quotes before any work begins.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-paper border border-cream rounded-lg p-6 hover:border-rust hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-rust/10 rounded-lg p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-rust" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-ink mb-1 group-hover:text-rust transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-steel leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-label text-mist">{service.priceRange}</span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-rust group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
