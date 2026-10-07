import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { AtelierShowcase } from '@/components/AtelierGallery';
import { atelierPieces } from '@/data/atelier';

export default function SignatureJewellery() {
  return <section id="signature" className="bg-white py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <Reveal className="mb-14 max-w-2xl">
        <p className="text-xs uppercase tracking-luxe text-gold">From our family workshop</p>
        <h2 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl">Made by hand.<br />Made to mean more.</h2>
        <p className="mt-6 text-sm leading-relaxed text-charcoal/65">A closer look at the ornaments made by Sai Pavan and his father. Every piece has a workshop photograph behind it—and a story in its details.</p>
      </Reveal>
      <AtelierShowcase pieces={atelierPieces.filter(piece => piece.featured)} />
      <div className="mt-12 text-center"><a href="#/shop" className="inline-flex items-center gap-3 rounded-full bg-noir px-8 py-4 text-xs uppercase tracking-wider text-ivory">Explore all {atelierPieces.length} pieces <ArrowRight className="h-4 w-4" /></a><p className="mx-auto mt-5 max-w-lg text-xs leading-relaxed text-charcoal/60">Studio images are AI-edited presentations. Open a piece to compare its original photograph and enquire directly.</p></div>
    </div>
  </section>;
}
