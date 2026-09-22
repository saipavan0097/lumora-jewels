import { useState, useEffect } from 'react';
import { Gem, Menu, X, CalendarHeart, Search, Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const navLinks = [
  { label: 'Home', href: '#home', path: '/' },
  { label: 'Shop', href: '#shop', path: '/shop' },
  { label: 'Collections', href: '#collections', path: '/#collections' },
  { label: 'About', href: '#founder', path: '/#founder' },
  { label: 'Contact', href: '#contact', path: '/#contact' },
];

export default function Navbar({ onNavigate, currentPath, onSearch, searchQuery }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, wishlist, setCartOpen } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string, path: string) => {
    if (path.startsWith('/#')) {
      onNavigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      onNavigate(path);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || currentPath !== '/'
          ? 'glass-nav shadow-[0_2px_24px_rgba(17,17,17,0.06)] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <button onClick={() => onNavigate('/')} className="group flex items-center gap-2.5">
          <Gem className="h-5 w-5 text-gold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1.5} />
          <span className={`font-heading text-2xl font-semibold tracking-wide transition-colors duration-500 ${scrolled || currentPath !== '/' ? 'text-noir' : 'text-ivory'}`}>
            Aurivelle
          </span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href, link.path)}
                className={`nav-link text-sm font-light tracking-wider-luxe transition-colors duration-300 ${
                  scrolled || currentPath !== '/' ? 'text-charcoal hover:text-gold' : 'text-ivory/90 hover:text-gold'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className={`transition-colors duration-300 ${scrolled || currentPath !== '/' ? 'text-noir hover:text-gold' : 'text-ivory hover:text-gold'}`}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => onNavigate('/shop')}
            aria-label="Wishlist"
            className={`relative transition-colors duration-300 ${scrolled || currentPath !== '/' ? 'text-noir hover:text-gold' : 'text-ivory hover:text-gold'}`}
          >
            <Heart className="h-5 w-5" strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-medium text-noir">{wishlist.length}</span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Shopping bag"
            className={`relative transition-colors duration-300 ${scrolled || currentPath !== '/' ? 'text-noir hover:text-gold' : 'text-ivory hover:text-gold'}`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-medium text-noir">{cartCount}</span>
            )}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleNavClick('#appointment', '/#appointment')}
            className="btn-gold hidden items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-luxe text-noir lg:inline-flex"
          >
            <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
            Book Appointment
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden transition-colors duration-500 ${scrolled || currentPath !== '/' ? 'text-noir' : 'text-ivory'}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="animate-fade-in lg:block">
          <div className="mx-auto max-w-2xl px-6 py-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" strokeWidth={1.5} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search jewellery..."
                autoFocus
                className="w-full border border-noir/15 bg-white py-3.5 pl-12 pr-4 text-sm font-light text-noir placeholder:text-charcoal/35 transition-all duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                onKeyDown={(e) => { if (e.key === 'Enter') { onNavigate('/shop'); setSearchOpen(false); } }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="mx-4 mt-4 glass-dark rounded-2xl px-6 py-6">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => { handleNavClick(link.href, link.path); setMobileOpen(false); }}
                    className="block text-sm font-light tracking-wider-luxe text-ivory/90 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => { handleNavClick('#appointment', '/#appointment'); setMobileOpen(false); }}
                  className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-luxe text-noir"
                >
                  <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
