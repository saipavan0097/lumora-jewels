import { useSyncExternalStore } from 'react';
import { workshopClient } from '@/lib/workshopClient';
import { historicalRates, formatRateDate, indiaToday, validRates, type WorkshopRates, type PieceAvailability } from '@/lib/workshopData';
import { pricingBenchmark } from '@/data/pricing';

interface WorkshopSnapshot {
  rates: WorkshopRates | null;
  pieces: Record<string, PieceAvailability>;
  connection: 'loading' | 'connected' | 'offline';
}
const initial: WorkshopSnapshot = { rates: null, pieces: {}, connection: 'loading' };
let snapshot = initial;
const listeners = new Set<() => void>();
let stop: (() => void) | undefined;
let generation = 0;

function start() {
  const current = ++generation;
  let running = false;
  let again = false;
  const refresh = async () => {
    if (current !== generation) return;
    if (running) { again = true; return; }
    running = true;
    try {
      const [ratesResult, piecesResult] = await Promise.all([
        workshopClient.from('workshop_rates').select('*').eq('id', 1).eq('published', true).maybeSingle(),
        workshopClient.from('piece_availability').select('*'),
      ]);
      if (current !== generation) return;
      if (ratesResult.error || piecesResult.error) throw new Error('Cannot refresh workshop details');
      const rates = ratesResult.data as WorkshopRates | null;
      if (rates && (!validRates({gold22k:rates.gold22k,gold18k:rates.gold18k,silver999:rates.silver999}) || rates.effective_date > indiaToday())) throw new Error('Invalid rate data');
      snapshot = { rates, pieces: Object.fromEntries((piecesResult.data ?? []).map(piece => [piece.piece_id, piece as PieceAvailability])), connection: 'connected' };
      listeners.forEach(listener => listener());
    } catch {
      if (current !== generation) return;
      snapshot = { rates: null, pieces: {}, connection: 'offline' };
      listeners.forEach(listener => listener());
    } finally {
      running = false;
      if (again) { again = false; void refresh(); }
    }
  };
  const onVisible = () => { if (!document.hidden) void refresh(); };
  const channel = workshopClient.channel('public-workshop')
    .on('postgres_changes', {event:'*',schema:'public',table:'workshop_rates'}, () => { void refresh(); })
    .on('postgres_changes', {event:'*',schema:'public',table:'piece_availability'}, () => { void refresh(); })
    .subscribe(status => { if (status === 'SUBSCRIBED') void refresh(); });
  const timer = window.setInterval(onVisible, 60000);
  window.addEventListener('focus', onVisible);
  window.addEventListener('online', onVisible);
  document.addEventListener('visibilitychange', onVisible);
  void refresh();
  return () => {
    ++generation;
    window.clearInterval(timer);
    window.removeEventListener('focus', onVisible);
    window.removeEventListener('online', onVisible);
    document.removeEventListener('visibilitychange', onVisible);
    void workshopClient.removeChannel(channel);
  };
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) stop = start();
  return () => { listeners.delete(listener); if (!listeners.size) { stop?.(); stop = undefined; } };
}
export function useWorkshop() {
  const state = useSyncExternalStore(subscribe, () => snapshot, () => initial);
  const ownerRates = state.rates;
  return {
    ...state,
    metalRates: ownerRates ? { gold22k: ownerRates.gold22k, gold18k: ownerRates.gold18k, silver999: ownerRates.silver999 } : historicalRates,
    rateDescription: ownerRates
      ? 'Workshop rate dated ' + formatRateDate(ownerRates.effective_date) + (ownerRates.effective_date === indiaToday() ? '' : ' · not today’s rate')
      : 'Historical IBJA benchmark · ' + pricingBenchmark.displayDate + ' ' + pricingBenchmark.session + ' · not live',
    rateNotice: state.connection === 'offline'
      ? 'Current workshop updates are unavailable. Estimates use the dated benchmark below; please confirm a current quote.'
      : ownerRates ? 'Manually updated by the workshop. Indicative estimate; final quote requires confirmation.'
      : 'The workshop has not published current rates. These estimates use the dated benchmark below.',
  };
}

