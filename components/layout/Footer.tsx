import Link from "next/link"
import { Phone, Mail, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { neighborhoods } from "@/lib/neighborhoods"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo variant="dark" size="sm" />
            </div>
            <p className="text-mist text-sm leading-relaxed mb-4">
              Same-day garage door repair, installation, and emergency service across Greater Houston. No after-hours surcharge.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${siteConfig.phoneE164}`} className="flex items-center gap-2 text-rust hover:text-white transition-colors font-mono-label font-bold">
                <Phone className="w-4 h-4" />{siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-mist hover:text-white transition-colors">
                <Mail className="w-4 h-4" />{siteConfig.email}
              </a>
              <div className="flex items-center gap-2 text-mist">
                <Clock className="w-4 h-4" />24/7 Service
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg text-white mb-3">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-mist hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/get-a-quote" className="text-mist hover:text-white transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg text-white mb-3">Service Areas</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {neighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link href={`/service-area/${n.slug}`} className="text-mist hover:text-white transition-colors">
                    {n.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-area" className="text-mist hover:text-white transition-colors">
                  All Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg text-white mb-3">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/about" className="text-mist hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="text-mist hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/faq" className="text-mist hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-mist hover:text-white transition-colors">Contact</Link></li>
            </ul>
            <h3 className="font-heading text-lg text-white mt-6 mb-3">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/resources" className="text-mist hover:text-white transition-colors">Resource Library</Link></li>
              <li><Link href="/resources/garage-door-spring-replacement-cost-houston" className="text-mist hover:text-white transition-colors">Spring Cost Guide</Link></li>
              <li><Link href="/resources/houston-humidity-garage-door-problems" className="text-mist hover:text-white transition-colors">Houston Humidity Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-mist">
          <p>&copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Serving Greater Houston, Harris County, Fort Bend County, and Montgomery County.</p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
