import { Phone, MapPin, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onOpenMenu: () => void;
}

export default function Footer({ onOpenLegal, onOpenMenu }: FooterProps) {
  return (
    <footer className="bg-[#100e0d] border-t border-[#38322c] pt-14 pb-24 sm:pb-14 text-[#a8a29e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#24201d]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-2 rounded-full overflow-hidden flex-shrink-0">
                <span className="w-full bg-[#16a34a]" />
                <span className="w-full bg-[#ffffff]" />
                <span className="w-full bg-[#dc2626]" />
              </div>
              <span className="font-serif text-xl font-bold text-[#fbf8f5] tracking-normal">
                PIZZERIA NAPOLI
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#a8a29e]">
              Original italienische Steinofen-Pizza, überbackene Pasta al Forno, frische Salate und hausgemachte Pizzabrötchen in Kerpen-Horrem.
            </p>

            <div className="pt-1">
              <a
                href="https://www.instagram.com/pizzerianapolihorrem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#f472b6] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: @pizzerianapolihorrem</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#fbf8f5]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#speisekarte"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenMenu();
                  }}
                  className="hover:text-[#fbf8f5] transition-colors"
                >
                  Speisekarte & Gerichte
                </a>
              </li>
              <li>
                <a href="#qualitaet" className="hover:text-[#fbf8f5] transition-colors">
                  48h Teigruhe & Steinofen
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-[#fbf8f5] transition-colors">
                  Über Pizzeria Napoli
                </a>
              </li>
              <li>
                <a href="#bewertungen" className="hover:text-[#fbf8f5] transition-colors">
                  Google Rezensionen (4.7)
                </a>
              </li>
              <li>
                <a href="#oeffnungszeiten" className="hover:text-[#fbf8f5] transition-colors">
                  Öffnungszeiten & Liefergebiet
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#fbf8f5]">
              Kontakt & Bestellung
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                <span>Hauptstraße 181, 50169 Kerpen-Horrem</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ef4444] shrink-0" />
                <a href="tel:022739917575" className="hover:text-[#fbf8f5] font-bold text-white">
                  02273 9917575
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:022739917575"
                className="inline-block bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
              >
                Jetzt telefonisch bestellen
              </a>
            </div>
          </div>

          {/* Legal / Rechtliches */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#fbf8f5]">
              Rechtliches & DSGVO
            </h4>
            <p className="text-xs text-[#78716c] leading-relaxed">
              Betrieben durch Baran & Baran GbR.<br />
              100% datenschutzkonform ohne Drittanbieter-Tracking-Cookies.
            </p>
            <div className="flex flex-col gap-1.5 pt-1 text-xs">
              <button
                onClick={() => onOpenLegal('impressum')}
                className="text-left hover:text-[#fbf8f5] underline underline-offset-2 cursor-pointer"
              >
                Impressum (Angaben gem. § 5 TMG)
              </button>
              <button
                onClick={() => onOpenLegal('datenschutz')}
                className="text-left hover:text-[#fbf8f5] underline underline-offset-2 cursor-pointer"
              >
                Datenschutzerklärung (DSGVO)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716c] gap-4">
          <p>
            © {new Date().getFullYear()} Pizzeria Napoli (Baran & Baran GbR). Alle Rechte vorbehalten.
          </p>
          <p className="flex items-center gap-1">
            Mit <Heart className="w-3.5 h-3.5 text-[#ef4444] fill-[#ef4444]" /> für Kerpen-Horrem
          </p>
        </div>

      </div>
    </footer>
  );
}
