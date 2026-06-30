import { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff, Leaf } from "lucide-react";
import { useApp } from "@/app/context/AppContext";

function InputField({
  label, type, placeholder, icon: Icon, value, onChange,
}: {
  label: string; type: string; placeholder: string;
  icon: React.ElementType; value: string;
  onChange: (v: string) => void;
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Icon className="w-4 h-4 text-stone-400" />
        </div>
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
          className="w-full pl-10 pr-10 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-600 transition-colors"
            tabIndex={-1}
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  const { closeAuth } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); setTimeout(closeAuth, 1200); }, 1000);
  };

  return (
    <div className="flex flex-col gap-5 p-8">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-extrabold text-stone-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          Bienvenido de nuevo 👋
        </h2>
        <p className="text-stone-500 text-sm">Ingresa tus credenciales para continuar.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField label="Correo Electrónico" type="email" placeholder="tu@correo.com" icon={Mail} value={email} onChange={setEmail} />
        <InputField label="Contraseña" type="password" placeholder="••••••••" icon={Lock} value={password} onChange={setPassword} />

        <div className="flex justify-end">
          <button type="button" className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading || success}
          className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
          style={{ background: success ? "#059669" : "linear-gradient(135deg, #4ade80 0%, #22c55e 55%, #16a34a 100%)", fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {success ? "¡Sesión iniciada! ✓" : loading ? "Ingresando..." : "Iniciar Sesión"}
        </button>
      </form>

      <p className="text-center text-sm text-stone-500">
        ¿No tienes cuenta?{" "}
        <button onClick={onSwitch} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
          Regístrate gratis
        </button>
      </p>
    </div>
  );
}

function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
  const { closeAuth } = useApp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); setTimeout(closeAuth, 1200); }, 1000);
  };

  return (
    <div className="flex flex-col gap-5 p-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-extrabold text-stone-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          Únete a GABO PLANTS 🌱
        </h2>
        <p className="text-stone-500 text-sm">Crea tu cuenta y empieza a decorar con vida.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField label="Nombre Completo" type="text" placeholder="Tu nombre" icon={User} value={name} onChange={setName} />
        <InputField label="Correo Electrónico" type="email" placeholder="tu@correo.com" icon={Mail} value={email} onChange={setEmail} />
        <InputField label="Contraseña" type="password" placeholder="Mínimo 8 caracteres" icon={Lock} value={password} onChange={setPassword} />

        <p className="text-xs text-stone-400 leading-relaxed">
          Al registrarte aceptas nuestros{" "}
          <span className="text-emerald-600 cursor-pointer hover:underline">Términos y Condiciones</span>{" "}
          y{" "}
          <span className="text-emerald-600 cursor-pointer hover:underline">Política de Privacidad</span>.
        </p>

        <button
          type="submit"
          disabled={loading || success}
          className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
          style={{ background: success ? "#059669" : "linear-gradient(135deg, #4ade80 0%, #22c55e 55%, #16a34a 100%)", fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {success ? "¡Cuenta creada! ✓" : loading ? "Creando cuenta..." : "Crear Cuenta"}
        </button>
      </form>

      <p className="text-center text-sm text-stone-500">
        ¿Ya tienes cuenta?{" "}
        <button onClick={onSwitch} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
          Inicia sesión
        </button>
      </p>
    </div>
  );
}

export function AuthModal() {
  const { authModal, closeAuth, openLogin, openRegister } = useApp();

  if (authModal === "none") return null;

  const isLogin = authModal === "login";

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeAuth}
        aria-hidden="true"
      />

      {/* Modal container — side-by-side panels */}
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* LEFT decorative panel */}
        <div
          className="hidden md:flex flex-col justify-between w-64 flex-shrink-0 p-8 text-white"
          style={{ background: "linear-gradient(160deg, #064e3b 0%, #065f46 45%, #16a34a 100%)" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-base tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              GABO PLANTS
            </span>
          </div>

          {/* Illustration area */}
          <div className="flex flex-col gap-4">
            <svg viewBox="0 0 160 200" className="w-full opacity-90" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="80" cy="160" rx="32" ry="28" fill="rgba(255,255,255,0.15)" />
              <ellipse cx="80" cy="162" rx="21" ry="23" fill="rgba(255,255,255,0.1)" />
              <rect x="71" y="136" width="18" height="16" rx="6" fill="#fde68a" opacity="0.9" />
              <circle cx="80" cy="120" r="30" fill="#fef3c7" opacity="0.95" />
              <circle cx="68" cy="116" r="5" fill="#1c1917" />
              <circle cx="92" cy="116" r="5" fill="#1c1917" />
              <circle cx="70" cy="114" r="2" fill="white" />
              <circle cx="94" cy="114" r="2" fill="white" />
              <path d="M73 128 Q80 134 87 128" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round" />
              <rect x="48" y="94" width="64" height="9" rx="4.5" fill="#1c1917" opacity="0.9" />
              <rect x="59" y="70" width="42" height="26" rx="5" fill="#1c1917" opacity="0.9" />
              <line x1="114" y1="94" x2="120" y2="110" stroke="#fbbf24" strokeWidth="2.5" />
              <circle cx="121" cy="112" r="3.5" fill="#fbbf24" />
              <circle cx="48" cy="176" r="12" fill="rgba(120,53,15,0.7)" />
              <path d="M48 164 Q39 149 43 132" stroke="#4ade80" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <ellipse cx="38" cy="135" rx="8" ry="12" fill="#86efac" opacity="0.9" transform="rotate(-25 38 135)" />
              <path d="M48 164 Q57 149 53 132" stroke="#22c55e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <ellipse cx="57" cy="135" rx="8" ry="12" fill="#4ade80" opacity="0.9" transform="rotate(25 57 135)" />
              {/* Floating leaves */}
              <ellipse cx="22" cy="88" rx="9" ry="15" fill="rgba(134,239,172,0.5)" transform="rotate(-30 22 88)" />
              <ellipse cx="138" cy="80" rx="8" ry="13" fill="rgba(74,222,128,0.4)" transform="rotate(20 138 80)" />
              <circle cx="25" cy="50" r="4" fill="rgba(187,247,208,0.6)" />
              <circle cx="140" cy="140" r="5" fill="rgba(167,243,208,0.5)" />
            </svg>

            <div>
              <p className="text-white/90 text-sm font-medium leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                "Decoramos tu mundo con plantas únicas y llenas de personalidad."
              </p>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="flex flex-col gap-2">
            <button
              onClick={openLogin}
              className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${isLogin ? "bg-white text-emerald-700" : "bg-white/15 text-white hover:bg-white/25"}`}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={openRegister}
              className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${!isLogin ? "bg-white text-emerald-700" : "bg-white/15 text-white hover:bg-white/25"}`}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Registro
            </button>
          </div>
        </div>

        {/* RIGHT form panel */}
        <div className="flex-1 relative">
          {/* Close button */}
          <button
            onClick={closeAuth}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-200 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Mobile tab switcher */}
          <div className="md:hidden flex border-b border-stone-100">
            <button
              onClick={openLogin}
              className={`flex-1 py-3.5 text-sm font-bold transition-colors ${isLogin ? "text-emerald-600 border-b-2 border-emerald-500" : "text-stone-400 hover:text-stone-600"}`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={openRegister}
              className={`flex-1 py-3.5 text-sm font-bold transition-colors ${!isLogin ? "text-emerald-600 border-b-2 border-emerald-500" : "text-stone-400 hover:text-stone-600"}`}
            >
              Registro
            </button>
          </div>

          {isLogin
            ? <LoginForm onSwitch={openRegister} />
            : <RegisterForm onSwitch={openLogin} />
          }
        </div>
      </div>
    </div>
  );
}
