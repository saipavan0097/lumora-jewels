import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: 'Who made the jewellery in this gallery?',
    a: 'Our Work showcases ornaments made by Sai Pavan and his father, with original workshop photos included. The separate Design Ideas section contains AI concepts that have not yet been made and need workshop approval.',
  },
  {
    q: 'How do I enquire about a piece?',
    a: 'Open the piece and choose Enquire about this piece. WhatsApp opens with its name and reference ready to send. You can discuss materials, sizing, price and availability with us directly.',
  },
  {
    q: 'Why are there studio edits and original photos?',
    a: 'AI studio edits offer a cleaner presentation, but fine details can differ. Original workshop photos are included for comparison and remain the reference for the photographed ornament.',
  },
  {
    q: 'Are these pieces available to buy immediately?',
    a: 'This is a showcase of our work, not a live inventory. Please contact us to confirm whether a photographed piece is available or to discuss a similar design.',
  },
  {
    q: 'Where can I find the price and material details?',
    a: 'The budget calculator uses a clearly dated metal benchmark and our stated charges. Concept budgets use proposed weights, not measured weights. These are illustrations, not live prices or fixed offers. Ask us to confirm the design, purity, net weight and current final quote.',
  },
  {
    q: 'Can I discuss a custom design or a visit?',
    a: 'Yes—use the WhatsApp link to start a conversation. Design feasibility, timing and any appointment are agreed directly with us; the website does not automatically confirm bookings.',
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
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                >
                  <span className="font-heading text-lg font-medium text-noir">{faq.q}</span>
                  {open === i ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  )}
                </button>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
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
