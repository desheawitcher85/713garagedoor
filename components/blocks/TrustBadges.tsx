import { Shield, Clock, Zap, DollarSign } from "lucide-react"

const badges = [
  {
    icon: Clock,
    title: "24/7 Response",
    desc: "Emergency calls answered any hour, any day. No extra charge for nights or weekends.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Full general liability, workers comp, and bonded. Proof available before any tech arrives.",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    desc: "Most Houston calls are scheduled and completed the same day you contact us.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    desc: "Quote before work begins. No surprise charges. What we quote is what you pay.",
  },
]

export function TrustBadges() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-8 text-center">
          Why Houston Homeowners Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rust/10 mb-4">
                <Icon className="w-6 h-6 text-rust" />
              </div>
              <h3 className="font-heading text-xl text-ink mb-2">{title}</h3>
              <p className="text-sm text-steel leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
