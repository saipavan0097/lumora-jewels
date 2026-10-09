import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, MessageCircle, Search, X } from 'lucide-react';
import { atelierPieces, getAtelierPageUrl, getAtelierWhatsAppLink, type AtelierPiece } from '@/data/atelier';
import PhotoActions from '@/components/PhotoActions';
import Availability from '@/components/Availability';

function PieceDialog({ piece, onClose }: { piece: AtelierPiece; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [view, setView] = useState(0);
  const activeImage = piece.images[view];
  const changeView = (direction: number) => setView(index => (index + direction + piece.images.length) % piece.images.length);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog?.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, []);
  return <dialog ref={dialogRef} aria-labelledby="piece-title" aria-describedby="piece-description" onCancel={onClose}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); changeView(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); changeView(-1); } }}
    className="m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl bg-ivory p-0 text-noir shadow-2xl backdrop:bg-noir/80">
    <div className="relative grid md:grid-cols-[1.15fr_1fr]">
      <button autoFocus onClick={onClose} aria-label="Close jewellery details" className="absolute right-3 top-3 z-10 rounded-full border border-noir/10 bg-white p-3 focus-visible:outline-gold"><X className="h-5 w-5" /></button>
      <div className="bg-[#f6f1e9] p-4 sm:p-6">
        <div className="relative flex h-[45dvh] min-h-64 items-center justify-center md:h-[60dvh]">
          <img src={activeImage.src} alt={`${piece.title} — ${activeImage.label}`} className="h-full w-full object-contain" />
          {piece.images.length > 1 && <><button onClick={() => changeView(-1)} aria-label="Previous photo" className="absolute left-1 rounded-full border border-noir/10 bg-white/95 p-2 focus-visible:outline-gold"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => changeView(1)} aria-label="Next photo" className="absolute right-1 rounded-full border border-noir/10 bg-white/95 p-2 focus-visible:outline-gold"><ArrowRight className="h-4 w-4" /></button></>}
        </div>
        <p aria-live="polite" className="mt-3 text-center text-xs text-charcoal/70">{activeImage.label} · {view + 1} / {piece.images.length}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">{piece.images.map((img, index) => <button key={img.src} aria-label={`Show ${img.label}`} aria-pressed={index === view} onClick={() => setView(index)} className={`h-16 w-14 overflow-hidden rounded border-2 focus-visible:outline-gold ${index === view ? 'border-gold' : 'border-transparent'}`}><img src={img.src} alt="" className="h-full w-full object-contain" /></button>)}</div>
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10">
        <p className="text-[10px] uppercase tracking-luxe text-gold">From our family workshop · {piece.category}</p>
        <h2 id="piece-title" className="mt-4 font-heading text-4xl leading-tight">{piece.title}</h2>
        <p id="piece-description" className="mt-5 text-sm leading-relaxed text-charcoal/75">{piece.description}</p>
        <Availability pieceId={piece.id} details />
        <p className="mt-4 text-xs leading-relaxed text-charcoal/65">A showcase of our handmade work. Please enquire for material details, sizing, availability and a current quote.</p>
        <p className="mt-3 text-xs leading-relaxed text-charcoal/65">Weight is not inferred from this photo. For an illustrative budget at a weight you choose, <a href="#/#price-estimator" onClick={onClose} className="underline underline-offset-4">open the budget calculator</a>.</p>
        <a href={getAtelierWhatsAppLink(piece)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-xs font-medium uppercase tracking-wider focus-visible:outline-noir"><MessageCircle className="h-4 w-4" />Enquire about this piece</a>
        <p className="mt-2 text-xs leading-relaxed text-charcoal/70">Opens WhatsApp with your enquiry and a link to this piece. To attach a picture, use the photo options below.</p>
        <PhotoActions key={activeImage.src} photo={{ id: piece.id, title: piece.title, image: activeImage.src, label: activeImage.label, pageUrl: getAtelierPageUrl(piece) }} />
        {piece.images.some(img => img.kind === 'edited') && <div className="mt-6 rounded-lg border border-gold/30 p-4 text-xs leading-relaxed text-charcoal/70"><Camera className="mb-2 h-4 w-4 text-gold" />AI studio edits improve presentation and may differ in fine detail. The original workshop photographs are included for comparison and are the reference for the actual piece.<button onClick={() => setView(piece.images.findIndex(img => img.kind === 'original'))} className="mt-3 block underline underline-offset-4 focus-visible:outline-gold">View original photograph</button></div>}
        <p className="mt-5 text-[10px] text-charcoal/50">Reference: {piece.id}</p>
      </div>
    </div>
  </dialog>;
}

export function AtelierShowcase({ pieces, initialPiece }: { pieces: AtelierPiece[]; initialPiece?: AtelierPiece }) {
  const [selected, setSelected] = useState<AtelierPiece | null>(initialPiece ?? null);
  return <>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {pieces.map(piece => <article key={piece.id} className="group overflow-hidden rounded-xl border border-noir/10 bg-white">
        <button onClick={() => setSelected(piece)} aria-label={`View ${piece.title}`} className="relative block aspect-[4/5] w-full overflow-hidden bg-[#f6f1e9] focus-visible:outline-gold focus-visible:outline-offset-[-3px]">
          <img src={piece.image} alt={piece.title} loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[9px] uppercase tracking-wider text-charcoal">{piece.images[0].label}{piece.images[0].kind === 'edited' ? ' · original included' : ''}</span>
        </button>
<div className="p-5 sm:p-6"><p className="text-[10px] uppercase tracking-luxe text-gold">{piece.category}</p><h3 className="mt-2 font-heading text-2xl text-noir"><button onClick={() => setSelected(piece)} className="text-left focus-visible:outline-gold">{piece.title}</button></h3><Availability pieceId={piece.id} /><p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-charcoal/65">{piece.description}</p><button onClick={() => setSelected(piece)} className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs uppercase tracking-wider text-noir focus-visible:outline-gold">View piece & photos <ArrowRight className="h-3.5 w-3.5" /></button></div>
      </article>)}
    </div>
    {selected && <PieceDialog key={selected.id} piece={selected} onClose={() => setSelected(null)} />}
  </>;
}

export default function AtelierGallery({ externalSearch = '', initialPieceId }: { externalSearch?: string; initialPieceId?: string }) {
  const [search, setSearch] = useState(externalSearch);
  const [category, setCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => { setSearch(initialPieceId ? '' : externalSearch); setCategory('All'); setVisibleCount(12); }, [externalSearch, initialPieceId]);
  const categories = ['All', ...new Set(atelierPieces.map(piece => piece.category))];
  const filtered = useMemo(() => { const query = search.trim().toLowerCase(); return atelierPieces.filter(piece => (category === 'All' || piece.category === category) && `${piece.title} ${piece.description} ${piece.category}`.toLowerCase().includes(query)); }, [search, category]);
  const reset = () => { setSearch(''); setCategory('All'); setVisibleCount(12); };
  return <section className="min-h-screen bg-ivory pb-24 pt-32"><div className="mx-auto max-w-7xl px-6 lg:px-10">
    <a href="#/" className="inline-flex items-center gap-2 text-xs text-charcoal/70"><ArrowLeft className="h-3 w-3" />Back to home</a>
    <nav aria-label="Design and budget tools" className="mt-6 flex flex-wrap gap-3">
      <a href="#/#design-ideas" className="rounded-full border border-gold px-5 py-3 text-xs text-noir focus-visible:outline-gold">New design ideas</a>
      <a href="#/#price-estimator" className="rounded-full border border-noir/20 px-5 py-3 text-xs text-noir focus-visible:outline-gold">Explore a price estimate</a>
    </nav>
    <div className="mb-12 mt-9 max-w-2xl"><p className="text-xs uppercase tracking-luxe text-gold">Made by our family</p><h1 className="mt-4 font-heading text-5xl sm:text-6xl">Our Work</h1><p className="mt-5 text-sm leading-relaxed text-charcoal/70">Explore the ornaments made by Sai Pavan and his father. Open a piece to see its workshop photographs, alternate angles and available studio edits.</p></div>
    <div className="mb-7 flex flex-col gap-5">
      <label className="relative block max-w-lg"><span className="sr-only">Search handmade jewellery</span><Search className="absolute left-4 top-4 h-4 w-4 text-charcoal/50" /><input value={search} onChange={event => { setSearch(event.target.value); setVisibleCount(12); }} type="search" placeholder="Search necklaces, jhumkas, pendants…" className="w-full rounded-full border border-noir/20 bg-white py-3 pl-11 pr-5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" /></label>
      <div className="flex flex-wrap gap-2" aria-label="Filter jewellery categories">{categories.map(value => <button key={value} aria-pressed={category === value} onClick={() => { setCategory(value); setVisibleCount(12); }} className={`rounded-full border px-4 py-2 text-xs focus-visible:outline-gold ${category === value ? 'border-noir bg-noir text-ivory' : 'border-noir/15 bg-white text-charcoal hover:border-gold'}`}>{value}</button>)}</div>
      <p aria-live="polite" className="text-xs text-charcoal/65">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}{search.trim() ? ` matching “${search.trim()}”` : ''}</p>
    </div>
    {filtered.length ? <AtelierShowcase pieces={filtered.slice(0, visibleCount)} initialPiece={atelierPieces.find(piece => piece.id === initialPieceId)} /> : <div className="rounded-xl border border-noir/10 bg-white px-6 py-20 text-center"><h2 className="font-heading text-3xl">No matching pieces</h2><p className="mt-3 text-sm text-charcoal/65">Try another name or category.</p><button onClick={reset} className="mt-6 rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-wider">Clear filters</button></div>}
    {filtered.length > visibleCount && <div className="mt-12 text-center"><button onClick={() => setVisibleCount(count => count + 12)} className="rounded-full border border-gold px-8 py-4 text-xs uppercase tracking-wider focus-visible:outline-gold">Load more pieces ({filtered.length - visibleCount} remaining)</button></div>}
    <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-relaxed text-charcoal/60">These photographs document our work, not a live stock list. Names are descriptive; materials, weights, prices and availability are confirmed personally on enquiry.</p>
  </div></section>;
}
