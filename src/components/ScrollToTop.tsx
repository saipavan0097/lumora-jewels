import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="group fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-noir text-gold opacity-0 transition-all duration-500 hover:bg-gold hover:text-noir"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.5} />
    </button>
  );
}
