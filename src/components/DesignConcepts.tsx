import { useId, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { designConcepts, getDesignConceptBudgetRange, getDesignConceptPageUrl, getDesignConceptWhatsAppLink, type ConceptGoldMetal } from '@/data/designConcepts';
import PhotoActions from '@/components/PhotoActions';
import { formatEstimateCurrency, pricingBenchmark } from '@/data/pricing';

export default function DesignConcepts() {
  const [metal, setMetal] = useState<ConceptGoldMetal>('gold22k');
  const metalChoiceId = useId();
  return (
    <section id="design-ideas" aria-labelledby="design-ideas-heading" className="scroll-mt-28 bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-gold">Ideas for your next piece</p>
          <h2 id="design-ideas-heading" className="mt-4 font-heading text-4xl text-noir sm:text-5xl">
            A simple idea. A personal touch.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-charcoal/75">
            Proposed designs inspired by our family workshop's floral details, engraved ornaments and handmade links.
            These AI visualisations are starting points for a conversation, separate from the pieces we have already made.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
            The stone-free weight ranges below are proposed planning budgets, not measurements taken from these images.
            Size, strength and feasibility may require a different design or more metal after workshop review.
          </p>
        </Reveal>

        <div className="mb-8 rounded-2xl border border-gold/25 bg-white p-5 sm:p-6">
          <fieldset>
            <legend className="text-sm font-medium text-noir">Choose gold purity for the illustrative budgets</legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {(['gold22k', 'gold18k'] as const).map(option => (
                <label key={option} className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-3 text-sm ${metal === option ? 'border-gold bg-gold/10 text-noir' : 'border-noir/15 bg-white text-charcoal'}`}>
                  <input
                    type="radio"
                    name={`${metalChoiceId}-concept-metal`}
                    value={option}
                    checked={metal === option}
                    onChange={() => setMetal(option)}
                    className="h-4 w-4 accent-[#C9A227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  />
                  {pricingBenchmark.metals[option].label}
                </label>
              ))}
            </div>
          </fieldset>
          <p className="mt-4 text-xs leading-relaxed text-charcoal/75">
            Based on the <a href={pricingBenchmark.datedSourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">IBJA {pricingBenchmark.displayDate} {pricingBenchmark.session} benchmark (opens in a new tab)</a> — not a live rate.
            {' '}Includes the workshop's stated all-in gold charges; no extra charge or separate tax is added in this illustration.
            A current, itemised quote requires approval of the design and net metal weight.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {designConcepts.map(concept => {
            const budget = getDesignConceptBudgetRange(concept, metal);
            const { minimumGrams, maximumGrams, scope } = concept.proposedNetMetalBudget;
            return (
            <article id={`concept-${concept.id}`} key={concept.id} aria-labelledby={`${concept.id}-heading`} className="scroll-mt-28 flex flex-col overflow-hidden rounded-2xl border border-noir/10 bg-white">
              <div className="bg-[#f6f1e9]">
                <img
                  src={concept.image}
                  alt={`${concept.title} — AI design visualisation, not a finished workshop piece`}
                  loading="lazy"
                  decoding="async"
                  width="1024"
                  height="1024"
                  className="aspect-square w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 lg:p-6">
                <p className="self-start rounded-full bg-noir/5 px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-charcoal">
                  AI design concept · not yet made
                </p>
                <p className="mt-5 text-[10px] uppercase tracking-widest text-gold">{concept.category}</p>
                <h3 id={`${concept.id}-heading`} className="mt-2 font-heading text-3xl leading-tight text-noir">{concept.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{concept.description}</p>
                <p className="mt-3 text-xs leading-relaxed text-charcoal/65">{concept.inspiration}</p>
                <div className="mt-auto pt-5">
                  <div className="border-t border-noir/10 pt-4">
                    <p className="text-xs font-medium leading-relaxed text-charcoal">Illustrative weight budget — workshop approval needed</p>
                    <p className="mt-2 text-base font-medium text-noir">{minimumGrams}–{maximumGrams} g net metal</p>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/70">{scope}</p>
                    <div className="mt-4" aria-live="polite" aria-atomic="true">
                      <p className="text-[10px] uppercase tracking-wide text-charcoal/70">{pricingBenchmark.metals[metal].label} · illustrative total</p>
                      <p className="mt-1 text-lg font-medium text-noir">{formatEstimateCurrency(budget.low.estimatedTotal)}–{formatEstimateCurrency(budget.high.estimatedTotal)}</p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal/65">IBJA {pricingBenchmark.displayDate} {pricingBenchmark.session} · not live. Final weight and price need design review.</p>
                  </div>
                  <a
                    href={getDesignConceptWhatsAppLink(concept, metal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Discuss the ${concept.title} concept on WhatsApp (opens in a new tab)`}
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-noir px-4 py-3 text-xs text-ivory transition-colors hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Discuss this idea
                  </a>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/70">Sends text and links. Use the options below to share a picture.</p>
                  <PhotoActions photo={{ id: concept.id, title: concept.title, image: concept.image, label: 'AI design concept · not yet made', pageUrl: getDesignConceptPageUrl(concept) }} />
                </div>
              </div>
            </article>
            );
          })}
        </div>

        <p className="mt-7 max-w-4xl text-xs leading-relaxed text-charcoal/70">
          Not ready stock or a promise of an exact finished result. Our workshop must review each concept for feasibility,
          comfort and strength before accepting an order. Materials, purity, dimensions, target weight and an itemised quote
          will be agreed with you. Concept images do not establish metal purity, stone type or weight.
        </p>
      </div>
    </section>
  );
}
