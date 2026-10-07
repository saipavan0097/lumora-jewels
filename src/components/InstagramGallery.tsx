import { Instagram, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
const moments = [
  { src: '/images/handmade/originals/27.webp', title: 'A shape begins', text: 'A wax model, held at the bench before the next stage of work.' },
  { src: '/images/handmade/originals/50.webp', title: 'Details take form', text: 'Openwork and floral shapes in progress, before the finished presentation.' },
  { src: '/images/handmade/originals/198.webp', title: 'Made at our bench', text: 'A close-up of a devotional relief during the making process.' },
];
export default function InstagramGallery() {
  return <section id="gallery" className="bg-noir py-24 text-ivory lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-10">
    <Reveal className="mb-12 max-w-2xl"><p className="text-xs uppercase tracking-luxe text-gold">Behind the finished piece</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">The hands behind the jewellery.</h2><p className="mt-6 text-sm leading-relaxed text-ivory/65">Original photographs from our workshop. Small details, work in progress and the care that goes into making an ornament by hand.</p></Reveal>
    <div className="grid gap-8 sm:grid-cols-3">{moments.map(moment => <figure key={moment.src}><a href={moment.src} target="_blank" rel="noopener noreferrer" aria-label={`Open original photo: ${moment.title}`} className="block overflow-hidden rounded-xl bg-ivory/5"><img src={moment.src} alt={moment.text} loading="lazy" className="aspect-[4/5] w-full object-contain" /></a><figcaption className="mt-5"><p className="text-[9px] uppercase tracking-wider text-gold">Original workshop photograph</p><h3 className="mt-2 font-heading text-2xl">{moment.title}</h3><p className="mt-2 text-xs leading-relaxed text-ivory/60">{moment.text}</p></figcaption></figure>)}</div>
    <a href="https://instagram.com/pavan_rajz" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3 text-xs uppercase tracking-wider text-gold"><Instagram className="h-4 w-4" />Follow the journey<ArrowUpRight className="h-4 w-4" /></a>
  </div></section>;
}
