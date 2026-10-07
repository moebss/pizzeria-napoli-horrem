import { Heart, MapPin, Check } from 'lucide-react';
import restaurantImg from '../images/restaurant_interior.jpg';

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-16 sm:py-24 bg-[#181513] border-b border-[#38322c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#38322c] shadow-2xl">
              <img
                src={restaurantImg}
                alt="Gemütliche Atmosphäre der Pizzeria Napoli in Kerpen-Horrem"
                loading="lazy"
                decoding="async"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1c1917]/90 backdrop-blur-md border border-[#38322c] p-4 rounded-2xl flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626]/20 border border-[#dc2626]/40 flex items-center justify-center text-[#ef4444]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#fbf8f5]">Hauptstraße 181, 50169 Kerpen</div>
                    <div className="text-xs text-[#a8a29e]">Mitten im Herzen von Horrem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#24201d] border border-[#443c35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#ef4444]">
              <Heart className="w-3.5 h-3.5 text-[#ef4444]" />
              <span>Unsere Geschichte</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#fbf8f5] tracking-tight leading-tight">
              Echte italienische Pizza mit Seele & Tradition
            </h2>

            <p className="text-[#d6d3d1] text-base sm:text-lg leading-relaxed">
              Seit vielen Jahren ist die <strong className="text-[#fbf8f5]">Pizzeria Napoli</strong> auf der Hauptstraße 181 
              der Treffpunkt für alle in Horrem, Sindorf und Kerpen, die echten Geschmack zu schätzen wissen. 
              Wir glauben daran, dass gute Gastronomie nicht kompliziert sein muss – sondern ehrlich, frisch und handwerklich perfekt zubereitet.
            </p>

            <p className="text-[#a8a29e] text-sm sm:text-base leading-relaxed">
              Vom ersten Mehlkorn am Morgen über die ausgiebige Teigruhe bis zum heißen Ofen am Abend: 
              Jede Pizza, jede Auflaufform und jeder Salat wird mit derselben Hingabe zubereitet, als würden wir für unsere eigene Familie kochen.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#fbf8f5]">
                <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Familiengeführt mit Herz</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#fbf8f5]">
                <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Strikte Hygiene-Standards</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#fbf8f5]">
                <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Täglich frische Zubereitung</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#fbf8f5]">
                <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Treuer Stamm in ganz Kerpen</span>
              </div>
            </div>

            {/* Contact Quick Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="tel:022739917575"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <span>Direkt anrufen: 02273 9917575</span>
              </a>
              <a
                href="#oeffnungszeiten"
                className="text-xs sm:text-sm font-semibold text-[#d6d3d1] hover:text-[#fbf8f5] underline underline-offset-4"
              >
                Zu den Öffnungszeiten & Anfahrt →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
