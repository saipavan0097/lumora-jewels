import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/shop/ProductCard';
import QuickView from '@/components/shop/QuickView';
import Reveal from '@/components/Reveal';
import { products, categories, metals, stones, collections, type Product, type Category } from '@/data/products';

interface ShopPageProps {
  onNavigate: (path: string) => void;
}

const sortOptions = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating', value: 'rating' },
];

export default function ShopPage({ onNavigate }: ShopPageProps) {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedMetals, setSelectedMetals] = useState<string[]>([]);
  const [selectedStones, setSelectedStones] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500000]);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const toggleFilter = <T,>(value: T, list: T[], setter: (v: T[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
      if (selectedMetals.length && !selectedMetals.includes(p.metal)) return false;
      if (selectedStones.length && !selectedStones.includes(p.stone)) return false;
      if (selectedCollections.length && !selectedCollections.includes(p.collection)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });

    switch (sortBy) {
      case 'newest': result = result.sort((a, b) => Number(b.isNew) - Number(a.isNew)); break;
      case 'price-asc': result = result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result = result.sort((a, b) => b.price - a.price); break;
      case 'rating': result = result.sort((a, b) => b.rating - a.rating); break;
      default: result = result.sort((a, b) => b.popularity - a.popularity);
    }
    return result;
  }, [search, selectedCategories, selectedMetals, selectedStones, selectedCollections, priceRange, sortBy]);

  const activeFilterCount =
    selectedCategories.length + selectedMetals.length + selectedStones.length + selectedCollections.length;

  const clearAll = () => {
    setSelectedCategories([]); setSelectedMetals([]); setSelectedStones([]); setSelectedCollections([]);
    setPriceRange([0, 1500000]); setSearch('');
  };

  return (
    <section id="shop" className="bg-ivory min-h-screen pt-32 pb-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-10 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-xs font-light uppercase tracking-luxe text-gold">The Collection</span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h1 className="font-heading text-4xl font-light text-noir sm:text-5xl">Shop DAIVIQUE</h1>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-charcoal/55">
            Discover handcrafted fine jewellery — each piece a testament to timeless elegance and master craftsmanship.
          </p>
        </Reveal>

        {/* Search bar */}
        <div className="mx-auto mb-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" strokeWidth={1.5} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jewellery..."
              className="w-full border border-noir/15 bg-white py-3.5 pl-12 pr-4 text-sm font-light text-noir placeholder:text-charcoal/35 transition-all duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider-luxe text-noir transition-colors hover:text-gold"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filters
            {activeFilterCount > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] text-noir">{activeFilterCount}</span>}
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-light text-charcoal/45">{filtered.length} pieces</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-noir/15 bg-white py-2.5 pl-4 pr-10 text-xs font-light text-noir transition-all focus:border-gold focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-charcoal/40" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
          {/* Filters sidebar */}
          <aside className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="space-y-7 rounded-2xl border border-noir/8 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-medium text-noir">Filters</h3>
                {activeFilterCount > 0 && (
                  <button onClick={clearAll} className="text-[10px] font-medium uppercase tracking-wider-luxe text-gold transition-opacity hover:opacity-70">Clear All</button>
                )}
              </div>

              {/* Category */}
              <div>
                <h4 className="mb-3 text-[11px] font-medium uppercase tracking-wider-luxe text-charcoal/50">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex cursor-pointer items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                        className="h-4 w-4 accent-gold"
                      />
                      <span className="text-sm font-light text-charcoal/70">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="mb-3 text-[11px] font-medium uppercase tracking-wider-luxe text-charcoal/50">Price Range</h4>
                <input
                  type="range"
                  min={0}
                  max={1500000}
                  step={50000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-gold"
                />
                <p className="mt-2 text-xs font-light text-charcoal/60">Up to ₹{priceRange[1].toLocaleString('en-IN')}</p>
              </div>

              {/* Metal */}
              <div>
                <h4 className="mb-3 text-[11px] font-medium uppercase tracking-wider-luxe text-charcoal/50">Metal</h4>
                <div className="space-y-2">
                  {metals.map((m) => (
                    <label key={m} className="flex cursor-pointer items-center gap-2.5">
                      <input type="checkbox" checked={selectedMetals.includes(m)} onChange={() => toggleFilter(m, selectedMetals, setSelectedMetals)} className="h-4 w-4 accent-gold" />
                      <span className="text-sm font-light text-charcoal/70">{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stone */}
              <div>
                <h4 className="mb-3 text-[11px] font-medium uppercase tracking-wider-luxe text-charcoal/50">Stone</h4>
                <div className="space-y-2">
                  {stones.map((s) => (
                    <label key={s} className="flex cursor-pointer items-center gap-2.5">
                      <input type="checkbox" checked={selectedStones.includes(s)} onChange={() => toggleFilter(s, selectedStones, setSelectedStones)} className="h-4 w-4 accent-gold" />
                      <span className="text-sm font-light text-charcoal/70">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Collection */}
              <div>
                <h4 className="mb-3 text-[11px] font-medium uppercase tracking-wider-luxe text-charcoal/50">Collection</h4>
                <div className="space-y-2">
                  {collections.map((c) => (
                    <label key={c} className="flex cursor-pointer items-center gap-2.5">
                      <input type="checkbox" checked={selectedCollections.includes(c)} onChange={() => toggleFilter(c, selectedCollections, setSelectedCollections)} className="h-4 w-4 accent-gold" />
                      <span className="text-sm font-light text-charcoal/70">{c}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <X className="h-10 w-10 text-gold/30" strokeWidth={1} />
                <p className="mt-4 text-sm font-light text-charcoal/50">No pieces match your filters.</p>
                <button onClick={clearAll} className="btn-outline-gold mt-6 border border-gold/60 px-6 py-3 text-[11px] font-medium uppercase tracking-wider-luxe text-noir">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={(i % 3) * 80}>
                    <ProductCard product={product} onQuickView={setQuickViewProduct} onNavigate={onNavigate} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} onNavigate={onNavigate} />
    </section>
  );
}
