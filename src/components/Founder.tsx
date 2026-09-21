import { Sparkles, Gem } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Founder() {
  return (
    <section id="founder" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Our Story
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Meet the Founder
          </h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
            {/* Image */}
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-[0_12px_60px_rgba(17,17,17,0.1)]">
                  <img
                    src="https://images.pexels.com/photos/14559537/pexels-photo-14559537.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sai Pavan Rali — Founder of Lumora Jewels"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                {/* Gold accent frame */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-tr-2xl border-b-2 border-r-2 border-gold/40" />
                <div className="absolute -top-4 -left-4 h-24 w-24 rounded-bl-2xl border-t-2 border-l-2 border-gold/40" />
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={150}>
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <Gem className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="text-xs font-light uppercase tracking-luxe text-gold">
                    Founder & Creative Director
                  </span>
                </div>

                <h3 className="font-heading text-3xl font-medium text-noir sm:text-4xl lg:text-5xl">
                  Sai Pavan Rali
                </h3>

                {/* Quote */}
                <div className="mt-6 border-l-2 border-gold/40 pl-6">
                  <p className="font-heading text-lg font-light italic leading-relaxed text-charcoal/75">
                    "Jewellery is not just an ornament — it is a legacy you wear,
                    a story you pass down, a moment made eternal."
                  </p>
                </div>

                {/* Bio */}
                <p className="mt-7 text-sm font-light leading-relaxed text-charcoal/60">
                  Founded in 2026, Lumora Jewels creates handcrafted jewellery
                  inspired by timeless elegance and modern craftsmanship. Every
                  piece is designed to celebrate life's unforgettable moments.
                </p>

                {/* Signature */}
                <div className="mt-8 flex items-center gap-3 border-t border-noir/8 pt-6">
                  <Sparkles className="h-4 w-4 text-gold/60" strokeWidth={1.5} />
                  <span className="font-heading text-xl italic text-gold">
                    Sai Pavan Rali
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
