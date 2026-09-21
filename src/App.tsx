import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
