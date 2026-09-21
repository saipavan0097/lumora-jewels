import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const collections = [
  {
    title: 'Bridal Collection',
    description: 'Regal designs crafted for your once-in-a-lifetime moment.',
    image: 'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Diamond Collection',
    description: 'Brilliant cuts that capture light and hearts alike.',
    image: 'https://images.pexels.com/photos/19820885/pexels-photo-19820885.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Gold Collection',
    description: 'Timeless 22K gold pieces honouring centuries of artistry.',
    image: 'https://images.pexels.com/photos/7248760/pexels-photo-7248760.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Temple Jewellery',
    description: 'Sacred motifs inspired by South Indian heritage.',
    image: 'https://images.pexels.com/photos/8031399/pexels-photo-8031399.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Everyday Elegance',
    description: 'Understated luxury for the modern connoisseur.',
    image: 'https://images.pexels.com/photos/29502923/pexels-photo-29502923.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: "Men's Collection",
    description: 'Refined pieces designed with bold sophistication.',
    image: 'https://images.pexels.com/photos/15743955/pexels-photo-15743955.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <Reveal className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">
              Curated Selection
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl font-light text-noir sm:text-5xl lg:text-6xl">
            Featured Collections
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-charcoal/55">
            Explore six bespoke collections, each a testament to master craftsmanship
            and timeless design.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {collections.map((col, i) => (
            <Reveal key={col.title} delay={i * 100}>
              <article className="card-lift group overflow-hidden rounded-2xl bg-white shadow-[0_4px_30px_rgba(17,17,17,0.05)] hover:shadow-[0_24px_70px_rgba(201,162,39,0.14)]">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-medium text-noir transition-colors duration-300 group-hover:text-gold">
                    {col.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/55">
                    {col.description}
                  </p>
                  <a
                    href="#signature"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider-luxe text-gold transition-colors hover:text-noir"
                  >
                    View Collection
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </div>

                {/* Gold bottom accent */}
                <div className="h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
