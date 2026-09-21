import {
  Gem,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Signature Jewellery', href: '#signature' },
  { label: 'About Founder', href: '#founder' },
  { label: 'Book Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

const collectionLinks = [
  { label: 'Bridal Collection', href: '#collections' },
  { label: 'Diamond Collection', href: '#collections' },
  { label: 'Gold Collection', href: '#collections' },
  { label: 'Temple Jewellery', href: '#collections' },
  { label: "Men's Collection", href: '#collections' },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com/pavan_rajz', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/PavanRajz', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sai-pavan-rali', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@saipavangoldworks', label: 'YouTube' },
];

export default function Footer() {
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
              <span className="font-heading text-2xl font-semibold tracking-wide">
                Lumora <span className="text-gold">Jewels</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-ivory/50">
              Luxury Jewellery Studio. Crafted with passion since 2026.
              Handcrafted fine jewellery for weddings, celebrations and timeless
              memories.
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
                    className="group flex h-10 w-10 items-center justify-center border border-ivory/15 transition-all duration-300 hover:border-gold hover:bg-gold"
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
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-light text-ivory/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
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
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-light text-ivory/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
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
                  TCS Adibatla, Hyderabad, Telangana, India – 501510
                </span>
              </li>
              <li>
                <a
                  href="mailto:saipavanvizag601@gmail.com"
                  className="group flex items-center gap-3 text-sm font-light text-ivory/55 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  saipavanvizag601@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917661930097"
                  className="group flex items-center gap-3 text-sm font-light text-ivory/55 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  +91 7661930097
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
            © 2026 Lumora Jewels. All Rights Reserved.
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
