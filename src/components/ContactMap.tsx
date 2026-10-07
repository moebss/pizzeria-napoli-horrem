import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactMap() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-[#141210] border-b border-[#38322c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#24201d] border border-[#443c35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#ef4444]">
            <MapPin className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Standort & Kontakt</span>
          </div>

          <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl font-black text-[#fbf8f5] tracking-tight">
            Besuche uns in Kerpen-Horrem
          </h2>

          <p className="text-[#a8a29e] text-base sm:text-lg">
            Zentral gelegen auf der Hauptstraße 181. Schnell erreichbar aus ganz Horrem, Sindorf und Umgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#1c1917] border border-[#38322c] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-[#fbf8f5] mb-1">
                  Pizzeria Napoli
                </h3>
                <p className="text-sm text-[#a8a29e]">Baran & Baran GbR</p>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#24201d] border border-[#38322c]">
                <div className="w-10 h-10 rounded-xl bg-[#dc2626]/20 border border-[#dc2626]/30 flex items-center justify-center text-[#ef4444] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#fbf8f5]">Adresse</div>
                  <p className="text-sm text-[#d6d3d1] mt-0.5">
                    Hauptstraße 181<br />
                    50169 Kerpen (Ortsteil Horrem)
                  </p>
                  <p className="text-xs text-[#a8a29e] mt-1">Parkmöglichkeiten direkt an der Hauptstraße vorhanden</p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#24201d] border border-[#38322c]">
                <div className="w-10 h-10 rounded-xl bg-[#dc2626]/20 border border-[#dc2626]/30 flex items-center justify-center text-[#ef4444] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#fbf8f5]">Telefonische Bestellung</div>
                  <a
                    href="tel:022739917575"
                    className="text-lg font-bold text-[#ef4444] hover:underline font-mono mt-0.5 inline-block"
                  >
                    02273 9917575
                  </a>
                  <p className="text-xs text-[#a8a29e] mt-0.5">Für Abholung & Heiß-Lieferung</p>
                </div>
              </div>

              {/* Hours Summary */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#24201d] border border-[#38322c]">
                <div className="w-10 h-10 rounded-xl bg-[#dc2626]/20 border border-[#dc2626]/30 flex items-center justify-center text-[#ef4444] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-[#d6d3d1] space-y-1">
                  <div className="font-bold text-sm text-[#fbf8f5]">Kurzübersicht Zeiten</div>
                  <div>Mo & Di: 16:30 – 21:45 Uhr</div>
                  <div className="text-[#ef4444]">Mi: Ruhetag (Geschlossen)</div>
                  <div>Do – Sa: 11:30 – 21:45 Uhr</div>
                  <div>So: 13:00 – 21:30 Uhr</div>
                </div>
              </div>
            </div>

            {/* Direct Route Action */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Hauptstraße+181+50169+Kerpen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Routenplaner in Google Maps öffnen</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual (DSGVO Zero-CDN compliant) */}
          <div className="lg:col-span-7 bg-[#1c1917] border border-[#38322c] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#38322c] bg-[#141210] flex items-center justify-center text-center p-6">
              
              {/* Stylized Dark Map Graphic Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38322c_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 max-w-md space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#dc2626] text-white flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <MapPin className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <div className="font-['Syne',sans-serif] text-xl font-bold text-[#fbf8f5]">
                    Pizzeria Napoli Horrem
                  </div>
                  <div className="text-sm text-[#ef4444] font-semibold">
                    Hauptstraße 181 · 50169 Kerpen-Horrem
                  </div>
                  <p className="text-xs text-[#a8a29e] pt-1">
                    Zwischen Bahnhof Horrem und Marktplatz gelegen. Schnelle Abholung direkt vor Ort möglich.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Hauptstraße+181+50169+Kerpen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#24201d] hover:bg-[#2d2823] text-[#fbf8f5] text-xs font-bold px-5 py-2.5 rounded-full border border-[#443c35] hover:border-[#dc2626] transition-all shadow-md"
                  >
                    <span>Google Maps Ansicht starten</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Zero-CDN Badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] text-[#78716c] bg-[#141210]/90 px-2.5 py-1 rounded-full border border-[#2d2823]">
                <ShieldCheck className="w-3 h-3 text-[#22c55e]" />
                <span>DSGVO-geschützt: Keine externen Tracking-Karten ohne deine Einwilligung geladen.</span>
              </div>
            </div>

            {/* Bottom Info Tip */}
            <div className="mt-4 pt-4 border-t border-[#2d2823] flex flex-wrap items-center justify-between text-xs text-[#a8a29e] gap-2">
              <span>📍 Anfahrt: B264 & Autobahn A4/A61 Ausfahrt Kerpen / Sindorf / Horrem</span>
              <span>📞 Schnelle Vorbestellung: 02273 9917575</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
