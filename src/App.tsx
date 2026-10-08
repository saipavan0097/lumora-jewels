import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import SignatureJewellery from '@/components/SignatureJewellery';
import InstagramGallery from '@/components/InstagramGallery';
import Founder from '@/components/Founder';
import Contact from '@/components/Contact';
import AppointmentForm from '@/components/AppointmentForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import CustomOrders from '@/components/CustomOrders';
import AtelierGallery from '@/components/AtelierGallery';
import DesignConcepts from '@/components/DesignConcepts';
import PriceEstimator from '@/components/PriceEstimator';

type Route = { path: string; productId?: string; sectionId?: string };

function parseRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const sectionId = hash.startsWith('/#')
    ? hash.slice(2)
    : !hash.startsWith('/') ? hash : undefined;
  if (sectionId) return { path: '/', sectionId };
  const pieceMatch = hash.match(/^\/shop\?piece=([a-z0-9-]+)$/);
  if (pieceMatch) return { path: '/shop', productId: pieceMatch[1] };
  const productMatch = hash.match(/^\/product\/(.+)$/);
  if (productMatch || hash === '/checkout') return { path: '/shop' };
  return { path: hash === '/shop' ? '/shop' : '/' };
}

function App() {
  const [route, setRoute] = useState<Route>(parseRoute);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (!route.sectionId) return;

    // Section links can arrive while another page is mounted. Wait until the
    // homepage has rendered before locating the destination below the header.
    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(route.sectionId!);
      if (!section) return;
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80;
      section.style.scrollMarginTop = `${headerHeight + 16}px`;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  const navigate = useCallback((path: string) => {
    const nextHash = `#${path.replace(/^#/, '')}`;
    if (window.location.hash === nextHash) {
      // Setting the same hash does not emit hashchange, but its section should
      // still scroll back into view when the visitor follows the link again.
      setRoute(parseRoute());
    } else {
      window.location.hash = nextHash;
    }
    if (!parseRoute().sectionId) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
      <div className="site-shell min-h-screen bg-ivory">
        <a href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); }} className="sr-only fixed left-4 top-4 z-[60] rounded bg-ivory p-3 text-noir focus:not-sr-only">Skip to content</a>
        <Navbar onNavigate={navigate} currentPath={route.path} onSearch={setSearchQuery} searchQuery={searchQuery} />

        <main id="main-content" tabIndex={-1} key={route.path + (route.productId ?? '')} className="animate-page-enter">
          {route.path === '/shop' && <AtelierGallery externalSearch={searchQuery} initialPieceId={route.productId} />}
          {route.path === '/' && (
            <>
              <Hero />
              <CustomOrders />
              <FeaturedCollections />
              <SignatureJewellery />
              <DesignConcepts />
              <PriceEstimator />
              <InstagramGallery />
              <Founder />
              <Contact />
              <AppointmentForm />
              <FAQ />
            </>
          )}
        </main>

        <Footer onNavigate={navigate} />
        <WhatsAppButton />
        <ScrollToTop />
        <MobileStickyCTA />
      </div>
  );
}

export default App;
