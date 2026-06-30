import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Home, Send } from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-emerald-300" />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Escríbenos
            </span>
            <span className="h-px w-10 bg-emerald-300" />
          </div>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-stone-900 uppercase leading-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Contactos
          </h1>
          <p className="mt-4 text-stone-500 text-lg max-w-lg mx-auto">
            Estamos listos para ayudarte. Cuéntanos en qué podemos servirte.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Contact Info ── */}
          <div className="flex flex-col gap-7">
            <h2
              className="text-2xl font-bold text-stone-900"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Ponte en Contacto
            </h2>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Mail,
                  label: "Correo Electrónico",
                  value: "fhrost@hotmail.com",
                  href: "mailto:fhrost@hotmail.com",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: Phone,
                  label: "Llamada o WhatsApp",
                  value: "+593 095 890 3940",
                  href: "tel:+5930958903940",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: MapPin,
                  label: "Ubicación de la Tienda",
                  value: "Quito, Ecuador",
                  href: null,
                  color: "text-stone-600",
                  bg: "bg-stone-50",
                },
              ].map(({ icon: Icon, label, value, href, color, bg }) => {
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow group">
                    <div className={`w-11 h-11 rounded-xl ${bg} ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      <p className={`text-sm font-bold ${color} group-hover:underline`}>{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href}>{content}</a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-5">
              <p className="text-sm font-bold text-stone-700 mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Redes Sociales
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white shadow-sm">
                    <Instagram className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs text-stone-400">Instagram</p>
                    <p className="text-sm font-semibold text-stone-800 group-hover:text-pink-600 transition-colors">@gabo_plants.ec</p>
                  </div>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                    <Facebook className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs text-stone-400">Facebook</p>
                    <p className="text-sm font-semibold text-stone-800 group-hover:text-blue-600 transition-colors">GABO PLANTS Oficial</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/5930958903940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs text-stone-400">WhatsApp</p>
                    <p className="text-sm font-semibold text-stone-800 group-hover:text-[#25D366] transition-colors">Chat directo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Map + Form ── */}
          <div className="flex flex-col gap-6">

            {/* Map placeholder */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-stone-200 border border-stone-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <iframe
                title="Mapa Quito Ecuador"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127706.08399887782!2d-78.57416534179688!3d-0.22985130000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1748000000000!5m2!1ses!2sec"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.85) brightness(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Location overlay pill */}
              <div className="absolute bottom-3 left-3">
                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-emerald-700 shadow">
                  <MapPin className="w-3 h-3" />
                  Quito, Ecuador
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-6">
              <h3
                className="text-lg font-bold text-stone-900 mb-5"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none transition-shadow"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200 active:translate-y-0"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    background: sent
                      ? "#059669"
                      : "linear-gradient(135deg, #4ade80 0%, #22c55e 55%, #16a34a 100%)",
                  }}
                >
                  {sent ? (
                    "¡Mensaje enviado! ✓"
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-emerald-300/60 active:translate-y-0"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              background: "linear-gradient(135deg, #4ade80 0%, #22c55e 55%, #16a34a 100%)",
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
