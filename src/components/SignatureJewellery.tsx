import { ArrowRight, Eye, ShoppingBag } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Badge = 'New' | 'Bestseller' | 'Limited Edition' | 'Handcrafted';

interface SignatureProduct {
  name: string;
  purity: string;
  price: string;
  badge: Badge;
  image: string;
  productId: string;
}

const products: SignatureProduct[] = [
  {
    name: 'Eternal Solitaire Ring',
    purity: '18K',
    price: '₹3,98,000',
    badge: 'Bestseller',
    image: 'https://images.pexels.com/photos/30541171/pexels-photo-30541171.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-solitaire-ring',
  },
  {
    name: 'Heritage Gold Choker',
    purity: '22K',
    price: '₹5,12,000',
    badge: 'New',
    image: 'https://images.pexels.com/photos/20100141/pexels-photo-20100141.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-gold-chain-necklace',
  },
  {
    name: 'Celestia Diamond Set',
    purity: '18K',
    price: '₹7,45,000',
    badge: 'Limited Edition',
    image: 'https://images.pexels.com/photos/29245554/pexels-photo-29245554.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-jewellery-set',
  },
  {
    name: 'Régence Gold Bangle',
    purity: '22K',
    price: '₹2,84,000',
    badge: 'Handcrafted',
    image: 'https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-leaf-bangle',
  },
  {
    name: 'Aurora Pendant Necklace',
    purity: '18K',
    price: '₹2,45,000',
    badge: 'New',
    image: 'https://images.pexels.com/photos/10215179/pexels-photo-10215179.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-gold-pendant-necklace',
  },
  {
    name: 'Lumière Diamond Earrings',
    purity: '18K',
    price: '₹4,62,000',
    badge: 'Limited Edition',
    image: 'https://images.pexels.com/photos/7093769/pexels-photo-7093769.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-rose-gold-ring',
  },
  {
    name: 'Saffron Temple Jhumkas',
    purity: '22K',
    price: '₹3,20,000',
    badge: 'Handcrafted',
    image: 'https://images.pexels.com/photos/8031399/pexels-photo-8031399.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-gold-bangles-set',
  },
  {
    name: 'Monarch Signet Ring',
    purity: '22K',
    price: '₹1,78,000',
    badge: 'Bestseller',
    image: 'https://images.pexels.com/photos/13524236/pexels-photo-13524236.jpeg?auto=compress&cs=tinysrgb&w=800',
    productId: 'daivique-sapphire-ring',
  },
];

const badgeStyles: Record<Badge, string> = {
  New: 'bg-gold text-noir',
  Bestseller: 'bg-noir text-gold',
  'Limited Edition': 'border border-gold text-gold bg-noir/80',
  Handcrafted: 'border border-charcoal/40 text-ivory bg-charcoal/90',
};

interface SignatureJewelleryProps {
  onNavigate: (path: string) => void;
}

export default function SignatureJewellery({ onNavigate }: SignatureJewelleryProps) {
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
              <article className="card-lift group flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ivory">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Badge */}
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider-luxe ${badgeStyles[p.badge]}`}
                  >
                    {p.badge}
                  </span>

                  {/* Hover overlay with View Details */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="flex flex-col items-center gap-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-light uppercase tracking-wider-luxe text-ivory/80">
                        <Eye className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                        Quick View
                      </span>
                      <button
                        onClick={() => onNavigate(`/product/${p.productId}`)}
                        className="btn-gold inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-[10px] font-medium uppercase tracking-wider-luxe text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                      >
                        View Details
                        <ArrowRight className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 text-center">
                  <button
                    onClick={() => onNavigate(`/product/${p.productId}`)}
                    className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                  >
                    <h3 className="font-heading text-xl font-medium text-noir transition-colors duration-300 group-hover:text-gold">
                      {p.name}
                    </h3>
                  </button>
                  <p className="mt-1 text-xs font-light uppercase tracking-wider-luxe text-charcoal/45">
                    {p.purity} Gold
                  </p>
                  <p className="mt-3 font-heading text-lg font-medium text-gold">
                    {p.price}
                  </p>
                  <button
                    onClick={() => onNavigate(`/product/${p.productId}`)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-[10px] font-medium uppercase tracking-wider-luxe text-noir transition-all duration-300 hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
                    View Product
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
