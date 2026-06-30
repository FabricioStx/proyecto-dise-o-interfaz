import { useNavigate } from "react-router";
import { Home, Mail, Phone } from "lucide-react";

const IMAGES = {
  trio: "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
  holdingHands: "https://images.unsplash.com/photo-1750737771009-09f43a749b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  glasses: "https://images.unsplash.com/photo-1685606350130-2176a0ec7296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  pufferfish: "https://images.unsplash.com/photo-1760383226449-ca6c5b566df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
};

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function PawIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="4" cy="8" r="2" />
      <circle cx="7.5" cy="14.5" r="2.5" />
      <path d="M12 20c-2.5 0-6.5-1-6.5-4.5S9 11 12 11s6.5 2.5 6.5 4.5S14.5 20 12 20z" />
    </svg>
  );
}

export default function About() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'Nunito Sans', sans-serif", background: "#f8faf9" }}
    >
      {/* ── Section Wrapper ── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-16 pb-20">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-emerald-300" />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              La marca
            </span>
            <span className="h-px w-12 bg-emerald-300" />
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-emerald-700 uppercase leading-none"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Quiénes Somos
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Detrás de cada maceta hay una historia de amor por la naturaleza, las mascotas y el diseño creativo.
          </p>
        </div>

        {/* ── Two-Column Body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-start">

          {/* ─── Left Column: Text Blocks ─── */}
          <div className="flex flex-col gap-10">

            {/* MISIÓN */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                  <LeafIcon />
                </span>
                <h2
                  className="text-2xl font-bold uppercase tracking-widest text-emerald-700"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Misión
                </h2>
              </div>
              <div className="pl-[52px]">
                <div className="h-px bg-emerald-100 mb-4" />
                <p className="text-gray-600 leading-relaxed text-base">
                  Nuestra misión es llevar alegría y naturaleza a cada hogar a través de macetas únicas y creativas con
                  temática de mascotas. Transformamos espacios comunes en rincones llenos de vida y personalidad.
                </p>
              </div>
            </div>

            {/* TRAYECTORIA */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                  <PawIcon />
                </span>
                <h2
                  className="text-2xl font-bold uppercase tracking-widest text-emerald-700"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Trayectoria
                </h2>
              </div>
              <div className="pl-[52px]">
                <div className="h-px bg-emerald-100 mb-4" />
                <p className="text-gray-600 leading-relaxed text-base">
                  Desde hace más de una década, GABO PLANTS ha sido pionero en el diseño de macetas de mascotas. Lo que
                  comenzó como un pequeño emprendimiento artesanal, hoy es una marca reconocida por la calidad y
                  originalidad de sus productos, manteniendo siempre un profundo respeto por el medio ambiente.
                </p>
              </div>
            </div>

            {/* CONTÁCTANOS */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <h2
                  className="text-2xl font-bold uppercase tracking-widest text-emerald-700"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Contáctanos
                </h2>
              </div>
              <div className="pl-[52px]">
                <div className="h-px bg-emerald-100 mb-4" />
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:fhrost@hotmail.com"
                    className="flex items-center gap-3 group/link"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-emerald-100 text-emerald-500 shadow-sm group-hover/link:border-emerald-300 transition-colors flex-shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-gray-700 font-medium text-sm group-hover/link:text-emerald-600 transition-colors">
                      fhrost@hotmail.com
                    </span>
                  </a>
                  <a
                    href="tel:+5930958903940"
                    className="flex items-center gap-3 group/link"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-emerald-100 text-emerald-500 shadow-sm group-hover/link:border-emerald-300 transition-colors flex-shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-gray-700 font-medium text-sm group-hover/link:text-emerald-600 transition-colors">
                      +593 095 890 3940
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Brand quote card */}
            <div className="mt-2 rounded-2xl bg-emerald-700 px-7 py-6 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/5" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white/5" />
              <p
                className="text-white text-lg font-semibold italic leading-snug relative z-10"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                "Cada maceta es un universo verde esperando ser descubierto."
              </p>
              <p className="text-emerald-300 text-sm mt-2 font-medium relative z-10">— Gabriel, Fundador de GABO PLANTS</p>
            </div>
          </div>

          {/* ─── Right Column: Photo Collage ─── */}
          <div className="grid grid-rows-[auto_auto] gap-4">

            {/* Top: full-width panoramic */}
            <div className="relative rounded-3xl overflow-hidden bg-emerald-50 aspect-[16/9]">
              <img
                src={IMAGES.trio}
                alt="Tres maceteros de cerámica con forma de animales con plantas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />
              {/* Label pill */}
              <div className="absolute bottom-4 left-4">
                <span
                  className="inline-block bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Colección Signature
                </span>
              </div>
            </div>

            {/* Bottom row: 3 equal thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: IMAGES.holdingHands, alt: "Dos maceteros tomados de la mano con plantas" },
                { src: IMAGES.glasses, alt: "Macetero con cara y lentes con planta verde" },
                { src: IMAGES.pufferfish, alt: "Planta colgante junto a decoración de pez globo" },
              ].map(({ src, alt }, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden bg-emerald-50 aspect-square"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { stat: "10+", label: "Años de experiencia" },
                { stat: "2 000+", label: "Diseños únicos" },
                { stat: "15 000+", label: "Clientes felices" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-white rounded-2xl border border-emerald-50 shadow-sm px-4 py-4 text-center">
                  <p
                    className="text-2xl font-extrabold text-emerald-600"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {stat}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Decorative Divider ── */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-grow h-px bg-emerald-100" />
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-300 flex-shrink-0" fill="currentColor">
            <path d="M12 2C9.5 2 7 4 7 7c0 2.5 1.5 4.5 3 6L12 15l2-2c1.5-1.5 3-3.5 3-6 0-3-2.5-5-5-5zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
          <div className="flex-grow h-px bg-emerald-100" />
        </div>

        {/* ── CTA Button ── */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-white text-base shadow-lg shadow-green-200 hover:shadow-green-300/70 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              background: "linear-gradient(135deg, #4ade80 0%, #22c55e 55%, #16a34a 100%)",
            }}
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Regresar a Inicio
          </button>
        </div>
      </div>
    </div>
  );
}
