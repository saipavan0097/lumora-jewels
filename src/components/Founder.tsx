import { Sparkles, Gem } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Founder() {
  return (
    <section id="founder" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Our Story
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Meet the Founder
          </h2>
        </Reveal>

        {/* Founder card */}
        <Reveal delay={150}>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-white shadow-[0_8px_50px_rgba(17,17,17,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Image */}
              <div className="relative md:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-noir/40 to-transparent" />
                <img
                  src="https://images.pexels.com/photos/14559537/pexels-photo-14559537.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Sai Pavan Rali — Founder of Lumora Jewels"
                  loading="lazy"
                  className="h-full min-h-[340px] w-full object-cover"
                />
                {/* Gold accent corner */}
                <div className="absolute bottom-0 left-0 h-1 w-20 bg-gold" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:col-span-3 md:p-12">
                <div className="mb-4 flex items-center gap-2">
                  <Gem className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="text-xs font-light uppercase tracking-luxe text-gold">
                    Founder & Creative Director
                  </span>
                </div>

                <h3 className="font-heading text-3xl font-medium text-noir sm:text-4xl">
                  Sai Pavan Rali
                </h3>

                {/* Quote */}
                <div className="mt-6 border-l-2 border-gold/40 pl-5">
                  <p className="font-heading text-lg font-light italic leading-relaxed text-charcoal/80">
                    "Jewellery is not just an ornament — it is a legacy you wear,
                    a story you pass down, a moment made eternal."
                  </p>
                </div>

                {/* Bio */}
                <p className="mt-6 text-sm font-light leading-relaxed text-charcoal/60">
                  Lumora Jewels was created with a vision to celebrate life's most
                  precious moments through timeless craftsmanship and elegant
                  jewellery. Every design reflects luxury, trust and attention to
                  detail. Our mission is to create jewellery that becomes part of
                  your family's story for generations.
                </p>

                {/* Signature */}
                <div className="mt-8 flex items-center gap-3 border-t border-noir/8 pt-6">
                  <Sparkles className="h-4 w-4 text-gold/60" strokeWidth={1.5} />
                  <span className="font-heading text-xl italic text-gold">
                    Sai Pavan Rali
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
