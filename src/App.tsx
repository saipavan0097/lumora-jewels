import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import SignatureJewellery from '@/components/SignatureJewellery';
import WhyChooseLumora from '@/components/WhyChooseLumora';
import Testimonials from '@/components/Testimonials';
import InstagramGallery from '@/components/InstagramGallery';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <SignatureJewellery />
        <WhyChooseLumora />
        <Testimonials />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
