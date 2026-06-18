import Image from "next/image"
import { COACH } from "@/lib/site"

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="flex h-10 w-12 items-center justify-center overflow-hidden rounded-lg bg-card shadow-sm ring-1 ring-border">
        <Image
          src="/images/herbalife-logo.png"
          alt="Herbalife Nutrition logo"
          width={96}
          height={60}
          className="h-auto w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-bold tracking-tight text-foreground">
          {COACH.brand}
        </span>
        <span className="text-[11px] font-medium text-primary">
          Herbalife Independent Member
        </span>
      </span>
    </a>
  )
}
