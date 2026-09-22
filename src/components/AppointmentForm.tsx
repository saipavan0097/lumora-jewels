import { useState, type FormEvent } from 'react';
import { CalendarHeart, Check, CalendarDays, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';

const occasions = [
  'Wedding',
  'Engagement',
  'Anniversary',
  'Birthday',
  'Custom Jewellery',
];

const budgets = ['₹25,000+', '₹50,000+', '₹1 Lakh+', '₹5 Lakh+'];

const inputClass =
  'w-full border border-noir/15 bg-ivory/50 px-4 py-3 text-sm font-light text-noir placeholder:text-charcoal/35 transition-all duration-300 focus:border-gold focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold/30';
const labelClass =
  'mb-2 block text-[11px] font-medium uppercase tracking-wider-luxe text-charcoal/55';
const today = new Date().toISOString().split('T')[0];

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="bg-noir py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Private Consultation
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-ivory sm:text-5xl">
            Book an Appointment
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-ivory/50">
            Schedule a private consultation with our jewellery experts. We'll
            guide you through our collections and help you find or create the
            perfect piece.
          </p>
        </Reveal>

        {/* Form card */}
        <Reveal delay={150}>
          <div className="glass-dark rounded-lg p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold animate-fade-in-up">
                  <Check className="h-9 w-9 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-3xl font-light text-ivory animate-fade-in-up delay-200">
                  Thank You
                </h3>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-ivory/60 animate-fade-in-up delay-400">
                  Your private consultation request has been received. Our team
                  will contact you shortly to confirm your appointment. We look
                  forward to welcoming you to Aurivelle.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold mt-8 border border-gold/50 px-7 py-3 text-[11px] font-medium uppercase tracking-luxe text-ivory animate-fade-in-up delay-600"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Mobile */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className={labelClass}>
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      required
                      pattern="[+0-9 ()-]{10,}"
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date" className={labelClass}>
                      Preferred Date
                    </label>
                    <div className="relative">
                      <CalendarDays
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gold/50"
                        strokeWidth={1.5}
                        size={18}
                      />
                      <input
                        id="date"
                        type="date"
                        required
                        min={today}
                        className={`${inputClass} pr-10`}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className={labelClass}>
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gold/50"
                        strokeWidth={1.5}
                        size={18}
                      />
                      <input
                        id="time"
                        type="time"
                        required
                        className={`${inputClass} pr-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label className={labelClass}>Occasion</label>
                  <div className="flex flex-wrap gap-2.5">
                    {occasions.map((o) => (
                      <label
                        key={o}
                        className="cursor-pointer"
                      >
                        <input type="radio" name="occasion" value={o} className="peer sr-only" required />
                        <span className="inline-block border border-ivory/20 px-4 py-2 text-xs font-light tracking-wider-luxe text-ivory/60 transition-all duration-300 peer-checked:border-gold peer-checked:bg-gold peer-checked:text-noir hover:border-gold/50">
                          {o}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className={labelClass}>Budget</label>
                  <div className="flex flex-wrap gap-2.5">
                    {budgets.map((b) => (
                      <label key={b} className="cursor-pointer">
                        <input type="radio" name="budget" value={b} className="peer sr-only" required />
                        <span className="inline-block border border-ivory/20 px-4 py-2 text-xs font-light tracking-wider-luxe text-ivory/60 transition-all duration-300 peer-checked:border-gold peer-checked:bg-gold peer-checked:text-noir hover:border-gold/50">
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className={labelClass}>
                    Special Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Tell us about your preferences or any special requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-gold flex w-full items-center justify-center gap-2.5 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-luxe text-noir"
                >
                  <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
                  Book Private Consultation
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
