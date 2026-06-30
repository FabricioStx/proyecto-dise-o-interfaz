import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Search, ShoppingCart, User, Settings, LogOut, ChevronDown, Menu } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useApp } from "@/app/context/AppContext";
import { MiniCart } from "./MiniCart";

function GaboAvatar() {
  return (
    <svg viewBox="0 0 40 40" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#d1fae5" />
      <ellipse cx="20" cy="27" rx="9" ry="8" fill="#34d399" />
      <ellipse cx="20" cy="28" rx="6" ry="7" fill="#10b981" />
      <rect x="17" y="20" width="6" height="5" rx="2" fill="#fde68a" />
      <circle cx="20" cy="17" r="8" fill="#fef3c7" />
      <ellipse cx="15.5" cy="19" rx="2" ry="1.2" fill="#fca5a5" opacity="0.6" />
      <ellipse cx="24.5" cy="19" rx="2" ry="1.2" fill="#fca5a5" opacity="0.6" />
      <circle cx="17" cy="16.5" r="1.5" fill="#1c1917" />
      <circle cx="23" cy="16.5" r="1.5" fill="#1c1917" />
      <circle cx="17.7" cy="15.8" r="0.5" fill="white" />
      <circle cx="23.7" cy="15.8" r="0.5" fill="white" />
      <path d="M17.5 20.5 Q20 22.5 22.5 20.5" stroke="#92400e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <rect x="11" y="10" width="18" height="2.5" rx="1.2" fill="#1c1917" />
      <rect x="14" y="5" width="12" height="6" rx="1.5" fill="#1c1917" />
      <line x1="25" y1="10" x2="27" y2="14" stroke="#fbbf24" strokeWidth="1.2" />
      <circle cx="27" cy="14.5" r="1" fill="#fbbf24" />
    </svg>
  );
}

export function Header() {
  const { openSidebar, cartCount, cartOpen, openCart, closeCart, openLogin, openRegister } = useApp();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-stone-100 z-50 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1440px] mx-auto px-4 h-full flex items-center justify-between gap-4">

        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={openSidebar}
            className="flex items-center justify-center w-9 h-9 rounded-xl text-stone-600 hover:bg-stone-100 hover:text-emerald-700 transition-colors"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="flex items-center gap-2 select-none group">
            <div className="transition-transform group-hover:scale-105">
              <GaboAvatar />
            </div>
            <span
              className="font-extrabold text-lg tracking-tight hidden sm:block"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#005A34" }}
            >
              GABO PLANTS
            </span>
          </Link>
        </div>

        {/* CENTER: Search */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-stone-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar macetas, plantas y más..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-200 bg-stone-50 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
              style={{ "--tw-ring-color": "#005A34" } as React.CSSProperties}
            />
          </div>
        </div>

        {/* RIGHT: Auth + Cart + Profile */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={openLogin}
              className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors hover:bg-emerald-50"
              style={{
                color: "#005A34",
                borderColor: "#005A34",
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={openRegister}
              className="px-4 py-2 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-900/20"
              style={{
                background: "#005A34",
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              Registro
            </button>
          </div>

          <div className="hidden md:block h-6 w-px bg-stone-200 mx-1" />

          {/* Cart button + MiniCart dropdown */}
          <div className="relative">
            <button
              onClick={cartOpen ? closeCart : openCart}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                cartOpen
                  ? "bg-emerald-50 text-[#005A34]"
                  : "text-stone-600 hover:bg-stone-100 hover:text-[#005A34]"
              }`}
              aria-label={`Carrito — ${cartCount} ítems`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[1.2rem] h-5 text-[10px] font-extrabold text-white rounded-full border-2 border-white leading-none px-1"
                  style={{ background: "#005A34" }}
                >
                  {cartCount}
                </span>
              )}
            </button>
            <MiniCart />
          </div>

          {/* User Dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-1 w-10 h-10 rounded-xl text-stone-600 hover:bg-stone-100 hover:text-[#005A34] transition-colors justify-center focus:outline-none">
                <User className="w-5 h-5" />
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[190px] bg-white rounded-2xl shadow-xl border border-stone-100 p-2 mt-2 z-[60]"
                align="end"
                sideOffset={6}
              >
                <DropdownMenu.Item
                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-stone-700 rounded-xl hover:bg-emerald-50 hover:outline-none cursor-pointer transition-colors"
                  style={{ "--tw-text-opacity": 1 } as React.CSSProperties}
                  onSelect={() => navigate("/perfil")}
                >
                  <User className="w-4 h-4" /> Mi Perfil
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-stone-700 rounded-xl hover:bg-emerald-50 hover:outline-none cursor-pointer transition-colors"
                  onSelect={openLogin}
                >
                  <Settings className="w-4 h-4" /> Iniciar Sesión
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px bg-stone-100 my-1 mx-2" />
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2.5 text-sm text-red-500 rounded-xl hover:bg-red-50 hover:outline-none cursor-pointer transition-colors">
                  <LogOut className="w-4 h-4" /> Cerrar sesión
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}
