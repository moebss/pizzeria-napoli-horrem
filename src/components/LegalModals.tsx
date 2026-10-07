import { X, ShieldCheck } from 'lucide-react';

interface LegalModalsProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalsProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#1c1917] border border-[#38322c] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#d6d3d1] space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Schließen"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#24201d] text-[#a8a29e] hover:text-[#fbf8f5] hover:bg-[#2d2823] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'impressum' ? (
          <div>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-black text-[#fbf8f5] mb-4">
              Impressum
            </h2>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#a8a29e]">
              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">Angaben gemäß § 5 TMG</h3>
                <p>
                  <strong>Pizzeria Napoli</strong><br />
                  Baran & Baran GbR<br />
                  Hauptstraße 181<br />
                  50169 Kerpen-Horrem<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">Vertreten durch</h3>
                <p>Die Gesellschafter der Baran & Baran GbR</p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">Kontakt</h3>
                <p>
                  Telefon: 02273 9917575<br />
                  E-Mail: info@pizzeria-napoli-horrem.de
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">Aufsichtsbehörde</h3>
                <p>Gewerbeamt der Stadt Kerpen, Jahnplatz 1, 50171 Kerpen</p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#22c55e] mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Zero-Tracker & DSGVO-Konform</span>
            </div>

            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-black text-[#fbf8f5] mb-4">
              Datenschutzerklärung
            </h2>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#a8a29e]">
              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">1. Datenschutz auf einen Blick</h3>
                <p>
                  Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen. Diese Website verwendet bewusst <strong>keine Tracking-Cookies</strong>, keine Werbenetzwerke und keine externen CDN-Schriftarten (gemäß Urteil des LG München zu Google Fonts).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">2. Verantwortliche Stelle</h3>
                <p>
                  Baran & Baran GbR<br />
                  Hauptstraße 181, 50169 Kerpen-Horrem<br />
                  Telefon: 02273 9917575<br />
                  E-Mail: info@pizzeria-napoli-horrem.de
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">3. Lokale Schriftarten (Self-Hosted)</h3>
                <p>
                  Diese Website bindet Schriften lokal ein (über Node-Packages). Es findet keine Verbindung zu Servern von Google Fonts statt. Deine IP-Adresse verlässt beim Laden der Typografie zu keinem Zeitpunkt dein Endgerät in Richtung Drittstaaten.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">4. Externe Links (Instagram & Google Maps)</h3>
                <p>
                  Auf unserer Website verlinken wir auf unseren Instagram-Auftritt (@pizzerianapolihorrem) sowie auf Google Maps für die Routenführung. Erst durch das aktive Anklicken dieser Links wirst du auf die Server der jeweiligen Betreiber weitergeleitet. Es sind keine automatischen iframes oder Tracking-Pixel eingebettet.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#fbf8f5] text-base mb-1">5. Deine Rechte</h3>
                <p>
                  Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie das Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-[#2d2823] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#292420] hover:bg-[#342e29] text-[#fbf8f5] text-xs font-bold px-5 py-2.5 rounded-xl border border-[#443c35] cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
}
