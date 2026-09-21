import { useState, useEffect } from 'react';
import { Gem, Menu, X, CalendarHeart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Signature', href: '#signature' },
  { label: 'About', href: '#founder' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav shadow-[0_2px_24px_rgba(17,17,17,0.06)] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <Gem
            className="h-5 w-5 text-gold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            strokeWidth={1.5}
          />
          <span
            className={`font-heading text-2xl font-semibold tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-noir' : 'text-ivory'
            }`}
          >
            Lumora <span className="text-gold">Jewels</span>
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link text-sm font-light tracking-wider-luxe transition-colors duration-300 ${
                  scrolled ? 'text-charcoal hover:text-gold' : 'text-ivory/90 hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="hidden items-center lg:flex">
          <a
            href="#appointment"
            className="btn-gold inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-luxe text-noir"
          >
            <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden transition-colors duration-500 ${
            scrolled ? 'text-noir' : 'text-ivory'
          }`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="mx-4 mt-4 glass-dark rounded-2xl px-6 py-6">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-light tracking-wider-luxe text-ivory/90 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#appointment"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-luxe text-noir"
                >
                  <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
