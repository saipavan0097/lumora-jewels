import { useEffect, useState } from 'react';
import { Star, Quote, BadgeCheck, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const testimonials = [
  {
    name: 'Aarohi Mehta',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/22679062/pexels-photo-22679062.jpeg?auto=compress&cs=tinysrgb&w=400',
    review: 'From the first consultation to the final reveal, every moment felt special. My engagement ring is a masterpiece — DAIVIQUE made the entire experience unforgettable.',
  },
  {
    name: 'Sophia Laurent',
    location: 'Paris, France',
    image: 'https://images.pexels.com/photos/10577048/pexels-photo-10577048.jpeg?auto=compress&cs=tinysrgb&w=400',
    review: 'I have collected jewellery from houses across the world. DAIVIQUE stands among the finest — the craftsmanship, the warmth, the attention to detail is simply extraordinary.',
  },
  {
    name: 'Priya Nair',
    location: 'Hyderabad, India',
    image: 'https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&w=400',
    review: 'My bridal set was custom-designed and exceeded every expectation. The team understood my vision perfectly and created something my family will treasure for generations.',
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <article className="glass card-lift group h-full rounded-2xl border-noir/10 bg-white/55 p-9 shadow-[0_4px_30px_rgba(17,17,17,0.04)] transition-all duration-500 hover:border-gold/30 hover:shadow-[0_24px_60px_rgba(201,162,39,0.12)] lg:p-11">
      <Quote className="h-8 w-8 text-gold/25 transition-colors duration-500 group-hover:text-gold/50" strokeWidth={1} />
      <div className="mt-5 flex gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-6 text-sm font-light leading-relaxed text-charcoal/70">"{testimonial.review}"</p>
      <div className="mt-8 flex items-center gap-4 border-t border-noir/8 pt-6">
        <img src={testimonial.image} alt={testimonial.name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/30 transition-all duration-500 group-hover:ring-gold/60" />
        <div className="flex-1">
          <p className="font-heading text-lg font-medium text-noir">{testimonial.name}</p>
          <p className="flex items-center gap-1 text-xs font-light text-charcoal/40">
            <MapPin className="h-3 w-3" strokeWidth={1.5} />
            {testimonial.location}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5">
        <BadgeCheck className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
        <span className="text-[10px] font-medium uppercase tracking-wider-luxe text-gold/80">Verified Buyer</span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">Cherished Voices</span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">Customer Testimonials</h2>
        </Reveal>

        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 120}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <div className="md:hidden">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full shrink-0 px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4">
            <button onClick={() => setActiveIndex((activeIndex + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button key={testimonial.name} onClick={() => setActiveIndex(index)} aria-label={`Show testimonial ${index + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-gold' : 'w-1.5 bg-gold/30'}`} />
              ))}
            </div>
            <button onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
