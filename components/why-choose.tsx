import {
  Salad,
  Scale,
  BadgeCheck,
  Users,
  Sparkles,
  LifeBuoy,
} from "lucide-react"
import { COACH } from "@/lib/site"

const FEATURES = [
  {
    icon: Salad,
    title: "Personalized Nutrition Guidance",
    text: "Tailored nutrition plans built around your body, lifestyle and goals.",
  },
  {
    icon: Scale,
    title: "Weight Management Support",
    text: "Practical, step-by-step support to manage your weight the healthy way.",
  },
  {
    icon: BadgeCheck,
    title: "Genuine Herbalife Products",
    text: "100% authentic Herbalife nutrition and wellness products.",
  },
  {
    icon: Users,
    title: "One-to-One Consultation",
    text: "Personal attention with dedicated one-on-one wellness consultations.",
  },
  {
    icon: Sparkles,
    title: "Real Customer Transformations",
    text: "Proven results from real customers on their wellness journeys.",
  },
  {
    icon: LifeBuoy,
    title: "Continuous Wellness Support",
    text: "Ongoing follow-ups and motivation to keep you on track every day.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why Choose Coach {COACH.name}?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Trusted guidance, genuine products, and real support at every step
            of your wellness journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
