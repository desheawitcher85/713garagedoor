import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"
import { siteConfig } from "@/lib/site-config"

// TODO (DeShea): Set RESEND_API_KEY in Vercel env vars
// TODO (DeShea): Verify 713garagedoor.com domain in Resend dashboard
// TODO (DeShea): Optional -- wire SLACK_WEBHOOK_URL env var for instant Slack notifications

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[\d\s\-().+]{10,}/),
  service: z.enum([
    "Repair",
    "Installation",
    "Spring Repair",
    "Opener Repair",
    "Commercial",
    "Emergency",
  ]),
  zip: z.string().min(2),
  urgency: z.enum(["Today", "This Week", "Planning Ahead"]),
  description: z.string().max(500).optional(),
})

function isSpam(description: string): boolean {
  const urlCount = (description.match(/https?:\/\//g) || []).length
  if (urlCount > 3) return true
  const spamPatterns = [
    /\b(casino|poker|viagra|cialis|seo service|buy followers)\b/i,
  ]
  return spamPatterns.some((p) => p.test(description))
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, errors: ["Invalid JSON"] }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.issues.map((i) => i.message) },
      { status: 422 }
    )
  }

  const data = parsed.data
  if (data.description && isSpam(data.description)) {
    return NextResponse.json({ ok: true }) // silent drop
  }

  const timestamp = new Date().toISOString()
  const referer = req.headers.get("referer") || "unknown"

  const emailBody = `New lead from 713garagedoor.com

Name: ${data.name}
Phone: ${data.phone}
ZIP / Neighborhood: ${data.zip}
Service: ${data.service}
Urgency: ${data.urgency}
Description: ${data.description || "(none)"}

Submitted: ${timestamp}
Source page: ${referer}`

  console.log(`[${timestamp}] New lead: ${data.name} | ${data.phone} | ${data.service} | ${data.urgency}`)

  const apiKey = process.env.RESEND_API_KEY
  if (apiKey) {
    try {
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from: `contact@${siteConfig.domain}`,
        to: siteConfig.email,
        subject: `New Houston Garage Door Lead -- ${data.service} -- ${data.urgency}`,
        text: emailBody,
      })
    } catch (err) {
      console.error("Resend error:", err)
    }
  } else {
    console.log("RESEND_API_KEY not set -- email not sent. Lead data:", emailBody)
  }

  // Optional Slack webhook
  const slackWebhook = process.env.SLACK_WEBHOOK_URL
  if (slackWebhook) {
    try {
      await fetch(slackWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `*New 713 Garage Door Lead*\n*${data.name}* | ${data.phone} | ${data.service} | Urgency: ${data.urgency}\nZIP: ${data.zip}`,
        }),
      })
    } catch {
      // non-fatal
    }
  }

  return NextResponse.json({ ok: true })
}
