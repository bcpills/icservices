import React from 'react';
import { Anchor, Send, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-24 border-b border-neutral-800">
      {/* Subtle ambient coastal radial gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent pointer-events-none blur-3xl"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct Proposition and Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Anchor className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">NC Inner Banks · Beaufort & Craven Counties</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] sm:leading-[1.08] tracking-tight font-display max-w-2xl">
              Reliable Coastal Care for Grounds, Docks & Watercraft.
            </h1>

            {/* Proposition Body */}
            <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              From Pamlico River waterfront lawns and algae-crusted docks to mobile boat detailing at your private slip, 
              we deliver dependable groundskeeping, pressure washing, and skilled outdoor labor across the Inner Banks.
            </p>

            {/* Clean Primary Actions (No pricing or bloat) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="h-12 sm:h-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-extrabold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all rounded-xl shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <Send className="w-4 h-4 text-neutral-950" />
                <span>Request a Free Quote</span>
              </button>

              <a
                href="#services"
                className="h-12 sm:h-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 rounded-xl transition-all"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Anchor Carrier */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              
              <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-sky-950 via-teal-950 to-neutral-950 overflow-hidden">
                
                {/* SVG Visual Scene depicting waterfront home, manicured lawn, clean dock, and boat */}
                <svg
                  viewBox="0 0 600 450"
                  className="w-full h-full object-cover"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0c2340" />
                      <stop offset="45%" stopColor="#1e3a5f" />
                      <stop offset="75%" stopColor="#2a5268" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
                    </linearGradient>

                    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0f2b38" />
                      <stop offset="50%" stopColor="#0a1d27" />
                      <stop offset="100%" stopColor="#06121a" />
                    </linearGradient>

                    <linearGradient id="lawnGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="100%" stopColor="#052e16" />
                    </linearGradient>

                    <linearGradient id="dockWoodGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#92400e" />
                      <stop offset="50%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                  </defs>

                  {/* Morning sky over the sound */}
                  <rect width="600" height="240" fill="url(#skyGrad)" />
                  <circle cx="480" cy="170" r="45" fill="#fef08a" opacity="0.35" filter="blur(15px)" />
                  <circle cx="480" cy="170" r="24" fill="#fef9c3" opacity="0.7" />

                  {/* Distant river shoreline and pines */}
                  <path d="M0 190 Q150 185 300 188 T600 185 L600 210 L0 210 Z" fill="#064e3b" opacity="0.6" />
                  <path d="M20 188 L25 165 L30 188 M40 186 L45 160 L50 186 M70 187 L75 168 L80 187 M380 186 L385 162 L390 186 M420 187 L425 158 L430 187" stroke="#064e3b" strokeWidth="6" strokeLinecap="round" />

                  {/* Water: Pamlico River */}
                  <rect y="200" width="600" height="250" fill="url(#waterGrad)" />
                  <path d="M50 220 Q120 222 200 220 T400 221" stroke="#38bdf8" strokeWidth="1" opacity="0.3" fill="none" />
                  <path d="M100 235 Q220 238 350 235 T550 236" stroke="#38bdf8" strokeWidth="1" opacity="0.25" fill="none" />
                  <path d="M400 210 Q450 215 520 210" stroke="#fef08a" strokeWidth="1.5" opacity="0.4" fill="none" />

                  {/* Shoreline Emerald Lawn with clean grading */}
                  <path d="M0 240 Q160 230 320 270 T600 340 L600 450 L0 450 Z" fill="url(#lawnGrad)" />

                  {/* Manicured pine straw mulch border along the shore */}
                  <path d="M0 250 Q160 240 320 280 T600 350" stroke="#78350f" strokeWidth="12" fill="none" opacity="0.9" />

                  {/* Coastal Cottage Gable */}
                  <polygon points="50,210 110,165 170,210" fill="#1e293b" />
                  <rect x="65" y="210" width="90" height="50" fill="#334155" />
                  <rect x="75" y="220" width="20" height="20" fill="#fef08a" opacity="0.6" />
                  <rect x="120" y="220" width="20" height="20" fill="#fef08a" opacity="0.6" />

                  {/* Pier & Boat Dock */}
                  <line x1="280" y1="280" x2="280" y2="350" stroke="#451a03" strokeWidth="8" strokeLinecap="round" />
                  <line x1="360" y1="270" x2="360" y2="330" stroke="#451a03" strokeWidth="8" strokeLinecap="round" />
                  <line x1="440" y1="260" x2="440" y2="310" stroke="#451a03" strokeWidth="8" strokeLinecap="round" />

                  {/* Restored Wooden Deck / Pier planks */}
                  <path d="M220 330 L450 250 L470 260 L240 345 Z" fill="url(#dockWoodGrad)" stroke="#451a03" strokeWidth="1" />
                  
                  <line x1="245" y1="322" x2="260" y2="332" stroke="#451a03" strokeWidth="1.5" />
                  <line x1="280" y1="309" x2="295" y2="319" stroke="#451a03" strokeWidth="1.5" />
                  <line x1="315" y1="297" x2="330" y2="307" stroke="#451a03" strokeWidth="1.5" />
                  <line x1="350" y1="284" x2="365" y2="294" stroke="#451a03" strokeWidth="1.5" />
                  <line x1="385" y1="272" x2="400" y2="282" stroke="#451a03" strokeWidth="1.5" />
                  <line x1="420" y1="260" x2="435" y2="270" stroke="#451a03" strokeWidth="1.5" />

                  {/* Moored Saltwater Boat at the Slip */}
                  <path d="M430 265 Q480 255 530 260 Q550 280 500 290 Q440 290 420 275 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M428 273 Q475 267 520 269 Q530 280 495 285 Q442 284 425 277 Z" fill="#0284c7" />
                  <rect x="465" y="245" width="22" height="20" fill="#334155" rx="3" />
                  <line x1="467" y1="245" x2="467" y2="225" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="485" y1="245" x2="485" y2="225" stroke="#94a3b8" strokeWidth="2.5" />
                  <rect x="460" y="222" width="35" height="5" fill="#0284c7" rx="2" />
                  <rect x="525" y="260" width="16" height="25" fill="#1e293b" rx="4" />

                  {/* Longleaf Coastal Pines in Foreground */}
                  <line x1="40" y1="360" x2="40" y2="260" stroke="#3e2723" strokeWidth="7" strokeLinecap="round" />
                  <path d="M20 280 L40 230 L60 280 Z" fill="#065f46" />
                  <path d="M25 250 L40 210 L55 250 Z" fill="#047857" />
                  <path d="M28 220 L40 185 L52 220 Z" fill="#059669" />

                  <circle cx="340" cy="275" r="4" fill="#38bdf8" opacity="0.8" />
                  <circle cx="345" cy="270" r="2.5" fill="#bae6fd" />
                  <circle cx="335" cy="272" r="2" fill="#ffffff" />
                </svg>

                {/* Overlaid Badge Details */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-neutral-950/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-neutral-400">Serving NC Inner Banks</div>
                    <div className="text-xs sm:text-sm font-bold text-white">Washington · Bath · Belhaven · New Bern</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-emerald-400 font-semibold">Carolina Dependability</div>
                    <div className="text-xs sm:text-sm font-medium text-neutral-200">Daily Routes</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
