import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { COACH } from "@/lib/site"

const HIGHLIGHTS = [
  "Nutrition guidance",
  "Wellness support",
  "Herbalife product recommendations",
  "Weight management consultation",
]

export function CoachProfile() {
  return (
    <section id="coach" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent/60" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <Image
              src="/images/coach.png"
              alt={`Coach ${COACH.name}, nutrition and wellness coach`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Meet Your Coach
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {COACH.name}
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Coach {COACH.name} helps customers with nutrition guidance, wellness
            support, Herbalife product recommendations, and weight management
            consultation.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <WhatsAppButton
              message={`Hello Coach ${COACH.name.split(" ")[0]}, I would like to talk to you about wellness guidance.`}
              className="px-7 py-3 text-base"
            >
              Talk to Coach on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
