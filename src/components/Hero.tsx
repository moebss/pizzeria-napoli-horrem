import { Phone, Star, ArrowRight, UtensilsCrossed, Flame, Clock, Truck, MapPin } from 'lucide-react';
import heroPizzaImg from '../images/hero_pizza.jpg';

interface HeroProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenMenu, onOpenContact }: HeroProps) {
  return (
    <section id="hero" className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#38322c]">
      
      {/* Background Image with Deep Warm Charcoal & Espresso Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPizzaImg}
          alt="Ofenfrische Steinofen Pizza Napoli in Kerpen-Horrem"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayered Atmospheric Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/60 to-[#141210]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#141210]/40 to-[#141210]/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6 sm:space-y-8">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-[#24201d]/90 border border-[#443c35] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#f87171] shadow-lg backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-[#ef4444] shrink-0" />
          <span>ORIGINAL STEINOFEN-PIZZA · KERPEN-HORREM</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-['Syne',sans-serif] text-[26px] sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#fbf8f5] tracking-tight leading-[1.15] sm:leading-[1.08] max-w-5xl mx-auto">
          Knuspriger Teig & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-[#f87171] to-[#fb923c]">
            italienische Leidenschaft
          </span>.
        </h1>

        {/* Natural Gastro Copy (No Consulting Slop!) */}
        <p className="text-[#d6d3d1] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
          Willkommen bei <strong className="text-[#fbf8f5] font-semibold">Pizzeria Napoli</strong> in Horrem. 
          48 Stunden schonend gereifter Teig für maximale Bekömmlichkeit, fruchtige San Marzano Tomaten 
          und cremiger Fior di Latte Mozzarella. Dampfend heiß geliefert oder frisch vor Ort auf der Hauptstraße abgeholt.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:pt-4">
          <button
            onClick={onOpenMenu}
            aria-label="Speisekarte ansehen"
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-[0_8px_30px_rgba(220,38,38,0.45)] transition-all transform active:scale-98 flex items-center gap-3 cursor-pointer group"
          >
            <UtensilsCrossed className="w-5 h-5 text-white/90" />
            <span>Speisekarte ansehen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:022739917575"
            className="bg-[#24201d]/90 hover:bg-[#2d2823] text-[#fbf8f5] font-semibold text-base sm:text-lg px-7 py-4 sm:py-5 rounded-full border border-[#443c35] hover:border-[#dc2626]/60 shadow-lg backdrop-blur-md transition-all flex items-center gap-3 active:scale-98"
          >
            <Phone className="w-5 h-5 text-[#ef4444]" />
            <span className="tabular-nums font-bold">02273 9917575</span>
            <span className="text-xs bg-[#16a34a]/20 text-[#4ade80] border border-[#16a34a]/40 px-2 py-0.5 rounded-full">
              Direkt bestellen
            </span>
          </a>

          <button
            onClick={onOpenContact}
            className="hidden lg:inline-flex items-center gap-2 bg-[#24201d]/70 hover:bg-[#2d2823] text-[#d6d3d1] hover:text-white text-sm font-medium px-5 py-4 rounded-full border border-[#443c35] transition-all cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#ef4444]" />
            <span>Hauptstraße 181 (Anfahrt)</span>
          </button>
        </div>

        {/* High-Impact Metric Strip */}
        <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          
          {/* Metric 1: Google Rating */}
          <div className="bg-[#1c1917]/85 backdrop-blur-md p-4 rounded-2xl border border-[#38322c] shadow-lg">
            <div className="flex items-center gap-1 text-[#f59e0b] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
              ))}
            </div>
            <div className="font-['Syne',sans-serif] text-xl font-bold text-[#fbf8f5]">4.7 Sterne</div>
            <div className="text-xs text-[#a8a29e]">274+ Google Rezensionen</div>
          </div>

          {/* Metric 2: 48h Teigruhe */}
          <div className="bg-[#1c1917]/85 backdrop-blur-md p-4 rounded-2xl border border-[#38322c] shadow-lg">
            <div className="flex items-center gap-1.5 text-[#ef4444] mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold text-[#f87171] uppercase tracking-wider">Tradition</span>
            </div>
            <div className="font-['Syne',sans-serif] text-xl font-bold text-[#fbf8f5]">48h Teigruhe</div>
            <div className="text-xs text-[#a8a29e]">Bekömmlich & kross gebacken</div>
          </div>

          {/* Metric 3: Express Lieferung */}
          <div className="bg-[#1c1917]/85 backdrop-blur-md p-4 rounded-2xl border border-[#38322c] shadow-lg">
            <div className="flex items-center gap-1.5 text-[#22c55e] mb-1">
              <Truck className="w-4 h-4" />
              <span className="text-xs font-bold text-[#4ade80] uppercase tracking-wider">Express</span>
            </div>
            <div className="font-['Syne',sans-serif] text-xl font-bold text-[#fbf8f5]">Heiß geliefert</div>
            <div className="text-xs text-[#a8a29e]">Isolierte Thermoboxen</div>
          </div>

          {/* Metric 4: 100% Steinofen */}
          <div className="bg-[#1c1917]/85 backdrop-blur-md p-4 rounded-2xl border border-[#38322c] shadow-lg">
            <div className="flex items-center gap-1.5 text-[#f97316] mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-xs font-bold text-[#fb923c] uppercase tracking-wider">Steinofen</span>
            </div>
            <div className="font-['Syne',sans-serif] text-xl font-bold text-[#fbf8f5]">Original Steinofen</div>
            <div className="text-xs text-[#a8a29e]">Hauptstraße 181, Horrem</div>
          </div>

        </div>

      </div>
    </section>
  );
}
