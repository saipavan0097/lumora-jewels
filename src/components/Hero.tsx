import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return <section id="home" className="relative overflow-hidden bg-noir pb-14 pt-32 lg:pb-20 lg:pt-40">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20 lg:px-10">
      <div className="py-6">
        <p className="text-[10px] uppercase tracking-luxe text-gold sm:text-xs">DAIVIQUE · A family goldsmith story</p>
        <h1 className="mt-7 font-heading text-5xl font-light leading-[1.08] text-ivory sm:text-6xl lg:text-7xl">Jewellery that<br />becomes <em className="font-normal text-gold">family.</em></h1>
        <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-ivory/70 sm:text-base">Handmade ornaments by Sai Pavan and his father. Traditional details, patient hands, and the personal touch of a family workshop.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#/shop" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-medium uppercase tracking-wider text-noir focus-visible:outline-white">Explore our work <ArrowRight className="h-4 w-4" /></a>
          <a href="https://wa.me/917661930097?text=Hi%20DAIVIQUE%2C%20I%20would%20like%20to%20discuss%20a%20jewellery%20design." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-4 text-xs uppercase tracking-wider text-ivory focus-visible:outline-gold"><MessageCircle className="h-4 w-4" />Talk to us</a>
        </div>
        <div className="mt-12 border-t border-ivory/15 pt-6"><p className="font-heading text-2xl text-ivory/90">From our bench to your story.</p><a href="#gallery" className="mt-3 inline-block text-xs text-gold underline underline-offset-4">See inside the workshop</a></div>
      </div>
      <figure className="relative mx-auto w-full max-w-lg">
        <div className="overflow-hidden rounded-t-[12rem] rounded-b-2xl bg-[#f6f1e9]"><img src="/images/handmade/edits/floral-peacock.webp" alt="Our floral peacock pendant with coloured accents and pale bead drops, shown in an AI studio edit" fetchPriority="high" width="1122" height="1402" className="aspect-[4/5] w-full object-contain" /></div>
        <figcaption className="mt-4 flex justify-between gap-4 text-[10px] text-ivory/55"><span>Floral Peacock Pendant</span><span>AI studio edit · original in gallery</span></figcaption>
      </figure>
    </div>
  </section>;
}
