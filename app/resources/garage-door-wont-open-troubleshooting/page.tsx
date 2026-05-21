import type { Metadata } from "next"
import Link from "next/link"
import { KeyTakeaways } from "@/components/blocks/KeyTakeaways"
import { Callout } from "@/components/blocks/Callout"
import { ComparisonTable } from "@/components/blocks/ComparisonTable"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { CTABanner } from "@/components/blocks/CTABanner"
import { ArticleSchema } from "@/components/schema/ArticleSchema"
import { HowToSchema } from "@/components/schema/HowToSchema"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"
import { BreadcrumbSchema, buildBreadcrumbItems } from "@/components/schema/BreadcrumbSchema"
import { siteConfig } from "@/lib/site-config"
import { repairFaqs, generalFaqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Garage Door Won't Open: 10-Step Troubleshooting Guide",
  description:
    "Garage door not opening? Walk through these 10 diagnostics in order to find the cause, from quick fixes to issues that need a professional.",
  alternates: { canonical: `${siteConfig.url}/resources/garage-door-wont-open-troubleshooting` },
}

const pageFaqs = [...repairFaqs.slice(0, 4), ...generalFaqs.slice(8, 10)]

const diyVsProRows = [
  { factor: "Dead remote battery", option1: "Replace it. Takes 2 minutes.", option2: "Not needed." },
  { factor: "Opener unplugged or tripped breaker", option1: "Check outlet and breaker box.", option2: "Not needed." },
  { factor: "Sensor misalignment", option1: "Realign sensors: 5 min job.", option2: "Only if sensors are damaged or wiring is bad." },
  { factor: "Broken spring", option1: "Dangerous. Stop. Spring is under high tension.", option2: "Required. Same-day spring replacement." },
  { factor: "Snapped cable", option1: "Do not operate the door. Cable tension risk.", option2: "Required. Cable + drum inspection." },
  { factor: "Off-track door", option1: "Do not force it. Risk of collapse.", option2: "Required. Track realignment + safety check." },
  { factor: "Frozen door (winter)", option1: "Break ice seal with gentle lift. Heat gun optional.", option2: "Only if door or frame is damaged." },
  { factor: "Damaged motor unit", option1: "Check for error codes on the motor.", option2: "If gears are stripped or motor seized." },
]

const troubleshootingSteps = [
  { name: "Check the wall button", text: "Try the wall-mounted button inside the garage (not just the remote). If the door opens from the wall button but not the remote, the issue is with the remote or its receiver, not the opener itself." },
  { name: "Replace the remote battery", text: "Before assuming anything is broken, put a fresh battery in the remote. This fixes the problem more often than you'd expect. A bad battery can cause intermittent operation that mimics more serious issues." },
  { name: "Check if the opener is plugged in", text: "Check the outlet the opener is plugged into. Try a different device in the outlet to confirm it has power. Also check your breaker box for a tripped circuit." },
  { name: "Look for error codes on the opener", text: "Most LiftMaster, Chamberlain, and Genie openers have a blinking light on the motor unit that indicates error codes. Check your owner's manual for what the blink pattern means." },
  { name: "Check the safety sensors", text: "The two small sensors at the bottom of the door tracks (one emits a beam, one receives it) will prevent the door from closing if misaligned or dirty. Check for a blinking light on either sensor. Wipe the lenses and check alignment." },
  { name: "Pull the red release cord and try lifting manually", text: "Disconnect the opener by pulling the red cord, then try to lift the door by hand. If it lifts easily, the issue is with the opener. If it feels extremely heavy, the spring is almost certainly broken." },
  { name: "Check the spring", text: "Look at the spring above the door. Is there a visible gap in the coil? That's a broken torsion spring. Stop. Don't operate the door manually or with the opener. Call for service." },
  { name: "Check the cables", text: "Look at the lift cables running from the bottom corners of the door up to the drums on the spring shaft. Slack cables, frayed cables, or a cable off its drum means the cable system needs service before operating the door." },
  { name: "Check the tracks for obstructions", text: "Walk both sides of the door tracks and look for bends, dents, objects, or debris. A minor track dent can sometimes be gently tapped back into alignment with a rubber mallet. Major bends need professional attention." },
  { name: "Check the disconnect lever", text: "The red release cord disconnects the opener from the door. Occasionally this lever doesn't re-engage properly after being pulled. Look for a small lever or clip near the trolley on the drive rail. It may need to be manually re-engaged." },
]

export default function TroubleshootingPage() {
  const crumbs = buildBreadcrumbItems("/resources/garage-door-wont-open-troubleshooting")
  return (
    <>
      <ArticleSchema
        headline="Garage Door Won't Open: 10-Step Troubleshooting Guide"
        description="Garage door not opening? Walk through these 10 diagnostics in order."
        url={`${siteConfig.url}/resources/garage-door-wont-open-troubleshooting`}
      />
      <HowToSchema
        name="Troubleshoot a Garage Door That Won't Open"
        description="10-step process for diagnosing a garage door that won't open, from easiest to most complex."
        steps={troubleshootingSteps}
      />
      <BreadcrumbSchema crumbs={crumbs} />
      <FAQPageSchema faqs={pageFaqs} />

      <section className="bg-ink text-white section-pad">
        <div className="container-site">
          <div className="text-xs text-mist uppercase tracking-wide mb-3">Troubleshooting Guide</div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Garage Door Won't Open? Here's How to Troubleshoot It Step-by-Step
          </h1>
          <p className="text-mist text-lg max-w-2xl">10 diagnostics in order, from the easiest to the ones that need a professional.</p>
        </div>
      </section>

      <article className="section-pad bg-paper">
        <div className="container-site max-w-3xl mx-auto">

          <blockquote className="border-l-4 border-rust bg-cream rounded-r-lg p-4 mb-8">
            <p className="text-sm text-steel">
              Work through these 10 steps in order: wall button, battery, power, error codes, sensors, manual lift test, spring check, cable check, track check, disconnect lever. Steps 1-5 are DIY-safe. If the manual lift feels extremely heavy (Step 6), stop. The spring is probably broken and needs professional repair.
            </p>
          </blockquote>

          <KeyTakeaways points={[
            "Try the wall button first. If it works, the issue is the remote or its receiver.",
            "A fresh remote battery fixes 15-20% of 'broken opener' calls.",
            "If the door is heavy when lifted manually, stop. That's a broken spring.",
            "Check safety sensors. A blinking light on either sensor means they're misaligned or dirty.",
            "Off-track doors and broken springs are not DIY-safe. Stop and call.",
            "Most Houston opener issues are resolved same day. Don't delay if your car is trapped.",
          ]} />

          <div className="space-y-8 mt-8">
            {troubleshootingSteps.map((step, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-rust text-white font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-cream last:border-0">
                  <h2 className="font-heading text-2xl text-ink mb-2">Step {index + 1}: {step.name}</h2>
                  <p className="text-steel text-sm leading-relaxed">{step.text}</p>
                  {index === 5 && (
                    <Callout variant="reality-check">
                      If the door feels extremely heavy, like you're pushing against serious resistance, stop immediately. That's a broken spring. Continuing to force a spring-failed door risks cable damage, opener damage, and the door falling unexpectedly. Call for service.
                    </Callout>
                  )}
                  {index === 6 && (
                    <Callout variant="heads-up">
                      A visible gap in the torsion spring coil above the door is a definitive diagnosis. Do not attempt to continue operating the door by hand or with the opener. Spring replacement is the solution, and it's not a DIY job.
                    </Callout>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ComparisonTable
            heading="DIY-Safe vs. Call a Pro: Quick Reference"
            col1Label="DIY-Safe"
            col2Label="Call a Professional"
            rows={diyVsProRows}
          />

          <Callout variant="pro-tip">
            If you work through all 10 steps and the door still won't open, the issue is either inside the opener (motor or circuit board), in the spring system, or in the cable drums. All three require a professional. Most Houston calls are resolved same day. Calling earlier rather than continuing to tinker prevents the secondary damage that comes from forcing a door with an underlying mechanical problem.
          </Callout>

          <p className="text-sm text-steel mt-8">
            Related: <Link href="/garage-door-repair" className="text-rust hover:underline">Garage Door Repair</Link> | <Link href="/garage-door-spring-repair" className="text-rust hover:underline">Spring Repair</Link> | <Link href="/garage-door-opener-repair" className="text-rust hover:underline">Opener Repair</Link> | <Link href="/emergency-garage-door-service" className="text-rust hover:underline">24/7 Emergency Service</Link>
          </p>

          <h2 className="font-heading text-3xl text-ink mt-10 mb-3">Frequently Asked Questions</h2>
        </div>
      </article>

      <FAQBlock faqs={pageFaqs} withSchema={false} />
      <CTABanner heading="Couldn't Fix It Yourself?" subtext="Same-day service across Greater Houston. We'll diagnose and fix it right." />
    </>
  )
}
