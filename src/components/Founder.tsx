import { Sparkles, Gem } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Founder() {
  return (
    <section id="founder" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">Our Story</span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">Meet the Founder</h2>
        </Reveal>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-[0_12px_60px_rgba(17,17,17,0.1)]">
                  <img
                    src="/images/founder/IMG-20250514-WA0001.jpg"
                    alt="Sai Pavan Rali, founder of Lumora Jewels"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-tr-2xl border-b-2 border-r-2 border-gold/40" />
                <div className="absolute -top-4 -left-4 h-24 w-24 rounded-bl-2xl border-t-2 border-l-2 border-gold/40" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <Gem className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="text-xs font-light uppercase tracking-luxe text-gold">Founder & Creative Director</span>
                </div>
                <h3 className="font-heading text-3xl font-medium text-noir sm:text-4xl lg:text-5xl">Sai Pavan Rali</h3>
                <p className="mt-7 text-sm font-light leading-relaxed text-charcoal/60">
                  Lumora Jewels was founded with a vision to create timeless jewellery that celebrates elegance, craftsmanship and unforgettable moments. Every collection is designed with passion, precision and luxury.
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-noir/8 pt-6">
                  <Sparkles className="h-4 w-4 text-gold/60" strokeWidth={1.5} />
                  <span className="font-heading text-2xl italic text-gold">Sai Pavan Rali</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
