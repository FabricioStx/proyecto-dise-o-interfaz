import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

function BrandAvatarLarge() {
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Floating leaf 1 */}
      <ellipse cx="30" cy="50" rx="14" ry="22" fill="#86efac" opacity="0.7" transform="rotate(-30 30 50)" />
      <ellipse cx="30" cy="50" rx="1.5" ry="20" fill="#4ade80" opacity="0.5" transform="rotate(-30 30 50)" />
      {/* Floating leaf 2 */}
      <ellipse cx="185" cy="45" rx="11" ry="18" fill="#4ade80" opacity="0.6" transform="rotate(25 185 45)" />
      <ellipse cx="185" cy="45" rx="1.5" ry="16" fill="#22c55e" opacity="0.4" transform="rotate(25 185 45)" />
      {/* Floating leaf 3 */}
      <ellipse cx="40" cy="175" rx="10" ry="16" fill="#a7f3d0" opacity="0.7" transform="rotate(15 40 175)" />
      {/* Floating leaf 4 */}
      <ellipse cx="178" cy="165" rx="12" ry="20" fill="#6ee7b7" opacity="0.6" transform="rotate(-20 178 165)" />
      {/* Floating dots */}
      <circle cx="60" cy="28" r="4" fill="#bbf7d0" opacity="0.8" />
      <circle cx="160" cy="22" r="3" fill="#6ee7b7" opacity="0.6" />
      <circle cx="195" cy="120" r="5" fill="#a7f3d0" opacity="0.5" />
      <circle cx="20" cy="115" r="3.5" fill="#d1fae5" opacity="0.7" />

      {/* Avatar body */}
      <circle cx="110" cy="115" r="75" fill="#d1fae5" />
      {/* Body */}
      <ellipse cx="110" cy="155" rx="40" ry="35" fill="#34d399" />
      <ellipse cx="110" cy="160" rx="27" ry="30" fill="#10b981" />
      {/* Neck */}
      <rect x="100" y="130" width="20" height="18" rx="7" fill="#fde68a" />
      {/* Head */}
      <circle cx="110" cy="108" r="38" fill="#fef3c7" />
      {/* Blush */}
      <ellipse cx="94" cy="116" rx="8" ry="5" fill="#fca5a5" opacity="0.55" />
      <ellipse cx="126" cy="116" rx="8" ry="5" fill="#fca5a5" opacity="0.55" />
      {/* Eyes */}
      <circle cx="100" cy="105" r="5.5" fill="#1c1917" />
      <circle cx="120" cy="105" r="5.5" fill="#1c1917" />
      <circle cx="101.8" cy="103" r="2" fill="white" />
      <circle cx="121.8" cy="103" r="2" fill="white" />
      {/* Smile */}
      <path d="M101 118 Q110 126 119 118" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Graduation cap */}
      <rect x="72" y="74" width="76" height="11" rx="5" fill="#1c1917" />
      <rect x="84" y="46" width="52" height="30" rx="6" fill="#1c1917" />
      <line x1="143" y1="74" x2="152" y2="94" stroke="#fbbf24" strokeWidth="3" />
      <circle cx="153" cy="96" r="4" fill="#fbbf24" />
      {/* Small plant held */}
      <circle cx="68" cy="170" r="14" fill="#78350f" />
      <path d="M68 156 Q57 138 63 120" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="56" cy="124" rx="9" ry="13" fill="#4ade80" transform="rotate(-25 56 124)" />
      <path d="M68 156 Q79 138 73 120" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="78" cy="124" rx="9" ry="13" fill="#86efac" transform="rotate(25 78 124)" />
    </svg>
  );
}

export function AboutSnippet() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
      <div className="bg-white rounded-3xl border border-stone-100 shadow-[0_4px_32px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* Left: Illustrated avatar with floating leaves */}
          <div className="flex items-center justify-center py-10 px-8 bg-gradient-to-br from-emerald-50 to-green-50 min-h-[280px]">
            <div className="w-56 h-56">
              <BrandAvatarLarge />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center px-8 py-10 gap-5">
            <div className="inline-flex items-center gap-2 self-start">
              <span className="h-px w-8 bg-emerald-400" />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Nuestra historia
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Quiénes Somos
            </h2>

            <p className="text-stone-600 text-lg leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Amamos las plantas y las mascotas. Diseñamos piezas únicas hechas con cariño para darle un toque
              especial a tu hogar — transformando cada rincón en un espacio lleno de vida y personalidad.
            </p>

            <Link
              to="/about"
              className="self-start inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 group transition-colors"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Conocer más
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
