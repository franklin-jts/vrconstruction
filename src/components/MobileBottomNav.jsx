import { MessageCircle, Phone, ReceiptText } from 'lucide-react'

export default function MobileBottomNav() {
  return (
    <nav
      aria-label="Primary mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-100 bg-white/95 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden"
    >
      <div className="grid grid-cols-3">
        <a
          href="tel:+917802808080"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ink"
        >
          <Phone className="h-5 w-5 text-brand" />
          Call Now
        </a>
        <a
          href="https://wa.me/917802808080"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ink"
        >
          <MessageCircle className="h-5 w-5 text-brand" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 bg-brand py-2.5 text-[11px] font-semibold text-white"
        >
          <ReceiptText className="h-5 w-5" />
          Free Quote
        </a>
      </div>
    </nav>
  )
}
