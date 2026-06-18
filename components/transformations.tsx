import Image from "next/image"
import { TrendingDown } from "lucide-react"
import { TRANSFORMATIONS } from "@/lib/site"

export function Transformations() {
  return (
    <section id="transformations" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Real Results
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Body Transformations
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Inspiring journeys from customers who followed personalized nutrition
            and wellness guidance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRANSFORMATIONS.map((item) => (
            <figure
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Before and after transformation of ${item.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-3 text-[11px] font-bold uppercase tracking-wide">
                  <span className="rounded-full bg-foreground/70 px-2.5 py-1 text-background">
                    Before
                  </span>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-primary-foreground">
                    After
                  </span>
                </div>
              </div>
              <figcaption className="flex items-center justify-between px-5 py-4">
                <span className="font-heading font-semibold text-foreground">
                  {item.name}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  <TrendingDown className="size-3.5" />
                  {item.result}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Results may vary from person to person. Photos are shown with customer
          permission.
        </p>
      </div>
    </section>
  )
}
