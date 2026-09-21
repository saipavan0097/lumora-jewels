import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Badge = 'New' | 'Bestseller' | 'Limited';

const products: {
  name: string;
  purity: string;
  price: string;
  badge: Badge;
  image: string;
}[] = [
  {
    name: 'Eternal Solitaire Ring',
    purity: '18K',
    price: '$4,850',
    badge: 'Bestseller',
    image: 'https://images.pexels.com/photos/30541171/pexels-photo-30541171.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Heritage Gold Choker',
    purity: '22K',
    price: '$6,200',
    badge: 'New',
    image: 'https://images.pexels.com/photos/20100141/pexels-photo-20100141.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Celestia Diamond Set',
    purity: '18K',
    price: '$8,900',
    badge: 'Limited',
    image: 'https://images.pexels.com/photos/29245554/pexels-photo-29245554.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Régence Gold Bangle',
    purity: '22K',
    price: '$3,450',
    badge: 'Bestseller',
    image: 'https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Aurora Pendant Necklace',
    purity: '18K',
    price: '$2,980',
    badge: 'New',
    image: 'https://images.pexels.com/photos/10215179/pexels-photo-10215179.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Lumière Diamond Earrings',
    purity: '18K',
    price: '$5,600',
    badge: 'Limited',
    image: 'https://images.pexels.com/photos/7093769/pexels-photo-7093769.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Saffron Temple Jhumkas',
    purity: '22K',
    price: '$3,890',
    badge: 'Bestseller',
    image: 'https://images.pexels.com/photos/8031399/pexels-photo-8031399.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Monarch Signet Ring',
    purity: '22K',
    price: '$2,150',
    badge: 'New',
    image: 'https://images.pexels.com/photos/13524236/pexels-photo-13524236.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const badgeStyles: Record<Badge, string> = {
  New: 'bg-gold text-noir',
  Bestseller: 'bg-noir text-gold',
  Limited: 'border border-gold text-gold bg-transparent',
};

export default function SignatureJewellery() {
  return (
    <section id="signature" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Masterpieces
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Signature Jewellery
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-charcoal/60">
            Each piece is a singular creation — meticulously crafted by master
            artisans to be treasured for generations.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 80}>
              <article className="group flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ivory">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />

                  {/* Badge */}
                  <span
                    className={`absolute left-4 top-4 px-3 py-1 text-[10px] font-medium uppercase tracking-wider-luxe ${badgeStyles[p.badge]}`}
                  >
                    {p.badge}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <button className="btn-gold inline-flex items-center gap-2 bg-gold px-6 py-2.5 text-[10px] font-medium uppercase tracking-wider-luxe text-noir">
                      View Details
                      <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 text-center">
                  <h3 className="font-heading text-xl font-medium text-noir transition-colors duration-300 group-hover:text-gold">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-light uppercase tracking-wider-luxe text-charcoal/45">
                    {p.purity} Gold
                  </p>
                  <p className="mt-3 font-heading text-lg font-medium text-gold">
                    {p.price}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
