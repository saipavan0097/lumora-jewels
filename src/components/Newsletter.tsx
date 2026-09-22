import { useState, type FormEvent } from 'react';
import { Mail, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section id="newsletter" className="bg-noir py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">Stay Connected</span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-ivory sm:text-5xl">
            Join the Orvélia Circle
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-ivory/50">
            Be the first to discover new collections, private events, and exclusive offers.
            Subscribe to receive a complimentary welcome gift.
          </p>

          {subscribed ? (
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-xl border border-gold/30 bg-gold/5 py-5 animate-fade-in-up">
              <Check className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <p className="text-sm font-light text-ivory/80">
                Welcome to the Orvélia Circle. Check your inbox for a special gift.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ivory/40" strokeWidth={1.5} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  autoComplete="email"
                  className="w-full border border-ivory/15 bg-ivory/5 py-4 pl-12 pr-4 text-sm font-light text-ivory placeholder:text-ivory/35 transition-all duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                />
              </div>
              <button
                type="submit"
                className="btn-gold flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-luxe text-noir"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-[10px] font-light text-ivory/30">
            By subscribing, you agree to receive marketing emails from Orvélia. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
