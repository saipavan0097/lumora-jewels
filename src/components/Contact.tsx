import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7661930097',
    href: 'tel:+917661930097',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 7661930097',
    href: 'https://wa.me/917661930097',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'saipavanvizag601@gmail.com',
    href: 'mailto:saipavanvizag601@gmail.com',
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', value: '@pavan_rajz', href: 'https://instagram.com/pavan_rajz' },
  { icon: Facebook, label: 'Facebook', value: 'Pavan Rajz', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Sai Pavan Rali', href: '#' },
];

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 11:00 PM' },
  { day: 'Saturday – Sunday', time: '10:00 AM – 12:00 Midnight' },
];

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Get in Touch
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-charcoal/60">
            Visit our boutique or reach out — we're here to help you find the
            perfect piece for every milestone.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: Contact details + hours */}
          <Reveal>
            <div className="flex h-full flex-col gap-8">
              {/* Contact cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex flex-col items-center rounded-lg border border-noir/8 bg-ivory/40 p-6 text-center transition-all duration-500 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(201,162,39,0.08)]"
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 transition-all duration-500 group-hover:bg-gold group-hover:scale-110">
                        <Icon
                          className="h-5 w-5 text-gold transition-colors duration-300 group-hover:text-noir"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/45">
                        {c.label}
                      </p>
                      <p className="mt-1.5 text-xs font-light text-noir break-all">
                        {c.value}
                      </p>
                    </a>
                  );
                })}
              </div>

              {/* Social */}
              <div className="rounded-lg border border-noir/8 bg-ivory/40 p-6">
                <h3 className="mb-4 text-xs font-medium uppercase tracking-luxe text-gold">
                  Connect With Us
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-3 transition-colors hover:text-gold"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-noir/10 transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                          <Icon
                            className="h-4 w-4 text-charcoal/60 transition-colors duration-300 group-hover:text-noir"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <span className="block text-xs font-light text-noir group-hover:text-gold">
                            {s.value}
                          </span>
                          <span className="block text-[10px] font-light uppercase tracking-wider-luxe text-charcoal/35">
                            {s.label}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-lg border border-noir/8 bg-ivory/40 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <h3 className="text-xs font-medium uppercase tracking-luxe text-gold">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between border-b border-noir/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-sm font-light text-charcoal/60">
                        {h.day}
                      </span>
                      <span className="text-sm font-light text-noir">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 rounded-lg border border-noir/8 bg-ivory/40 p-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider-luxe text-charcoal/45">
                    Boutique Location
                  </p>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-noir">
                    Banjara Hills, Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Google Maps */}
          <Reveal delay={200}>
            <div className="h-full min-h-[400px] overflow-hidden rounded-lg border border-noir/8 shadow-[0_4px_30px_rgba(17,17,17,0.06)]">
              {!mapLoaded && (
                <div className="flex h-full min-h-[400px] items-center justify-center bg-ivory">
                  <div className="flex flex-col items-center gap-3">
                    <MapPin className="h-8 w-8 animate-pulse text-gold" strokeWidth={1.5} />
                    <p className="text-sm font-light text-charcoal/50">Loading map...</p>
                  </div>
                </div>
              )}
              <iframe
                title="Lumora Jewels — Banjara Hills, Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.456789012345!2d78.4406!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjYnMjYuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
