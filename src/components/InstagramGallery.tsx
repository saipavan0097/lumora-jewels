import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { atelierPieces, getAtelierPageUrl } from '@/data/atelier';
const featuredIds = ['floral-peacock', 'crescent-jhumka', 'rectangular-deity-ring'];
export default function InstagramGallery() {
  const pieces = featuredIds.map(id => atelierPieces.find(piece => piece.id === id)!);
  return <section id="gallery" className="bg-noir py-24 text-ivory lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-10">
    <Reveal className="mb-12 max-w-2xl"><p className="text-xs uppercase tracking-luxe text-gold">A different perspective</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">Imagine it on you.</h2><p className="mt-6 text-sm leading-relaxed text-ivory/65">Discover how a pendant, a pair of earrings or a statement ring could complement your style.</p><p className="mt-3 text-xs leading-relaxed text-ivory/60">AI model previews · fit and scale are illustrative. Confirm the actual dimensions and included pieces with our workshop.</p></Reveal>
    <div className="grid gap-8 sm:grid-cols-3">{pieces.map(piece => <figure key={piece.id}><a href={getAtelierPageUrl(piece)} aria-label={`Explore ${piece.title}`} className="block overflow-hidden rounded-xl bg-ivory/5 focus-visible:outline-gold"><img src={piece.images.find(image => image.kind === 'worn')!.src} alt={`${piece.title} — AI model preview`} loading="lazy" decoding="async" width="1024" height="1280" className="aspect-[4/5] w-full object-contain" /></a><figcaption className="mt-5"><p className="text-[9px] uppercase tracking-wider text-gold">AI model preview</p><h3 className="mt-2 font-heading text-2xl"><a href={getAtelierPageUrl(piece)} className="focus-visible:outline-gold">{piece.title}</a></h3></figcaption></figure>)}</div>
    <a href="#/shop" className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/60 px-7 py-3 text-xs uppercase tracking-wider text-gold">Explore every design<ArrowUpRight className="h-4 w-4" /></a>
  </div></section>;
}
