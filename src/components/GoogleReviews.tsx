import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Marco S.",
      city: "Kerpen-Horrem",
      date: "vor 2 Wochen",
      dish: "Pizza Diavola & Pizzabrötchen",
      rating: 5,
      text: "Beste Pizza in ganz Horrem und Umgebung! Der Teig ist außen wunderbar knusprig mit schöner Kruste und innen luftig. Die Aioli zu den ofenfrischen Pizzabrötchen ist der absolute Wahnsinn."
    },
    {
      name: "Jasmin K.",
      city: "Kerpen-Sindorf",
      date: "vor 1 Monat",
      dish: "Lasagne al Forno & Pizza Margherita",
      rating: 5,
      text: "Haben Lasagne al Forno und Pizza liefern lassen. Das Essen kam dampfend heiß an, viel schneller als die angekündigte Zeit. Super freundlicher Fahrer und geschmacklich eine glatte Eins!"
    },
    {
      name: "Dirk W.",
      city: "Horrem (Hauptstraße)",
      date: "vor 1 Monat",
      dish: "Pizza Prosciutto e Rucola",
      rating: 5,
      text: "Echte italienische Pizzeria mit Herz. Wir holen hier seit Jahren regelmäßig unser Abendessen ab. Qualität ist konstant top und die Portionen machen ehrlich satt. Absolute Empfehlung!"
    },
    {
      name: "Elena M.",
      city: "Frechen-Königsdorf",
      date: "vor 2 Monaten",
      dish: "Insalata Caprese & Rigatoni al Forno",
      rating: 5,
      text: "Frische Zutaten, die man sofort schmeckt! Die Tomaten beim Caprese waren aromatisch, der Mozzarella cremig und die Pasta im Ofen perfekt überbacken. Kommen immer wieder gerne."
    }
  ];

  return (
    <section id="bewertungen" className="py-16 sm:py-24 bg-[#181513] border-b border-[#38322c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header Banner */}
        <div className="bg-[#1c1917] border border-[#38322c] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-[#24201d] border border-[#443c35] flex flex-col items-center justify-center shrink-0">
              <span className="font-serif text-3xl font-bold text-[#fbf8f5]">4.7</span>
              <div className="flex items-center gap-0.5 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#fbf8f5]">
                Ausgezeichnet bei Google
              </h3>
              <p className="text-sm text-[#a8a29e]">
                Basierend auf über <strong className="text-[#fbf8f5]">274 echten Gästebewertungen</strong> aus Kerpen-Horrem und dem Rhein-Erft-Kreis.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#22c55e] pt-1">
                <CheckCircle className="w-4 h-4" />
                <span>100% verifizierte Rezensionen</span>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Hauptstraße+181+50169+Kerpen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#292420] hover:bg-[#342e29] text-[#fbf8f5] text-sm font-semibold px-6 py-3.5 rounded-full border border-[#443c35] hover:border-[#dc2626]/50 transition-all flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-[#ef4444]" />
            <span>Alle Google-Bewertungen lesen</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#a8a29e]" />
          </a>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#1f1b18] border border-[#38322c] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-[#dc2626]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#dc2626]/20 text-[#f87171] font-bold text-sm flex items-center justify-center border border-[#dc2626]/30">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#fbf8f5] text-sm">{r.name}</div>
                      <div className="text-xs text-[#a8a29e]">{r.city} · {r.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                <div className="inline-block text-[11px] font-semibold text-[#f87171] bg-[#292420] border border-[#443c35] px-2.5 py-1 rounded-md mb-3">
                  Bestellt: {r.dish}
                </div>

                <p className="text-sm text-[#d6d3d1] leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2e2823] flex items-center justify-between text-[11px] text-[#78716c]">
                <span>Verifizierter Gast</span>
                <span>Google Maps Eintrag</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
