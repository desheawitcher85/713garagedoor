"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { neighborhoods } from "@/lib/neighborhoods"
import { TopBar } from "./TopBar"
import { Logo } from "./Logo"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo variant="light" size="xs" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {/* Services dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-ink hover:text-rust transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-cream rounded mt-1 py-2 w-64 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="block px-4 py-2 text-ink hover:bg-cream hover:text-rust transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Area dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 text-ink hover:text-rust transition-colors">
                Service Area <ChevronDown className="w-4 h-4" />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-cream rounded mt-1 py-2 w-56 z-50">
                  <Link
                    href="/service-area"
                    className="block px-4 py-2 font-bold text-ink hover:bg-cream hover:text-rust transition-colors"
                  >
                    All Service Areas
                  </Link>
                  <div className="border-t border-cream my-1" />
                  {neighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/service-area/${n.slug}`}
                      className="block px-4 py-2 text-ink hover:bg-cream hover:text-rust transition-colors"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-ink hover:text-rust transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="flex items-center gap-2 text-sm font-mono-label font-bold text-rust hover:text-rust-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center rounded bg-rust px-4 py-2 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-rust-dark"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-cream shadow-lg">
            <div className="container-site py-4 flex flex-col gap-2">
              <p className="text-xs uppercase text-mist font-semibold tracking-wide pt-2">Services</p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="py-2 text-ink hover:text-rust font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
              <p className="text-xs uppercase text-mist font-semibold tracking-wide pt-2">Service Areas</p>
              {neighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/service-area/${n.slug}`}
                  className="py-2 text-ink hover:text-rust font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {n.name}
                </Link>
              ))}
              <div className="border-t border-cream pt-4 flex flex-col gap-3">
                <Link href="/about" className="py-2 text-ink hover:text-rust font-medium" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/faq" className="py-2 text-ink hover:text-rust font-medium" onClick={() => setMobileOpen(false)}>FAQ</Link>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="btn-primary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" /> Call {siteConfig.phone}
                </a>
                <Link href="/get-a-quote" className="btn-secondary text-center" onClick={() => setMobileOpen(false)}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
