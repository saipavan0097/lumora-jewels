import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: 'Do you offer certified jewellery?',
    a: 'Every piece at Aurivelle comes with a certificate of authenticity. Our diamonds are graded to international standards, and all gold carries BIS hallmark certification.',
  },
  {
    q: 'Can I customize a piece of jewellery?',
    a: 'Absolutely. We offer bespoke design services where our master craftsmen work with you to create a one-of-a-kind piece. Book a private consultation to begin the journey.',
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We offer a 30-day return policy on all non-customized pieces. Items must be in their original condition with all packaging and certificates included.',
  },
  {
    q: 'Do you provide worldwide shipping?',
    a: 'Yes, we offer complimentary insured shipping worldwide. Domestic orders arrive within 3–7 business days, and international orders within 7–14 business days.',
  },
  {
    q: 'Is there a warranty on Aurivelle jewellery?',
    a: 'Every piece comes with a lifetime warranty covering manufacturing defects. We also provide complimentary cleaning, polishing, and maintenance for life.',
  },
  {
    q: 'How do I care for my jewellery?',
    a: 'Store your pieces in the provided Aurivelle box, clean with a soft cloth, and avoid contact with perfumes and chemicals. Visit us anytime for professional cleaning.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">Questions & Answers</span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl">Frequently Asked Questions</h2>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="rounded-xl border border-noir/8 bg-ivory/40 transition-all duration-300 hover:border-gold/20">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-heading text-lg font-medium text-noir">{faq.q}</span>
                  {open === i ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 text-sm font-light leading-relaxed text-charcoal/60">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
