import React from 'react';
import { SEASONAL_PACKAGES } from '../data';
import { Check, CalendarDays, ArrowRight } from 'lucide-react';

interface SeasonalPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const SeasonalPackages: React.FC<SeasonalPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-neutral-900/40 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <CalendarDays className="w-4 h-4" />
            <span>Turnkey Property Management</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Seasonal Maintenance Bundles
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Keep your coastal cottage or full-time waterfront estate in pristine shape year-round. Perfect for absentee second-home owners and busy boaters.
          </p>
        </div>

        {/* 3 Packages Bento-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SEASONAL_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${
                pkg.popular
                  ? 'border-emerald-500/80 bg-neutral-950 shadow-2xl relative ring-1 ring-emerald-500/20'
                  : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Quiet unboxed text kicker for popular state */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="font-semibold text-emerald-400">{pkg.season}</span>
                  {pkg.popular && (
                    <span className="text-white font-semibold">★ Most Requested</span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white font-display">
                  {pkg.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 mb-6">
                  {pkg.focus}
                </p>

                {/* Features */}
                <div className="space-y-3 border-t border-neutral-800/80 pt-6">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-neutral-800/80">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-emerald-400 text-neutral-950 hover:bg-emerald-300 shadow-md'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700'
                  }`}
                >
                  <span>Select {pkg.name.split(' ')[1] || 'Package'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
