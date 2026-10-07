import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

import imgDiavola from '../images/pizza_diavola.jpg';
import imgProsciutto from '../images/pizza_prosciutto.jpg';
import imgPastaForno from '../images/pasta_al_forno.jpg';
import imgPizzabroetchen from '../images/pizzabroetchen.jpg';
import imgCaprese from '../images/insalata_caprese.jpg';
import imgTiramisu from '../images/tiramisu.jpg';

export default function InstagramFeed() {
  const posts = [
    {
      image: imgDiavola,
      title: 'Pizza Diavola mit pikanter Salami',
      likes: '342',
      comments: '28',
      caption: 'Frisch aus dem 400°C Steinofen. Wer liebt es auch feurig-pikant? 🍕🔥 #PizzeriaNapoli #Horrem #Steinofen',
      tag: '#PizzaDiavola'
    },
    {
      image: imgProsciutto,
      title: 'Prosciutto di Parma & Wilder Rucola',
      likes: '419',
      comments: '35',
      caption: 'Zarter Parmaschinken, frischer Rucola und frisch gehobelter Grana Padano. Ein absoluter Liebling bei euch! 🇮🇹',
      tag: '#ProsciuttoRucola'
    },
    {
      image: imgPastaForno,
      title: 'Lasagne al Forno gratiniert',
      likes: '287',
      comments: '19',
      caption: 'Goldbraun überbackene Lasagne mit hausgemachtem Ragu. Heiß geliefert bis an die Haustür! 🧀🍝',
      tag: '#PastaAlForno'
    },
    {
      image: imgPizzabroetchen,
      title: 'Pizzabrötchen mit Aioli & Kräuterbutter',
      likes: '512',
      comments: '44',
      caption: 'Dampfend heiß im Körbchen mit unserer legendären hausgemachten Knoblauch-Aioli. Unverzichtbar vor der Pizza! 🥖🧄',
      tag: '#Pizzabrötchen'
    },
    {
      image: imgCaprese,
      title: 'Insalata Caprese mit Büffelmozzarella',
      likes: '226',
      comments: '14',
      caption: 'Sommerfrische auf dem Teller: Sonnengereifte Tomaten, aromatischer Büffelmozzarella & frisches Basilikum 🍅🥗',
      tag: '#Caprese'
    },
    {
      image: imgTiramisu,
      title: 'Hausgemachtes Tiramisu Classico',
      likes: '394',
      comments: '31',
      caption: 'Der süße Abschluss nach italienischer Art: Luftige Mascarpone und feiner Espresso-Biskuit ☕🍰',
      tag: '#Tiramisu'
    }
  ];

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#141210] border-b border-[#38322c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with IG Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#24201d] border border-[#443c35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#f472b6]">
              <Instagram className="w-3.5 h-3.5 text-[#f472b6]" />
              <span>Social Media & Community</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf8f5] tracking-normal">
              Folge uns auf Instagram
            </h2>
            
            <p className="text-[#a8a29e] text-base sm:text-lg max-w-xl">
              Tägliche Einblicke in die Backstube, ofenfrische Specials und über 3.200 Pizza-Fans in unserer Horremer Community.
            </p>
          </div>

          {/* Profile Card & Follow Button */}
          <div className="flex items-center gap-4 bg-[#1c1917] border border-[#38322c] p-4 rounded-2xl shadow-xl shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f59e0b] via-[#ec4899] to-[#8b5cf6] p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#141210] rounded-full flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-[#fbf8f5]">@pizzerianapolihorrem</div>
              <div className="text-xs text-[#a8a29e]">3.220+ Follower · Kerpen-Horrem</div>
            </div>

            <a
              href="https://www.instagram.com/pizzerianapolihorrem"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Folgen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Curated Instagram Grid (DSGVO Zero-CDN compliant) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/pizzerianapolihorrem"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#1c1917] border border-[#38322c] rounded-2xl overflow-hidden hover:border-[#f472b6]/60 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#141210]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay with Likes & Comments */}
                <div className="absolute inset-0 bg-[#141210]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 fill-[#ef4444] text-[#ef4444]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Tag Pill */}
                <span className="absolute top-3 left-3 bg-[#141210]/80 backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-full text-white/90 border border-white/10">
                  {post.tag}
                </span>
              </div>

              {/* Caption Preview */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <p className="text-xs sm:text-sm text-[#d6d3d1] line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-[#2d2823] text-[11px] text-[#a8a29e]">
                  <span>Pizzeria Napoli Horrem</span>
                  <span className="text-[#f472b6] font-semibold group-hover:underline flex items-center gap-1">
                    Auf Instagram ansehen <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* DSGVO Privacy Note for zero external tracking */}
        <div className="mt-8 text-center text-xs text-[#78716c]">
          🔒 DSGVO-Hinweis: Vorschau-Bilder werden lokal ohne Cookies geladen. Erst beim Klick wirst du zu Instagram weitergeleitet.
        </div>

      </div>
    </section>
  );
}
