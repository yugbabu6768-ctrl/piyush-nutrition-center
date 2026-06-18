import Image from "next/image"

const ITEMS = [
  { src: "/images/coach.png", alt: "Coach Aditya Kumar Ranjan", span: "lg:row-span-2" },
  { src: "/images/gallery-products.png", alt: "Herbalife nutrition products", span: "" },
  { src: "/images/gallery-club.png", alt: "Nutrition and wellness club", span: "" },
  { src: "/images/gallery-transformation.png", alt: "Customer transformation success", span: "" },
  { src: "/images/gallery-consultation.png", alt: "Wellness consultation session", span: "lg:col-span-2" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Gallery
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A Look Inside the Wellness Journey
          </h2>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.alt}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-border ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
