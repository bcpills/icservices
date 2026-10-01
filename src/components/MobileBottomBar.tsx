import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenQuote: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenQuote }) => {
  return (
    <div 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 shadow-2xl"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)' }}
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* 1-Tap Phone Call */}
        <a
          href="tel:2529458820"
          className="h-11 flex items-center justify-center gap-2 px-3 rounded-xl bg-neutral-900 border border-neutral-700 active:bg-neutral-800 text-white text-xs font-bold transition-all shadow-sm"
        >
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">Call (252) 945-8820</span>
        </a>

        {/* 1-Tap Request Quote */}
        <button
          onClick={onOpenQuote}
          className="h-11 flex items-center justify-center gap-1.5 px-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] text-neutral-950 text-xs font-extrabold transition-all shadow-md"
        >
          <span>Request Quote</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};
