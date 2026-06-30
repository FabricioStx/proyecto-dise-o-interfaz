import { useNavigate } from "react-router";
import { Pencil, User, Mail, Phone, MapPin, Home, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const COVER_URL =
  "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGFwZWQlMjBwbGFudCUyMHBvdHMlMjBxdWlya3klMjBjZXJhbWljJTIwcGxhbnRlcnN8ZW58MXx8fHwxNzc5NDY4NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const contactRows = [
  {
    icon: User,
    label: "Nombre Completo",
    value: "Fabricio Paucar",
    empty: false,
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    value: "fabriciopaucar8@gmail.com",
    empty: false,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "0983580182",
    empty: false,
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "No registrado",
    empty: true,
  },
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-stone-100 flex items-start justify-center py-0 md:py-8">
      {/* Mobile phone frame on desktop */}
      <div className="w-full max-w-sm bg-white shadow-2xl md:rounded-3xl overflow-hidden flex flex-col min-h-[calc(100vh-5rem)] md:min-h-[680px]">

        {/* ── Top Navigation Bar ── */}
        <div
          className="relative flex items-center justify-between px-4 pt-10 pb-5"
          style={{
            background: "linear-gradient(160deg, #4ade80 0%, #22c55e 45%, #16a34a 100%)",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Volver"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-white font-semibold text-lg tracking-wide">Mi Perfil</h1>

          <button
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Editar perfil"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </div>

        {/* ── Cover + Avatar ── */}
        <div className="relative">
          {/* Cover photo */}
          <div className="h-44 overflow-hidden">
            <ImageWithFallback
              src={COVER_URL}
              alt="Tres maceteros con forma de animales con plantas verdes"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 h-44 bg-gradient-to-b from-green-900/10 to-green-900/30 pointer-events-none" />
          </div>

          {/* Avatar ring — overlaps cover bottom */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 z-10">
            <div className="w-24 h-24 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-300 flex items-center justify-center">
              {/* Cartoon avatar placeholder styled to suggest the brand character */}
              <svg viewBox="0 0 96 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <circle cx="48" cy="48" r="48" fill="#d1fae5" />
                {/* Body */}
                <ellipse cx="48" cy="68" rx="20" ry="18" fill="#34d399" />
                {/* Shirt detail */}
                <ellipse cx="48" cy="70" rx="13" ry="14" fill="#10b981" />
                {/* Neck */}
                <rect x="42" y="52" width="12" height="10" rx="4" fill="#fde68a" />
                {/* Head */}
                <circle cx="48" cy="46" r="18" fill="#fef3c7" />
                {/* Face blush */}
                <ellipse cx="38" cy="50" rx="4" ry="2.5" fill="#fca5a5" opacity="0.6" />
                <ellipse cx="58" cy="50" rx="4" ry="2.5" fill="#fca5a5" opacity="0.6" />
                {/* Eyes */}
                <circle cx="42" cy="44" r="3" fill="#1c1917" />
                <circle cx="54" cy="44" r="3" fill="#1c1917" />
                <circle cx="43.5" cy="42.5" r="1" fill="white" />
                <circle cx="55.5" cy="42.5" r="1" fill="white" />
                {/* Smile */}
                <path d="M43 51 Q48 56 53 51" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Grad cap brim */}
                <rect x="28" y="30" width="40" height="5" rx="2.5" fill="#1c1917" />
                {/* Grad cap top */}
                <rect x="36" y="18" width="24" height="14" rx="3" fill="#1c1917" />
                {/* Tassel */}
                <line x1="66" y1="30" x2="70" y2="38" stroke="#fbbf24" strokeWidth="2" />
                <circle cx="70" cy="39" r="2" fill="#fbbf24" />
                {/* Small plant in hand */}
                <circle cx="30" cy="74" r="7" fill="#6b7280" opacity="0.3" />
                <circle cx="30" cy="74" r="6" fill="#78350f" />
                <path d="M30 68 Q24 60 28 54" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <ellipse cx="25" cy="56" rx="4" ry="6" fill="#4ade80" transform="rotate(-20 25 56)" />
                <path d="M30 68 Q36 60 32 54" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <ellipse cx="35" cy="56" rx="4" ry="6" fill="#86efac" transform="rotate(20 35 56)" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Name + Brand ── */}
        <div className="mt-14 flex flex-col items-center gap-0.5 pb-4 px-4">
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">Fabricio Paucar</h2>
          <p className="text-sm font-medium text-emerald-600">Gabo Plant&apos;s</p>
        </div>

        {/* ── Contact Information Card ── */}
        <div className="mx-4 mb-4 bg-white rounded-2xl shadow-md border border-stone-100 overflow-hidden">
          {/* Card Header */}
          <div className="px-5 pt-4 pb-3 border-b border-stone-100">
            <h3 className="text-emerald-600 font-semibold text-base tracking-wide">
              Información de Contacto
            </h3>
            <div className="h-0.5 w-12 bg-emerald-400 rounded-full mt-1" />
          </div>

          {/* Contact Rows */}
          <div className="divide-y divide-stone-50">
            {contactRows.map(({ icon: Icon, label, value, empty }) => (
              <div key={label} className="flex items-start gap-3 px-5 py-3.5">
                <div
                  className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    empty
                      ? "bg-stone-100 text-stone-400"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-medium text-stone-400 uppercase tracking-wider leading-tight">
                    {label}
                  </span>
                  <span
                    className={`text-sm mt-0.5 leading-snug break-all ${
                      empty
                        ? "text-stone-400 italic"
                        : "text-stone-800 font-medium"
                    }`}
                  >
                    {value}
                  </span>
                </div>
                {empty && (
                  <span className="ml-auto text-xs text-emerald-500 font-medium self-center flex-shrink-0">
                    + Agregar
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spacer to push button down */}
        <div className="flex-grow" />

        {/* ── Back to Home Button ── */}
        <div className="px-4 pb-8 pt-2">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-semibold text-white text-base shadow-lg transition-all active:scale-95 hover:shadow-emerald-300/60"
            style={{
              background: "linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
            }}
          >
            <Home className="w-5 h-5" />
            Regresar a Inicio
          </button>
        </div>
      </div>
    </div>
  );
}
