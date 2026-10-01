import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Send, Waves } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          
          {/* Zone 1: Smaller logo with ocean wave */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-colors py-1"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all shrink-0">
              <Waves className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">
              Inner Banks Landscaping & Labor
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links (desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#before-after" className="hover:text-white transition-colors">
              Before & After
            </a>
            <a href="#service-area" className="hover:text-white transition-colors">
              Service Area
            </a>
            <a href="#packages" className="hover:text-white transition-colors">
              Seasonal Care
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact / Quote
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:2529458820"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>(252) 945-8820</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all rounded-md shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Quick Action Group (Touch targets >= 44x44px) */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={onOpenQuote}
              className="min-h-[44px] px-3 flex items-center gap-1 text-xs font-bold text-neutral-950 bg-emerald-400 rounded-lg active:scale-95 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Quote</span>
            </button>

            <a
              href="tel:2529458820"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-300 hover:text-white active:bg-neutral-800 rounded-lg"
              aria-label="Call (252) 945-8820"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-300 hover:text-white active:bg-neutral-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-950/98 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in fade-in duration-150">
          <nav className="flex flex-col divide-y divide-neutral-900 text-sm font-medium text-neutral-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center hover:text-emerald-400 transition-colors"
            >
              Services & Capabilities
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center hover:text-emerald-400 transition-colors"
            >
              Before & After Transformations
            </a>
            <a
              href="#service-area"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center hover:text-emerald-400 transition-colors"
            >
              Inner Banks Service Towns
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center hover:text-emerald-400 transition-colors"
            >
              Seasonal Care Packages
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 text-sm font-extrabold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Contact Us / Request a Quote</span>
            </button>

            <a
              href="tel:2529458820"
              className="min-h-[44px] flex items-center justify-center gap-2 text-xs font-bold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-xl"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Direct: (252) 945-8820</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
