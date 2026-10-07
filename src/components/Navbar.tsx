import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenMenu, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141210]/95 backdrop-blur-md border-b border-[#38322c]/80 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#141210]/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Italian Flag Colored Accent Pill */}
            <div className="flex h-8 w-2 rounded-full overflow-hidden flex-shrink-0">
              <span className="w-full bg-[#16a34a]" />
              <span className="w-full bg-[#ffffff]" />
              <span className="w-full bg-[#dc2626]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base sm:text-2xl font-bold tracking-normal text-[#fbf8f5] group-hover:text-[#dc2626] transition-colors whitespace-nowrap">
                  PIZZERIA NAPOLI
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#dc2626]/20 text-[#f87171] border border-[#dc2626]/30 px-1 sm:px-1.5 py-0.5 rounded shrink-0">
                  HORREM
                </span>
              </div>
              <p className="text-xs text-[#a8a29e] hidden sm:block tracking-normal">
                Steinofen-Pizza & Trattoria · Hauptstraße 181
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#d6d3d1]">
            <a
              href="#speisekarte"
              onClick={(e) => {
                e.preventDefault();
                onOpenMenu();
              }}
              className="hover:text-[#fbf8f5] transition-colors cursor-pointer"
            >
              Speisekarte
            </a>
            <a href="#qualitaet" className="hover:text-[#fbf8f5] transition-colors">
              Tradition & Teig
            </a>
            <a href="#ueber-uns" className="hover:text-[#fbf8f5] transition-colors">
              Über uns
            </a>
            <a href="#instagram" className="hover:text-[#fbf8f5] transition-colors">
              Instagram
            </a>
            <a href="#bewertungen" className="hover:text-[#fbf8f5] transition-colors">
              Bewertungen
            </a>
            <a href="#oeffnungszeiten" className="hover:text-[#fbf8f5] transition-colors">
              Öffnungszeiten & Lieferung
            </a>
            <button
              onClick={onOpenContact}
              className="hover:text-[#fbf8f5] transition-colors cursor-pointer"
            >
              Kontakt & Anfahrt
            </button>
          </nav>

          {/* Call-to-Action & Quick Phone */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:022739917575"
              className="inline-flex items-center gap-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(220,38,38,0.35)] transition-all transform active:scale-95 group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="tabular-nums tracking-wide">02273 9917575</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation umschalten"
            className="lg:hidden p-2 rounded-lg text-[#d6d3d1] hover:text-[#fbf8f5] hover:bg-[#24201d] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1c1917] border-b border-[#38322c] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
          <a
            href="#speisekarte"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onOpenMenu();
            }}
            className="block py-2 text-base font-medium text-[#fbf8f5] hover:text-[#dc2626] border-b border-[#2d2823]"
          >
            🍕 Speisekarte
          </a>
          <a
            href="#qualitaet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#fbf8f5] hover:text-[#dc2626] border-b border-[#2d2823]"
          >
            ✨ Qualität & 48h Teigruhe
          </a>
          <a
            href="#ueber-uns"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#fbf8f5] hover:text-[#dc2626] border-b border-[#2d2823]"
          >
            🍷 Über Pizzeria Napoli
          </a>
          <a
            href="#instagram"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#fbf8f5] hover:text-[#dc2626] border-b border-[#2d2823]"
          >
            📸 Instagram (@pizzerianapolihorrem)
          </a>
          <a
            href="#bewertungen"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#fbf8f5] hover:text-[#dc2626] border-b border-[#2d2823]"
          >
            ⭐ Google Bewertungen (4.7)
          </a>
          <a
            href="#oeffnungszeiten"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#fbf8f5] hover:text-[#dc2626] border-b border-[#2d2823]"
          >
            🕒 Öffnungszeiten & Liefergebiet
          </a>
          
          <div className="pt-2">
            <a
              href="tel:022739917575"
              className="w-full flex items-center justify-center gap-2 bg-[#dc2626] text-white font-bold py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Direkt bestellen: 02273 9917575</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
