import React from 'react';
import { Phone, Mail, MapPin, Anchor, Waves } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 group transition-colors inline-flex"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all shrink-0">
                <Waves className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                Inner Banks Landscaping & Labor
              </span>
            </a>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Full-service coastal groundskeeping, high-pressure washing, dock & deck restoration, 
              dockside boat detailing, and reliable skilled labor across eastern North Carolina.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <div className="text-white font-semibold uppercase tracking-wider text-xs mb-3 font-display">
              Services
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Coastal Turf Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pressure & Soft Washing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dock & Deck Restoration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Boat Detailing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Skilled Labor & Hauling</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Seasonal Property Care</a></li>
            </ul>
          </div>

          {/* Regional Territory */}
          <div>
            <div className="text-white font-semibold uppercase tracking-wider text-xs mb-3 font-display">
              Service Towns
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#service-area" className="hover:text-white transition-colors">Washington, NC</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">Bath & Bath Creek</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">Belhaven & Pungo River</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">New Bern & Trent Woods</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">Oriental & Minnesott</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">Chocowinity & Blounts Creek</a></li>
            </ul>
          </div>

          {/* Contact & Dispatch */}
          <div>
            <div className="text-white font-semibold uppercase tracking-wider text-xs mb-3 font-display">
              Dispatch & Contact
            </div>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <a href="tel:2529458820" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono font-medium">(252) 945-8820</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate">service@innerbankslandscaping.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Beaufort County, NC</span>
              </div>
              <div className="pt-1 text-[11px] text-neutral-400">
                Mon–Sat: 7:00 AM – 6:30 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Inner Banks Landscaping and Labor LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <Anchor className="w-3.5 h-3.5 text-emerald-400" />
            <span>Serving the Pamlico, Neuse, and Albemarle Waterways</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
