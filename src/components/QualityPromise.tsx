import { Flame, Clock, ShieldCheck, Sparkles, Truck, Check } from 'lucide-react';

export default function QualityPromise() {
  const promises = [
    {
      icon: Clock,
      title: '48 Stunden Teigruhe',
      highlight: 'Kein Völlegefühl',
      description: 'Unser Pizzateig reift volle 48 Stunden bei kontrollierter Temperatur. Durch die lange Teigführung wird die Pizza herrlich bekömmlich, außen kross mit typischen Röstbläschen und innen wunderbar saftig.',
      badge: 'Traditionelles Handwerk'
    },
    {
      icon: Flame,
      title: 'Backen bei 400 °C im Steinofen',
      highlight: 'Krosser Rand & perfekter Schmelz',
      description: 'Die extreme Hitze im Steinofen schließt das Aroma in Sekundenschnelle ein. Der Teig geht explosionsartig auf, während der Belag saftig und aromatisch bleibt.',
      badge: 'Echter Steinofen'
    },
    {
      icon: Truck,
      title: 'Heiße Express-Lieferung',
      highlight: 'Kein Durchweichen im Karton',
      description: 'Unsere Fahrer transportieren jede Bestellung in isolierten Thermoboxen. Wenn die Pizza an deiner Haustür in Horrem oder Umgebung ankommt, dampft sie noch wie frisch aus dem Ofen.',
      badge: 'Horrem & Umgebung'
    },
    {
      icon: ShieldCheck,
      title: '100% Original Zutaten',
      highlight: 'Fior di Latte & San Marzano',
      description: 'Wir verzichten konsequent auf Billigzutaten und Analogkäse. Bei uns gibt es sonnengereifte italienische Tomatensauce, echten Mozzarella, feinstes Olivenöl und frische Kräuter.',
      badge: 'Höchste Frische'
    }
  ];

  return (
    <section id="qualitaet" className="py-16 sm:py-24 bg-[#141210] border-b border-[#38322c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#24201d] border border-[#443c35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#ef4444]">
            <Sparkles className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Warum Pizzeria Napoli?</span>
          </div>

          <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl font-black text-[#fbf8f5] tracking-tight">
            Echte Handwerkskunst statt schneller Massenware
          </h2>

          <p className="text-[#a8a29e] text-base sm:text-lg">
            Gute Pizza braucht keine Abkürzungen. Wir setzen auf Zeit, beste italienische Zutaten 
            und Leidenschaft am Ofen – das schmeckt man mit jedem Bissen.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#1c1917] border border-[#38322c] rounded-2xl p-6 sm:p-8 hover:border-[#dc2626]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#292420] border border-[#443c35] flex items-center justify-center text-[#ef4444] group-hover:scale-110 group-hover:bg-[#dc2626] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-[#292420] text-[#a8a29e] px-3 py-1 rounded-full border border-[#38322c]">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-[#fbf8f5] mb-1">
                    {p.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#f87171] mb-3">
                    {p.highlight}
                  </div>
                  <p className="text-sm text-[#a8a29e] leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2d2823] flex items-center gap-2 text-xs text-[#d6d3d1]">
                  <Check className="w-4 h-4 text-[#22c55e]" />
                  <span>Garantiert bei jeder Bestellung in Kerpen-Horrem</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
