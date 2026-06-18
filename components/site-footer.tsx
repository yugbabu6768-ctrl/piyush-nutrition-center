import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"
import { NAV_LINKS, COACH } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {COACH.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={`tel:${COACH.phone}`} className="hover:text-primary">
                  {COACH.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${COACH.email}`} className="break-all hover:text-primary">
                  {COACH.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{COACH.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Disclaimer: </span>
            Products are for nutrition and wellness support only. Results may
            vary from person to person. Please consult a qualified healthcare
            professional before starting any nutrition or weight management
            program.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {COACH.brand}. Independent
            Herbalife Member. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
