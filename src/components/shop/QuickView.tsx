import { useState, useEffect } from 'react';
import { X, Star, ShoppingBag, Heart } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import { useShop } from '@/context/ShopContext';

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export default function QuickView({ product, onClose, onNavigate }: QuickViewProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;
  const wished = isInWishlist(product.id);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-noir/60 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.title}`}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-noir/5 text-noir transition-colors hover:bg-noir hover:text-ivory"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-l-2xl">
            <img src={product.images[activeImage]} alt={product.title} className="h-full w-full object-cover" />
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-2 w-2 rounded-full transition-all ${activeImage === i ? 'bg-gold w-6' : 'bg-ivory/60'}`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col p-7">
            <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-gold/80">{product.category}</p>
            <h2 className="mt-2 font-heading text-2xl font-medium text-noir">{product.title}</h2>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-noir/20'}`} strokeWidth={0} />
                ))}
              </div>
              <span className="text-xs font-light text-charcoal/40">({product.reviews} reviews)</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="font-heading text-2xl font-medium text-noir">{formatPrice(product.price)}</span>
              {product.oldPrice && <span className="text-sm font-light text-charcoal/40 line-through">{formatPrice(product.oldPrice)}</span>}
            </div>

            <p className="mt-5 text-sm font-light leading-relaxed text-charcoal/60">{product.description}</p>

            <div className="mt-5 border-t border-noir/8 pt-4">
              <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/45">Materials</p>
              <p className="mt-1 text-sm font-light text-noir">{product.materials}</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-noir/8 pt-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/45">Metal</p>
                <p className="mt-1 text-sm font-light text-noir">{product.metal}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/45">Stone</p>
                <p className="mt-1 text-sm font-light text-noir">{product.stone}</p>
              </div>
            </div>

            <div className="mt-auto flex gap-3 pt-6">
              <button
                onClick={() => { addToCart(product); onClose(); }}
                className="btn-gold flex flex-1 items-center justify-center gap-2 bg-gold py-3.5 text-[11px] font-medium uppercase tracking-wider-luxe text-noir"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label="Toggle wishlist"
                className={`flex h-12 w-12 items-center justify-center border transition-all duration-300 ${
                  wished ? 'border-gold bg-gold text-noir' : 'border-noir/15 text-noir hover:border-gold hover:text-gold'
                }`}
              >
                <Heart className={`h-5 w-5 ${wished ? 'fill-noir' : ''}`} strokeWidth={1.5} />
              </button>
            </div>

            <button
              onClick={() => { onClose(); onNavigate(`/product/${product.id}`); }}
              className="mt-3 text-center text-xs font-light tracking-wider-luxe text-gold transition-opacity hover:opacity-70"
            >
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
