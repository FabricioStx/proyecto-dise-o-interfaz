export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  originalPrice: number | null;
  salePrice: number;
  onSale: boolean;
  badge?: string;
}

export interface CategoryConfig {
  slug: string;
  label: string;
  emoji: string;
  heading: string;
  accentColor: string;
  products: Product[];
}

export const CATEGORIES: CategoryConfig[] = [
  // ── Macetas de Perros ──────────────────────────────
  {
    slug: "perros",
    label: "Macetas de Perros",
    emoji: "🐕",
    heading: "Macetas de Perros",
    accentColor: "bg-amber-50 text-amber-700",
    products: [
      { id: 1, name: "Maceta Bulldog", description: "Cerámica artesanal con detalle fino. Suculenta incluida.", image: "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 18, salePrice: 15.99, onSale: true },
      { id: 2, name: "Maceta Pastor Alemán", description: "Porcelana pintada a mano, diseño de colección exclusivo.", image: "https://images.unsplash.com/photo-1638621718574-b67e45ccd809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 20.0, onSale: false },
      { id: 3, name: "Maceta Husky", description: "Diseño nórdico minimalista, ideal para suculentas.", image: "https://images.unsplash.com/photo-1625758762897-4eae722fb0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 24, salePrice: 18.5, onSale: true },
      { id: 4, name: "Maceta Pug", description: "Expresión adorable en cerámica mate de alta calidad.", image: "https://images.unsplash.com/photo-1598833824196-6b4e7170e147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 16.0, onSale: false },
      { id: 5, name: "Maceta Schnauzer", description: "Bigotes esculpidos a mano. Pieza artística para sala.", image: "https://images.unsplash.com/photo-1544474921-9df05bc76d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 22, salePrice: 15.99, onSale: true },
    ],
  },

  // ── Macetas de Gatos ──────────────────────────────
  {
    slug: "gatos",
    label: "Macetas de Gatos",
    emoji: "🐈",
    heading: "Macetas de Gatos",
    accentColor: "bg-purple-50 text-purple-700",
    products: [
      { id: 1, name: "Maceta Gatito Tabby", description: "Gatito rayado en cerámica suave, con planta suculenta verde.", image: "https://images.unsplash.com/photo-1623006715986-a37ce6be31ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 20, salePrice: 15.5, onSale: true },
      { id: 2, name: "Maceta Gato Blanco", description: "Acabado blanco brillante con ojos pintados a mano.", image: "https://images.unsplash.com/photo-1609228265595-bb5c2ec78971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 18.0, onSale: false },
      { id: 3, name: "Maceta Gato Zen", description: "Postura meditativa, cerámica mate con suculenta interior.", image: "https://images.unsplash.com/photo-1589746114640-573fd96e29d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 26, salePrice: 19.99, onSale: true },
      { id: 4, name: "Maceta Gato Siamés", description: "Ojos azul cobalto pintados. Elegante y delicada.", image: "https://images.unsplash.com/photo-1586310176325-d03086dde389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 22.0, onSale: false },
      { id: 5, name: "Maceta Gato Zorro", description: "Diseño fantástico mixto gato-zorro con planta colgante.", image: "https://images.unsplash.com/photo-1730806810399-eb1a5c41bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 28, salePrice: 21.0, onSale: true },
    ],
  },

  // ── Plantas ──────────────────────────────────────
  {
    slug: "plantas",
    label: "Plantas",
    emoji: "🌿",
    heading: "Plantas",
    accentColor: "bg-emerald-50 text-emerald-700",
    products: [
      { id: 1, name: "Monstera Deliciosa", description: "La reina tropical del interior. Crece exuberante en luz indirecta.", image: "https://images.unsplash.com/photo-1769536205224-d8f93426a197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 35, salePrice: 27.99, onSale: true },
      { id: 2, name: "Monstera Variegada", description: "Hojas jaspeadas de blanco y verde. Variedad premium de colección.", image: "https://images.unsplash.com/photo-1767457421396-efff3d560ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 48.0, onSale: false },
      { id: 3, name: "Monstera Thai Constellation", description: "Patrón constelación único. La más buscada del mercado.", image: "https://images.unsplash.com/photo-1769536205245-e4700860f942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 60, salePrice: 44.5, onSale: true },
      { id: 4, name: "Rhaphidophora Tetrasperma", description: "Mini Monstera compacta. Ideal para espacios pequeños.", image: "https://images.unsplash.com/photo-1777287514510-8b0ffff42cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 24.0, onSale: false },
      { id: 5, name: "Pothos Dorado", description: "Planta trepadora casi indestructible. Perfecta para principiantes.", image: "https://images.unsplash.com/photo-1696087368098-1f3c6e78b7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 16, salePrice: 11.99, onSale: true },
    ],
  },

  // ── Macetas de Navidad ───────────────────────────
  {
    slug: "navidad",
    label: "Macetas de Navidad",
    emoji: "🎄",
    heading: "Macetas de Navidad",
    accentColor: "bg-red-50 text-red-700",
    products: [
      { id: 1, name: "Maceta Santa Claus", description: "Santa de cerámica con barril verde para suculentas o pinos mini.", image: "https://images.unsplash.com/photo-1636703781887-dd40ef83d561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 28, salePrice: 22.0, onSale: true },
      { id: 2, name: "Trío de Gnomos Navideños", description: "Set de tres gnomos festivos, pintados a mano con detalles dorados.", image: "https://images.unsplash.com/photo-1672058042960-f5eefe2ccecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 34.0, onSale: false },
      { id: 3, name: "Maceta Gnomo en Macetero", description: "Gnomo festivo emergiendo de macetero terracota. Edición limitada.", image: "https://images.unsplash.com/photo-1701944577380-c5ad5a601156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 32, salePrice: 24.99, onSale: true },
      { id: 4, name: "Colección Esferas Premium", description: "Esferas de cerámica pintadas a mano. Macetero + decoración.", image: "https://images.unsplash.com/photo-1636703781889-5755293deaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 19.0, onSale: false },
    ],
  },

  // ── Diseños ──────────────────────────────────────
  {
    slug: "disenos",
    label: "Diseños",
    emoji: "🎨",
    heading: "Diseños Exclusivos",
    accentColor: "bg-violet-50 text-violet-700",
    products: [
      { id: 1, name: "Dúo Cerámico Bicolor", description: "Piezas apiladas en paleta contrastante. Arte funcional para el hogar.", image: "https://images.unsplash.com/photo-1745828186631-39c4e81107db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 38.0, onSale: false },
      { id: 2, name: "Set Naranja & Azul", description: "Tres piezas en gradiente vibrante. Colección Pop Art 2025.", image: "https://images.unsplash.com/photo-1612456914681-6f6111a7c973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 52, salePrice: 39.99, onSale: true },
      { id: 3, name: "Vasija Tricolor Artística", description: "Pinceladas geométricas sobre fondo blanco. Pieza única de artista.", image: "https://images.unsplash.com/photo-1601795469151-a4529d1d652f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 45.0, onSale: false },
      { id: 4, name: "Maceta Expresiva Duo", description: "Dos maceteros tomados de la mano. Arte escultórico con plantas.", image: "https://images.unsplash.com/photo-1750737771009-09f43a749b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 58, salePrice: 42.5, onSale: true },
      { id: 5, name: "Maceta Personalidad", description: "Cara expresiva con gafas. Humor e identidad en cerámica.", image: "https://images.unsplash.com/photo-1685606350130-2176a0ec7296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 32.0, onSale: false },
    ],
  },

  // ── Otros / Accesorios ───────────────────────────
  {
    slug: "otros",
    label: "Otros Accesorios",
    emoji: "🪴",
    heading: "Otros Accesorios",
    accentColor: "bg-teal-50 text-teal-700",
    products: [
      { id: 1, name: "Regadera Botánica Amarilla", description: "Regadera esmaltada 2L con boquilla fina. Duradera y elegante.", image: "https://images.unsplash.com/photo-1667992714862-df8713baf8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 22, salePrice: 16.5, onSale: true },
      { id: 2, name: "Regadera de Jardín Mini", description: "Tamaño compacto para plantas de interior. Fácil de usar.", image: "https://images.unsplash.com/photo-1692651771569-95dd3ed878a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 12.0, onSale: false },
      { id: 3, name: "Set de Riego Premium", description: "Kit de riego con regadera, guantes y sustrato. Todo incluido.", image: "https://images.unsplash.com/photo-1645111094156-fc33bbf48b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: 38, salePrice: 28.99, onSale: true },
      { id: 4, name: "Tierra Premium Suculentas", description: "Sustrato enriquecido para cactus y suculentas. 5 kg bolsa.", image: "https://images.unsplash.com/photo-1576823691999-cce2ef6eaf4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", originalPrice: null, salePrice: 9.99, onSale: false },
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryConfig | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
