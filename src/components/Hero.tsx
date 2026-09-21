import { Sparkles, ArrowRight, CalendarHeart } from 'lucide-react';

const sparkles = [
  { top: '18%', left: '12%', delay: '0s', alt: false },
  { top: '30%', left: '82%', delay: '0.8s', alt: true },
  { top: '55%', left: '20%', delay: '1.5s', alt: false },
  { top: '65%', left: '70%', delay: '2.2s', alt: true },
  { top: '42%', left: '50%', delay: '3s', alt: false },
  { top: '75%', left: '45%', delay: '1s', alt: true },
  { top: '22%', left: '60%', delay: '2.5s', alt: false },
  { top: '50%', left: '88%', delay: '0.4s', alt: true },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/19820885/pexels-photo-19820885.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury diamond jewellery set"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/60 via-transparent to-noir/40" />
      </div>

      {/* Floating sparkles */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute z-10 ${
            s.alt ? 'animate-sparkle-alt' : 'animate-sparkle'
          }`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <Sparkles className="h-4 w-4 text-gold drop-shadow-[0_0_6px_rgba(201,162,39,0.6)]" strokeWidth={1.5} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <div className="animate-fade-in-up mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold/60" />
          <span className="text-xs font-light uppercase tracking-luxe text-gold">
            Handcrafted Fine Jewellery
          </span>
          <span className="h-px w-12 bg-gold/60" />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-200 font-heading text-5xl font-light leading-[1.1] text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
          Jewellery That
          <br />
          Becomes <span className="gold-gradient-text font-medium">Family.</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up delay-400 mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
          Handcrafted jewellery designed for weddings, celebrations and timeless
          memories.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-600 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#collections"
            className="btn-gold group inline-flex items-center gap-2.5 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-luxe text-noir"
          >
            Explore Collection
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
          <a
            href="#appointment"
            className="btn-outline-gold inline-flex items-center gap-2.5 border border-gold/60 px-8 py-4 text-xs font-medium uppercase tracking-luxe text-ivory"
          >
            <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
            Book Appointment
          </a>
        </div>
      </div>

      {/* Bottom fade into ivory */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-ivory to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-fade-in delay-1200">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-light uppercase tracking-luxe text-ivory/50">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
