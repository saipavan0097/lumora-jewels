import {
  Gem,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Github,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About Founder', href: '/#founder' },
  { label: 'Book Appointment', href: '/#appointment' },
  { label: 'Contact', href: '/#contact' },
];

const collectionLinks = [
  { label: 'Bridal Collection', href: '#collections' },
  { label: 'Diamond Collection', href: '#collections' },
  { label: 'Gold Collection', href: '#collections' },
  { label: 'Temple Jewellery', href: '#collections' },
  { label: "Men's Collection", href: '#collections' },
];

const socials = [
  { icon: Github, href: 'https://github.com/Saipavanrali', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sai-pavan-rali', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/pavan_rajz', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/919000000000', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:saipavanvizag601@gmail.com', label: 'Email' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-noir text-ivory">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Gem className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="font-heading text-2xl font-semibold tracking-wide">Orvélia</span>
            </div>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-ivory/50">
              Luxury Jewellery Maison. Crafted with passion since 2026.
              Handcrafted fine jewellery for weddings, celebrations and timeless memories.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center border border-ivory/15 transition-all duration-300 hover:border-gold hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-noir"
                  >
                    <Icon
                      className="h-4 w-4 text-ivory/60 transition-colors duration-300 group-hover:text-noir"
                      strokeWidth={1.5}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="group inline-flex items-center gap-1.5 text-sm font-light text-ivory/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Collections
            </h4>
            <ul className="space-y-3">
              {collectionLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate('/shop')}
                    className="group inline-flex items-center gap-1.5 text-sm font-light text-ivory/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                <span className="text-sm font-light leading-relaxed text-ivory/55">
                  Visakhapatnam, Andhra Pradesh
                </span>
              </li>
              <li>
                <a
                  href="mailto:saipavanvizag601@gmail.com"
                  className="group flex items-center gap-3 text-sm font-light text-ivory/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  saipavanvizag601@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919000000000"
                  className="group flex items-center gap-3 text-sm font-light text-ivory/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  +91 90000 00000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 lg:flex-row lg:px-10">
          <p className="text-xs font-light tracking-wider-luxe text-ivory/35">
            © 2026 Orvélia. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold/40" />
            <span className="font-heading text-sm italic text-gold/70">
              Crafted with Passion Since 2026
            </span>
            <span className="h-px w-6 bg-gold/40" />
          </div>
          <p className="text-xs font-light tracking-wider-luxe text-ivory/35">
            Designed & Developed by{' '}
            <span className="font-medium text-gold/70">Sai Pavan Rali</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
