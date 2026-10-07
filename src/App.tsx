import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicePrices from './components/ServicePrices';
import QualityPromise from './components/QualityPromise';
import AboutUs from './components/AboutUs';
import InstagramFeed from './components/InstagramFeed';
import GoogleReviews from './components/GoogleReviews';
import OpeningHoursDelivery from './components/OpeningHoursDelivery';
import FAQ from './components/FAQ';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToMenu = () => {
    const el = document.getElementById('speisekarte');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141210] text-[#fbf8f5] flex flex-col font-['Space_Grotesk',sans-serif] selection:bg-[#dc2626] selection:text-white pb-20 sm:pb-0 overflow-x-hidden">
      <Navbar onOpenMenu={scrollToMenu} onOpenContact={scrollToContact} />
      <main className="flex-grow">
        <Hero onOpenMenu={scrollToMenu} onOpenContact={scrollToContact} />
        <ServicePrices />
        <QualityPromise />
        <AboutUs />
        <InstagramFeed />
        <GoogleReviews />
        <OpeningHoursDelivery />
        <FAQ />
        <ContactMap />
      </main>
      <Footer onOpenLegal={(type) => setLegalModal(type)} onOpenMenu={scrollToMenu} />
      <MobileStickyBar onOpenMenu={scrollToMenu} onOpenContact={scrollToContact} />
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
}
