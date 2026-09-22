import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { formatPrice } from '@/data/products';

interface CartDrawerProps {
  onNavigate: (path: string) => void;
}

export default function CartDrawer({ onNavigate }: CartDrawerProps) {
  const { cart, isCartOpen, setCartOpen, updateQuantity, removeFromCart, cartSubtotal, cartCount } = useShop();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-noir/50 backdrop-blur-sm transition-opacity duration-400 ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[71] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-noir/8 px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <h3 className="font-heading text-xl font-medium text-noir">
              Shopping Bag {cartCount > 0 && <span className="text-gold">({cartCount})</span>}
            </h3>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-noir/5 text-noir transition-colors hover:bg-noir hover:text-ivory"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-12 w-12 text-gold/30" strokeWidth={1} />
              <p className="mt-4 text-sm font-light text-charcoal/50">Your shopping bag is empty.</p>
              <button
                onClick={() => { setCartOpen(false); onNavigate('/shop'); }}
                className="btn-outline-gold mt-6 border border-gold/60 px-6 py-3 text-[11px] font-medium uppercase tracking-wider-luxe text-noir"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    loading="lazy"
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <h4 className="font-heading text-base font-medium text-noir">{item.product.title}</h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label="Remove item"
                        className="text-charcoal/30 transition-colors hover:text-gold"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-gold/70">
                      {item.product.metal}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-noir/15">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center text-noir transition-colors hover:bg-noir hover:text-ivory"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm font-light text-noir">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center text-noir transition-colors hover:bg-noir hover:text-ivory"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-heading text-base font-medium text-noir">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-noir/8 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-charcoal/60">Subtotal</span>
              <span className="font-heading text-xl font-medium text-noir">{formatPrice(cartSubtotal)}</span>
            </div>
            <p className="mt-1 text-[10px] font-light text-charcoal/40">Shipping and taxes calculated at checkout.</p>
            <button
              onClick={() => { setCartOpen(false); onNavigate('/checkout'); }}
              className="btn-gold mt-4 flex w-full items-center justify-center gap-2 bg-gold py-4 text-xs font-medium uppercase tracking-luxe text-noir"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
