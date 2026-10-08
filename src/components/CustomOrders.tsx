import { ArrowRight, MessageCircle, PencilLine, Scale, CheckCheck, Hammer } from 'lucide-react';

const steps = [
  { title: 'Share your idea', icon: PencilLine, description: 'Send a reference photo, choose a piece from our work, or tell us what you have in mind.' },
  { title: 'Discuss the details', icon: Scale, description: 'Talk through your budget, metal, size and occasion. We’ll discuss what is practical for your design.' },
  { title: 'Agree before we begin', icon: CheckCheck, description: 'Confirm the design, current quote and expected timing with us before deciding to go ahead.' },
  { title: 'From our family workshop', icon: Hammer, description: 'Once the order is agreed, we make your piece and discuss the arrangements for receiving it with you.' },
];

const enquiry = encodeURIComponent('Hi DAIVIQUE, I would like to discuss a custom jewellery design. Please help me with the design, metal, budget and expected timing. I can share a reference photo.');

export default function CustomOrders() {
  return <section id="custom-orders" aria-labelledby="custom-orders-heading" className="scroll-mt-28 border-b border-noir/10 bg-ivory py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-charcoal/75">Made around your idea</p>
        <h2 id="custom-orders-heading" className="mt-4 font-heading text-4xl leading-tight text-noir sm:text-5xl">Your piece starts with a conversation.</h2>
        <p className="mt-5 text-base leading-relaxed text-charcoal/80">Speak directly with Sai Pavan about a piece made by our family workshop. You don’t need a finished design to start.</p>
      </div>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map(({ title, icon: Icon, description }, index) => <li key={title} className="rounded-2xl border border-noir/10 bg-white p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span aria-hidden="true" className="font-heading text-3xl text-charcoal/60">0{index + 1}</span>
            <Icon aria-hidden="true" className="h-5 w-5 text-charcoal/75" strokeWidth={1.5} />
          </div>
          <h3 className="mt-5 font-heading text-2xl leading-tight text-noir">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{description}</p>
        </li>)}
      </ol>
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm leading-relaxed text-charcoal/80">Helpful to share: a reference photo, budget range, preferred metal and any occasion date. It’s fine if you’re still deciding.</p>
          <p className="mt-2 text-xs leading-relaxed text-charcoal/70">An enquiry does not place an order. Feasibility, price and timing are confirmed personally.</p>
        </div>
        <a href={`https://wa.me/917661930097?text=${enquiry}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-medium text-noir">
          <MessageCircle aria-hidden="true" className="h-4 w-4" />Discuss my idea<ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>;
}
