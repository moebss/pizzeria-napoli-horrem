import { useEffect } from 'react';
import { X, ExternalLink, ShoppingBag, ShieldCheck } from 'lucide-react';

interface OnlineOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderUrl?: string;
}

export default function OnlineOrderModal({
  isOpen,
  onClose,
  orderUrl = 'http://localhost:3000/r/pizzeria-napoli-horrem',
}: OnlineOrderModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl h-[92vh] max-h-[900px] bg-[#1a1714] border border-[#38322c] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[#fbf8f5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#2e2823] bg-[#141210]/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#dc2626]/20 border border-[#dc2626]/40 flex items-center justify-center text-[#ef4444]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#fbf8f5]">
                  Online bestellen
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Gastro-Direkt
                </span>
              </div>
              <p className="text-xs text-[#a8a29e] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pizzeria Napoli Horrem · 0% Lieferplattform-Aufschlag</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#d6d3d1] hover:text-white bg-[#24201d] hover:bg-[#2d2823] border border-[#443c35] px-3 py-2 rounded-xl transition-colors font-medium"
              title="In neuem Tab öffnen"
            >
              <span>Vollbild</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              aria-label="Schließen"
              className="p-2 sm:p-2.5 rounded-xl bg-[#24201d] text-[#d6d3d1] hover:text-white hover:bg-[#2d2823] border border-[#443c35] transition-all cursor-pointer active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Iframe Container */}
        <div className="flex-1 w-full h-full bg-[#141210] relative">
          <iframe
            src={orderUrl}
            title="Pizzeria Napoli Horrem Online-Bestellung"
            className="w-full h-full border-0"
            allow="payment"
          />
        </div>

        {/* Bottom bar with call fallback */}
        <div className="px-4 py-2.5 bg-[#141210] border-t border-[#2e2823] flex items-center justify-between text-xs text-[#a8a29e] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Lieferung &amp; Abholung: Hauptstraße 181, 50169 Kerpen-Horrem</span>
          </div>
          <a
            href="tel:022739917575"
            className="hover:text-[#fbf8f5] underline font-medium tabular-nums"
          >
            Telefonisch: 02273 9917575
          </a>
        </div>
      </div>
    </div>
  );
}
