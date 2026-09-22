import { Gem } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="animate-loader fixed inset-0 z-[100] flex items-center justify-center bg-noir">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="animate-loader-spin h-16 w-16 rounded-full border-2 border-gold/20 border-t-gold" />
          <Gem className="absolute inset-0 m-auto h-6 w-6 text-gold" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-heading text-xl font-medium tracking-wide text-ivory">
            Aurivelle
          </span>
        </div>
      </div>
    </div>
  );
}
