import { useWorkshop } from '@/hooks/useWorkshop';
import { availabilityLabels } from '@/lib/workshopData';

export default function Availability({ pieceId, details = false }: { pieceId: string; details?: boolean }) {
  const { pieces, connection } = useWorkshop();
  const piece = pieces[pieceId];
  return <div className="mt-3 text-xs leading-relaxed text-charcoal/75">
    <p className="font-medium">{piece ? (availabilityLabels[piece.status] ?? availabilityLabels.enquire) : 'Enquire for availability'}</p>
    {details && piece?.note && <p className="mt-1">{piece.note}</p>}
    {details && piece && piece.status !== 'enquire' && <p className="mt-1 text-charcoal/60">Workshop update: {new Date(piece.updated_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })} IST. Confirm before ordering.</p>}
    {details && connection === 'offline' && <p className="mt-1">Current availability could not be refreshed. Please check with us.</p>}
  </div>;
}

