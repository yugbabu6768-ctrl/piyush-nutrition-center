import { Star, Quote } from "lucide-react"
import { REVIEWS } from "@/lib/site"

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "size-4 fill-amber-400 text-amber-400"
              : "size-4 fill-muted text-muted"
          }
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Customer Reviews
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Loved by the Community
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Genuine feedback from customers on their wellness journeys.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="absolute right-5 top-5 size-8 text-primary/15" />
              <Stars rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                {`"${review.text}"`}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary">
                  {review.name.charAt(0)}
                </span>
                <span className="font-heading text-sm font-semibold text-foreground">
                  {review.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
