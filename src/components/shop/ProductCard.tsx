import { Star, Heart, Eye, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import { useShop } from '@/context/ShopContext';

const badgeStyles: Record<string, string> = {
  'Best Seller': 'bg-gold text-noir',
  'New Arrival': 'bg-noir text-gold',
  'Limited Edition': 'bg-charcoal text-ivory',
  'Exclusive': 'bg-ivory text-noir border border-gold',
};

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onNavigate: (path: string) => void;
}

export default function ProductCard({ product, onQuickView, onNavigate }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const wished = isInWishlist(product.id);

  return (
    <article className="card-lift group relative overflow-hidden rounded-2xl border border-noir/8 bg-white shadow-[0_4px_24px_rgba(17,17,17,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(201,162,39,0.15)]">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        {/* Gold border animation on hover */}
        <div className="pointer-events-none absolute inset-0 border-0 border-gold opacity-0 transition-all duration-500 group-hover:border-2 group-hover:opacity-100 rounded-t-2xl" />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider-luxe ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
            wished
              ? 'border-gold bg-gold text-noir'
              : 'border-ivory/40 bg-noir/30 text-ivory backdrop-blur-sm hover:border-gold hover:bg-gold hover:text-noir'
          }`}
        >
          <Heart className={`h-4 w-4 ${wished ? 'fill-noir' : ''}`} strokeWidth={1.5} />
        </button>

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-noir/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button
          onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-ivory/95 px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider-luxe text-noir backdrop-blur-sm transition-all duration-300 hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
            <Eye className="h-3.5 w-3.5" strokeWidth={1.5} />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-gold/80">
          {product.category}
        </p>

        {/* Title */}
        <button
          onClick={() => onNavigate(`/product/${product.id}`)}
          className="mt-1.5 block text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
        >
          <h3 className="font-heading text-lg font-medium text-noir transition-colors duration-300 group-hover:text-gold">
            {product.title}
          </h3>
        </button>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-noir/20'}`}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-[10px] font-light text-charcoal/40">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="font-heading text-lg font-medium text-noir">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs font-light text-charcoal/40 line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="btn-gold mt-4 flex w-full items-center justify-center gap-2 bg-noir py-3 text-[11px] font-medium uppercase tracking-wider-luxe text-ivory transition-all duration-300 hover:bg-gold hover:text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
