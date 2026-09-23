import { Gem } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div
      className="animate-loader fixed inset-0 z-[100] flex items-center justify-center bg-noir"
      role="status"
      aria-label="Loading Orvélia"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-8">
        {/* Gem emblem with rotating ring */}
        <div className="relative">
          <div className="animate-loader-spin h-20 w-20 rounded-full border border-gold/15 border-t-gold" />
          <div
            className="animate-loader-spin-reverse absolute inset-2 rounded-full border border-gold/10 border-b-gold/50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Gem className="h-7 w-7 text-gold drop-shadow-[0_0_12px_rgba(201,162,39,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Brand name with shimmer */}
        <div className="relative overflow-hidden">
          <span className="font-heading text-2xl font-medium tracking-[0.3em] text-ivory">
            Orvélia
          </span>
          <div className="absolute inset-0 -translate-x-full animate-loader-shimmer bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        {/* Loading bar */}
        <div className="h-px w-32 overflow-hidden rounded-full bg-ivory/10">
          <div className="h-full w-1/2 animate-loader-bar rounded-full bg-gold" />
        </div>
      </div>
    </div>
  );
}
