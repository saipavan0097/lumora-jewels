import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    'Hi DAIVIQUE,\nI would like to know more about your jewellery collection.'
  );
  const href = `https://wa.me/917661930097?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)]"
    >
      {/* Subtle pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2.5s' }} />
      <MessageCircle
        className="relative h-6 w-6 text-white"
        strokeWidth={1.5}
        fill="white"
      />
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-noir px-3 py-1.5 text-xs font-light text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
