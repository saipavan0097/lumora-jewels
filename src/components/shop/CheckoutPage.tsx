import { useState, type FormEvent } from 'react';
import { Check, ShoppingBag, Tag, ArrowLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { formatPrice } from '@/data/products';

interface CheckoutPageProps {
  onNavigate: (path: string) => void;
}

const inputClass = 'w-full border border-noir/15 bg-ivory/50 px-4 py-3 text-sm font-light text-noir placeholder:text-charcoal/35 transition-all duration-300 focus:border-gold focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold/30';
const labelClass = 'mb-2 block text-[11px] font-medium uppercase tracking-wider-luxe text-charcoal/55';

export default function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const { cart, cartSubtotal, clearCart } = useShop();
  const [placed, setPlaced] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const shipping = cartSubtotal > 500000 ? 0 : 250;
  const total = cartSubtotal + shipping - discount;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'DAIVIQUE10') {
      setDiscount(Math.round(cartSubtotal * 0.1));
    } else {
      setDiscount(0);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (placed) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-ivory pt-32 pb-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold animate-fade-in-up">
            <Check className="h-12 w-12 text-gold" strokeWidth={1.5} />
          </div>
          <h1 className="font-heading text-4xl font-light text-noir animate-fade-in-up delay-200">Order Confirmed</h1>
          <p className="mt-5 text-sm font-light leading-relaxed text-charcoal/60 animate-fade-in-up delay-400">
            Thank you for your purchase. Your order has been placed successfully.
            You will receive a confirmation email shortly with tracking details.
          </p>
          <div className="mt-6 rounded-2xl border border-gold/20 bg-white p-5 animate-fade-in-up delay-600">
            <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/40">Order Number</p>
            <p className="mt-1 font-heading text-xl text-gold">DVC-{Date.now().toString().slice(-8)}</p>
          </div>
          <button
            onClick={() => onNavigate('/shop')}
            className="btn-gold mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-luxe text-noir animate-fade-in-up delay-800"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center bg-ivory pt-32 pb-20 text-center">
        <ShoppingBag className="h-12 w-12 text-gold/30" strokeWidth={1} />
        <p className="mt-4 text-sm font-light text-charcoal/50">Your shopping bag is empty.</p>
        <button onClick={() => onNavigate('/shop')} className="btn-outline-gold mt-6 border border-gold/60 px-6 py-3 text-[11px] font-medium uppercase tracking-wider-luxe text-noir">Explore Collection</button>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-ivory pt-32 pb-20 lg:pt-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <button onClick={() => onNavigate('/shop')} className="mb-8 flex items-center gap-2 text-xs font-light tracking-wider-luxe text-charcoal/50 transition-colors hover:text-gold">
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> Continue Shopping
        </button>

        <h1 className="mb-10 font-heading text-4xl font-light text-noir">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_400px]">
          {/* Left: form */}
          <div className="space-y-8">
            {/* Customer Details */}
            <div className="rounded-2xl border border-noir/8 bg-white p-7">
              <h2 className="mb-5 font-heading text-xl font-medium text-noir">Customer Details</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="ck-name" className={labelClass}>Full Name</label>
                  <input id="ck-name" type="text" required minLength={2} autoComplete="name" placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="ck-email" className={labelClass}>Email</label>
                  <input id="ck-email" type="email" required autoComplete="email" placeholder="you@email.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="ck-phone" className={labelClass}>Phone</label>
                  <input id="ck-phone" type="tel" required pattern="[+0-9 ()-]{10,}" autoComplete="tel" placeholder="+91 00000 00000" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="ck-pincode" className={labelClass}>Pincode</label>
                  <input id="ck-pincode" type="text" required pattern="[0-9]{6}" autoComplete="postal-code" placeholder="500000" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="rounded-2xl border border-noir/8 bg-white p-7">
              <h2 className="mb-5 font-heading text-xl font-medium text-noir">Shipping Address</h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="ck-address" className={labelClass}>Street Address</label>
                  <input id="ck-address" type="text" required autoComplete="street-address" placeholder="House no, street, area" className={inputClass} />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ck-city" className={labelClass}>City</label>
                    <input id="ck-city" type="text" required autoComplete="address-level2" placeholder="City" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="ck-state" className={labelClass}>State</label>
                    <input id="ck-state" type="text" required autoComplete="address-level1" placeholder="State" className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-2xl border border-noir/8 bg-white p-7">
              <h2 className="mb-5 font-heading text-xl font-medium text-noir">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                  { id: 'upi', label: 'UPI Payment', desc: 'GPay, PhonePe, Paytm' },
                  { id: 'cod', label: 'Cash on Delivery', desc: 'Pay when you receive' },
                ].map((opt, i) => (
                  <label key={opt.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-noir/8 p-4 transition-all hover:border-gold/30">
                    <input type="radio" name="payment" defaultChecked={i === 0} className="h-4 w-4 accent-gold" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-noir">{opt.label}</p>
                      <p className="text-[10px] font-light text-charcoal/45">{opt.desc}</p>
                    </div>
                    <CreditCard className="h-5 w-5 text-gold/50" strokeWidth={1.5} />
                  </label>
                ))}
              </div>
              <p className="mt-4 flex items-center gap-2 text-[10px] font-light text-charcoal/40">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                Bank-grade encryption. This is a demo checkout — no real payment will be processed.
              </p>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div>
            <div className="sticky top-32 rounded-2xl border border-noir/8 bg-white p-7">
              <h2 className="mb-5 font-heading text-xl font-medium text-noir">Order Summary</h2>

              {/* Items */}
              <div className="max-h-64 space-y-4 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img src={item.product.images[0]} alt={item.product.title} loading="lazy" className="h-16 w-16 rounded-lg object-cover" />
                    <div className="flex flex-1 flex-col">
                      <p className="text-sm font-medium text-noir">{item.product.title}</p>
                      <p className="text-[10px] font-light text-charcoal/40">Qty: {item.quantity}</p>
                      <p className="mt-auto text-sm font-medium text-noir">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="mt-5 border-t border-noir/8 pt-5">
                <label htmlFor="coupon" className={labelClass}>Coupon Code</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gold/50" strokeWidth={1.5} />
                    <input
                      id="coupon"
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="Try DAIVIQUE10"
                      className={`${inputClass} pl-9`}
                    />
                  </div>
                  <button type="button" onClick={applyCoupon} className="bg-noir px-4 text-[11px] font-medium uppercase tracking-wider-luxe text-ivory transition-colors hover:bg-gold hover:text-noir">Apply</button>
                </div>
                {discount > 0 && <p className="mt-2 text-[10px] font-medium text-gold">10% discount applied!</p>}
              </div>

              {/* Totals */}
              <div className="mt-5 space-y-3 border-t border-noir/8 pt-5">
                <div className="flex justify-between">
                  <span className="text-sm font-light text-charcoal/60">Subtotal</span>
                  <span className="text-sm font-light text-noir">{formatPrice(cartSubtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-sm font-light text-charcoal/60">Discount</span>
                    <span className="text-sm font-light text-gold">–{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-sm font-light text-charcoal/60">Shipping</span>
                  <span className="text-sm font-light text-noir">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between border-t border-noir/8 pt-3">
                  <span className="font-heading text-lg font-medium text-noir">Total</span>
                  <span className="font-heading text-lg font-medium text-gold">{formatPrice(total)}</span>
                </div>
              </div>

              <button type="submit" className="btn-gold mt-6 flex w-full items-center justify-center gap-2 bg-gold py-4 text-xs font-medium uppercase tracking-luxe text-noir">
                <Truck className="h-4 w-4" strokeWidth={1.5} /> Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
