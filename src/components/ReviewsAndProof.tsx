import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data';

export const ReviewsAndProof: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Local Reputation & Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Trusted by Riverfront Homeowners & Boaters
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Word travels fast along the Inner Banks. We earn our keep every season through prompt communication, meticulous work, and respect for waterfront ecology.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  {item.service}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80">
                <div className="font-bold text-white text-sm font-display">
                  {item.author}
                </div>
                <div className="text-xs text-neutral-400">
                  {item.title} · {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
