import { cn } from "@/lib/utils"
import { whatsappLink } from "@/lib/site"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.74-.71 1.98-1.4.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.13c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.25-8.23 4.55 0 8.24 3.69 8.24 8.23 0 4.55-3.69 8.24-8.24 8.24Z" />
    </svg>
  )
}

export function WhatsAppButton({
  message,
  children,
  className,
  variant = "solid",
}: {
  message: string
  children: React.ReactNode
  className?: string
  variant?: "solid" | "outline" | "ghost"
}) {
  const styles = {
    solid:
      "bg-[#25D366] text-white hover:bg-[#1ebe5b] shadow-sm shadow-[#25D366]/30",
    outline:
      "border border-[#25D366] text-[#1a8a47] bg-transparent hover:bg-[#25D366]/10",
    ghost: "text-[#1a8a47] hover:bg-[#25D366]/10",
  }
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95",
        styles[variant],
        className,
      )}
    >
      <WhatsAppIcon className="size-4 shrink-0" />
      {children}
    </a>
  )
}

export { WhatsAppIcon }
