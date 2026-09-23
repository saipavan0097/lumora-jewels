import {
  BadgeCheck,
  Gem,
  RefreshCw,
  ShieldCheck,
  PenTool,
  Package,
  Gift,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const features = [
  {
    icon: BadgeCheck,
    title: 'Certified Jewellery',
    description: 'Authenticated natural and lab-grown diamonds, graded to international standards.',
  },
  {
    icon: RefreshCw,
    title: 'Lifetime Service',
    description: 'Complimentary cleaning, polishing and maintenance for every DAIVIQUE piece.',
  },
  {
    icon: PenTool,
    title: 'Custom Designs',
    description: 'Personalized jewellery crafted for your special occasions, from concept to completion.',
  },
  {
    icon: Gem,
    title: 'Hallmarked Gold',
    description: '100% BIS certified purity — every piece carries the hallmark of trust.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Bank-grade encryption ensures every transaction is safe and protected.',
  },
  {
    icon: Package,
    title: 'Worldwide Shipping',
    description: 'Insured global delivery so your jewellery reaches you wherever you are.',
  },
  {
    icon: Gift,
    title: 'Luxury Packaging',
    description: 'Each piece arrives in an elegant keepsake box, ready for gifting.',
  },
];

export default function WhyChooseLumora() {
  return (
    <section id="why" className="bg-noir py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              The DAIVIQUE Promise
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl">
            Why Choose DAIVIQUE
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-ivory/45">
            Seven commitments that define every piece we create and every
            relationship we cherish.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 4) * 90}>
                <article className="card-lift group h-full rounded-xl border border-ivory/10 p-7 text-center transition-all duration-500 hover:border-gold/40 hover:bg-ivory/[0.03]">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10">
                    <Icon
                      className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.2}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-ivory">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ivory/40">
                    {f.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
