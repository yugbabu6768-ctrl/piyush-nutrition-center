import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CoachProfile } from "@/components/coach-profile"
import { Transformations } from "@/components/transformations"
import { Products } from "@/components/products"
import { Consultation } from "@/components/consultation"
import { Reviews } from "@/components/reviews"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { COACH } from "@/lib/site"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <CoachProfile />
        <Transformations />
        <Products />
        <Consultation />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />

      {/* Floating WhatsApp */}
      <div className="fixed bottom-5 right-5 z-50">
        <WhatsAppButton
          message={`Hello Coach ${COACH.name.split(" ")[0]}, I would like to know more.`}
          className="size-14 rounded-full p-0 shadow-lg [&_svg]:size-7"
        >
          <span className="sr-only">Chat on WhatsApp</span>
        </WhatsAppButton>
      </div>
    </div>
  )
}
