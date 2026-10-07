import { useState } from 'react';
import { Phone, Flame, Utensils, Check } from 'lucide-react';

import imgMargherita from '../images/pizza_margherita.jpg';
import imgDiavola from '../images/pizza_diavola.jpg';
import imgProsciutto from '../images/pizza_prosciutto.jpg';
import imgNapoli from '../images/pizza_napoli.jpg';
import imgQuattroFormaggi from '../images/pizza_quattro_formaggi.jpg';
import imgPastaForno from '../images/pasta_al_forno.jpg';
import imgPizzabroetchen from '../images/pizzabroetchen.jpg';
import imgCaprese from '../images/insalata_caprese.jpg';
import imgTiramisu from '../images/tiramisu.jpg';

type Category = 'all' | 'pizza' | 'pasta' | 'broetchen' | 'salate' | 'dessert';

interface MenuItem {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  price: string;
  image: string;
  badge?: string;
  description: string;
  ingredients: string[];
  spicy?: boolean;
  vegetarian?: boolean;
}

export default function ServicePrices() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { key: 'all', label: 'Alle Gerichte' },
    { key: 'pizza', label: '🍕 Steinofen Pizza' },
    { key: 'pasta', label: '🍝 Pasta al Forno' },
    { key: 'broetchen', label: '🥖 Pizzabrötchen' },
    { key: 'salate', label: '🥗 Frische Salate' },
    { key: 'dessert', label: '🍰 Desserts' },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 'pizza-margherita',
      name: 'Pizza Margherita Classica',
      category: 'pizza',
      categoryLabel: 'Steinofen Pizza',
      price: '8,50 €',
      image: imgMargherita,
      badge: 'Der Klassiker',
      vegetarian: true,
      description: 'Das pure Geschmackserlebnis Neapels: Sonnengereifte San Marzano Tomatensauce, cremiger Fior di Latte Mozzarella, frische Basilikumblätter & natives Olivenöl Extra.',
      ingredients: ['San Marzano Tomaten', 'Fior di Latte Mozzarella', 'Frisches Basilikum', 'Natives Olivenöl Extra']
    },
    {
      id: 'pizza-diavola',
      name: 'Pizza Diavola',
      category: 'pizza',
      categoryLabel: 'Steinofen Pizza',
      price: '11,00 €',
      image: imgDiavola,
      badge: 'Bestseller',
      spicy: true,
      description: 'Knusprig gebackener Teig mit pikanter italienischer Salami, feurigen Peperoni, fruchtiger Tomatensauce & geschmolzenem Mozzarella.',
      ingredients: ['San Marzano Tomaten', 'Fior di Latte Mozzarella', 'Pikante Salami', 'Scharfe Peperoni']
    },
    {
      id: 'pizza-prosciutto',
      name: 'Pizza Prosciutto e Rucola',
      category: 'pizza',
      categoryLabel: 'Steinofen Pizza',
      price: '12,50 €',
      image: imgProsciutto,
      badge: 'Empfehlung des Hauses',
      description: 'Zarter italienischer Prosciutto di Parma, knackiger wilder Rucola, frische Kirschtomaten und frisch gehobelte Parmigiano-Reggiano Späne.',
      ingredients: ['Prosciutto di Parma', 'Wilder Rucola', 'Kirschtomaten', 'Parmigiano Reggiano']
    },
    {
      id: 'pizza-napoli',
      name: 'Pizza Napoli Originale',
      category: 'pizza',
      categoryLabel: 'Steinofen Pizza',
      price: '10,50 €',
      image: imgNapoli,
      badge: 'Traditionell',
      description: 'Kräftig im Geschmack nach altem Rezept mit aromatischen Anchovis (Sardellen), sizilianischen Kapern, schwarzen Oliven und Oregano.',
      ingredients: ['San Marzano Tomaten', 'Mozzarella', 'Sardellenfilets', 'Kapern & Oliven']
    },
    {
      id: 'pizza-quattro-formaggi',
      name: 'Pizza Quattro Formaggi',
      category: 'pizza',
      categoryLabel: 'Steinofen Pizza',
      price: '11,50 €',
      image: imgQuattroFormaggi,
      badge: 'Feinste Käseauswahl',
      vegetarian: true,
      description: 'Vier perfekt harmonierende Käsesorten sanft im Steinofen geschmolzen: Milder Mozzarella, herzhafter Gorgonzola D.O.P., Fontina & Parmesan.',
      ingredients: ['Mozzarella', 'Gorgonzola D.O.P.', 'Parmigiano Reggiano', 'Fontina']
    },
    {
      id: 'lasagne-al-forno',
      name: 'Lasagne al Forno',
      category: 'pasta',
      categoryLabel: 'Pasta al Forno',
      price: '11,50 €',
      image: imgPastaForno,
      badge: 'Ofenfrisch gratiniert',
      description: 'Hausgemachte Nudelschichten mit langsam geschmortem Rinderhackfleisch-Ragù, samtiger Béchamelsauce und goldbraun im Ofen überbacken.',
      ingredients: ['Hausgemachte Teigplatten', 'Klassisches Bolognese-Ragù', 'Feine Béchamelsauce', 'Goldene Käsekruste']
    },
    {
      id: 'pizzabroetchen-dips',
      name: 'Ofenfrische Pizzabrötchen (8 Stk.)',
      category: 'broetchen',
      categoryLabel: 'Pizzabrötchen',
      price: '4,50 €',
      image: imgPizzabroetchen,
      badge: 'Heißer Favorit',
      vegetarian: true,
      description: 'Dampfend heiß im Korb serviert mit hausgemachter frischer Kräuterbutter oder cremig-würziger Knoblauch-Aioli nach Hausrezept.',
      ingredients: ['8 Stück frisch aus dem Steinofen', 'Hausgemachte Kräuterbutter', 'Cremige Aioli']
    },
    {
      id: 'insalata-caprese',
      name: 'Insalata Caprese',
      category: 'salate',
      categoryLabel: 'Frische Salate',
      price: '9,50 €',
      image: imgCaprese,
      badge: 'Frisch & Leicht',
      vegetarian: true,
      description: 'Aromatische reife Strauchtomaten mit cremigem Büffelmozzarella, erntefrischem Basilikum, Meersalz und feinstem Aceto Balsamico di Modena.',
      ingredients: ['Büffelmozzarella', 'Reife Strauchtomaten', 'Frisches Basilikum', 'Aceto Balsamico & Olivenöl']
    },
    {
      id: 'tiramisu-hausgemacht',
      name: 'Hausgemachtes Tiramisu Classico',
      category: 'dessert',
      categoryLabel: 'Dessert',
      price: '5,50 €',
      image: imgTiramisu,
      badge: 'Original Hausrezept',
      vegetarian: true,
      description: 'Traditionell zubereitet mit in aromatischem Espresso getränkten Löffelbiskuits, luftiger Mascarpone-Creme und feinstem ungesüßtem Kakao.',
      ingredients: ['Löffelbiskuits', 'Italienischer Espresso', 'Mascarpone-Creme', 'Edler Kakao']
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="speisekarte" className="py-16 sm:py-24 bg-[#181513] border-b border-[#38322c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#24201d] border border-[#443c35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#ef4444]">
            <Utensils className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Auswahl aus unserer Karte</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf8f5] tracking-normal">
            Ofenfrische Spezialitäten
          </h2>

          <p className="text-[#a8a29e] text-base sm:text-lg">
            Jede Pizza wird nach traditioneller Art frisch von Hand belegt und bei über 400 °C im Steinofen gebacken.
            Bestelle direkt telefonisch unter <a href="tel:022739917575" className="text-[#f87171] font-semibold hover:underline">02273 9917575</a>.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as Category)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#dc2626] text-white shadow-[0_4px_16px_rgba(220,38,38,0.4)] scale-102'
                  : 'bg-[#24201d] text-[#d6d3d1] hover:text-[#fbf8f5] hover:bg-[#2d2823] border border-[#38322c]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1f1b18] border border-[#38322c] rounded-2xl overflow-hidden hover:border-[#dc2626]/50 transition-all duration-300 shadow-xl flex flex-col group"
            >
              {/* Food Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#141210]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-[#dc2626]/95 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
                {item.spicy && (
                  <span className="absolute top-3 right-3 bg-[#141210]/85 backdrop-blur-xs text-[#f87171] border border-[#dc2626]/40 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#ef4444]" />
                    Pikant
                  </span>
                )}
                {item.vegetarian && (
                  <span className="absolute top-3 right-3 bg-[#141210]/85 backdrop-blur-xs text-[#4ade80] border border-[#16a34a]/40 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    🌱 Veggie
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#a8a29e]">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#fbf8f5] group-hover:text-[#f87171] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <div className="font-serif text-xl font-bold text-[#fbf8f5] tabular-nums whitespace-nowrap bg-[#292420] border border-[#443c35] px-3 py-1 rounded-xl">
                      {item.price}
                    </div>
                  </div>

                  <p className="text-sm text-[#a8a29e] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredient Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#2e2823]">
                    {item.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-[#292420] text-[#d6d3d1] px-2 py-0.5 rounded-md"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Call Action */}
                <div className="pt-2">
                  <a
                    href="tel:022739917575"
                    className="w-full flex items-center justify-center gap-2 bg-[#2d2823] hover:bg-[#dc2626] text-[#fbf8f5] text-xs font-bold py-2.5 rounded-xl border border-[#443c35] hover:border-[#dc2626] transition-all group/btn"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ef4444] group-hover/btn:text-white transition-colors" />
                    <span>Jetzt telefonisch bestellen: 02273 9917575</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Dishes Notice */}
        <div className="mt-12 bg-[#1f1b18] border border-[#38322c] rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-center space-y-3">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#fbf8f5]">
            Weitere Spezialitäten & individuelle Wünsche
          </h4>
          <p className="text-sm text-[#a8a29e] max-w-2xl mx-auto leading-relaxed">
            Ob Rigatoni Napoli al Forno, gefüllte Pizzabrötchen mit Käse &amp; Salami, frische bunte Salate oder Extrawünsche: 
            Wir bereiten jedes Gericht ofenfrisch für Sie zu. Rufen Sie uns einfach an!
          </p>
        </div>

        {/* Info Box: Keine Plattformgebühren & Sonderwünsche */}
        <div className="mt-6 bg-[#24201d] border border-[#443c35] rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#4ade80] text-sm font-bold">
              <Check className="w-4 h-4" />
              <span>Direktbestell-Vorteil für Horrem & Umgebung</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#fbf8f5]">
              Keine Plattformgebühren · Frischer & schneller bei dir
            </h4>
            <p className="text-xs sm:text-sm text-[#a8a29e]">
              Bestellungen über Portale kosten bis zu 30% Aufschlag. Wenn du direkt bei uns anrufst, sparst du Zeit und unterstützt deinen lokalen Betrieb.
            </p>
          </div>

          <a
            href="tel:022739917575"
            className="whitespace-nowrap bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-lg transition-all flex items-center gap-2 shrink-0 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>02273 9917575 anrufen</span>
          </a>
        </div>

      </div>
    </section>
  );
}
