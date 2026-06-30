import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ShoppingCart, SlidersHorizontal, ChevronDown, ChevronRight, Home, Package, Users, Phone } from "lucide-react";

const SIDEBAR_LINKS = [
  { label: "Inicio", path: "/", icon: Home },
  { label: "Quiénes Somos", path: "/about", icon: Users },
  { label: "Contactos", path: "/contact", icon: Phone },
];

const CATEGORIES = [
  { name: "Macetas de Perros", path: "/categorias/perros", active: true },
  { name: "Macetas de Gatos", path: "/categorias/gatos", active: false },
  { name: "Plantas", path: "/categorias/plantas", active: false },
  { name: "Macetas de Navidad", path: "/categorias/navidad", active: false },
  { name: "Diseños", path: "/categorias/disenos", active: false },
  { name: "Otros", path: "/categorias/otros", active: false },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Maceta Bulldog",
    description: "Cerámica artesanal con detalle fino. Planta suculenta incluida.",
    image: "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: 18.0,
    salePrice: 15.99,
    onSale: true,
  },
  {
    id: 2,
    name: "Maceta Pastor Alemán",
    description: "Porcelana pintada a mano, diseño exclusivo de colección.",
    image: "https://images.unsplash.com/photo-1638621718574-b67e45ccd809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: null,
    salePrice: 20.0,
    onSale: false,
  },
  {
    id: 3,
    name: "Maceta Husky",
    description: "Diseño nórdico minimalista. Tamaño mediano, ideal para suculentas.",
    image: "https://images.unsplash.com/photo-1625758762897-4eae722fb0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: 24.0,
    salePrice: 18.5,
    onSale: true,
  },
  {
    id: 4,
    name: "Maceta Pug",
    description: "Expresión adorable en cerámica de alta calidad con acabado mate.",
    image: "https://images.unsplash.com/photo-1598833824196-6b4e7170e147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: null,
    salePrice: 16.0,
    onSale: false,
  },
  {
    id: 5,
    name: "Maceta Schnauzer",
    description: "Detalle de bigotes esculpidos. Pieza artística para la sala.",
    image: "https://images.unsplash.com/photo-1544474921-9df05bc76d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    originalPrice: 22.0,
    salePrice: 15.99,
    onSale: true,
  },
];

const SORT_OPTIONS = ["Más Relevantes", "Precio: Menor a Mayor", "Precio: Mayor a Menor", "Novedades"];

export default function DogsCategory() {
  const navigate = useNavigate();
  const [sortOpen, setSortOpen] = useState(false);
  const [sortIndex, setSortIndex] = useState(0);
  const [catsExpanded, setCatsExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <div className="max-w-[1440px] mx-auto flex">

        {/* ── Persistent Left Sidebar ── */}
        <aside className="hidden lg:flex flex-col w-[250px] flex-shrink-0 min-h-[calc(100vh-4rem)] bg-white border-r border-stone-100 shadow-[2px_0_12px_rgba(0,0,0,0.03)] pt-8 pb-6 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-5 mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Navegación
            </p>
          </div>

          <nav className="flex flex-col gap-0.5 px-3">
            {/* Inicio */}
            <Link
              to="/"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition-colors"
            >
              <Home className="w-4 h-4 flex-shrink-0" />
              Inicio
            </Link>

            {/* Categorías dropdown */}
            <div>
              <button
                onClick={() => setCatsExpanded((v) => !v)}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition-colors"
              >
                <Package className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 text-left">Categorías</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${catsExpanded ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${catsExpanded ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="ml-3 pl-4 border-l-2 border-stone-100 flex flex-col gap-0.5 py-1">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      className={`px-3 py-2 rounded-lg text-sm transition-all ${
                        cat.active
                          ? "bg-emerald-50 text-emerald-700 font-bold border border-emerald-100"
                          : "text-stone-500 hover:bg-stone-50 hover:text-stone-800"
                      }`}
                    >
                      {cat.active && (
                        <ChevronRight className="w-3 h-3 inline mr-1 text-emerald-500" />
                      )}
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other links */}
            {SIDEBAR_LINKS.slice(1).map(({ label, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition-colors"
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <div className="flex-1 px-6 lg:px-8 py-8 min-w-0">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-5">
            <button onClick={() => navigate("/")} className="hover:text-emerald-600 transition-colors">Inicio</button>
            <span>›</span>
            <span>Categorías</span>
            <span>›</span>
            <span className="text-stone-700 font-semibold">Macetas de Perros</span>
          </nav>

          {/* Page Title + Filter */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1
                className="text-3xl font-extrabold text-stone-900"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Macetas de Perros 🐕
              </h1>
              <p className="text-stone-500 text-sm mt-1">{PRODUCTS.length} productos encontrados</p>
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm font-medium text-stone-700 hover:border-emerald-300 transition-colors shadow-sm"
              >
                <SlidersHorizontal className="w-4 h-4 text-stone-400" />
                Filtrar y Ordenar: {SORT_OPTIONS[sortIndex]}
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-stone-100 shadow-xl z-20 overflow-hidden">
                  {SORT_OPTIONS.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => { setSortIndex(i); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        i === sortIndex
                          ? "bg-emerald-50 text-emerald-700 font-semibold"
                          : "text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[16px] overflow-hidden border border-stone-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-stone-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.onSale && (
                    <span className="absolute top-3 left-3 bg-red-400 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                      OFERTA
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-bold text-stone-900 text-sm leading-snug">{product.name}</h3>
                  <p className="text-stone-400 text-xs leading-snug line-clamp-2">{product.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mt-1">
                    {product.onSale && product.originalPrice && (
                      <span className="text-stone-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                    )}
                    <span
                      className={`font-extrabold text-lg ${product.onSale ? "text-red-500" : "text-emerald-600"}`}
                    >
                      ${product.salePrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-2">
                    <button className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-full transition-colors shadow-sm">
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
        </div>
      </div>
    </div>
  );
}
