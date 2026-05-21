"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, CheckCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .regex(/^[\d\s\-().+]{10,}$/, "Enter a valid US phone number"),
  service: z.enum([
    "Repair",
    "Installation",
    "Spring Repair",
    "Opener Repair",
    "Commercial",
    "Emergency",
  ]),
  zip: z.string().min(2, "ZIP code or neighborhood is required"),
  urgency: z.enum(["Today", "This Week", "Planning Ahead"]),
  description: z.string().max(500).optional(),
})

type FormData = z.infer<typeof formSchema>

interface QuoteFormProps {
  id?: string
}

export function QuoteForm({ id = "quote-form" }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // silently handle -- form still shows
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div id={id} className="bg-white rounded-lg p-8 text-center border border-cream shadow-sm">
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-ink mb-2">Quote Request Received</h3>
        <p className="text-steel mb-6">
          We'll call you back within 30 minutes during business hours. For immediate service, call us directly.
        </p>
        <a href={`tel:${siteConfig.phoneE164}`} className="btn-primary mx-auto">
          <Phone className="w-4 h-4" /> Call {siteConfig.phone}
        </a>
      </div>
    )
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg p-6 border border-cream shadow-sm space-y-4"
    >
      <h3 className="font-heading text-2xl text-ink">Get a Free Quote</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-ink mb-1">Full Name *</label>
          <input
            {...register("name")}
            placeholder="Jane Smith"
            className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rust"
          />
          {errors.name && <p className="text-xs text-alert mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1">Phone *</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(713) 555-0000"
            className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rust"
          />
          {errors.phone && <p className="text-xs text-alert mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-ink mb-1">Service Needed *</label>
          <select
            {...register("service")}
            className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rust bg-white"
          >
            <option value="">Select a service...</option>
            <option value="Repair">Garage Door Repair</option>
            <option value="Installation">New Door Installation</option>
            <option value="Spring Repair">Spring Repair</option>
            <option value="Opener Repair">Opener Repair</option>
            <option value="Commercial">Commercial Service</option>
            <option value="Emergency">Emergency Service</option>
          </select>
          {errors.service && <p className="text-xs text-alert mt-1">{errors.service.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1">ZIP or Neighborhood *</label>
          <input
            {...register("zip")}
            placeholder="77008 or The Heights"
            className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rust"
          />
          {errors.zip && <p className="text-xs text-alert mt-1">{errors.zip.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-ink mb-2">How urgent is this? *</label>
        <div className="flex gap-4">
          {(["Today", "This Week", "Planning Ahead"] as const).map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-steel cursor-pointer">
              <input
                type="radio"
                value={opt}
                {...register("urgency")}
                className="accent-rust"
              />
              {opt}
            </label>
          ))}
        </div>
        {errors.urgency && <p className="text-xs text-alert mt-1">{errors.urgency.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-ink mb-1">Brief Description (optional)</label>
        <textarea
          {...register("description")}
          placeholder="What's happening with your door? (optional, 500 char max)"
          rows={3}
          maxLength={500}
          className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rust resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full btn-primary justify-center disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Get My Free Quote"}
      </button>

      <p className="text-xs text-mist text-center">
        Or call directly: <a href={`tel:${siteConfig.phoneE164}`} className="text-rust font-bold">{siteConfig.phone}</a>
      </p>
    </form>
  )
}
