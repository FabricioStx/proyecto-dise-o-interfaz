import { useRef, useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useApp } from "@/app/context/AppContext";

export function MiniCart() {
  const { cartOpen, closeCart, cartItems, cartTotal, updateQty } = useApp();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) closeCart();
    };
    if (cartOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [cartOpen, closeCart]);

  if (!cartOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-3 w-80 bg-white z-[60] overflow-hidden"
      style={{
        borderRadius: "16px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-emerald-600" />
          <h3 className="font-bold text-stone-900 text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Mi Carrito
          </h3>
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </div>
        <button
          onClick={closeCart}
          className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-200 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Items */}
      <div className="flex flex-col divide-y divide-stone-50 max-h-72 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-stone-400 gap-2">
            <ShoppingBag className="w-8 h-8 opacity-40" />
            <p className="text-sm">Tu carrito está vacío</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 px-4 py-3.5">
              {/* Thumbnail */}
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-stone-800 leading-snug line-clamp-2">
                  {item.name}
                </p>
                <p className="text-sm font-bold text-emerald-600 mt-1">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>

              {/* Qty controls */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                  aria-label="Reducir cantidad"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-5 text-center text-xs font-bold text-stone-800 tabular-nums">
                  {item.qty}
                </span>
                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 hover:bg-emerald-200 transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 bg-stone-50 border-t border-stone-100">
        {/* Total */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-stone-500 font-medium">Total del pedido</span>
          <span className="text-lg font-extrabold text-stone-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            ${cartTotal.toFixed(2)}
          </span>
        </div>

        {/* Checkout button */}
        <button
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#005A34]/30 active:translate-y-0"
          style={{
            background: "#005A34",
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        >
          Finalizar Compra
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={closeCart}
          className="w-full mt-2 py-2.5 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-700 hover:bg-stone-100 transition-colors"
        >
          Seguir comprando
        </button>
      </div>
    </div>
  );
}
