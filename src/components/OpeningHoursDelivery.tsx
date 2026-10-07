import { Clock, Truck, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export default function OpeningHoursDelivery() {
  const hours = [
    { day: 'Montag', time: '16:30 – 21:45 Uhr', note: 'Abendküche' },
    { day: 'Dienstag', time: '16:30 – 21:45 Uhr', note: 'Abendküche' },
    { day: 'Mittwoch', time: 'Ruhetag', note: 'Geschlossen', closed: true },
    { day: 'Donnerstag', time: '11:30 – 21:45 Uhr', note: 'Mittags- & Abendküche' },
    { day: 'Freitag', time: '11:30 – 21:45 Uhr', note: 'Mittags- & Abendküche' },
    { day: 'Samstag', time: '11:30 – 21:45 Uhr', note: 'Durchgehend geöffnet' },
    { day: 'Sonntag', time: '13:00 – 21:30 Uhr', note: 'Familientag & Pizzaabend' },
  ];

  const deliveryAreas = [
    { name: 'Kerpen-Horrem', minOrder: 'ab 12 €', fee: 'Kostenlose Lieferung' },
    { name: 'Kerpen-Sindorf', minOrder: 'ab 15 €', fee: 'Kostenlose Lieferung' },
    { name: 'Neu-Bottenbroich', minOrder: 'ab 15 €', fee: 'Kostenlose Lieferung' },
    { name: 'Götzenkirchen', minOrder: 'ab 15 €', fee: 'Kostenlose Lieferung' },
    { name: 'Kerpen (Zentrum)', minOrder: 'ab 20 €', fee: 'Kostenlose Lieferung' },
    { name: 'Frechen-Königsdorf', minOrder: 'ab 20 €', fee: 'Kostenlose Lieferung' },
  ];

  return (
    <section id="oeffnungszeiten" className="py-16 sm:py-24 bg-[#141210] border-b border-[#38322c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#24201d] border border-[#443c35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#ef4444]">
            <Clock className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Öffnungszeiten & Service</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#fbf8f5] tracking-tight">
            Wann & Wohin wir liefern
          </h2>

          <p className="text-[#a8a29e] text-base sm:text-lg">
            Ob zum Mittagessen im Büro oder zum gemütlichen Abendessen zu Hause: 
            Wir sind verlässlich für dich da.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Opening Hours Table */}
          <div className="lg:col-span-6 bg-[#1c1917] border border-[#38322c] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#2d2823]">
              <div className="w-10 h-10 rounded-xl bg-[#dc2626]/20 border border-[#dc2626]/30 flex items-center justify-center text-[#ef4444]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#fbf8f5]">
                  Öffnungszeiten Pizzeria Napoli
                </h3>
                <p className="text-xs text-[#a8a29e]">Hauptstraße 181, 50169 Kerpen-Horrem</p>
              </div>
            </div>

            <div className="space-y-3">
              {hours.map((h, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-xl border text-sm ${
                    h.closed
                      ? 'bg-[#24201d]/50 border-[#38322c]/50 text-[#78716c]'
                      : 'bg-[#24201d] border-[#38322c] text-[#fbf8f5]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{h.day}</span>
                    <span className="text-[11px] text-[#a8a29e] hidden sm:inline">({h.note})</span>
                  </div>
                  <div className={`font-mono font-bold ${h.closed ? 'text-[#ef4444]' : 'text-[#fbf8f5]'}`}>
                    {h.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#2d2823] flex items-center gap-2 text-xs text-[#a8a29e]">
              <AlertCircle className="w-4 h-4 text-[#ef4444] shrink-0" />
              <span>Küche schließt ca. 15 Minuten vor Betriebsschluss.</span>
            </div>
          </div>

          {/* Column 2: Delivery Areas & Ordering CTA */}
          <div className="lg:col-span-6 bg-[#1c1917] border border-[#38322c] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#2d2823]">
              <div className="w-10 h-10 rounded-xl bg-[#16a34a]/20 border border-[#16a34a]/30 flex items-center justify-center text-[#22c55e]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#fbf8f5]">
                  Unser Liefergebiet im Rhein-Erft-Kreis
                </h3>
                <p className="text-xs text-[#a8a29e]">Schnell, zuverlässig & heiß in Thermoboxen</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliveryAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-[#24201d] border border-[#38322c] p-3.5 rounded-xl flex items-start justify-between"
                >
                  <div>
                    <div className="font-bold text-sm text-[#fbf8f5] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#ef4444]" />
                      <span>{area.name}</span>
                    </div>
                    <div className="text-xs text-[#22c55e] mt-1 font-medium">{area.fee}</div>
                  </div>
                  <span className="text-[11px] bg-[#1c1917] border border-[#443c35] text-[#a8a29e] px-2 py-0.5 rounded-md">
                    {area.minOrder}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Order Box */}
            <div className="bg-[#292420] border border-[#443c35] rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#4ade80] text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Schnellste Bestellung ohne Wartezeit</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#fbf8f5]">
                Jetzt anrufen & frisch bestellen
              </h4>
              <p className="text-xs text-[#a8a29e] leading-relaxed">
                Nenne uns einfach deine Wunschgerichte und deine Lieferadresse. Wir geben dir sofort die exakte Lieferzeit durch!
              </p>
              <div className="pt-2">
                <a
                  href="tel:022739917575"
                  className="w-full flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>02273 9917575 anrufen</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
