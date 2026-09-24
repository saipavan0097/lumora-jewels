import { useEffect, useState, useCallback } from 'react';
import { ShopProvider } from '@/context/ShopContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import SignatureJewellery from '@/components/SignatureJewellery';
import WhyChooseLumora from '@/components/WhyChooseLumora';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import InstagramGallery from '@/components/InstagramGallery';
import Founder from '@/components/Founder';
import Contact from '@/components/Contact';
import AppointmentForm from '@/components/AppointmentForm';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import LoadingScreen from '@/components/LoadingScreen';
import CartDrawer from '@/components/shop/CartDrawer';
import ShopPage from '@/components/shop/ShopPage';
import ProductPage from '@/components/shop/ProductPage';
import CheckoutPage from '@/components/shop/CheckoutPage';

type Route = { path: string; productId?: string };

function parseRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const productMatch = hash.match(/^\/product\/(.+)$/);
  if (productMatch) return { path: '/product', productId: productMatch[1] };
  return { path: hash || '/' };
}

function App() {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState<Route>(parseRoute());
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <ShopProvider>
      <div className="min-h-screen bg-ivory">
        {loading && <LoadingScreen />}
        <Navbar onNavigate={navigate} currentPath={route.path} onSearch={setSearchQuery} searchQuery={searchQuery} />

        <main key={route.path + (route.productId ?? '')} className="animate-page-enter">
          {route.path === '/shop' && <ShopPage onNavigate={navigate} externalSearch={searchQuery} />}
          {route.path === '/product' && route.productId && <ProductPage productId={route.productId} onNavigate={navigate} />}
          {route.path === '/checkout' && <CheckoutPage onNavigate={navigate} />}
          {route.path === '/' && (
            <>
              <Hero />
              <FeaturedCollections />
              <SignatureJewellery onNavigate={navigate} />
              <WhyChooseLumora />
              <TrustBadges />
              <Testimonials />
              <InstagramGallery />
              <Founder />
              <Contact />
              <AppointmentForm />
              <FAQ />
              <Newsletter />
            </>
          )}
        </main>

        <Footer onNavigate={navigate} />
        <CartDrawer onNavigate={navigate} />
        <WhatsAppButton />
        <ScrollToTop />
        {route.path === '/' && <MobileStickyCTA />}
      </div>
    </ShopProvider>
  );
}

export default App;
