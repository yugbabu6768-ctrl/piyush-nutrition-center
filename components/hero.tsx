import Image from "next/image"
import { Leaf, ShieldCheck, HeartPulse } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { COACH } from "@/lib/site"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background pt-28 pb-16 sm:pt-32 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <Leaf className="size-4" />
            {COACH.tagline}
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Healthy Living{" "}
            <span className="text-primary">Starts Here</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get personalized wellness guidance, Herbalife nutrition products,
            and weight management support from Coach {COACH.name}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message={`Hello Coach ${COACH.name.split(" ")[0]}, I want to book a wellness consultation.`}
              className="px-7 py-3 text-base"
            >
              Book Free Consultation
            </WhatsAppButton>
            <WhatsAppButton
              variant="outline"
              message={`Hello Coach ${COACH.name.split(" ")[0]}, I want to order Herbalife products. Please share details.`}
              className="px-7 py-3 text-base"
            >
              Order Products on WhatsApp
            </WhatsAppButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: HeartPulse, label: "Personalized Plans" },
              { icon: ShieldCheck, label: "Genuine Products" },
              { icon: Leaf, label: "Ongoing Support" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <Image
              src="/images/hero.png"
              alt="Fresh green nutrition shake surrounded by healthy fruits and vegetables"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-heading text-2xl font-extrabold text-primary">
              500+
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              Wellness journeys guided
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
