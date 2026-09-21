import { Gem, Instagram, Facebook, Twitter, Mail, Phone, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Bridal', href: '#bridal' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Gem className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="font-heading text-2xl font-semibold tracking-wide">
                Lumora <span className="text-gold">Jewels</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-ivory/55">
              Handcrafted fine jewellery for weddings, celebrations and timeless
              memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-light text-ivory/60 transition-colors hover:text-gold"
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
            <h3 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@lumorajewels.com"
                  className="group inline-flex items-center gap-3 text-sm font-light text-ivory/60 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                  hello@lumorajewels.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005866721"
                  className="group inline-flex items-center gap-3 text-sm font-light text-ivory/60 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                  +1 (800) 586-6721
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
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
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 lg:flex-row lg:px-10">
          <p className="text-xs font-light tracking-wider-luxe text-ivory/40">
            © {new Date().getFullYear()} Lumora Jewels. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold/40" />
            <span className="font-heading text-sm italic text-gold/70">
              Crafted with devotion
            </span>
            <span className="h-px w-6 bg-gold/40" />
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-light tracking-wider-luxe text-ivory/40 transition-colors hover:text-gold">
              Privacy
            </a>
            <a href="#" className="text-xs font-light tracking-wider-luxe text-ivory/40 transition-colors hover:text-gold">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
