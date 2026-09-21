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

function App() {
  return (
    <div className="min-h-screen bg-ivory">
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
    </div>
  );
}

export default App;
