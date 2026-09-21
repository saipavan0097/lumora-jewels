import { Instagram } from 'lucide-react';
import Reveal from '@/components/Reveal';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/6774653/pexels-photo-6774653.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Diamond flower ring' },
  { src: 'https://images.pexels.com/photos/21235147/pexels-photo-21235147.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Gold and diamond earrings' },
  { src: 'https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Luxury diamond rings on blue surface' },
  { src: 'https://images.pexels.com/photos/7093769/pexels-photo-7093769.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Gold pendant and earrings set' },
  { src: 'https://images.pexels.com/photos/10976655/pexels-photo-10976655.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Diamond rings on textured background' },
  { src: 'https://images.pexels.com/photos/7093767/pexels-photo-7093767.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Gold jewelry set with diamonds' },
  { src: 'https://images.pexels.com/photos/18157531/pexels-photo-18157531.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Diamond necklace with gold details' },
  { src: 'https://images.pexels.com/photos/11504787/pexels-photo-11504787.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Diamond ring on blue fabric' },
  { src: 'https://images.pexels.com/photos/8306532/pexels-photo-8306532.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Intricate diamond rings on dark surface' },
];

export default function InstagramGallery() {
  return (
    <section id="gallery" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Follow Our Journey
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Instagram Gallery
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-charcoal/55">
            <a
              href="https://instagram.com/pavan_rajz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-opacity hover:opacity-70"
            >
              @pavan_rajz
            </a>{' '}
            — a curated visual diary of our finest creations and moments.
          </p>
        </Reveal>

        {/* Grid - 3 rows of 3 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <a
                href="https://instagram.com/pavan_rajz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Instagram"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-noir/0 transition-all duration-500 group-hover:bg-noir/50" />
                {/* Gold border */}
                <div className="absolute inset-0 border-0 border-gold transition-all duration-500 group-hover:border-2 rounded-xl" />
                {/* Instagram icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-7 w-7 text-ivory drop-shadow-lg" strokeWidth={1.5} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Follow button */}
        <Reveal className="mt-14 text-center" delay={200}>
          <a
            href="https://instagram.com/pavan_rajz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2.5 rounded-full border border-gold/60 px-9 py-4 text-xs font-medium uppercase tracking-luxe text-noir"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            Follow @pavan_rajz
          </a>
        </Reveal>
      </div>
    </section>
  );
}
