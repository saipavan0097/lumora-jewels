import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CalendarHeart } from 'lucide-react';

const sparkles = [
  { top: '15%', left: '10%', delay: '0s', alt: false, size: 'h-3 w-3' },
  { top: '25%', left: '85%', delay: '1.2s', alt: true, size: 'h-4 w-4' },
  { top: '50%', left: '18%', delay: '2s', alt: false, size: 'h-3.5 w-3.5' },
  { top: '60%', left: '75%', delay: '0.5s', alt: true, size: 'h-4 w-4' },
  { top: '38%', left: '48%', delay: '3s', alt: false, size: 'h-3 w-3' },
  { top: '72%', left: '40%', delay: '1.8s', alt: true, size: 'h-3.5 w-3.5' },
  { top: '20%', left: '55%', delay: '2.8s', alt: false, size: 'h-3 w-3' },
  { top: '45%', left: '90%', delay: '0.8s', alt: true, size: 'h-4 w-4' },
  { top: '80%', left: '65%', delay: '2.5s', alt: false, size: 'h-3 w-3' },
  { top: '10%', left: '35%', delay: '1.5s', alt: true, size: 'h-3.5 w-3.5' },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <img
          src="https://images.pexels.com/photos/19820885/pexels-photo-19820885.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury diamond jewellery set"
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/50 via-transparent to-noir/30" />
      </div>

      {/* Floating sparkle particles */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute z-10 ${s.alt ? 'animate-sparkle-alt' : 'animate-sparkle'}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <Sparkles
            className={`${s.size} text-gold drop-shadow-[0_0_8px_rgba(201,162,39,0.7)]`}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <div className="animate-fade-in-up mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-gold/60" />
          <span className="text-xs font-light uppercase tracking-luxe text-gold">
            Handcrafted Fine Jewellery
          </span>
          <span className="h-px w-14 bg-gold/60" />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-200 font-heading text-2xl font-light leading-[1.15] text-ivory sm:text-3xl md:text-4xl lg:text-5xl">
          Jewellery That
          <br />
          Becomes{' '}
          <span className="gold-gradient-text font-medium">Family.</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up delay-400 mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
          Handcrafted jewellery designed for weddings, celebrations and timeless memories.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-600 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#collections"
            className="btn-gold group inline-flex items-center gap-2.5 rounded-full bg-gold px-9 py-4 text-xs font-medium uppercase tracking-luxe text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Explore jewellery collection"
          >
            Explore Collection
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
          <a
            href="#appointment"
            className="btn-outline-gold inline-flex items-center gap-2.5 rounded-full border border-gold/60 px-9 py-4 text-xs font-medium uppercase tracking-luxe text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Book a private appointment"
          >
            <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
            Book Appointment
          </a>
        </div>
      </div>

      {/* Bottom fade into ivory */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-ivory to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-fade-in delay-1200">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-light uppercase tracking-luxe text-ivory/50">
            Scroll
          </span>
          <div className="h-14 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
