import React, { useState } from 'react';
import { SERVICE_TOWNS } from '../data';
import { MapPin, Navigation, Calendar, Waves, CheckCircle2 } from 'lucide-react';

export const ServiceArea: React.FC = () => {
  const [selectedTown, setSelectedTown] = useState(SERVICE_TOWNS[0]);

  return (
    <section id="service-area" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Navigation className="w-4 h-4" />
            <span>Regional Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Inner Banks Service Territory
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Headquartered in Beaufort County with mobile service rigs dispatched daily along the Pamlico, Neuse, and Pungo waterways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Town List (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICE_TOWNS.map((town) => {
              const isSelected = selectedTown.name === town.name;
              return (
                <div
                  key={town.name}
                  onClick={() => setSelectedTown(town)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-emerald-500 bg-neutral-900 shadow-md'
                      : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700 hover:bg-neutral-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      {town.county}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {town.responseTime}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display mb-1">
                    {town.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Waves className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{town.waterway}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Territory Detail & Route Schedule (5 Cols) */}
          <div className="lg:col-span-5 bg-neutral-900/90 rounded-2xl p-6 sm:p-8 border border-neutral-800 space-y-6 sticky top-28">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <MapPin className="w-4 h-4" />
              <span>Route & Response Profile</span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white font-display">
                {selectedTown.name}
              </h3>
              <div className="text-xs text-neutral-400 mt-1">
                {selectedTown.county} · {selectedTown.waterway} Watershed
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Scheduled Service Days</span>
                </div>
                <div className="text-sm font-bold text-white">
                  {selectedTown.schedule}
                </div>
              </div>

              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Emergency Storm & Watercraft Callout</span>
                </div>
                <div className="text-sm font-bold text-white">
                  {selectedTown.responseTime} response for fallen trees, dock damage, or boat securing
                </div>
              </div>
            </div>

            <div className="text-xs text-neutral-400 pt-2 border-t border-neutral-800 space-y-2">
              <p>
                <strong>Out-of-County Properties:</strong> Have an offshore island cabin, duck impoundment, or Albemarle soundfront retreat? We regularly transport equipment via ferry or barge by special contract.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all text-center"
            >
              Check Availability in {selectedTown.name.split(' ')[0]}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
