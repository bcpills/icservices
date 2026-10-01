import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServiceArea } from './components/ServiceArea';
import { SeasonalPackages } from './components/SeasonalPackages';
import { ReviewsAndProof } from './components/ReviewsAndProof';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ServiceCategory } from './types';

export default function App() {
  const [contactInitialScope, setContactInitialScope] = useState<string>('');

  const handleOpenQuote = (scope?: string) => {
    if (scope) {
      setContactInitialScope(scope);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceToQuote = (category: ServiceCategory) => {
    const categoryMap: Record<ServiceCategory, string> = {
      'landscaping': 'Landscaping & Grounds',
      'pressure-washing': 'Pressure & Soft Washing',
      'deck-dock': 'Decks, Docks & Piers',
      'boat-cleaning': 'Boat Detailing',
      'labor': 'Skilled Labor & Storm Prep',
    };
    handleOpenQuote(`Service requested: ${categoryMap[category]}`);
  };

  const handleSelectPackage = (packageName: string) => {
    handleOpenQuote(`Seasonal Care Package: ${packageName}`);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans pb-16 sm:pb-0">
      {/* Schema.org LocalBusiness structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Inner Banks Landscaping and Labor",
            "image": "https://innerbankslandscaping.com/og-image.jpg",
            "telephone": "+1-252-945-8820",
            "email": "service@innerbankslandscaping.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Washington",
              "addressRegion": "NC",
              "postalCode": "27889",
              "addressCountry": "US"
            },
            "areaServed": [
              "Washington NC",
              "Bath NC",
              "Belhaven NC",
              "New Bern NC",
              "Oriental NC",
              "Chocowinity NC",
              "Edenton NC",
              "Pamlico County",
              "Beaufort County",
              "Craven County"
            ],
            "openingHours": "Mo,Tu,We,Th,Fr,Sa 07:00-18:30",
            "description": "Full-service coastal landscaping, high-pressure washing, dock and deck restoration, boat detailing, and skilled labor across the North Carolina Inner Banks."
          })
        }}
      />

      {/* Strict 3-Zone Top Bar with Mobile Quick Actions */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Flow: Clean, Direct, Professional */}
      <main className="flex-1">
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
        />

        <Services 
          onSelectServiceToQuote={handleSelectServiceToQuote} 
        />

        <BeforeAfterSlider />

        <ServiceArea />

        <SeasonalPackages 
          onSelectPackage={handleSelectPackage} 
        />

        <ReviewsAndProof />

        {/* Prominent Contact Us / Request a Quote Form */}
        <ContactForm 
          initialScope={contactInitialScope} 
        />
      </main>

      <Footer />

      {/* Mobile Sticky Bottom Thumb Action Bar (1-Tap Call & Request Quote) */}
      <MobileBottomBar onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
