export type MetalKey = 'gold22k' | 'gold18k' | 'silver999';

export const pricingBenchmark = {
  provider: 'India Bullion and Jewellers Association (IBJA)',
  date: '2026-10-07',
  displayDate: '7 October 2026',
  session: 'AM',
  currency: 'INR',
  isLive: false,
  sourceUrl: 'https://ibjarates.com/',
  datedSourceUrl: 'https://ibjarates.com/UploadedFiles/30DaysPdf/Pdf_8902_20261007084633689_Daily%20Opening%20and%20Closing%20Market%20Rate.pdf',
  excludes: ['GST', 'making charges', 'stones and other materials'],
  notice: 'Dated metal benchmark, not a live rate or a final jewellery price. Final weight, design, charges and tax require confirmation.',
  metals: {
    gold22k: { label: '22K gold (916)', ratePerGram: 135546 / 10, sourceAmount: 135546, sourceWeightGrams: 10 },
    gold18k: { label: '18K gold (750)', ratePerGram: 110982 / 10, sourceAmount: 110982, sourceWeightGrams: 10 },
    silver999: { label: 'Fine silver (999)', ratePerGram: 221584 / 1000, sourceAmount: 221584, sourceWeightGrams: 1000 },
  },
} as const;

export const pricingPolicy = {
  locations: ['Visakhapatnam', 'Hyderabad'],
  maximumNetMetalWeightGrams: 5000,
  silverPricingConfirmed: true,
  silverAdditionalRatePerGram: 250,
  goldChargesIncluded: true,
  silverChargesIncluded: true,
  separateTaxAdded: false,
  goldChargeNotice: 'The workshop confirms that its gold wastage percentage includes labour and all other charges; this estimate adds no extra charge.',
  silverChargeNotice: 'The workshop confirms silver pricing as the silver metal rate plus INR 250 per gram, including all charges. Gold wastage slabs do not apply to silver.',
  taxNotice: 'No separate GST charge is added to this estimate under the workshop\'s stated pricing policy. This is not a claim of GST exemption.',
  weightNotice: 'Enter net metal weight only, excluding stones, beads, thread and other non-metal materials. Weight cannot be measured from a photo.',
  estimateNotice: 'Indicative workshop total using a dated IBJA metal benchmark and the owner\'s stated all-in charges. Not a confirmed local retail rate or final quote.',
} as const;

export interface MetalEstimateInput {
  metal: MetalKey;
  netMetalWeightGrams: number;
  hasStones: boolean;
  ratePerGram?: number;
}

export interface MetalEstimate {
  metal: MetalKey;
  netMetalWeightGrams: number;
  ratePerGram: number;
  metalValue: number;
  wastagePercent: number | null;
  wastageValue: number | null;
  metalAndWastageSubtotal: number | null;
  silverChargePerGram: number;
  silverChargeValue: number;
  estimatedTotal: number;
  extraChargesAdded: 0;
  separateTaxAdded: 0;
  status: 'owner-indicative-all-in';
  isFinalQuote: false;
}

function validateNetMetalWeight(netMetalWeightGrams: number): void {
  if (typeof netMetalWeightGrams !== 'number' || !Number.isFinite(netMetalWeightGrams)
      || netMetalWeightGrams <= 0 || netMetalWeightGrams > pricingPolicy.maximumNetMetalWeightGrams) {
    throw new RangeError(`Net metal weight must be a finite number greater than 0 and no more than ${pricingPolicy.maximumNetMetalWeightGrams} grams.`);
  }
}

function validateHasStones(hasStones: boolean): void {
  if (typeof hasStones !== 'boolean') throw new TypeError('Specify whether the design has stones.');
}

/** Owner-provided GOLD wastage slabs, applied to net metal weight, not gross ornament weight. */
export function getGoldWastagePercent(netMetalWeightGrams: number, hasStones: boolean): number {
  validateNetMetalWeight(netMetalWeightGrams);
  validateHasStones(hasStones);
  if (netMetalWeightGrams < 5) return 15;
  if (netMetalWeightGrams <= 10) return 12;
  return hasStones ? 10 : 8;
}

export function calculateMetalEstimate(input: MetalEstimateInput): MetalEstimate {
  if (!input || typeof input !== 'object') throw new TypeError('Provide metal, net metal weight and stone details.');
  const { metal, netMetalWeightGrams, hasStones } = input;
  if (!Object.prototype.hasOwnProperty.call(pricingBenchmark.metals, metal)) {
    throw new TypeError('Choose 22K gold, 18K gold or fine silver (999).');
  }
  validateNetMetalWeight(netMetalWeightGrams);
  validateHasStones(hasStones);
  // Each benchmark already reflects the selected purity: do not multiply by purity again.
  const ratePerGram = input.ratePerGram ?? pricingBenchmark.metals[metal].ratePerGram;
  if (!Number.isFinite(ratePerGram) || ratePerGram <= 0 || ratePerGram > 1000000) throw new RangeError('Enter a valid metal rate per gram.');
  const metalValue = netMetalWeightGrams * ratePerGram;
  // The owner confirms a separate flat per-gram silver charge, not gold wastage slabs.
  const wastagePercent = metal === 'silver999' ? null : getGoldWastagePercent(netMetalWeightGrams, hasStones);
  const wastageValue = wastagePercent === null ? null : metalValue * wastagePercent / 100;
  const silverChargePerGram = metal === 'silver999' ? pricingPolicy.silverAdditionalRatePerGram : 0;
  const silverChargeValue = netMetalWeightGrams * silverChargePerGram;
  return {
    metal,
    netMetalWeightGrams,
    ratePerGram,
    metalValue,
    wastagePercent,
    wastageValue,
    metalAndWastageSubtotal: wastageValue === null ? null : metalValue + wastageValue,
    silverChargePerGram,
    silverChargeValue,
    estimatedTotal: metalValue + (wastageValue ?? 0) + silverChargeValue,
    extraChargesAdded: 0,
    separateTaxAdded: 0,
    status: 'owner-indicative-all-in',
    isFinalQuote: false,
  };
}

/** Round only the displayed currency; calculation results retain their precision. */
export function formatEstimateCurrency(value: number): string {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    throw new RangeError('Currency value must be a finite, non-negative number.');
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(value);
}
