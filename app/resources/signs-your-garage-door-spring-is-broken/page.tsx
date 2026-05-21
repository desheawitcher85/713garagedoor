import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { KeyTakeaways } from "@/components/blocks/KeyTakeaways"
import { Callout } from "@/components/blocks/Callout"
import { DefinitionBox } from "@/components/blocks/DefinitionBox"
import { ComparisonTable } from "@/components/blocks/ComparisonTable"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { ArticleSchema } from "@/components/schema/ArticleSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { springFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "7 Signs Your Garage Door Spring Is Broken",
  description:
    "How to tell if your garage door spring is broken. 7 clear symptoms, what to do and not do, and when to call for help.",
  alternates: { canonical: `${siteConfig.url}/resources/signs-your-garage-door-spring-is-broken` },
}

const pageFaqs = springFaqs.slice(0, 5)

const torsionVsExtensionRows = [
  { factor: "Location", option1: "Above the door, horizontal on a shaft", option2: "Along the horizontal tracks, both sides" },
  { factor: "How failure sounds", option1: "Loud bang: single event", option2: "Snap or pop: sometimes gradual" },
  { factor: "Visual sign", option1: "Gap in the coil visible from inside the garage", option2: "Spring visibly stretched or dangling" },
  { factor: "What breaks next", option1: "Opener runs but door won't move", option2: "One side drops, door goes uneven" },
  { factor: "Replacement cost", option1: "$185-$390", option2: "$150-$250" },
]

const signs = [
  {
    number: "1",
    title: "A Loud Bang Came from the Garage",
    content: "This is the most definitive sign, and the most startling. Torsion springs break with a sound like a gunshot. Loud enough that homeowners regularly come outside to investigate, thinking the sound came from the street. If you heard a sharp bang from the garage and the door now won't open, a broken torsion spring is the almost-certain cause.",
  },
  {
    number: "2",
    title: "The Door Won't Open, Or Opens a Few Inches and Stops",
    content: "A broken spring means the door has lost the mechanical assistance needed to lift it. The opener motor runs but the door barely moves, or a small gap opens and the opener stops. Some openers have overload protection that kicks in when they sense excessive resistance. What they're detecting is a door that weighs 3-4 times what it should because the spring isn't doing its job.",
  },
  {
    number: "3",
    title: "The Door Feels Extremely Heavy When You Try to Lift It Manually",
    content: "Pull the red emergency release cord on your opener to disconnect it, then try to lift the door by hand. A properly balanced door with a working spring should lift with minimal effort, around 10-15 pounds of resistance. A door with a broken spring can weigh 100-400 pounds depending on the door size. If lifting it by hand requires serious effort, the spring is almost certainly the issue.",
  },
  {
    number: "4",
    title: "The Opener Motor Runs but the Door Doesn't Move",
    content: "Your opener motor is running. You can hear it. The drive mechanism is moving. But the door stays put. This is the opener trying and failing to lift a door it can't handle alone. The opener's job is to provide the final push. The spring is supposed to do most of the lifting. Without the spring, most residential openers don't have enough torque to raise the door at all.",
  },
  {
    number: "5",
    title: "You Can See a Gap in the Torsion Spring",
    content: "Torsion springs are wound tightly. When they break, the coil separates and you can see a visible gap in the spring, usually 1-3 inches, somewhere in the coil. The spring is visible above the door on the center shaft. Stand back and look up from inside the garage. A gap in the coil is a clear diagnosis.",
  },
  {
    number: "6",
    title: "The Door Is Uneven: One Side Sits Higher Than the Other",
    content: "This is more common with extension spring systems. When one extension spring breaks, the corresponding side of the door loses its tension support. The door sags on one side, and if you try to open it, it goes up crookedly. One corner leads the other. Stop operating the door immediately. Running an off-balance door strains the tracks, the opener, and the cables.",
  },
  {
    number: "7",
    title: "The Cable Is Slack or Piled at the Bottom",
    content: "This one's secondary, but it often accompanies a spring break. Lift cables run from the bottom corners of the door up and around drums on the spring shaft. When the spring loses tension after breaking, the cable can go slack and pile up at the door's bottom corner. A slack cable combined with any of the other signs above almost certainly means a broken spring.",
  },
]

export default function SignsOfBrokenSpringPage() {
  const crumbs = buildBreadcrumbItems("/resources/signs-your-garage-door-spring-is-broken")
  return (
    <>
      <ArticleSchema
        headline="7 Signs Your Garage Door Spring Is Broken"
        description="How to tell if your garage door spring is broken. 7 clear symptoms, what to do and not do, and when to call for help."
        url={`${siteConfig.url}/resources/signs-your-garage-door-spring-is-broken`}
      />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="text-xs text-mist uppercase tracking-wide mb-3">Diagnosis Guide</div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
            7 Signs Your Garage Door Spring Is Broken (And What to Do Next)
          </h1>
          <p className="text-mist text-lg max-w-2xl">Recognize a broken spring before it leaves you stranded.</p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              The clearest signs of a broken torsion spring: loud bang from the garage, door won't open, opener runs but door doesn't move, door feels extremely heavy when lifted manually, or a visible gap in the spring coil. If any of these are present, stop operating the door and call for service. Broken springs are not a DIY repair.
            </p>
          </blockquote>

          <KeyTakeaways points={[
            "A loud bang from the garage is the #1 sign of a broken torsion spring.",
            "If the opener runs but the door doesn't move, check the spring first (not the opener).",
            "Test by pulling the red release cord and trying to lift manually. It should feel light.",
            "A visible gap in the spring coil confirms the diagnosis.",
            "Don't operate the door. A broken spring under load can cause secondary damage.",
            "Spring replacement is not a DIY job. Torsion springs are under serious tension.",
          ]} />

          <p className="text-steel leading-relaxed mb-6">
            Garage door springs fail without warning. One moment the door works. The next, it doesn't. Knowing what a broken spring looks and sounds like helps you diagnose quickly, avoid secondary damage, and get it fixed before the situation escalates. Here are the seven signs to look for.
          </p>

          <DefinitionBox
            term="Torsion spring"
            definition="A steel coil mounted horizontally above the garage door. It winds tighter as the door closes, storing energy. When the door opens, it releases that stored energy to help lift the door. When it breaks, the door becomes too heavy for most openers to move."
          />

          <div className="space-y-10 mt-8">
            {signs.map((sign) => (
              <div key={sign.number} className="border-l-4 border-rust pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-rust text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                    {sign.number}
                  </span>
                  <h2 className="font-heading text-2xl text-ink">{sign.title}</h2>
                </div>
                <p className="text-steel leading-relaxed text-sm">{sign.content}</p>
              </div>
            ))}
          </div>

          <Callout variant="reality-check">
            If you suspect a broken spring, stop operating the opener immediately. Continuing to run the opener with a broken spring strains the motor, can strip the drive gear (an additional $150-$200 repair), and risks a door falling unexpectedly. Disconnect the opener using the red release cord if you need to move the car, then leave the door alone until a tech arrives.
          </Callout>

          <ComparisonTable
            heading="Torsion Spring vs. Extension Spring: Different Signs of Failure"
            col1Label="Torsion Spring"
            col2Label="Extension Spring"
            rows={torsionVsExtensionRows}
          />

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">What to Do When You Suspect a Broken Spring</h2>
          <ol className="space-y-3 mb-6">
            {[
              "Stop operating the opener. Disconnect it by pulling the red release cord.",
              "If a car is trapped, try lifting manually with the opener disconnected. If the door weighs too much, call before forcing it.",
              "Keep kids and pets away from the door.",
              "Call for same-day service. Broken springs are prioritized.",
              "Don't try to replace the spring yourself.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-steel">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rust text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>

          <Callout variant="pro-tip">
            Before you call, do the manual lift test: pull the red cord to disconnect the opener, then lift the door by hand about halfway. Set it down. If it stays in place, the remaining spring tension and cable are holding it. The balance is OK enough to operate manually. If it falls when you let go, the spring has lost all tension and the door is not safe to operate at all.
          </Callout>

          <p className="text-sm text-steel mt-8">
            Related: <Link href="/garage-door-spring-repair" className="text-rust hover:underline">Spring Repair Service</Link> | <Link href="/resources/garage-door-spring-replacement-cost-houston" className="text-rust hover:underline">Spring Replacement Costs</Link> | <Link href="/resources/garage-door-wont-open-troubleshooting" className="text-rust hover:underline">Full Troubleshooting Guide</Link> | <Link href="/emergency-garage-door-service" className="text-rust hover:underline">24/7 Emergency Service</Link>
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Frequently Asked Questions</h2>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />
      <CTABanner heading="Think Your Spring Is Broken?" subtext="Same-day service. Galvanized high-cycle springs for Houston's climate. No surcharge." />
    </>
  )
}
