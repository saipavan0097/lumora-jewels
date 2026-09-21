import { Gem, BadgeCheck, PenTool, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';

const features = [
  {
    icon: Gem,
    title: 'Certified Diamonds',
    description:
      'Only authenticated natural and lab-grown diamonds, graded to international standards.',
  },
  {
    icon: BadgeCheck,
    title: 'BIS Hallmarked Gold',
    description:
      '100% certified purity with lifetime trust — every piece carries the BIS hallmark.',
  },
  {
    icon: PenTool,
    title: 'Custom Designs',
    description:
      'Personalized jewellery crafted for your special occasions, from concept to completion.',
  },
  {
    icon: Sparkles,
    title: 'Lifetime Service',
    description:
      'Complimentary cleaning, polishing and maintenance support for every Lumora piece.',
  },
];

export default function WhyChooseLumora() {
  return (
    <section id="why" className="bg-noir py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              The Lumora Promise
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl">
            Why Choose Lumora
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-ivory/50">
            Four commitments that define every piece we create and every
            relationship we cherish.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 100}>
                <article className="group h-full border border-ivory/10 p-8 text-center transition-all duration-500 hover:border-gold/40 hover:bg-ivory/[0.03]">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10">
                    <Icon
                      className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.2}
                    />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-ivory">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-ivory/45">
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
