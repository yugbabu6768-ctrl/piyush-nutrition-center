import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PRODUCTS } from "@/lib/site"

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Herbalife Products
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Nutrition Products for Every Goal
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Order genuine Herbalife products directly through WhatsApp. Tap a
            product to start your order.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.details}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 pt-2">
                  <span className="font-heading text-xl font-extrabold text-primary">
                    {product.price}
                  </span>
                  <WhatsAppButton
                    message={`Hello Coach Aditya, I want to order ${product.name}. Please share details.`}
                    className="px-4 py-2 text-xs"
                  >
                    Order Now
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
