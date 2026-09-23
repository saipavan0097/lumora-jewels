import { useState } from 'react';
import { Star, Heart, ShoppingBag, ZoomIn, Truck, ShieldCheck, Sparkles, ChevronRight, CalendarHeart } from 'lucide-react';
import { getProductById, getRelatedProducts, formatPrice, type Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';
import ProductCard from '@/components/shop/ProductCard';
import QuickView from '@/components/shop/QuickView';
import Reveal from '@/components/Reveal';

interface ProductPageProps {
  productId: string;
  onNavigate: (path: string) => void;
}

const tabs = ['Description', 'Materials', 'Size Guide', 'Shipping', 'Care'];

export default function ProductPage({ productId, onNavigate }: ProductPageProps) {
  const product = getProductById(productId);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [quantity, setQuantity] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center pt-32 text-center">
        <p className="font-heading text-2xl text-noir">Piece not found</p>
        <button onClick={() => onNavigate('/shop')} className="btn-outline-gold mt-6 border border-gold/60 px-6 py-3 text-[11px] font-medium uppercase tracking-wider-luxe text-noir">Return to Shop</button>
      </div>
    );
  }

  const wished = isInWishlist(product.id);
  const related = getRelatedProducts(product);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const tabContent: Record<number, string> = {
    0: product.description,
    1: product.materials,
    2: 'Rings: Size 4–12 available. Bangles: 2-4, 2-6, 2-8 sizes. Necklaces: 16, 18, 20 inch chains. Free resizing on all pieces.',
    3: 'Complimentary insured shipping worldwide. Delivery within 3–7 business days. Free returns within 30 days.',
    4: 'Store in the provided DAIVIQUE box. Clean with a soft cloth. Avoid contact with perfumes and chemicals. Complimentary lifetime cleaning service.',
  };

  return (
    <section className="min-h-screen bg-ivory pt-32 pb-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[11px] font-light tracking-wider-luxe text-charcoal/45">
          <button onClick={() => onNavigate('/')} className="transition-colors hover:text-gold">Home</button>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <button onClick={() => onNavigate('/shop')} className="transition-colors hover:text-gold">Shop</button>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <span className="text-gold">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div
              className="relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(17,17,17,0.06)]"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={product.images[activeImage]}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-300"
                style={isZoomed ? { transform: `scale(2)`, transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : undefined}
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-noir/60 px-3 py-1.5 text-[10px] text-ivory backdrop-blur-sm">
                <ZoomIn className="h-3 w-3" strokeWidth={1.5} /> Hover to zoom
              </div>
              {product.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-wider-luxe text-noir">{product.badge}</span>
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-all ${activeImage === i ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.title} ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-gold/80">{product.category}</p>
            <h1 className="mt-2 font-heading text-3xl font-light text-noir lg:text-4xl">{product.title}</h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-noir/20'}`} strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-light text-charcoal/45">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-heading text-3xl font-medium text-noir">{formatPrice(product.price)}</span>
              {product.oldPrice && <span className="text-base font-light text-charcoal/40 line-through">{formatPrice(product.oldPrice)}</span>}
            </div>

            <p className="mt-6 text-sm font-light leading-relaxed text-charcoal/60">{product.description}</p>

            {/* Meta */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-noir/8 py-5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/40">Metal</p>
                <p className="mt-1 text-sm font-light text-noir">{product.metal}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/40">Stone</p>
                <p className="mt-1 text-sm font-light text-noir">{product.stone}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/40">Collection</p>
                <p className="mt-1 text-sm font-light text-noir">{product.collection}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/40">SKU</p>
                <p className="mt-1 text-sm font-light text-noir">{product.id.toUpperCase()}</p>
              </div>
            </div>

            {/* Quantity + Actions */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border border-noir/15">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity" className="flex h-12 w-12 items-center justify-center text-noir transition-colors hover:bg-noir hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">–</button>
                <span className="w-12 text-center text-sm font-light text-noir">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity" className="flex h-12 w-12 items-center justify-center text-noir transition-colors hover:bg-noir hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">+</button>
              </div>
              <button
                onClick={() => addToCart(product, quantity)}
                className="btn-gold flex flex-1 items-center justify-center gap-2 bg-gold py-3.5 text-xs font-medium uppercase tracking-luxe text-noir"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label="Wishlist"
                className={`flex h-12 w-12 items-center justify-center border transition-all ${wished ? 'border-gold bg-gold text-noir' : 'border-noir/15 text-noir hover:border-gold hover:text-gold'}`}
              >
                <Heart className={`h-5 w-5 ${wished ? 'fill-noir' : ''}`} strokeWidth={1.5} />
              </button>
            </div>

            {/* Book Appointment */}
            <button
              onClick={() => onNavigate('/#appointment')}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gold/50 py-3.5 text-xs font-medium uppercase tracking-luxe text-noir transition-all duration-300 hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
              Book Appointment
            </button>

            {/* Trust icons */}
            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: 'Free Insured Shipping' },
                { icon: ShieldCheck, label: 'Lifetime Warranty' },
                { icon: Sparkles, label: 'Lifetime Cleaning' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <p className="mt-2 text-[10px] font-light leading-tight text-charcoal/55">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-1 border-b border-noir/8">
                {tabs.map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-3 text-xs font-medium uppercase tracking-wider-luxe transition-colors ${
                      activeTab === i ? 'border-b-2 border-gold text-gold' : 'text-charcoal/45 hover:text-noir'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <p className="mt-5 text-sm font-light leading-relaxed text-charcoal/60">{tabContent[activeTab]}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <Reveal className="mb-10 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-gold/50" />
                <span className="text-xs font-light uppercase tracking-luxe text-gold">You May Also Love</span>
                <span className="h-px w-10 bg-gold/50" />
              </div>
              <h2 className="font-heading text-3xl font-light text-noir">Related Pieces</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} onQuickView={setQuickViewProduct} onNavigate={onNavigate} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>

      <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} onNavigate={onNavigate} />
    </section>
  );
}
