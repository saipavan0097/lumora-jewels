import { pricingBenchmark, type MetalKey } from '@/data/pricing';

export type MetalRates = Record<MetalKey, number>;
export interface WorkshopRates extends MetalRates {
  id: number;
  effective_date: string;
  published: boolean;
  revision: number;
  updated_at: string;
}
export const availabilityLabels = {
  enquire: 'Enquire for availability',
  available: 'Available · confirm with workshop',
  made_to_order: 'Made to order',
  unavailable: 'Currently unavailable',
} as const;
export type AvailabilityStatus = keyof typeof availabilityLabels;
export interface PieceAvailability {
  piece_id: string;
  status: AvailabilityStatus;
  note: string;
  revision: number;
  updated_at: string;
}
export const historicalRates: MetalRates = {
  gold22k: pricingBenchmark.metals.gold22k.ratePerGram,
  gold18k: pricingBenchmark.metals.gold18k.ratePerGram,
  silver999: pricingBenchmark.metals.silver999.ratePerGram,
};
export function indiaToday(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date);
  const value = (type: string) => parts.find(part => part.type === type)?.value;
  return value('year') + '-' + value('month') + '-' + value('day');
}
export function formatRateDate(value: string): string {
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(value + 'T00:00:00+05:30'));
}
export function validRates(value: MetalRates): boolean {
  return Object.values(value).length === 3 && Object.values(value).every(rate => Number.isFinite(rate) && rate > 0 && rate <= 1000000)
    && value.gold18k <= value.gold22k;
}
export function validateRateDraft(value: MetalRates, date: string): string | null {
  if (!validRates(value)) return 'Enter positive rates up to ₹10,00,000 per gram. The 18K rate must not exceed 22K.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0,10) !== date || date > indiaToday()) return 'Choose a valid rate date that is today or earlier.';
  return null;
}

