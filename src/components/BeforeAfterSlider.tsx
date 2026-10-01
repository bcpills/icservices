import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data';
import { Sparkles, MapPin, Eye } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handlePointerMove(e.clientX);
    }
  };

  const handlePointerDown = (clientX: number) => {
    isDragging.current = true;
    handlePointerMove(clientX);
  };

  // Render authentic before and after visual panels for each theme
  const renderVisualPanel = (isBefore: boolean) => {
    const theme = activeItem.theme;

    if (theme === 'wood') {
      return (
        <div className={`w-full h-full relative overflow-hidden ${isBefore ? 'bg-[#1e1b18]' : 'bg-[#451a03]'}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 380" preserveAspectRatio="none">
            <defs>
              <linearGradient id={isBefore ? "woodBefore" : "woodAfter"} x1="0" y1="0" x2="1" y2="0">
                {isBefore ? (
                  <>
                    <stop offset="0%" stopColor="#262626" />
                    <stop offset="50%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#111827" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#b45309" />
                    <stop offset="50%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#92400e" />
                  </>
                )}
              </linearGradient>
            </defs>

            {/* Deck Planks */}
            {[0, 60, 120, 180, 240, 300].map((y, idx) => (
              <g key={idx}>
                <rect x="0" y={y} width="600" height="56" fill={`url(#${isBefore ? "woodBefore" : "woodAfter"})`} />
                <line x1="0" y1={y + 57} x2="600" y2={y + 57} stroke="#000000" strokeWidth="3" />
                
                {/* Wood grain details */}
                <path 
                  d={`M0 ${y + 20} Q150 ${y + 15} 300 ${y + 25} T600 ${y + 18}`} 
                  stroke={isBefore ? "#374151" : "#f59e0b"} 
                  strokeWidth="1.5" 
                  opacity={isBefore ? 0.3 : 0.4} 
                  fill="none" 
                />
                <path 
                  d={`M0 ${y + 40} Q200 ${y + 45} 400 ${y + 35} T600 ${y + 42}`} 
                  stroke={isBefore ? "#4b5563" : "#78350f"} 
                  strokeWidth="1.2" 
                  opacity={isBefore ? 0.35 : 0.6} 
                  fill="none" 
                />

                {/* Deck screws / bolts */}
                <circle cx="50" cy={y + 28} r="3" fill={isBefore ? "#374151" : "#e2e8f0"} />
                <circle cx="550" cy={y + 28} r="3" fill={isBefore ? "#374151" : "#e2e8f0"} />

                {/* Mold & Algae patches if Before */}
                {isBefore && (
                  <>
                    <ellipse cx={80 + idx * 80} cy={y + 30} rx="40" ry="18" fill="#14532d" opacity="0.65" filter="blur(6px)" />
                    <ellipse cx={320 + idx * 40} cy={y + 25} rx="50" ry="15" fill="#052e16" opacity="0.75" filter="blur(7px)" />
                    <ellipse cx={480} cy={y + 35} rx="35" ry="14" fill="#0f172a" opacity="0.7" filter="blur(5px)" />
                  </>
                )}

                {/* Stained wood glow and water beading if After */}
                {!isBefore && (
                  <>
                    <circle cx={120 + idx * 50} cy={y + 20} r="2" fill="#fef08a" opacity="0.8" />
                    <circle cx={280 + idx * 30} cy={y + 35} r="2.5" fill="#fef08a" opacity="0.7" />
                    <circle cx={440} cy={y + 18} r="2" fill="#ffffff" opacity="0.9" />
                  </>
                )}
              </g>
            ))}

            {/* Marine Cleat / Dock Piling accent */}
            <rect x="250" y="320" width="100" height="24" rx="6" fill={isBefore ? "#1f2937" : "#e2e8f0"} stroke="#0f172a" strokeWidth="2" />
          </svg>
        </div>
      );
    }

    if (theme === 'siding') {
      return (
        <div className={`w-full h-full relative overflow-hidden ${isBefore ? 'bg-[#1e293b]' : 'bg-[#f8fafc]'}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 380" preserveAspectRatio="none">
            {/* Horizontal Vinyl Clapboard Siding */}
            {[0, 38, 76, 114, 152, 190, 228, 266, 304, 342].map((y, idx) => (
              <g key={idx}>
                <rect 
                  x="0" 
                  y={y} 
                  width="600" 
                  height="36" 
                  fill={isBefore ? "#334155" : "#f1f5f9"} 
                />
                <line x1="0" y1={y + 36} x2="600" y2={y + 36} stroke={isBefore ? "#0f172a" : "#cbd5e1"} strokeWidth="2" />
                
                {/* Green River Mildew and Black Streaks on Before */}
                {isBefore && (
                  <>
                    <path 
                      d={`M${50 + idx * 30} ${y} Q${90 + idx * 20} ${y + 20} ${120 + idx * 30} ${y + 36}`} 
                      stroke="#15803d" 
                      strokeWidth="16" 
                      opacity="0.65" 
                      filter="blur(8px)" 
                    />
                    <path 
                      d={`M${300 + idx * 20} ${y} Q${340 + idx * 10} ${y + 25} ${370 + idx * 15} ${y + 36}`} 
                      stroke="#14532d" 
                      strokeWidth="20" 
                      opacity="0.75" 
                      filter="blur(9px)" 
                    />
                    <path 
                      d={`M${480 - idx * 15} ${y} Q${500} ${y + 18} ${510} ${y + 36}`} 
                      stroke="#0f172a" 
                      strokeWidth="12" 
                      opacity="0.8" 
                      filter="blur(6px)" 
                    />
                  </>
                )}

                {/* Spotless Bright Reflection if After */}
                {!isBefore && (
                  <line 
                    x1="0" 
                    y1={y + 2} 
                    x2="600" 
                    y2={y + 2} 
                    stroke="#ffffff" 
                    strokeWidth="1.5" 
                    opacity="0.9" 
                  />
                )}
              </g>
            ))}

            {/* Window frame with coastal shutters */}
            <rect x="220" y="80" width="160" height="200" fill={isBefore ? "#1e293b" : "#ffffff"} stroke={isBefore ? "#0f172a" : "#0284c7"} strokeWidth="6" />
            <rect x="235" y="95" width="130" height="170" fill={isBefore ? "#0f172a" : "#bae6fd"} opacity={isBefore ? 0.8 : 0.5} />
            <line x1="300" y1="95" x2="300" y2="265" stroke={isBefore ? "#334155" : "#0284c7"} strokeWidth="4" />
            <line x1="235" y1="180" x2="365" y2="180" stroke={isBefore ? "#334155" : "#0284c7"} strokeWidth="4" />
          </svg>
        </div>
      );
    }

    if (theme === 'boat') {
      return (
        <div className={`w-full h-full relative overflow-hidden ${isBefore ? 'bg-[#0f172a]' : 'bg-[#0369a1]'}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 380" preserveAspectRatio="none">
            {/* Marine Water Surface below */}
            <rect y="260" width="600" height="120" fill={isBefore ? "#0a192f" : "#0284c7"} />
            
            {/* Boat Fiberglass Hull Curvature */}
            <path 
              d="M0 20 Q200 40 450 140 Q550 200 600 240 L600 270 L0 270 Z" 
              fill={isBefore ? "#64748b" : "#ffffff"} 
            />

            {/* Blue Gelcoat Accent Band */}
            <path 
              d="M0 60 Q200 80 430 165 Q510 210 560 240 L540 250 Q490 220 410 180 Q190 100 0 85 Z" 
              fill={isBefore ? "#1e3a5f" : "#0284c7"} 
            />

            {/* Waterline and Brackish River Tannin Scumline on Before */}
            {isBefore && (
              <>
                <path 
                  d="M0 240 Q250 245 450 250 L600 255 L600 275 L0 275 Z" 
                  fill="#78350f" 
                  opacity="0.85" 
                  filter="blur(5px)" 
                />
                <path 
                  d="M0 250 Q280 253 500 258 T600 262" 
                  stroke="#451a03" 
                  strokeWidth="8" 
                  opacity="0.9" 
                />
                {/* Chalky oxidation on navy paint */}
                <ellipse cx="250" cy="110" rx="90" ry="30" fill="#94a3b8" opacity="0.6" filter="blur(10px)" />
              </>
            )}

            {/* High Gloss Gelcoat Mirror Reflection on After */}
            {!isBefore && (
              <>
                {/* Pristine crisp waterline */}
                <line x1="0" y1="260" x2="600" y2="260" stroke="#38bdf8" strokeWidth="2" />
                {/* Mirror light reflection strip */}
                <path 
                  d="M50 40 L280 140 L240 145 L30 45 Z" 
                  fill="#ffffff" 
                  opacity="0.55" 
                  filter="blur(6px)" 
                />
                <circle cx="340" cy="160" r="4" fill="#ffffff" />
                <circle cx="420" cy="190" r="3" fill="#ffffff" />
              </>
            )}

            {/* Chrome Rub Rail */}
            <path 
              d="M0 20 Q200 40 450 140 Q550 200 600 240" 
              stroke={isBefore ? "#475569" : "#e2e8f0"} 
              strokeWidth="6" 
              fill="none" 
            />
          </svg>
        </div>
      );
    }

    // Lawn / Shoreline
    return (
      <div className={`w-full h-full relative overflow-hidden ${isBefore ? 'bg-[#27272a]' : 'bg-[#052e16]'}`}>
        <svg className="w-full h-full object-cover" viewBox="0 0 600 380" preserveAspectRatio="none">
          {/* River Water in background */}
          <rect y="0" width="600" height="140" fill={isBefore ? "#1e293b" : "#0284c7"} />

          {/* Shoreline slope */}
          <path 
            d="M0 130 Q250 145 450 135 T600 140 L600 380 L0 380 Z" 
            fill={isBefore ? "#3f3f46" : "#15803d"} 
          />

          {isBefore ? (
            <>
              {/* Overgrown weeds, scrub, fallen pine limbs */}
              <ellipse cx="200" cy="220" rx="90" ry="40" fill="#2e1065" opacity="0.3" />
              <path d="M50 350 L80 260 L90 350 M120 360 L140 240 L160 360 M300 340 L320 230 L340 340 M450 360 L480 270 L510 360" stroke="#713f12" strokeWidth="8" strokeLinecap="round" />
              <path d="M40 320 L160 300 M240 330 L380 280 M420 340 L550 310" stroke="#451a03" strokeWidth="10" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* Crisp deep-tucked Longleaf Pine Straw Bed */}
              <path d="M0 240 Q250 220 450 250 T600 240 L600 380 L0 380 Z" fill="#78350f" />
              <path d="M0 238 Q250 218 450 248 T600 238" stroke="#451a03" strokeWidth="4" fill="none" />
              
              {/* Clean edge and crape myrtle tree */}
              <line x1="160" y1="260" x2="160" y2="170" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
              <circle cx="160" cy="150" r="35" fill="#15803d" />
              <circle cx="175" cy="140" r="18" fill="#f43f5e" opacity="0.8" />

              <line x1="420" y1="270" x2="420" y2="180" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
              <circle cx="420" cy="160" r="35" fill="#15803d" />
              <circle cx="435" cy="150" r="18" fill="#f43f5e" opacity="0.8" />

              {/* Manicured emerald turf stripe lines */}
              <line x1="0" y1="160" x2="600" y2="160" stroke="#16a34a" strokeWidth="2" opacity="0.6" />
              <line x1="0" y1="190" x2="600" y2="190" stroke="#16a34a" strokeWidth="2" opacity="0.6" />
              <line x1="0" y1="220" x2="600" y2="220" stroke="#16a34a" strokeWidth="2" opacity="0.6" />
            </>
          )}
        </svg>
      </div>
    );
  };

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              Visual Proof & Restorations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
              See the Transformation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl">
              Drag the interactive split handle to compare weathered waterfront surfaces against our commercial restoration standards.
            </p>
          </div>

          {/* Quick Item Selectors */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                  activeItemIndex === idx
                    ? 'bg-emerald-400 text-neutral-950 shadow-sm'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {item.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The Comparative Slider Frame */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl">
          
          {/* Quick preset buttons for touch/mobile devices */}
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800 text-xs text-neutral-300">
            <span className="text-[11px] text-neutral-400 hidden sm:inline">Drag handle or tap presets:</span>
            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
              <button
                type="button"
                onClick={() => setSliderPosition(95)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sliderPosition > 80 ? 'bg-neutral-800 text-white border border-neutral-700' : 'text-neutral-400 hover:text-white'
                }`}
              >
                100% Before
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sliderPosition >= 40 && sliderPosition <= 60 ? 'bg-emerald-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                50/50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(5)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sliderPosition < 20 ? 'bg-neutral-800 text-white border border-neutral-700' : 'text-neutral-400 hover:text-white'
                }`}
              >
                100% After
              </button>
            </div>
          </div>

          {/* Main Visual Slider Canvas */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => (isDragging.current = false)}
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onTouchStart={(e) => e.touches[0] && handlePointerDown(e.touches[0].clientX)}
            className="relative h-72 sm:h-80 md:h-[420px] w-full select-none cursor-ew-resize overflow-hidden touch-none"
          >
            {/* Background: After (Fully Restored) */}
            <div className="absolute inset-0">
              {renderVisualPanel(false)}
              <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-emerald-400 uppercase tracking-wider border border-emerald-500/30">
                After: Restored & Sealed
              </div>
            </div>

            {/* Foreground: Before (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-[1440px] max-w-none h-full">
                {renderVisualPanel(true)}
              </div>
              <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-neutral-400 uppercase tracking-wider border border-neutral-700">
                Before: Weathered / Algae
              </div>
            </div>

            {/* Draggable Divider Line and Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-xl border-2 border-neutral-950 font-bold text-xs">
                ⇄
              </div>
            </div>

          </div>

          {/* Project Details Bar Below Slider */}
          <div className="p-6 sm:p-8 bg-neutral-950 border-t border-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeItem.location}</span>
                  <span className="text-neutral-500">·</span>
                  <span className="text-neutral-300">{activeItem.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300">
                  {activeItem.description}
                </p>
              </div>

              {/* Exact Before / After Data Points */}
              <div className="md:col-span-6 grid grid-cols-2 gap-4 bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-1">
                    Initial Inspection
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-neutral-300 leading-snug">
                    {activeItem.beforeStats}
                  </div>
                </div>

                <div className="border-l border-neutral-800 pl-4">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Completed Result</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {activeItem.afterStats}
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
