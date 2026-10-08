import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
  onOpenOrder: () => void;
}

export default function Navbar({ onOpenMenu, onOpenContact, onOpenOrder }: NavbarProps) {
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
          ? 'bg-[#141210]/95 backdrop-blur-md border-b border-[#38322c]/80 shadow-xl py-3.5 sm:py-4'
          : 'bg-gradient-to-b from-[#141210]/95 via-[#141210]/80 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {/* Italian Flag Colored Accent Pill */}
            <div className="flex h-8 w-2 rounded-full overflow-hidden shrink-0">
              <span className="w-full bg-[#16a34a]" />
              <span className="w-full bg-[#ffffff]" />
              <span className="w-full bg-[#dc2626]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-normal text-[#fbf8f5] group-hover:text-[#dc2626] transition-colors whitespace-nowrap">
                  Pizzeria Napoli
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#dc2626]/20 text-[#f87171] border border-[#dc2626]/30 px-1.5 py-0.5 rounded shrink-0">
                  Horrem
                </span>
              </div>
              <p className="text-xs text-[#a8a29e] hidden sm:block tracking-normal font-sans">
                Steinofen-Pizza & Trattoria · Hauptstraße 181
              </p>
            </div>
          </a>

          {/* Desktop Navigation (Full on xl+) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-medium text-[#d6d3d1]">
            <a
              href="#speisekarte"
              onClick={(e) => {
                e.preventDefault();
                onOpenMenu();
              }}
              className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap cursor-pointer"
            >
              Speisekarte
            </a>
            <a href="#qualitaet" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Tradition & Teig
            </a>
            <a href="#ueber-uns" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Über uns
            </a>
            <a href="#instagram" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Instagram
            </a>
            <a href="#bewertungen" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Bewertungen
            </a>
            <a href="#oeffnungszeiten" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Öffnungszeiten & Lieferung
            </a>
            <button
              onClick={onOpenContact}
              className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap cursor-pointer"
            >
              Kontakt & Anfahrt
            </button>
          </nav>

          {/* Compact Desktop Navigation (Between lg and xl to prevent cramped links) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-5 text-sm font-medium text-[#d6d3d1]">
            <a
              href="#speisekarte"
              onClick={(e) => {
                e.preventDefault();
                onOpenMenu();
              }}
              className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap cursor-pointer"
            >
              Speisekarte
            </a>
            <a href="#qualitaet" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Tradition
            </a>
            <a href="#ueber-uns" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Über uns
            </a>
            <a href="#bewertungen" className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap">
              Bewertungen
            </a>
            <button
              onClick={onOpenContact}
              className="hover:text-[#fbf8f5] transition-colors whitespace-nowrap cursor-pointer"
            >
              Kontakt
            </button>
          </nav>

          {/* Call-to-Action & Quick Phone */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(220,38,38,0.4)] transition-all transform active:scale-95 group shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Online bestellen</span>
            </button>
            <a
              href="tel:022739917575"
              className="inline-flex items-center gap-1.5 bg-[#24201d] hover:bg-[#2e2823] text-[#d6d3d1] hover:text-white border border-[#443c35] text-xs font-semibold px-3.5 py-2.5 rounded-full transition-colors shrink-0 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#ef4444]" />
              <span className="tabular-nums">02273 9917575</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation umschalten"
            className="lg:hidden p-2 rounded-lg text-[#d6d3d1] hover:text-[#fbf8f5] hover:bg-[#24201d] transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1c1917] border-b border-[#38322c] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrder();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#dc2626] text-white font-bold py-3.5 rounded-xl shadow-lg text-base cursor-pointer mb-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Jetzt online bestellen</span>
          </button>
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
              className="w-full flex items-center justify-center gap-2 bg-[#24201d] border border-[#443c35] text-[#d6d3d1] hover:text-white font-bold py-3 rounded-xl shadow-lg text-sm"
            >
              <Phone className="w-4 h-4 text-[#ef4444]" />
              <span>Telefonisch bestellen: 02273 9917575</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
