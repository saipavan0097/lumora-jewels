import { MessageCircle } from 'lucide-react';
export default function AppointmentForm() {
  return <section id="appointment" className="bg-noir px-6 py-24 text-center text-ivory">
    <div className="mx-auto max-w-2xl"><p className="text-xs uppercase tracking-luxe text-gold">A personal conversation</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">Let's talk about your piece.</h2><p className="mt-6 text-sm leading-relaxed text-ivory/65">Tell us which ornament caught your eye, or share an idea you would like to discuss. Speak with us directly about materials, sizing, a quote or a visit.</p><a href="https://wa.me/917661930097?text=Hi%20DAIVIQUE%2C%20I%20would%20like%20to%20discuss%20a%20jewellery%20piece%20and%20arrange%20a%20consultation." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs uppercase tracking-wider text-noir"><MessageCircle className="h-4 w-4" />Discuss on WhatsApp</a><p className="mt-5 text-xs text-ivory/50">Opening WhatsApp does not book an appointment. A time is confirmed personally with us.</p></div>
  </section>;
}
