import React, { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceCategory } from '../types';
import { 
  Trees, 
  Sparkles, 
  Hammer, 
  Sailboat, 
  Truck, 
  Check, 
  Clock, 
  Shield, 
  ArrowRight,
  Wrench
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceToQuote: (category: ServiceCategory) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToQuote }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('landscaping');

  const getServiceIcon = (id: ServiceCategory) => {
    switch (id) {
      case 'landscaping':
        return <Trees className="w-5 h-5 text-emerald-400" />;
      case 'pressure-washing':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'deck-dock':
        return <Hammer className="w-5 h-5 text-amber-400" />;
      case 'boat-cleaning':
        return <Sailboat className="w-5 h-5 text-sky-400" />;
      case 'labor':
        return <Truck className="w-5 h-5 text-orange-400" />;
    }
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Human Editorial Numbering */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Capabilities & Equipment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Comprehensive Property & Marine Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            One vetted local crew handles your riverfront estate, from weekly turf mowing and mold eradication 
            to dock carpentry and dockside boat washdowns.
          </p>
        </div>

        {/* Interactive Segmented Switcher / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-neutral-950/80 rounded-xl border border-neutral-800 mb-10">
          {SERVICES_DATA.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2.5 px-3 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all text-left whitespace-nowrap overflow-hidden ${
                  isActive
                    ? 'bg-neutral-800 text-white shadow-md border border-neutral-700'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                }`}
              >
                {getServiceIcon(service.id)}
                <span className="truncate">{service.number}. {service.id.replace('-', ' ').toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Deep Dive Card (Single-Elevation Depth, High Clarity) */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: Core Description and Capabilities List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="font-mono text-emerald-400 font-bold tracking-wider">{selectedService.number}</span>
                <span>/</span>
                <span className="uppercase tracking-wider font-semibold text-neutral-300">Inner Banks Scope</span>
                <span>/</span>
                <span>{selectedService.typicalTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {selectedService.title}
              </h3>

              <p className="text-base text-neutral-300 leading-relaxed">
                {selectedService.description}
              </p>

              {/* What We Deliver */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Included Scope & Standards
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onSelectServiceToQuote(selectedService.id)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <span>Request Quote for This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Equipment Rig & Turnaround Rigor */}
            <div className="lg:col-span-5 bg-neutral-900/90 rounded-xl p-6 border border-neutral-800 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  <Wrench className="w-4 h-4" />
                  <span>Commercial Equipment Deployed</span>
                </div>
                <div className="space-y-2 mt-3">
                  {selectedService.equipment.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-emerald-400 font-bold">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Turnaround & Scheduling</span>
                </div>
                <p className="text-xs text-neutral-300">
                  {selectedService.typicalTime}. We accommodate tidal cycles and weekend guest arrivals for waterfront homes.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  <Shield className="w-4 h-4" />
                  <span>Inner Banks Guarantee</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Surface-safe methods only: no high pressure on fragile cedar or soft gelcoat, no hazardous bleach runoff into Pamlico wetlands.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 5-Column Grid Overview of all services below for quick scanning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setActiveTab(srv.id)}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-200 ${
                activeTab === srv.id
                  ? 'border-emerald-500/60 bg-neutral-900 shadow-lg'
                  : 'border-neutral-800/80 bg-neutral-950/70 hover:border-neutral-700 hover:bg-neutral-900/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {getServiceIcon(srv.id)}
                  <span className="font-mono text-xs text-neutral-400 font-bold">{srv.number}</span>
                </div>
                <span className="text-xs text-neutral-400">View details →</span>
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-1">{srv.title}</h4>
              <p className="text-xs text-neutral-400 line-clamp-2">{srv.tagline}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
