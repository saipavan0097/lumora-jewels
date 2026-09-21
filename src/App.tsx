import { useEffect, useState } from 'react';
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
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import LoadingScreen from '@/components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      {loading && <LoadingScreen />}
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <SignatureJewellery />
        <WhyChooseLumora />
        <TrustBadges />
        <Testimonials />
        <InstagramGallery />
        <Founder />
        <Contact />
        <AppointmentForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
