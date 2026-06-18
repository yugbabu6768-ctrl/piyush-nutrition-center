import { COACH } from "@/lib/site"

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
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
