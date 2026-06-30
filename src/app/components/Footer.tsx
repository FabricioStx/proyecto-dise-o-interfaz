import { useNavigate } from "react-router";
import { Link } from "react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Home, MessageCircle, Leaf } from "lucide-react";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative pt-14 pb-10 border-t border-white/5" style={{ background: "#121212" }}>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5930958903940"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-[#25D366]/40 active:scale-95"
        style={{ background: "#25D366" }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center"
                   style={{ background: "#005A34" }}>
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span
                className="font-extrabold text-xl text-white tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                GABO PLANTS
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Macetas únicas con temática de mascotas. Transformamos espacios con vida, color y personalidad desde Ecuador.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:border-pink-500 hover:text-pink-400 transition-all"
                aria-label="Instagram @gabo_plants.ec"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:border-blue-500 hover:text-blue-400 transition-all"
                aria-label="Facebook GABO PLANTS Oficial"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5930958903940"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:border-[#25D366] hover:text-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Support links */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Soporte
            </h4>
            {[
              "Políticas de Privacidad",
              "Información de Envíos",
              "Términos y Condiciones",
              "Devoluciones y Cambios",
              "Preguntas Frecuentes",
              "Garantía de Productos",
            ].map((label) => (
              <Link
                key={label}
                to="/"
                className="text-sm text-stone-500 hover:text-emerald-400 transition-colors w-fit flex items-center gap-1.5 group"
              >
                <span className="w-1 h-1 rounded-full bg-stone-700 group-hover:bg-emerald-500 transition-colors" />
                {label}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Contacto
            </h4>

            <a
              href="mailto:fhrots@hotmail.com"
              className="flex items-center gap-3 group"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: "rgba(0,90,52,0.35)" }}>
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
              </span>
              <span className="text-sm text-stone-400 group-hover:text-emerald-400 transition-colors">
                fhrots@hotmail.com
              </span>
            </a>

            <a
              href="tel:+5930958903940"
              className="flex items-center gap-3 group"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,90,52,0.35)" }}>
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
              </span>
              <span className="text-sm text-stone-400 group-hover:text-emerald-400 transition-colors">
                +593 095 890 3940
              </span>
            </a>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,90,52,0.35)" }}>
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              </span>
              <span className="text-sm text-stone-500">Quito, Ecuador</span>
            </div>

            {/* WhatsApp inline button */}
            <a
              href="https://wa.me/5930958903940"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-1 px-4 py-2.5 rounded-full text-white text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg w-fit"
              style={{
                background: "#25D366",
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Chat por WhatsApp
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} GABO PLANTS. Todos los derechos reservados.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-emerald-900/40 active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #4ade80 0%, #22c55e 55%, #16a34a 100%)",
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            <Home className="w-4 h-4" />
            Regresar a Inicio
          </button>
        </div>
      </div>
    </footer>
  );
}
