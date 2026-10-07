import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const collections = [
  { title: 'Necklaces', description: 'Bead strands, floral stations and traditional coin work.', image: 'green-floral-strands' },
  { title: 'Pendants', description: 'Openwork patterns and detailed devotional reliefs.', image: 'floral-peacock' },
  { title: 'Earrings', description: 'Small engraved drops and intricate jhumka details.', image: 'crescent-jhumka' },
  { title: 'Rings', description: 'Personal motifs and sculpted statement pieces.', image: 'ganesha-ring' },
];
export default function FeaturedCollections() {
  return <section id="collections" className="bg-ivory py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10">
    <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-luxe text-gold">Explore our craft</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">A world of handmade details.</h2></div><a href="#/shop" className="inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-wider">Browse our work <ArrowRight className="h-4 w-4" /></a></Reveal>
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">{collections.map(collection => <article key={collection.title} className="overflow-hidden rounded-xl bg-white"><a href="#/shop" aria-label={`Explore our handmade ${collection.title.toLowerCase()}`}><img src={`/images/handmade/edits/${collection.image}.webp`} alt={`${collection.title} — AI studio edit`} loading="lazy" className="aspect-square w-full object-contain bg-[#f6f1e9]" /><div className="p-4 sm:p-6"><h3 className="font-heading text-2xl">{collection.title}</h3><p className="mt-2 text-xs leading-relaxed text-charcoal/65">{collection.description}</p></div></a></article>)}</div>
    <p className="mt-5 text-xs text-charcoal/55">Studio presentation edits shown. Original photographs are available with each piece.</p>
  </div></section>;
}
