import { Phone, Utensils, ShoppingBag, MapPin } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
  onOpenOrder: () => void;
}

export default function MobileStickyBar({ onOpenMenu, onOpenContact, onOpenOrder }: MobileStickyBarProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141210]/95 backdrop-blur-lg border-t border-[#38322c] px-2 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.5">
        {/* Speisekarte */}
        <button
          onClick={onOpenMenu}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 bg-[#24201d] text-[#fbf8f5] rounded-xl border border-[#38322c] active:scale-95 transition-all text-center cursor-pointer"
        >
          <Utensils className="w-4 h-4 text-[#ef4444]" />
          <span className="text-[10px] font-bold mt-0.5">Karte</span>
        </button>

        {/* Online Bestellen (Primary Highlight) */}
        <button
          onClick={onOpenOrder}
          className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 px-2.5 bg-[#dc2626] text-white rounded-xl font-bold shadow-lg shadow-[#dc2626]/40 active:scale-95 transition-all text-center cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span className="text-xs font-black tracking-wide whitespace-nowrap">Online bestellen</span>
        </button>

        {/* Direkt Anrufen */}
        <a
          href="tel:022739917575"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 bg-[#24201d] text-[#fbf8f5] rounded-xl border border-[#38322c] active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#4ade80]" />
          <span className="text-[10px] font-bold mt-0.5">Anruf</span>
        </a>

        {/* Anfahrt */}
        <button
          onClick={onOpenContact}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 bg-[#24201d] text-[#fbf8f5] rounded-xl border border-[#38322c] active:scale-95 transition-all text-center cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-[#fb923c]" />
          <span className="text-[10px] font-bold mt-0.5">Anfahrt</span>
        </button>
      </div>
    </div>
  );
}
