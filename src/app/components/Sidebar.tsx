import { useState } from "react";
import { Link, useLocation } from "react-router";
import { X, Home, Leaf, PawPrint, Users, Phone, ChevronDown,
         Instagram, Facebook, Mail, Search } from "lucide-react";
import { useApp } from "@/app/context/AppContext";

/* ── Frenchie Dog Planter SVG Illustration ── */
function FrenchiePlanter() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Floating leaves */}
      <ellipse cx="28" cy="60" rx="11" ry="17" fill="#86efac" opacity="0.85" transform="rotate(-35 28 60)" />
      <line x1="28" y1="43" x2="28" y2="77" stroke="#4ade80" strokeWidth="1.2" opacity="0.7" transform="rotate(-35 28 60)" />
      <ellipse cx="168" cy="55" rx="9" ry="14" fill="#4ade80" opacity="0.75" transform="rotate(28 168 55)" />
      <line x1="168" y1="41" x2="168" y2="69" stroke="#22c55e" strokeWidth="1.2" opacity="0.6" transform="rotate(28 168 55)" />
      <ellipse cx="38" cy="155" rx="8" ry="12" fill="#bbf7d0" opacity="0.7" transform="rotate(20 38 155)" />
      <ellipse cx="162" cy="148" rx="7" ry="11" fill="#6ee7b7" opacity="0.65" transform="rotate(-18 162 148)" />
      <circle cx="55" cy="30" r="4" fill="#a7f3d0" opacity="0.7" />
      <circle cx="148" cy="25" r="3" fill="#6ee7b7" opacity="0.6" />
      <circle cx="175" cy="115" r="4.5" fill="#bbf7d0" opacity="0.55" />
      <circle cx="22" cy="108" r="3" fill="#d1fae5" opacity="0.65" />

      {/* Pot body */}
      <path d="M62 148 Q56 132 56 120 L56 115 Q56 108 63 108 L137 108 Q144 108 144 115 L144 120 Q144 132 138 148 Z"
            fill="#e7e5e4" />
      {/* Pot shadow/depth */}
      <path d="M62 148 Q56 132 56 120 L56 115 Q56 108 63 108 L80 108 Q73 108 73 115 L73 120 Q73 132 67 148 Z"
            fill="#d6d3d1" opacity="0.5" />
      {/* Pot rim */}
      <rect x="52" y="104" width="96" height="12" rx="6" fill="#d6d3d1" />
      <rect x="52" y="104" width="96" height="6" rx="6" fill="#e7e5e4" />

      {/* Plant soil */}
      <ellipse cx="100" cy="107" rx="42" ry="7" fill="#92400e" opacity="0.4" />
      <ellipse cx="100" cy="106" rx="40" ry="5" fill="#78350f" opacity="0.5" />

      {/* Succulent leaves — back */}
      <ellipse cx="100" cy="82" rx="10" ry="26" fill="#059669" opacity="0.7" />
      <ellipse cx="80" cy="88" rx="9" ry="22" fill="#10b981" opacity="0.75" transform="rotate(-20 80 108)" />
      <ellipse cx="120" cy="88" rx="9" ry="22" fill="#10b981" opacity="0.75" transform="rotate(20 120 108)" />
      {/* Succulent leaves — front */}
      <ellipse cx="88" cy="92" rx="8" ry="20" fill="#34d399" transform="rotate(-10 88 108)" />
      <ellipse cx="112" cy="92" rx="8" ry="20" fill="#34d399" transform="rotate(10 112 108)" />
      <ellipse cx="100" cy="86" rx="9" ry="23" fill="#6ee7b7" />
      {/* Succulent center */}
      <ellipse cx="100" cy="80" rx="6" ry="8" fill="#a7f3d0" />
      <circle cx="100" cy="77" r="3.5" fill="#d1fae5" />

      {/* Dog face — Frenchie head */}
      <ellipse cx="100" cy="148" rx="36" ry="32" fill="#fef3c7" />
      {/* Ears */}
      <path d="M68 130 Q58 112 72 108 Q82 105 84 120 Z" fill="#fde68a" />
      <path d="M132 130 Q142 112 128 108 Q118 105 116 120 Z" fill="#fde68a" />
      {/* Ear inner */}
      <path d="M70 128 Q64 116 74 113 Q80 111 82 122 Z" fill="#fbbf24" opacity="0.4" />
      <path d="M130 128 Q136 116 126 113 Q120 111 118 122 Z" fill="#fbbf24" opacity="0.4" />

      {/* Snout area */}
      <ellipse cx="100" cy="158" rx="18" ry="13" fill="#fde68a" />
      {/* Nose */}
      <ellipse cx="100" cy="153" rx="9" ry="6" fill="#1c1917" />
      <ellipse cx="97" cy="151" rx="3" ry="2" fill="#374151" opacity="0.5" />
      {/* Nostrils */}
      <ellipse cx="96" cy="154" rx="2.5" ry="2" fill="#111827" />
      <ellipse cx="104" cy="154" rx="2.5" ry="2" fill="#111827" />
      {/* Mouth */}
      <path d="M94 161 Q100 166 106 161" stroke="#92400e" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="86" cy="143" r="8" fill="#1c1917" />
      <circle cx="114" cy="143" r="8" fill="#1c1917" />
      <circle cx="88.5" cy="140.5" r="3" fill="white" />
      <circle cx="116.5" cy="140.5" r="3" fill="white" />
      <circle cx="89.5" cy="141.5" r="1.5" fill="#60a5fa" />
      <circle cx="117.5" cy="141.5" r="1.5" fill="#60a5fa" />

      {/* Cheek blush */}
      <ellipse cx="74" cy="152" rx="8" ry="5" fill="#fca5a5" opacity="0.5" />
      <ellipse cx="126" cy="152" rx="8" ry="5" fill="#fca5a5" opacity="0.5" />

      {/* Wrinkle lines (Frenchie characteristic) */}
      <path d="M88 138 Q83 145 85 155" stroke="#d97706" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M112 138 Q117 145 115 155" stroke="#d97706" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
      {/* Top head wrinkle */}
      <path d="M90 128 Q100 124 110 128" stroke="#d97706" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

const NAV = [
  { label: "Inicio",                  path: "/",                icon: Home      },
  { label: "Categorías de Plantas",   path: "/categorias/plantas", icon: Leaf   },
  { label: "Macetas de Mascotas",     path: "/categorias/perros",  icon: PawPrint },
  { label: "Quiénes Somos",           path: "/about",              icon: Users  },
  { label: "Contactos",               path: "/contact",            icon: Phone  },
];

export function Sidebar() {
  const { sidebarOpen, closeSidebar } = useApp();
  const location = useLocation();
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 z-[80] h-full w-72 flex flex-col shadow-2xl transition-transform duration-300 ease-out overflow-hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "#005A34" }}
      >
        {/* ── TOP: Logo + Close ── */}
        <div className="flex items-center justify-between px-5 pt-7 pb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <span
                className="text-white font-extrabold text-base tracking-tight block leading-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                GABO PLANTS
              </span>
              <span className="text-emerald-300 text-[10px] font-medium tracking-widest uppercase">
                Botanical Store
              </span>
            </div>
          </div>
          <button
            onClick={closeSidebar}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Search bar ── */}
        <div className="px-4 pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-emerald-400" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white/10 text-white placeholder-emerald-300/70 border border-white/15 focus:outline-none focus:border-emerald-400 transition-colors"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        {/* ── Hairline ── */}
        <div className="h-px mx-5 bg-white/10" />

        {/* ── Navigation ── */}
        <nav className="flex flex-col gap-1 px-3 pt-3 overflow-y-auto">
          <p
            className="px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/80"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Menú principal
          </p>
          {NAV.map(({ label, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-emerald-100/90 hover:bg-white/10 hover:text-white"
                }`}
                style={{ borderRadius: isActive ? "30px" : "30px" }}
              >
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-colors ${
                    isActive ? "bg-white/20" : "bg-white/8"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                {label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Frenchie Illustration (circular feature area) ── */}
        <div className="flex-1 flex items-center justify-center py-4 px-6">
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "168px",
              height: "168px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 70%, transparent 100%)",
              border: "1.5px solid rgba(255,255,255,0.12)",
            }}
          >
            <div className="w-40 h-40">
              <FrenchiePlanter />
            </div>
          </div>
        </div>

        {/* ── Bottom: Social + email ── */}
        <div className="px-5 pb-7 pt-2 border-t border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 mb-3"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Síguenos
          </p>
          <div className="flex items-center gap-2 mb-3.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
              aria-label="Instagram @gabo_plants.ec"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
              aria-label="Facebook GABO PLANTS Oficial"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <a
            href="mailto:fhrots@hotmail.com"
            className="flex items-center gap-2 text-emerald-300 hover:text-white text-xs font-medium transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            fhrots@hotmail.com
          </a>
        </div>
      </aside>
    </>
  );
}
