import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Wie kann ich bei Pizzeria Napoli in Horrem bestellen?",
      a: "Am schnellsten und unkompliziertesten bestellst du direkt telefonisch bei uns unter 02273 9917575. Damit sparst du unnötige Gebührenaufschläge von Lieferportalen wie Lieferando und wir bereiten dein Essen sofort ofenfrisch zu."
    },
    {
      q: "Wie lange dauert die Zubereitung oder Lieferung?",
      a: "Bei Selbstabholung ist deine Bestellung in der Regel in 15 bis 20 Minuten fertig. Bei Lieferungen beträgt die Fahrzeit je nach Verkehr und Bestellaufkommen ca. 30 bis 45 Minuten. Zu Stoßzeiten nennen wir dir direkt am Telefon die genaue Zeit."
    },
    {
      q: "Kann ich das Essen auch vor Ort abholen?",
      a: "Selbstverständlich! Du findest uns auf der Hauptstraße 181 in 50169 Kerpen-Horrem. Rufe einfach kurz vorher an oder komm direkt vorbei. Für Selbstabholer gibt es keinen Mindestbestellwert."
    },
    {
      q: "Welche Zahlungsmöglichkeiten gibt es?",
      a: "Bei Abholung vor Ort sowie bei Lieferung an deine Haustür kannst du bequem in bar oder mit EC-Karte zahlen."
    },
    {
      q: "Kann ich Extrawünsche oder Änderungen am Belag angeben?",
      a: "Ja, sehr gerne! Ob extra Knoblauch, scharfe Peperoni, Rucola, Knoblauchsauce oder eine glutenarme Anpassung: Sag uns bei der telefonischen Bestellung einfach Bescheid und wir bereiten deine Pizza exakt nach deinem Wunsch zu."
    },
    {
      q: "Gibt es auch vegetarische Gerichte auf der Speisekarte?",
      a: "Ja, wir haben eine breite Auswahl an fleischlosen Gerichten – von Pizza Margherita und Pizza Quattro Formaggi über Insalata Caprese bis hin zu frischen vegetarischen Nudelgerichten und Pizzabrötchen mit Kräuterbutter oder Aioli."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#181513] border-b border-[#38322c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#24201d] border border-[#443c35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#ef4444]">
            <HelpCircle className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Häufige Fragen</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#fbf8f5] tracking-tight">
            Fragen & Antworten
          </h2>

          <p className="text-[#a8a29e] text-base sm:text-lg">
            Alles Wichtige zu deiner Bestellung, Abholung und Lieferung in Kerpen-Horrem.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#1f1b18] border border-[#38322c] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#f87171] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#fbf8f5]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ef4444] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#a8a29e] leading-relaxed border-t border-[#2d2823] pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-[#24201d] border border-[#443c35] p-6 rounded-2xl">
          <p className="text-sm text-[#d6d3d1] mb-3">
            Hast du eine andere Frage oder eine größere Vorbestellung?
          </p>
          <a
            href="tel:022739917575"
            className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>02273 9917575 anrufen</span>
          </a>
        </div>

      </div>
    </section>
  );
}
