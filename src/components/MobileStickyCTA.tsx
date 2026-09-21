import { CalendarHeart } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="glass-nav border-t border-gold/20 px-4 py-3 shadow-[0_-4px_20px_rgba(17,17,17,0.08)]">
        <a
          href="#appointment"
          className="btn-gold flex items-center justify-center gap-2 bg-gold py-3 text-xs font-medium uppercase tracking-luxe text-noir"
        >
          <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
          Book Private Consultation
        </a>
      </div>
    </div>
  );
}
