import { Star, Quote, BadgeCheck, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';

const testimonials = [
  {
    name: 'Aarohi Mehta',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/22679062/pexels-photo-22679062.jpeg?auto=compress&cs=tinysrgb&w=400',
    review:
      'The craftsmanship exceeded all expectations. Every detail was perfect — my engagement ring feels like it was made for me alone.',
  },
  {
    name: 'Sophia Laurent',
    location: 'Paris, France',
    image: 'https://images.pexels.com/photos/10577048/pexels-photo-10577048.jpeg?auto=compress&cs=tinysrgb&w=400',
    review:
      'The perfect engagement ring experience. Lumora understood exactly what I wanted and delivered something truly extraordinary.',
  },
  {
    name: 'Priya Nair',
    location: 'Hyderabad, India',
    image: 'https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&w=400',
    review:
      'Exceptional quality and outstanding customer service. The lifetime servicing gives me peace of mind that my pieces will shine forever.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Cherished Voices
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Customer Testimonials
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <article className="card-lift group h-full rounded-lg border border-noir/8 bg-white p-8 shadow-[0_4px_30px_rgba(17,17,17,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(201,162,39,0.12)] lg:p-10">
                {/* Quote icon */}
                <Quote
                  className="h-8 w-8 text-gold/30 transition-colors duration-500 group-hover:text-gold/50"
                  strokeWidth={1}
                />

                {/* Stars */}
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-gold text-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="mt-6 text-sm font-light leading-relaxed text-charcoal/70">
                  "{t.review}"
                </p>

                {/* Person */}
                <div className="mt-8 flex items-center gap-4 border-t border-noir/8 pt-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/30 transition-all duration-500 group-hover:ring-gold/60"
                  />
                  <div className="flex-1">
                    <p className="font-heading text-lg font-medium text-noir">
                      {t.name}
                    </p>
                    <p className="flex items-center gap-1 text-xs font-light text-charcoal/40">
                      <MapPin className="h-3 w-3" strokeWidth={1.5} />
                      {t.location}
                    </p>
                  </div>
                </div>

                {/* Verified buyer badge */}
                <div className="mt-4 flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
                  <span className="text-[10px] font-medium uppercase tracking-wider-luxe text-gold/80">
                    Verified Buyer
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
