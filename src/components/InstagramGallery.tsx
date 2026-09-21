import { Instagram } from 'lucide-react';
import Reveal from '@/components/Reveal';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/32988525/pexels-photo-32988525.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Diamond and emerald necklace',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/30746014/pexels-photo-30746014.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Rose gold and diamond jewellery set',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/8306528/pexels-photo-8306528.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Diamond bracelet on reflective surface',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/17068457/pexels-photo-17068457.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Rose gold engagement rings',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/28985984/pexels-photo-28985984.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Floral jewellery set',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/30746008/pexels-photo-30746008.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Diamond pendant with gold chain',
    span: '',
  },
];

export default function InstagramGallery() {
  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Follow Our Journey
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Instagram Gallery
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-charcoal/60">
            <span className="text-gold">@lumorajewels</span> — a curated visual
            diary of our finest creations and moments.
          </p>
        </Reveal>

        {/* Masonry grid */}
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 80}
              className={img.span}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-noir/0 transition-all duration-500 group-hover:bg-noir/50" />
                {/* Gold border */}
                <div className="absolute inset-0 border-0 border-gold transition-all duration-500 group-hover:border-2" />
                {/* Instagram icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram
                    className="h-7 w-7 text-ivory drop-shadow-lg"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Follow button */}
        <Reveal className="mt-12 text-center" delay={200}>
          <a
            href="#"
            className="btn-outline-gold inline-flex items-center gap-2.5 border border-gold/60 px-8 py-4 text-xs font-medium uppercase tracking-luxe text-noir"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            Follow @lumorajewels
          </a>
        </Reveal>
      </div>
    </section>
  );
}
