import { Scale, Apple, Pill, Sparkles } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { COACH } from "@/lib/site"

const SERVICES = [
  {
    icon: Scale,
    title: "Weight Management Guidance",
    desc: "Structured plans to reach and maintain a healthy weight.",
  },
  {
    icon: Apple,
    title: "Nutrition Support",
    desc: "Balanced nutrition advice tailored to your lifestyle.",
  },
  {
    icon: Pill,
    title: "Product Recommendation",
    desc: "Right Herbalife products matched to your goals.",
  },
  {
    icon: Sparkles,
    title: "Healthy Lifestyle Support",
    desc: "Ongoing motivation and habits for lasting wellness.",
  },
]

export function Consultation() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Book Your Wellness Consultation
          </h2>
          <p className="mt-4 text-pretty text-primary-foreground/80">
            Choose the support you need and start your journey with a free
            consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-primary-foreground/10 p-6 ring-1 ring-primary-foreground/15 backdrop-blur-sm transition-colors hover:bg-primary-foreground/15"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground/15">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton
            message={`Hello Coach ${COACH.name.split(" ")[0]}, I want to book a wellness consultation.`}
            className="bg-background px-8 py-3.5 text-base text-primary hover:bg-background/90"
          >
            Book Free Consultation on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
