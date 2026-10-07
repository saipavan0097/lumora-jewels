import { useState, useEffect, useMemo, useRef } from 'react';
import { Gem, Menu, X, CalendarHeart, Search } from 'lucide-react';
import { atelierPieces } from '@/data/atelier';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Work', path: '/shop' },
  { label: 'Collections', path: '/#collections' },
  { label: 'About', path: '/#founder' },
  { label: 'Contact', path: '/#contact' },
];

export default function Navbar({ onNavigate, currentPath, onSearch, searchQuery }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();
    return atelierPieces
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
      .slice(0, 5);
  }, [searchQuery]);

  const handleSuggestionClick = (title: string) => {
    setSearchOpen(false);
    onSearch(title);
    onNavigate('/shop');
  };

  const handleSearchSubmit = () => {
    onNavigate('/shop');
    setSearchOpen(false);
  };

  const clearSearch = () => {
    onSearch('');
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
        <button onClick={() => onNavigate('/')} className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg" aria-label="DAIVIQUE home">
          <Gem className="h-5 w-5 text-gold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1.5} />
          <span className={`font-heading text-2xl font-semibold tracking-wide transition-colors duration-500 ${scrolled || currentPath !== '/' ? 'text-noir' : 'text-ivory'}`}>
            DAIVIQUE
          </span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path === '/' && currentPath === '/');
            return (
              <li key={link.label}>
                <button
                  onClick={() => onNavigate(link.path)}
                  className={`nav-link relative text-sm font-light tracking-wider-luxe transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg px-1 py-1 ${
                    scrolled || currentPath !== '/' ? 'text-charcoal hover:text-gold' : 'text-ivory/90 hover:text-gold'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`} />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search jewellery"
            aria-expanded={searchOpen}
            className={`transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg p-1 ${scrolled || currentPath !== '/' ? 'text-noir hover:text-gold' : 'text-ivory hover:text-gold'}`}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>

          {/* CTA */}
          <button
            onClick={() => onNavigate('/#appointment')}
            className="btn-gold hidden items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-luxe text-noir lg:inline-flex"
          >
            <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
            Book Appointment
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg p-1 ${scrolled || currentPath !== '/' ? 'text-noir' : 'text-ivory'}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Search bar with live suggestions */}
      {searchOpen && (
        <div className="animate-fade-in" ref={searchRef}>
          <div className="mx-auto max-w-2xl px-6 py-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" strokeWidth={1.5} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search our handmade jewellery..."
                autoFocus
                className="w-full rounded-lg border border-noir/15 bg-white py-3.5 pl-12 pr-10 text-sm font-light text-noir placeholder:text-charcoal/35 transition-all duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                onKeyDown={(e) => { if (e.key === 'Enter') handleSearchSubmit(); }}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 transition-colors hover:text-gold"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              )}

              {/* Live suggestions dropdown */}
              {searchQuery.trim() && (
                <div className="mt-2 overflow-hidden rounded-lg border border-noir/10 bg-white shadow-[0_8px_30px_rgba(17,17,17,0.08)]">
                  {suggestions.length > 0 ? (
                    <>
                      {suggestions.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => handleSuggestionClick(p.title)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-ivory/50"
                        >
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            className="h-12 w-12 rounded-md object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="truncate text-sm font-medium text-noir">{p.title}</p>
                            <p className="text-[10px] font-light uppercase tracking-wider-luxe text-gold/70">
                              {p.category}
                            </p>
                          </div>
                        </button>
                      ))}
                      <button
                        onClick={handleSearchSubmit}
                        className="flex w-full items-center justify-center gap-1.5 border-t border-noir/8 px-4 py-3 text-[11px] font-medium uppercase tracking-wider-luxe text-gold transition-colors hover:bg-gold/5"
                      >
                        View all results
                        <Search className="h-3 w-3" strokeWidth={1.5} />
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <p className="text-sm font-light text-charcoal/50">No pieces found for "{searchQuery}"</p>
                      <button
                        onClick={clearSearch}
                        className="mt-2 text-[11px] font-medium uppercase tracking-wider-luxe text-gold transition-opacity hover:opacity-70"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </div>
              )}
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
                    onClick={() => { onNavigate(link.path); setMobileOpen(false); }}
                    className="block text-sm font-light tracking-wider-luxe text-ivory/90 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => { onNavigate('/#appointment'); setMobileOpen(false); }}
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
