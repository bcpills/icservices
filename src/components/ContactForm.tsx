import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Sparkles, Trees, Hammer, Sailboat, Truck, Layers } from 'lucide-react';

interface ContactFormProps {
  initialScope?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialScope }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState<string>('Landscaping & Grounds');
  const [town, setTown] = useState('Washington, NC');
  const [address, setAddress] = useState('');
  const [projectNotes, setProjectNotes] = useState(initialScope || '');
  const [preferredTime, setPreferredTime] = useState('This Week / ASAP');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // Service options with clear icons for touch selection
  const serviceOptions = [
    { id: 'Landscaping & Grounds', label: 'Landscaping & Grounds', icon: Trees },
    { id: 'Pressure & Soft Washing', label: 'Pressure & Soft Washing', icon: Sparkles },
    { id: 'Decks, Docks & Piers', label: 'Decks, Docks & Piers', icon: Hammer },
    { id: 'Boat Detailing', label: 'Boat Detailing', icon: Sailboat },
    { id: 'Skilled Labor & Storm Prep', label: 'Skilled Labor & Storm Prep', icon: Truck },
    { id: 'Full Property Bundle', label: 'Full Property Bundle', icon: Layers },
  ];

  // Update notes if initialScope changes
  React.useEffect(() => {
    if (initialScope) {
      setProjectNotes((prev) => {
        if (!prev) return initialScope;
        if (prev.includes(initialScope)) return prev;
        return `${initialScope}\n\nAdditional Notes: ${prev}`;
      });
      // Try to intelligently match service
      if (initialScope.toLowerCase().includes('boat')) {
        setServiceOfInterest('Boat Detailing');
      } else if (initialScope.toLowerCase().includes('deck') || initialScope.toLowerCase().includes('dock')) {
        setServiceOfInterest('Decks, Docks & Piers');
      } else if (initialScope.toLowerCase().includes('pressure') || initialScope.toLowerCase().includes('wash')) {
        setServiceOfInterest('Pressure & Soft Washing');
      } else if (initialScope.toLowerCase().includes('labor') || initialScope.toLowerCase().includes('storm')) {
        setServiceOfInterest('Skilled Labor & Storm Prep');
      }
    }
  }, [initialScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormError('Please fill in your name, phone number, and email.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-neutral-900/90 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Header Banner tailored for mobile scanning */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Turnaround · Free On-Site Consultations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Contact Us / Request a Quote
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto">
            Tell us about your property or boat, and we’ll provide a transparent, upfront estimate within 2–4 hours. Or call our Beaufort County dispatch directly.
          </p>

          {/* 1-Tap Mobile Call Box */}
          <div className="mt-4 flex items-center justify-center">
            <a
              href="tel:2529458820"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-950 border border-neutral-700 hover:border-emerald-400 text-white hover:text-emerald-400 transition-all text-sm font-semibold shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Dispatch: <strong className="text-white font-mono">(252) 945-8820</strong></span>
            </a>
          </div>
        </div>

        {/* Prominent Main Card */}
        <div className="max-w-4xl mx-auto bg-neutral-950 rounded-2xl sm:rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden">
          
          {submitted ? (
            <div className="p-8 sm:p-14 text-center space-y-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/5">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Quote Request Confirmed!
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{fullName}</strong>. We received your request for <strong className="text-emerald-400">{serviceOfInterest}</strong> in <strong className="text-white">{town}</strong>.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-neutral-900 rounded-xl border border-neutral-800 max-w-md mx-auto text-left text-xs sm:text-sm text-neutral-300 space-y-2">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Confirmation Code:</span>
                  <span className="font-mono font-bold text-emerald-400">IBX-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Phone for Confirmation:</span>
                  <span className="font-medium text-white">{phone}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Service:</span>
                  <span className="font-medium text-white">{serviceOfInterest}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-400">Response Window:</span>
                  <span className="text-emerald-400 font-semibold">Under 4 Hours</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="tel:2529458820"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Crew Dispatch Now</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhone('');
                    setEmail('');
                    setAddress('');
                    setProjectNotes('');
                  }}
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-neutral-700 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12 space-y-6 sm:space-y-8">
              
              {formError && (
                <div className="p-3.5 bg-red-950/60 border border-red-500/50 rounded-xl text-red-200 text-xs sm:text-sm font-medium">
                  {formError}
                </div>
              )}

              {/* SECTION 1: Service of Interest (Thumb-First Selection Grid) */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 block">
                  1. Service of Interest <span className="text-emerald-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {serviceOptions.map((opt) => {
                    const isSelected = serviceOfInterest === opt.id;
                    const IconComponent = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setServiceOfInterest(opt.id)}
                        className={`min-h-[48px] p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all text-xs sm:text-sm font-semibold ${
                          isSelected
                            ? 'border-emerald-400 bg-emerald-950/40 text-white shadow-md ring-1 ring-emerald-400/30'
                            : 'border-neutral-800 bg-neutral-900/70 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-neutral-400'}`} />
                        <span className="truncate">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: Contact Information (Large, comfortable 48px touch targets) */}
              <div className="space-y-4 pt-2 border-t border-neutral-800/80">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 block">
                  2. Your Contact Information <span className="text-emerald-400">*</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Thomas Bradley"
                      className="w-full h-12 px-4 bg-neutral-900 border border-neutral-700 rounded-xl text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Phone Number (Mobile preferred) <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(252) 555-0199"
                      className="w-full h-12 px-4 bg-neutral-900 border border-neutral-700 rounded-xl text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="w-full h-12 px-4 bg-neutral-900 border border-neutral-700 rounded-xl text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  {/* Town / Vicinity */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Town / Location in Inner Banks
                    </label>
                    <select
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      className="w-full h-12 px-4 bg-neutral-900 border border-neutral-700 rounded-xl text-base sm:text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    >
                      <option value="Washington, NC">Washington, NC (Pamlico River)</option>
                      <option value="Bath, NC">Bath, NC (Bath Creek)</option>
                      <option value="Belhaven, NC">Belhaven, NC (Pungo River)</option>
                      <option value="New Bern, NC">New Bern, NC (Neuse/Trent)</option>
                      <option value="Oriental, NC">Oriental, NC (Pamlico County)</option>
                      <option value="Chocowinity, NC">Chocowinity & Whichards Beach</option>
                      <option value="Edenton, NC">Edenton, NC (Albemarle Sound)</option>
                      <option value="Blounts Creek, NC">Blounts Creek, NC</option>
                      <option value="Other Inner Banks">Other (Specify in notes)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Property & Scope Details */}
              <div className="space-y-4 pt-2 border-t border-neutral-800/80">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 block">
                  3. Property & Timing Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Street address */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Property Street Address or Marina / Dock Slip
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 142 River Road or Slip #12"
                      className="w-full h-12 px-4 bg-neutral-900 border border-neutral-700 rounded-xl text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-all"
                    />
                  </div>

                  {/* Timing */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Target Timeframe
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full h-12 px-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="This Week / ASAP">ASAP / This Week</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Weekend Guest Prep">Before Weekend Guests</option>
                      <option value="Recurring Route">Ongoing Maintenance</option>
                      <option value="Emergency Storm Callout">Emergency / Storm Haul</option>
                    </select>
                  </div>
                </div>

                {/* Notes textarea */}
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    Project Notes / Boat Length / Specific Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="Tell us about your dock condition, boat length, yard square footage, gate access, or special requests..."
                    className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded-xl text-base sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-all"
                  />
                </div>
              </div>

              {/* Prominent Submit Button (Touch-first, 52px height) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl text-base font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Your Quote Request...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-neutral-950" />
                      <span>Request Free On-Site Quote</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
