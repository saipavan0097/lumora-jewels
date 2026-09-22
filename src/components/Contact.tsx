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
  Youtube,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/91XXXXXXXXXX' },
  { icon: Mail, label: 'Email', value: 'saipavanvizag601@gmail.com', href: 'mailto:saipavanvizag601@gmail.com' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', value: 'Instagram', href: 'https://instagram.com/' },
  { icon: Facebook, label: 'Facebook', value: 'Pavan Rajz', href: 'https://facebook.com/PavanRajz' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Sai Pavan Rali', href: 'https://linkedin.com/in/sai-pavan-rali' },
  { icon: Youtube, label: 'YouTube', value: '@saipavangoldworks', href: 'https://youtube.com/@saipavangoldworks' },
];

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 11:00 PM' },
  { day: 'Saturday – Sunday', time: '10:00 AM – 12:00 AM' },
];

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contact" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Get in Touch
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-charcoal/55">
            Visit our studio or reach out — we're here to help you find the
            perfect piece for every milestone.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact details */}
          <Reveal>
            <div className="flex h-full flex-col gap-7">
              {/* Business info */}
              <div className="rounded-2xl border border-noir/8 bg-ivory/40 p-7">
                <h3 className="mb-1 font-heading text-2xl font-medium text-noir">Lumora Jewels</h3>
                <p className="text-xs font-light uppercase tracking-wider-luxe text-gold/80">
                  Luxury Jewellery Studio
                </p>
                <p className="mt-4 text-sm font-light text-charcoal/55">
                  Owner: <span className="text-noir">Sai Pavan Rali</span>
                </p>
              </div>

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
                      className="card-lift group flex flex-col items-center rounded-xl border border-noir/8 bg-ivory/40 p-5 text-center hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(201,162,39,0.08)]"
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 transition-all duration-500 group-hover:bg-gold group-hover:scale-110">
                        <Icon className="h-5 w-5 text-gold transition-colors duration-300 group-hover:text-noir" strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] font-medium uppercase tracking-wider-luxe text-charcoal/45">{c.label}</p>
                      <p className="mt-1.5 text-xs font-light text-noir break-all">{c.value}</p>
                    </a>
                  );
                })}
              </div>

              {/* Social */}
              <div className="rounded-2xl border border-noir/8 bg-ivory/40 p-7">
                <h3 className="mb-5 text-xs font-medium uppercase tracking-luxe text-gold">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-noir/10 transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                          <Icon className="h-4 w-4 text-charcoal/60 transition-colors duration-300 group-hover:text-noir" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="block text-xs font-light text-noir group-hover:text-gold">{s.value}</span>
                          <span className="block text-[10px] font-light uppercase tracking-wider-luxe text-charcoal/35">{s.label}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Hours + Address */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-noir/8 bg-ivory/40 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    <h3 className="text-xs font-medium uppercase tracking-luxe text-gold">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.day} className="border-b border-noir/5 pb-2 last:border-0 last:pb-0">
                        <p className="text-xs font-light text-charcoal/55">{h.day}</p>
                        <p className="text-sm font-light text-noir">{h.time}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-noir/8 bg-ivory/40 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    <h3 className="text-xs font-medium uppercase tracking-luxe text-gold">Our Location</h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-noir">
                    Visakhapatnam, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Google Maps */}
          <Reveal delay={200}>
            <div className="h-full min-h-[500px] overflow-hidden rounded-2xl border border-noir/8 shadow-[0_4px_30px_rgba(17,17,17,0.06)]">
              {!mapLoaded && (
                <div className="flex h-full min-h-[500px] items-center justify-center bg-ivory">
                  <div className="flex flex-col items-center gap-3">
                    <MapPin className="h-8 w-8 animate-pulse text-gold" strokeWidth={1.5} />
                    <p className="text-sm font-light text-charcoal/50">Loading map...</p>
                  </div>
                </div>
              )}
              <iframe
                title="Lumora Jewels — Visakhapatnam, Andhra Pradesh"
                src="https://www.google.com/maps?q=Visakhapatnam%2C%20Andhra%20Pradesh%2C%20India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
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
