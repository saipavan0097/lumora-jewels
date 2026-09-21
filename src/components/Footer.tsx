import {
  Gem,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Bridal', href: '#bridal' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Appointment', href: '#appointment' },
];

const collectionLinks = [
  { label: 'Bridal Collection', href: '#collections' },
  { label: 'Diamond Collection', href: '#collections' },
  { label: 'Gold Collection', href: '#collections' },
  { label: 'Temple Jewellery', href: '#collections' },
  { label: "Men's Collection", href: '#collections' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '12:00 PM – 6:00 PM' },
];

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Newsletter strip */}
      <div className="border-b border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 lg:flex-row lg:px-10">
          <div className="text-center lg:text-left">
            <h3 className="font-heading text-2xl font-light text-ivory">
              Join the Lumora Circle
            </h3>
            <p className="mt-2 text-sm font-light text-ivory/50">
              Private previews, exclusive collections and invitations to curated events.
            </p>
          </div>
          <div className="flex w-full max-w-md items-center gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border-b border-ivory/20 bg-transparent py-3 text-sm font-light text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
            />
            <button className="btn-gold ml-3 whitespace-nowrap bg-gold px-6 py-3 text-[10px] font-medium uppercase tracking-luxe text-noir">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
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
              memories. Crafted with devotion since 1998.
            </p>
            <div className="mt-6 flex gap-3">
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
            <h4 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                <span className="text-sm font-light leading-relaxed text-ivory/60">
                  24 Aurelia Street, Diamond District, New York, NY 10001
                </span>
              </li>
              <li>
                <a
                  href="mailto:hello@lumorajewels.com"
                  className="group flex items-center gap-3 text-sm font-light text-ivory/60 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  hello@lumorajewels.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005866721"
                  className="group flex items-center gap-3 text-sm font-light text-ivory/60 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  +1 (800) 586-6721
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">
              Business Hours
            </h4>
            <ul className="space-y-4">
              {hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-light text-ivory/60">{h.day}</p>
                    <p className="text-xs font-light text-ivory/40">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
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
