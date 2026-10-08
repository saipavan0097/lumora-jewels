import { MessageCircle, PencilLine } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <nav aria-label="Quick contact" className="mobile-contact-bar fixed bottom-0 left-0 right-0 z-40 border-t border-noir/10 bg-ivory xl:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 px-4 pt-3">
        <a
          href="#/#custom-orders"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-noir/25 px-3 py-3 text-sm font-medium text-noir"
        >
          <PencilLine aria-hidden="true" className="h-4 w-4 shrink-0" />
          Custom order
        </a>
        <a href="https://wa.me/917661930097?text=Hi%20DAIVIQUE%2C%20I%20would%20like%20to%20discuss%20a%20jewellery%20design." target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-3 py-3 text-sm font-medium text-noir">
          <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />WhatsApp
        </a>
      </div>
    </nav>
  );
}
