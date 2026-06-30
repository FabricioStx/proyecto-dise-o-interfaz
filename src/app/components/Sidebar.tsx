import { useState } from "react";
import { Link, useLocation } from "react-router"; 
import { X, Home, Leaf, PawPrint, Users, Phone, Search, Instagram, Facebook, Mail } from "lucide-react";
import { useApp } from "@/app/context/AppContext";

const NAV = [
  { label: "Inicio",                path: "/",                   icon: Home     },
  { label: "Categorías de Plantas", path: "/categorias/plantas", icon: Leaf     },
  { label: "Macetas de Mascotas",   path: "/categorias/perros",  icon: PawPrint },
  { label: "Quiénes Somos",         path: "/about",              icon: Users  },
  { label: "Contactos",             path: "/contact",            icon: Phone  },
];

export function Sidebar() {
  const { sidebarOpen, closeSidebar } = useApp();
  const location = useLocation();
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Backdrop oscuro al abrir el menú */}
      <div
        className={`fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* ── PANEL CON IMAGEN ANIMADA DE FONDO ── */}
      <aside
        className={`fixed top-0 left-0 z-[80] h-full w-72 flex flex-col shadow-2xl transition-transform duration-300 ease-out overflow-hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          /* 
            1. El linear-gradient actúa como un filtro verde oscuro semitransparente.
            2. Reemplaza '/fondo-animado.gif' por la ruta de tu imagen real.
          */
          backgroundImage: `
            linear-gradient(rgba(0, 90, 53, 0.4), rgba(0, 90, 30, 0.5)), 
            url('/fondo.webp')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* ── TOP: Logo + Close ── */}
        <div className="flex items-center justify-between px-5 pt-7 pb-5">
          <div className="flex items-center gap-2.5 relative z-10">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-md">
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
            className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-md"
            aria-label="Cerrar menú"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Search bar ── */}
        <div className="px-4 pb-4 relative z-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-emerald-400" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white/10 backdrop-blur-md text-white placeholder-emerald-300/70 border border-white/15 focus:outline-none focus:border-emerald-400 transition-colors"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        {/* ── Hairline ── */}
        <div className="h-px mx-5 bg-white/10 relative z-10" />

        {/* ── Navigation ── */}
        <nav className="flex flex-col gap-1 px-3 pt-3 overflow-y-auto flex-1 relative z-10">
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
                className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all backdrop-blur-sm ${
                  isActive
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-emerald-100/90 hover:bg-white/10 hover:text-white"
                }`}
                style={{ borderRadius: "30px" }}
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

        {/* ── Bottom: Social + email ── */}
        <div className="px-5 pb-7 pt-2 border-t border-white/10 relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 mb-3"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Síguenos
          </p>
          <div className="flex items-center gap-2 mb-3.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/25 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/25 transition-colors"
              aria-label="Facebook"
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