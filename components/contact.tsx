"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Navigation } from "lucide-react"
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp-button"
import { COACH, whatsappLink } from "@/lib/site"

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COACH.address,
)}`

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello Coach ${COACH.name.split(" ")[0]}, my name is ${
      form.name || "(name)"
    }. My phone number is ${form.phone || "(phone)"}. ${form.message}`
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer")
  }

  const details = [
    { icon: Phone, label: "Phone", value: COACH.phone, href: `tel:${COACH.phone}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: COACH.phone, href: whatsappLink(`Hello Coach ${COACH.name.split(" ")[0]}`) },
    { icon: Mail, label: "Email", value: COACH.email, href: `mailto:${COACH.email}` },
    { icon: MapPin, label: "Address", value: COACH.address, href: MAPS_URL },
  ]

  return (
    <section id="contact" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Contact Coach {COACH.name.split(" ")[0]}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {d.label}
                    </span>
                    <span className="block break-words text-sm font-medium text-foreground">
                      {d.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${COACH.phone}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="size-4" /> Call Now
              </a>
              <WhatsAppButton
                message={`Hello Coach ${COACH.name.split(" ")[0]}, I would like to know more.`}
                className="flex-1 py-3"
              >
                WhatsApp Now
              </WhatsAppButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
              >
                <Navigation className="size-4" /> Get Direction
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Your phone number"
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can the coach help you?"
                  className="resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
              >
                <WhatsAppIcon className="size-4" /> Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
