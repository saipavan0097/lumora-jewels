import { useId, useState } from 'react';
import { ArrowUpRight, Calculator, MessageCircle } from 'lucide-react';
import {
  calculateMetalEstimate,
  formatEstimateCurrency,
  pricingBenchmark,
  pricingPolicy,
  type MetalKey,
} from '@/data/pricing';

function formatRate(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 3,
  }).format(value);
}

export default function PriceEstimator() {
  const fieldId = useId();
  const [metal, setMetal] = useState<MetalKey>('gold22k');
  const [weight, setWeight] = useState('');
  const [hasStones, setHasStones] = useState(false);
  const isSilver = metal === 'silver999';
  const enteredWeight = weight.trim() !== '';
  const numericWeight = Number(weight);
  const weightIsValid = enteredWeight && Number.isFinite(numericWeight)
    && numericWeight > 0 && numericWeight <= pricingPolicy.maximumNetMetalWeightGrams;
  const estimate = weightIsValid ? calculateMetalEstimate({
    metal, netMetalWeightGrams: numericWeight, hasStones,
  }) : null;
  const selectedMetal = pricingBenchmark.metals[metal];
  const enquiryText = estimate?.estimatedTotal !== null && estimate?.estimatedTotal !== undefined
    ? `Hi DAIVIQUE, I would like to discuss a ${selectedMetal.label} design with a planning net metal weight of ${weight} g${isSilver ? '' : `, ${hasStones ? 'with' : 'without'} stones`}. The website budget estimate was ${formatEstimateCurrency(estimate.estimatedTotal)} using the ${pricingBenchmark.displayDate} ${pricingBenchmark.session} benchmark. Please confirm the design, achievable weight and current final quote.`
    : 'Hi DAIVIQUE, I would like help planning a jewellery design and budget. Please discuss materials, weight and a current quote with me.';

  return (
    <section id="price-estimator" aria-labelledby={`${fieldId}-heading`} className="bg-ivory px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-gold">Plan a piece, personally</p>
          <h2 id={`${fieldId}-heading`} className="mt-4 font-heading text-4xl text-noir sm:text-5xl">A little clarity for your budget.</h2>
          <p className="mt-5 text-sm leading-relaxed text-charcoal/80">Explore an approximate gold or silver budget using a weight you choose. This does not measure or price an ornament from its photograph.</p>
          <p className="mt-3 text-xs leading-relaxed text-charcoal/70">Serving customers in Visakhapatnam and Hyderabad.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-noir/10 bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3 text-noir"><Calculator className="h-5 w-5 text-gold" aria-hidden="true" /><h3 className="font-heading text-2xl">Choose your starting point</h3></div>
            <label htmlFor={`${fieldId}-metal`} className="block text-sm text-charcoal">Metal</label>
            <select id={`${fieldId}-metal`} value={metal} onChange={(event) => setMetal(event.target.value as MetalKey)} className="mt-2 w-full rounded-lg border border-noir/20 bg-white px-4 py-3 text-sm text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              <option value="gold22k">22K gold (916)</option>
              <option value="gold18k">18K gold (750)</option>
              <option value="silver999">Fine silver (999 benchmark)</option>
            </select>

            <label htmlFor={`${fieldId}-weight`} className="mt-6 block text-sm text-charcoal">Planned net metal weight (grams)</label>
            <input id={`${fieldId}-weight`} type="number" inputMode="decimal" min="0.001" max={pricingPolicy.maximumNetMetalWeightGrams} step="any" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="Enter a weight to explore" aria-describedby={`${fieldId}-weight-help${enteredWeight && !weightIsValid ? ` ${fieldId}-weight-error` : ''}`} aria-invalid={enteredWeight && !weightIsValid} className="mt-2 w-full rounded-lg border border-noir/20 bg-white px-4 py-3 text-sm text-noir placeholder:text-charcoal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" />
            <p id={`${fieldId}-weight-help`} className="mt-2 text-xs leading-relaxed text-charcoal/70">Exclude stones, beads, thread and other non-metal materials. No weight has been assumed for any photographed piece.</p>
            {enteredWeight && !weightIsValid && <p id={`${fieldId}-weight-error`} className="mt-2 text-xs text-red-700">Enter a weight greater than 0 and no more than {pricingPolicy.maximumNetMetalWeightGrams} grams.</p>}

            {!isSilver && <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-charcoal">
              <input type="checkbox" checked={hasStones} onChange={(event) => setHasStones(event.target.checked)} className="mt-1 h-4 w-4 accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" />
              <span>My planned design includes stones</span>
            </label>}

            <div className="mt-7 rounded-xl bg-ivory p-4">
              {isSilver ? <>
                <h4 className="text-sm font-medium text-noir">Workshop’s silver rule, all charges included</h4>
                <p className="mt-3 text-xs leading-relaxed text-charcoal/80">Silver metal rate + {formatEstimateCurrency(pricingPolicy.silverAdditionalRatePerGram)} per gram.</p>
                <p className="mt-3 text-xs leading-relaxed text-charcoal/70">Multiply that combined rate by your planned net silver weight. Gold wastage percentages are not applied. The workshop confirms this includes labour and all other charges.</p>
              </> : <>
              <h4 className="text-sm font-medium text-noir">Workshop’s gold charge, including labour</h4>
              <ul className="mt-3 space-y-1 text-xs leading-relaxed text-charcoal/80">
                <li>Below 5 g: 15%</li>
                <li>5–10 g, including both limits: 12%</li>
                <li>Above 10 g: 10% with stones · 8% without stones</li>
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-charcoal/70">The workshop calls this its wastage charge and confirms that it includes labour and all other charges. No additional charge is automatically added.</p>
              </>}
            </div>
          </div>

          <div className="rounded-2xl bg-noir p-6 text-ivory sm:p-8">
            <p className="text-xs uppercase tracking-widest text-gold">Indicative workshop estimate</p>
            <div aria-live="polite" aria-atomic="true" className="mt-6">
              {estimate && estimate.estimatedTotal !== null ? <>
                <p className="break-words font-heading text-5xl sm:text-6xl">{formatEstimateCurrency(estimate.estimatedTotal)}</p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/70">Approximate total for your planning inputs, subject to the workshop’s current rate and final quote.</p>
                <dl className="mt-7 space-y-3 text-sm">
                  <div className="flex flex-wrap justify-between gap-2"><dt className="text-ivory/70">Net metal · {numericWeight} g</dt><dd>{formatEstimateCurrency(estimate.metalValue)}</dd></div>
                  {isSilver
                    ? <div className="flex flex-wrap justify-between gap-2"><dt className="text-ivory/70">All-in silver charge · {formatEstimateCurrency(estimate.silverChargePerGram)} / g</dt><dd>{formatEstimateCurrency(estimate.silverChargeValue)}</dd></div>
                    : <div className="flex flex-wrap justify-between gap-2"><dt className="text-ivory/70">All-in wastage charge · {estimate.wastagePercent}%</dt><dd>{formatEstimateCurrency(estimate.wastageValue ?? 0)}</dd></div>}
                </dl>
                <p className="mt-3 text-xs text-ivory/50">Amounts rounded for display only.</p>
              </> : <>
                <p className="font-heading text-3xl">Your budget begins with a weight.</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">Enter a planned net metal weight to see an estimate. We’ll confirm what is achievable for your chosen design.</p>
              </>}
            </div>

            <div className="mt-7 border-t border-ivory/20 pt-6 text-xs leading-relaxed text-ivory/70">
              <p>{selectedMetal.label} benchmark: <span className="text-ivory">{formatRate(selectedMetal.ratePerGram)} / g</span></p>
              <p className="mt-2">IBJA · {pricingBenchmark.displayDate} · {pricingBenchmark.session}. Not a live rate or a confirmed local retail rate.</p>
              <a href={pricingBenchmark.datedSourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-gold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">View dated benchmark<ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a>
              <p className="mt-4">No separate GST charge is added under the workshop’s stated pricing policy. This is not a claim of GST exemption.</p>
              <p className="mt-3">Final quote, design feasibility and net weight are confirmed by the workshop before an order.</p>
            </div>

            <a href={`https://wa.me/917661930097?text=${encodeURIComponent(enquiryText)}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-center text-xs uppercase tracking-wide text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-noir"><MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />Discuss a personal quote</a>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-noir/10 bg-white/60 p-5 text-xs leading-relaxed text-charcoal/80">
          <p className="font-medium text-noir">Interested in pure-silver work?</p>
          <p className="mt-2">The fine-silver (999) metal benchmark is {formatRate(pricingBenchmark.metals.silver999.ratePerGram)} / g for {pricingBenchmark.displayDate} {pricingBenchmark.session}. The workshop adds {formatEstimateCurrency(pricingPolicy.silverAdditionalRatePerGram)} / g, including all charges. The benchmark is not an assay claim for a pictured piece; confirm its actual purity and weight with the workshop. Gold percentage slabs do not apply to silver.</p>
        </div>
      </div>
    </section>
  );
}
