import { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const PROMOS = [
  {
    id: 1,
    name: "Maceta Bulldog Premium",
    description: "Maceta de cerámica con planta suculenta. Ideal para escritorios y estantes.",
    image: "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: 22.0,
    salePrice: 16.99,
    discount: -23,
    badge: "OFERTA",
    badgeColor: "bg-red-400",
  },
  {
    id: 2,
    name: "Dúo Maceteros Artísticos",
    description: "Par de maceteros tomados de la mano, cerámica pintada a mano.",
    image: "https://images.unsplash.com/photo-1750737771009-09f43a749b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: 38.0,
    salePrice: 28.5,
    discount: -25,
    badge: "HOT",
    badgeColor: "bg-orange-400",
  },
  {
    id: 3,
    name: "Maceta Expresión Gafas",
    description: "Planta con cara y lentes, porcelana fina. Un toque de humor en tu hogar.",
    image: "https://images.unsplash.com/photo-1685606350130-2176a0ec7296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: 24.0,
    salePrice: 18.0,
    discount: -25,
    badge: "OFERTA",
    badgeColor: "bg-red-400",
  },
  {
    id: 4,
    name: "Kit Suculenta Mini",
    description: "Suculenta en maceta pintada a mano con diseño exclusivo. Fácil de cuidar.",
    image: "https://images.unsplash.com/photo-1576823691999-cce2ef6eaf4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: 14.0,
    salePrice: 9.99,
    discount: -29,
    badge: "NUEVO",
    badgeColor: "bg-emerald-500",
  },
];

export function PromotionsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(PROMOS.length - visible, i + 1));

  const shown = PROMOS.slice(startIndex, startIndex + visible);

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2
            className="text-3xl font-extrabold text-stone-900"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Promociones de la Semana{" "}
            <span role="img" aria-label="fuego" className="text-2xl">🔥</span>
          </h2>
          <p className="text-stone-500 text-sm mt-1">Ofertas exclusivas por tiempo limitado</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-emerald-400 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            disabled={startIndex >= PROMOS.length - visible}
            className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-emerald-400 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {shown.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-[16px] overflow-hidden border border-stone-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-stone-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Discount badge */}
              <span
                className={`absolute top-3 left-3 ${item.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow`}
              >
                {item.badge}
              </span>
              {/* Discount % */}
              <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-bold px-2 py-1 rounded-full shadow">
                {item.discount}%
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-bold text-stone-900 text-sm leading-snug line-clamp-1">
                {item.name}
              </h3>
              <p className="text-stone-500 text-xs leading-snug line-clamp-2">
                {item.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-stone-400 line-through text-sm">${item.originalPrice.toFixed(2)}</span>
                <span className="text-emerald-600 font-extrabold text-lg">${item.salePrice.toFixed(2)}</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-full transition-colors shadow-sm hover:shadow-emerald-200">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Agregar
                </button>
                <button className="flex-1 text-xs font-bold py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-colors">
                  Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
