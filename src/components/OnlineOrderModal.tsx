import { useState, useEffect } from 'react';
import {
  X,
  ShoppingBag,
  ShieldCheck,
  Plus,
  Minus,
  Bike,
  Store,
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  AlertCircle,
  CreditCard,
  Banknote,
} from 'lucide-react';

import imgMargherita from '../images/pizza_margherita.jpg';
import imgDiavola from '../images/pizza_diavola.jpg';
import imgProsciutto from '../images/pizza_prosciutto.jpg';
import imgNapoli from '../images/pizza_napoli.jpg';
import imgQuattroFormaggi from '../images/pizza_quattro_formaggi.jpg';
import imgPastaForno from '../images/pasta_al_forno.jpg';
import imgPizzabroetchen from '../images/pizzabroetchen.jpg';
import imgCaprese from '../images/insalata_caprese.jpg';
import imgTiramisu from '../images/tiramisu.jpg';

interface DishItem {
  id: string;
  name: string;
  category: 'pizza' | 'pasta' | 'broetchen' | 'salate' | 'dessert' | 'drinks';
  price: number;
  image?: string;
  badge?: string;
  description: string;
  ingredients: string[];
}

const MENU_ITEMS: DishItem[] = [
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita Classica',
    category: 'pizza',
    price: 8.5,
    image: imgMargherita,
    badge: 'Klassiker',
    description: 'Sonnengereifte San Marzano Tomatensauce, cremiger Fior di Latte Mozzarella, frische Basilikumblätter & natives Olivenöl Extra.',
    ingredients: ['San Marzano Tomaten', 'Fior di Latte', 'Basilikum', 'Olivenöl Extra'],
  },
  {
    id: 'pizza-diavola',
    name: 'Pizza Diavola',
    category: 'pizza',
    price: 11.0,
    image: imgDiavola,
    badge: 'Pikant',
    description: 'Knuspriger Teig mit pikanter italienischer Salami, feurigen Peperoni, fruchtiger Tomatensauce & geschmolzenem Mozzarella.',
    ingredients: ['San Marzano Tomaten', 'Mozzarella', 'Pikante Salami', 'Scharfe Peperoni'],
  },
  {
    id: 'pizza-prosciutto',
    name: 'Pizza Prosciutto e Rucola',
    category: 'pizza',
    price: 12.5,
    image: imgProsciutto,
    badge: 'Empfehlung',
    description: 'Zarter Prosciutto di Parma (18 Mon. gereift), wilder Rucola, Kirschtomaten & frisch gehobelter Parmigiano Reggiano.',
    ingredients: ['Prosciutto di Parma', 'Wilder Rucola', 'Kirschtomaten', 'Parmigiano Reggiano'],
  },
  {
    id: 'pizza-napoli',
    name: 'Pizza Napoli Originale',
    category: 'pizza',
    price: 10.5,
    image: imgNapoli,
    badge: 'Traditionell',
    description: 'Kräftig nach alter neapolitanischer Art mit aromatischen Sardellenfilets, sizilianischen Kapern, schwarzen Oliven & Oregano.',
    ingredients: ['San Marzano Tomaten', 'Mozzarella', 'Sardellenfilets', 'Kapern & Oliven'],
  },
  {
    id: 'pizza-quattro-formaggi',
    name: 'Pizza Quattro Formaggi',
    category: 'pizza',
    price: 11.5,
    image: imgQuattroFormaggi,
    badge: '4 Käsesorten',
    description: 'Sanft geschmolzener Mozzarella, würziger Gorgonzola D.O.P., feiner Fontina & gehobelter Parmesan auf knusprigem Boden.',
    ingredients: ['Mozzarella', 'Gorgonzola D.O.P.', 'Parmigiano', 'Fontina'],
  },
  {
    id: 'lasagne-al-forno',
    name: 'Lasagne al Forno Classica',
    category: 'pasta',
    price: 11.5,
    image: imgPastaForno,
    badge: 'Ofenfrisch',
    description: 'Hausgemachte Teigplatten geschichtet mit langsam geschmortem Rinderhackfleisch-Ragù, feiner Béchamelsauce & goldener Kruste.',
    ingredients: ['Hausgemachte Nudeln', 'Rinder-Bolognese', 'Béchamelsauce', 'Gratin-Käse'],
  },
  {
    id: 'pizzabroetchen-dips',
    name: 'Ofenfrische Pizzabrötchen (8 Stk.)',
    category: 'broetchen',
    price: 4.5,
    image: imgPizzabroetchen,
    badge: 'Beliebt',
    description: 'Dampfend heiß direkt aus dem Steinofen serviert mit hausgemachter Kräuterbutter oder Knoblauch-Aioli.',
    ingredients: ['8 Stück aus dem Steinofen', 'Hausgemachte Kräuterbutter', 'Kräuter-Dip'],
  },
  {
    id: 'insalata-caprese',
    name: 'Insalata Caprese di Bufala',
    category: 'salate',
    price: 9.5,
    image: imgCaprese,
    badge: 'Frisch & Leicht',
    description: 'Aromatische Strauchtomaten mit cremigem Büffelmozzarella, erntefrischem Basilikum & Aceto Balsamico di Modena.',
    ingredients: ['Büffelmozzarella', 'Strauchtomaten', 'Frisches Basilikum', 'Aceto Balsamico'],
  },
  {
    id: 'tiramisu-hausgemacht',
    name: 'Hausgemachtes Tiramisù',
    category: 'dessert',
    price: 5.5,
    image: imgTiramisu,
    badge: 'Familienrezept',
    description: 'Traditionell zubereitet mit Espresso getränkten Löffelbiskuits, samtiger Mascarpone-Creme & edlem Kakaopulver.',
    ingredients: ['Löffelbiskuits', 'Espresso', 'Mascarpone-Creme', 'Edler Kakao'],
  },
  {
    id: 'san-pellegrino',
    name: 'San Pellegrino Mineralwasser (0,5l)',
    category: 'drinks',
    price: 2.8,
    description: 'Feinperliges italienisches Mineralwasser aus der Quelle San Pellegrino Terme.',
    ingredients: ['0,5l Glasflasche', 'Mineralwasser'],
  },
  {
    id: 'aranciata-rossa',
    name: 'San Pellegrino Aranciata (0,33l)',
    category: 'drinks',
    price: 2.9,
    description: 'Fruchtige italienische Orangenlimonade aus sonnengereiften sizilianischen Früchten.',
    ingredients: ['0,33l Dose', 'Orangensaft aus Sizilien'],
  },
];

interface CartItem {
  dish: DishItem;
  quantity: number;
  note?: string;
}

interface ConfirmedOrder {
  orderId: string;
  items: CartItem[];
  deliveryType: 'delivery' | 'pickup';
  paymentMethod: 'online' | 'cash';
  total: number;
  subtotal: number;
  deliveryFee: number;
  customerName: string;
  phone: string;
  address: string;
  estimatedTime: string;
}

interface OnlineOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderUrl?: string;
}

export default function OnlineOrderModal({
  isOpen,
  onClose,
}: OnlineOrderModalProps) {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [activeTab, setActiveTab] = useState<'all' | 'pizza' | 'pasta' | 'broetchen' | 'salate' | 'dessert' | 'drinks'>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutStep, setCheckoutStep] = useState<'menu' | 'checkout' | 'confirmed'>('menu');

  // Checkout Formular
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [plzCity, setPlzCity] = useState('50169 Kerpen-Horrem');
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cash'>('online');
  const [orderComment, setOrderComment] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrder | null>(null);

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

  // Berechnungen
  const subtotal = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const minDeliveryValue = 15.0;
  const deliveryFee = deliveryType === 'delivery' ? (subtotal >= 25 ? 0.0 : 1.5) : 0.0;
  const total = subtotal + deliveryFee;
  const isDeliveryUnderMin = deliveryType === 'delivery' && subtotal < minDeliveryValue;

  const addToCart = (dish: DishItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.dish.id === dish.id);
      if (existing) {
        return prev.map((i) =>
          i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.dish.id === dishId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((i) => i.dish.id !== dishId);
      }
      return prev.map((i) =>
        i.dish.id === dishId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const getQuantityInCart = (dishId: string) => {
    const item = cart.find((i) => i.dish.id === dishId);
    return item ? item.quantity : 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (deliveryType === 'delivery' && isDeliveryUnderMin) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `#NAP-${randomNum}`;
    const estimatedTime =
      deliveryType === 'delivery' ? 'ca. 30 - 45 Minuten' : 'ca. 15 - 20 Minuten';

    const orderData: ConfirmedOrder = {
      orderId,
      items: [...cart],
      deliveryType,
      paymentMethod,
      total,
      subtotal,
      deliveryFee,
      customerName: customerName || 'Gast',
      phone: phone || '02273 / Nicht angegeben',
      address:
        deliveryType === 'delivery'
          ? `${street}, ${plzCity}`
          : 'Selbstabholung (Hauptstr. 181, 50169 Kerpen-Horrem)',
      estimatedTime,
    };

    setConfirmedOrder(orderData);
    setCheckoutStep('confirmed');
    setCart([]);
  };

  const handleResetOrder = () => {
    setCheckoutStep('menu');
    setConfirmedOrder(null);
  };

  const filteredDishes =
    activeTab === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl h-[94vh] max-h-[920px] bg-[#1a1714] border border-[#38322c] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[#fbf8f5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ===================== MODAL HEADER ===================== */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#2e2823] bg-[#141210]/95 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#dc2626]/20 border border-[#dc2626]/40 flex items-center justify-center text-[#ef4444] shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#fbf8f5]">
                  Online bestellen
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
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
            {/* Lieferart Umschalter im Header */}
            {checkoutStep === 'menu' && (
              <div className="hidden md:flex items-center bg-[#24201d] p-1 rounded-xl border border-[#38322c]">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    deliveryType === 'delivery'
                      ? 'bg-[#dc2626] text-white shadow-xs'
                      : 'text-[#a8a29e] hover:text-white'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Lieferung</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    deliveryType === 'pickup'
                      ? 'bg-[#dc2626] text-white shadow-xs'
                      : 'text-[#a8a29e] hover:text-white'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Abholung</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              aria-label="Schließen"
              className="p-2 rounded-xl bg-[#24201d] text-[#d6d3d1] hover:text-white hover:bg-[#2d2823] border border-[#443c35] transition-all cursor-pointer active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ===================== MODAL BODY ===================== */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {/* ================= STEP 1: MENÜ & WARENKORB ================= */}
          {checkoutStep === 'menu' && (
            <>
              {/* Linke Spalte: Speisekarte & Gerichte */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {/* Mobile Lieferart-Umschalter */}
                <div className="md:hidden flex items-center bg-[#24201d] p-1 rounded-xl border border-[#38322c]">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      deliveryType === 'delivery'
                        ? 'bg-[#dc2626] text-white shadow-xs'
                        : 'text-[#a8a29e]'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>Lieferung (ab 15 €)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      deliveryType === 'pickup'
                        ? 'bg-[#dc2626] text-white shadow-xs'
                        : 'text-[#a8a29e]'
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>Abholung (15-20 Min.)</span>
                  </button>
                </div>

                {/* Kategorie Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { id: 'all', label: 'Alle' },
                    { id: 'pizza', label: '🍕 Steinofen-Pizza' },
                    { id: 'pasta', label: '🍝 Pasta al Forno' },
                    { id: 'broetchen', label: '🥖 Pizzabrötchen' },
                    { id: 'salate', label: '🥗 Salate' },
                    { id: 'dessert', label: '🍰 Tiramisù' },
                    { id: 'drinks', label: '🥤 Getränke' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-[#dc2626] text-white shadow-xs'
                          : 'bg-[#24201d] text-[#a8a29e] hover:text-white border border-[#38322c]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Produktkarten-Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {filteredDishes.map((dish) => {
                    const qty = getQuantityInCart(dish.id);
                    return (
                      <div
                        key={dish.id}
                        className="bg-[#24201d] border border-[#38322c] hover:border-[#dc2626]/50 rounded-2xl p-3.5 flex flex-col justify-between transition-all group"
                      >
                        <div className="space-y-2">
                          <div className="flex gap-3">
                            {dish.image && (
                              <img
                                src={dish.image}
                                alt={dish.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-[#38322c] shrink-0"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h4 className="font-serif font-bold text-sm text-[#fbf8f5] leading-snug">
                                  {dish.name}
                                </h4>
                                {dish.badge && (
                                  <span className="text-[10px] font-bold bg-[#dc2626]/20 text-[#ef4444] border border-[#dc2626]/40 px-1.5 py-0.5 rounded-md">
                                    {dish.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-[#a8a29e] line-clamp-2 mt-1 leading-relaxed">
                                {dish.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#312a24]">
                          <span className="font-bold text-sm sm:text-base text-[#fbf8f5] tabular-nums">
                            {dish.price.toFixed(2).replace('.', ',')} €
                          </span>

                          {qty === 0 ? (
                            <button
                              type="button"
                              onClick={() => addToCart(dish)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Hinzufügen</span>
                            </button>
                          ) : (
                            <div className="flex items-center gap-2 bg-[#1a1714] border border-[#38322c] rounded-xl px-1.5 py-1">
                              <button
                                type="button"
                                onClick={() => removeFromCart(dish.id)}
                                className="w-6 h-6 rounded-lg bg-[#24201d] hover:bg-[#dc2626] text-white flex items-center justify-center transition-colors cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-black text-white px-1 tabular-nums">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => addToCart(dish)}
                                className="w-6 h-6 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-center transition-colors cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Rechte Spalte: Warenkorb & Kasse */}
              <div className="w-full md:w-80 lg:w-96 bg-[#171412] border-t md:border-t-0 md:border-l border-[#2e2823] flex flex-col justify-between p-4 sm:p-5 shrink-0">
                <div className="space-y-4 overflow-y-auto max-h-[45vh] md:max-h-none flex-1">
                  <div className="flex items-center justify-between border-b border-[#2e2823] pb-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-[#ef4444]" />
                      <h4 className="font-bold text-sm text-[#fbf8f5]">Dein Warenkorb</h4>
                    </div>
                    <span className="text-xs font-bold bg-[#24201d] px-2 py-0.5 rounded-full text-[#a8a29e]">
                      {cart.reduce((s, i) => s + i.quantity, 0)} Artikel
                    </span>
                  </div>

                  {cart.length === 0 ? (
                    <div className="py-12 text-center text-[#78716c] space-y-2">
                      <p className="text-xs">Dein Warenkorb ist noch leer.</p>
                      <p className="text-[11px] text-[#57534e]">
                        Wähle deine Lieblingspizza oder Pasta links aus.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2.5 divide-y divide-[#26201b]">
                      {cart.map((item) => (
                        <div key={item.dish.id} className="pt-2.5 flex items-center justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-[#fbf8f5] truncate">
                              {item.dish.name}
                            </p>
                            <p className="text-[11px] text-[#a8a29e]">
                              {item.quantity} × {item.dish.price.toFixed(2).replace('.', ',')} €
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.dish.id)}
                              className="w-5 h-5 rounded bg-[#24201d] hover:bg-[#38322c] text-[#d6d3d1] flex items-center justify-center text-xs transition cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-white w-4 text-center tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => addToCart(item.dish)}
                              className="w-5 h-5 rounded bg-[#24201d] hover:bg-[#dc2626] text-white flex items-center justify-center text-xs transition cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mindestbestellwert Hinweis */}
                  {deliveryType === 'delivery' && cart.length > 0 && (
                    <div className="bg-[#24201d] p-3 rounded-xl border border-[#38322c] text-xs space-y-1">
                      {isDeliveryUnderMin ? (
                        <div className="flex items-start gap-2 text-amber-400">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Mindestbestellwert 15,00 €</span>
                            <p className="text-[11px] text-[#a8a29e]">
                              Noch {(minDeliveryValue - subtotal).toFixed(2).replace('.', ',')} € für kostenfreie Lieferung in Kerpen-Horrem.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span className="font-bold text-[11px]">Mindestbestellwert erreicht!</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Warenkorb Summe & Weiter Button */}
                <div className="border-t border-[#2e2823] pt-4 mt-3 space-y-3">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-[#a8a29e]">
                      <span>Zwischensumme:</span>
                      <span className="tabular-nums">{subtotal.toFixed(2).replace('.', ',')} €</span>
                    </div>
                    {deliveryType === 'delivery' && (
                      <div className="flex justify-between text-[#a8a29e]">
                        <span>Liefergebühr (Horrem):</span>
                        <span className="tabular-nums">
                          {deliveryFee === 0 ? 'Kostenlos' : `${deliveryFee.toFixed(2).replace('.', ',')} €`}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-sm text-[#fbf8f5] pt-1 border-t border-[#26201b]">
                      <span>Gesamtbetrag:</span>
                      <span className="text-[#ef4444] tabular-nums">
                        {total.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={cart.length === 0 || isDeliveryUnderMin}
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <span>Zur Kasse</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ================= STEP 2: CHECKOUT FORMULAR ================= */}
          {checkoutStep === 'checkout' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-w-2xl mx-auto w-full">
              <form onSubmit={handlePlaceOrder} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#2e2823]">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#fbf8f5]">
                      Bestelldaten eingeben
                    </h4>
                    <p className="text-xs text-[#a8a29e]">
                      {deliveryType === 'delivery' ? 'Lieferung an deine Haustür' : 'Selbstabholung im Restaurant'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('menu')}
                    className="text-xs text-[#a8a29e] hover:text-white underline cursor-pointer"
                  >
                    ← Zurück zur Speisekarte
                  </button>
                </div>

                {/* Kontaktdaten */}
                <div className="bg-[#24201d] p-4 rounded-2xl border border-[#38322c] space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#ef4444]">
                    1. Kontaktdaten
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#a8a29e] mb-1">
                        Vor- & Nachname *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="z.B. Marco Rossi"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-[#171412] border border-[#38322c] focus:border-[#dc2626] text-white text-xs rounded-xl px-3 py-2.5 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#a8a29e] mb-1">
                        Telefonnummer (für Fahrer / Rückfragen) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0171 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#171412] border border-[#38322c] focus:border-[#dc2626] text-white text-xs rounded-xl px-3 py-2.5 outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Lieferadresse (nur wenn Lieferung) */}
                {deliveryType === 'delivery' && (
                  <div className="bg-[#24201d] p-4 rounded-2xl border border-[#38322c] space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#ef4444]">
                      2. Lieferadresse
                    </h5>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#a8a29e] mb-1">
                          Straße & Hausnummer *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="z.B. Hauptstraße 42"
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          className="w-full bg-[#171412] border border-[#38322c] focus:border-[#dc2626] text-white text-xs rounded-xl px-3 py-2.5 outline-hidden"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-[#a8a29e] mb-1">
                            PLZ & Ort
                          </label>
                          <input
                            type="text"
                            value={plzCity}
                            onChange={(e) => setPlzCity(e.target.value)}
                            className="w-full bg-[#171412] border border-[#38322c] text-white text-xs rounded-xl px-3 py-2.5 outline-hidden"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-[#a8a29e] mb-1">
                            Hinweis (Etage, Klingel)
                          </label>
                          <input
                            type="text"
                            placeholder="z.B. 2. OG rechts"
                            value={orderComment}
                            onChange={(e) => setOrderComment(e.target.value)}
                            className="w-full bg-[#171412] border border-[#38322c] text-white text-xs rounded-xl px-3 py-2.5 outline-hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Zahlungsart */}
                <div className="bg-[#24201d] p-4 rounded-2xl border border-[#38322c] space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#ef4444]">
                    {deliveryType === 'delivery' ? '3. Zahlungsart' : '2. Zahlungsart'}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label
                      onClick={() => setPaymentMethod('online')}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        paymentMethod === 'online'
                          ? 'border-[#dc2626] bg-[#dc2626]/10 text-white'
                          : 'border-[#38322c] text-[#a8a29e] hover:bg-[#1f1b18]'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-[#ef4444]" />
                      <div className="text-left">
                        <div className="font-bold text-xs">Online-Zahlung</div>
                        <div className="text-[10px] text-[#a8a29e]">PayPal, Kreditkarte, Apple Pay</div>
                      </div>
                    </label>

                    <label
                      onClick={() => setPaymentMethod('cash')}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        paymentMethod === 'cash'
                          ? 'border-[#dc2626] bg-[#dc2626]/10 text-white'
                          : 'border-[#38322c] text-[#a8a29e] hover:bg-[#1f1b18]'
                      }`}
                    >
                      <Banknote className="w-5 h-5 text-emerald-400" />
                      <div className="text-left">
                        <div className="font-bold text-xs">Barzahlung</div>
                        <div className="text-[10px] text-[#a8a29e]">
                          {deliveryType === 'delivery' ? 'Passend beim Fahrer' : 'Bei Abholung an der Theke'}
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Zusammenfassung & Bestätigen Button */}
                <div className="p-4 bg-[#141210] rounded-2xl border border-[#2e2823] space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>Gesamtbetrag ({cart.length} Positionen):</span>
                    <span className="text-[#ef4444] text-lg tabular-nums">
                      {total.toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                  <p className="text-[11px] text-[#78716c]">
                    Mit Klick auf „Bestellung abschicken“ wird der Auftrag direkt an den Steinofen der Pizzeria Napoli Horrem übermittelt.
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Bestellung abschicken ({total.toFixed(2).replace('.', ',')} €)</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ================= STEP 3: LIVE BESTELLBESTÄTIGUNG ================= */}
          {checkoutStep === 'confirmed' && confirmedOrder && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-xl mx-auto w-full flex flex-col justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Bestellung erfolgreich eingegangen
                </span>
                <h3 className="font-serif text-2xl font-black text-white">
                  Grazie mille! Die Küche legt los.
                </h3>
                <p className="text-xs text-[#a8a29e]">
                  Deine Bestellung wird frisch im neapolitanischen Steinofen zubereitet.
                </p>
              </div>

              {/* Status Timeline */}
              <div className="bg-[#24201d] p-5 rounded-2xl border border-[#38322c] text-left space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#38322c]">
                  <div>
                    <span className="text-[11px] text-[#a8a29e] block">Bestellnummer</span>
                    <span className="font-mono font-black text-base text-white">
                      {confirmedOrder.orderId}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#a8a29e] block">
                      {confirmedOrder.deliveryType === 'delivery' ? 'Lieferzeit' : 'Abholzeit'}
                    </span>
                    <span className="font-bold text-xs text-emerald-400 flex items-center gap-1 justify-end">
                      <Clock className="w-3.5 h-3.5" />
                      {confirmedOrder.estimatedTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span>1. Bestellung übermittelt &amp; bestätigt</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-amber-400 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>2. Steinofen wird belegt (in Zubereitung)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#78716c]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38322c]"></span>
                    <span>3. {confirmedOrder.deliveryType === 'delivery' ? 'Fahrer unterwegs' : 'Bereit zur Abholung'}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#38322c] text-[11px] text-[#a8a29e] space-y-1">
                  <div>
                    <span className="text-white font-bold">Empfänger:</span> {confirmedOrder.customerName} ({confirmedOrder.phone})
                  </div>
                  <div>
                    <span className="text-white font-bold">Ziel:</span> {confirmedOrder.address}
                  </div>
                  <div>
                    <span className="text-white font-bold">Zahlung:</span>{' '}
                    {confirmedOrder.paymentMethod === 'online' ? 'Online bezahlt (Gastro-Direkt)' : 'Barzahlung bei Übergabe'} ({confirmedOrder.total.toFixed(2).replace('.', ',')} €)
                  </div>
                </div>
              </div>

              {/* Aktionen */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleResetOrder}
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-4 rounded-xl text-xs transition cursor-pointer"
                >
                  Neue Bestellung aufgeben
                </button>

                <a
                  href="tel:022739917575"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#24201d] hover:bg-[#2d2823] text-white border border-[#38322c] py-2.5 px-4 rounded-xl text-xs font-bold transition"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Frage zur Bestellung? 02273 9917575 anrufen</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* ===================== MODAL FOOTER ===================== */}
        <div className="px-4 py-2.5 bg-[#141210] border-t border-[#2e2823] flex items-center justify-between text-xs text-[#a8a29e] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Hauptstraße 181, 50169 Kerpen-Horrem</span>
          </div>
          <a
            href="tel:022739917575"
            className="hover:text-[#fbf8f5] underline font-medium tabular-nums"
          >
            Telefon: 02273 9917575
          </a>
        </div>
      </div>
    </div>
  );
}
