import {
  BadgeCheck,
  Gem,
  RefreshCw,
  ShieldCheck,
  PenTool,
  Sparkles,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const badges = [
  {
    icon: BadgeCheck,
    title: 'BIS Hallmarked Gold',
    description: 'Certified purity you can trust, every single time.',
  },
  {
    icon: Gem,
    title: 'Certified Diamonds',
    description: 'Authenticated natural & lab-grown diamonds.',
  },
  {
    icon: RefreshCw,
    title: 'Lifetime Exchange',
    description: 'Exchange your jewellery anytime, anywhere.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Bank-grade encryption for every transaction.',
  },
  {
    icon: PenTool,
    title: 'Custom Jewellery Design',
    description: 'Bespoke pieces crafted to your vision.',
  },
  {
    icon: Sparkles,
    title: 'Free Consultation',
    description: 'Expert guidance at no cost to you.',
  },
];

export default function TrustBadges() {
  return (
    <section id="trust" className="bg-ivory py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              The Orvélia Assurance
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-3xl font-light text-noir sm:text-4xl lg:text-5xl">
            Our Promise to You
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <article className="group flex items-start gap-4 rounded-lg border border-noir/8 bg-white p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(201,162,39,0.08)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10">
                    <Icon
                      className="h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.3}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-noir transition-colors duration-300 group-hover:text-gold">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-charcoal/55">
                      {b.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
