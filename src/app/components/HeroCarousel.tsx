import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1440&q=85",
    alt: "Tres maceteros de cerámica con forma de animales y plantas verdes",
    tag: "Colección Signature",
    tagColor: "bg-emerald-500",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1750737771009-09f43a749b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1440&q=85",
    alt: "Dos maceteros artísticos tomados de la mano con plantas vibrantes",
    tag: "Diseños Exclusivos",
    tagColor: "bg-violet-500",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1685606350130-2176a0ec7296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1440&q=85",
    alt: "Maceta expresiva con cara y gafas con planta verde",
    tag: "Nuevas Llegadas",
    tagColor: "bg-amber-500",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[480px] md:h-[580px] lg:h-[640px] overflow-hidden bg-stone-900">

      {/* ── Slides ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── Content overlay ── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">

        {/* Category tag */}
        <div
          className="mb-5 transition-all duration-500"
          style={{ transform: `translateY(${isTransitioning ? "8px" : "0"})`, opacity: isTransitioning ? 0 : 1 }}
        >
          <span
            className={`inline-block ${SLIDES[current].tagColor} text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg`}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {SLIDES[current].tag}
          </span>
        </div>

        {/* Brand slogan */}
        <h1
          className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl transition-all duration-500"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            transform: `translateY(${isTransitioning ? "12px" : "0"})`,
            opacity: isTransitioning ? 0 : 1,
          }}
        >
          Transformamos espacios con{" "}
          <span className="text-emerald-400">vida</span>,{" "}
          <span className="text-green-300">color</span>{" "}
          y <span className="italic font-black text-white">personalidad</span>
        </h1>

        <p
          className="mt-4 text-base md:text-lg text-stone-200/90 max-w-xl font-medium drop-shadow transition-all duration-500 delay-75"
          style={{
            transform: `translateY(${isTransitioning ? "10px" : "0"})`,
            opacity: isTransitioning ? 0 : 1,
          }}
        >
          Descubre nuestra colección exclusiva de macetas únicas y plantas para darle vida a tu hogar.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/categorias/perros")}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base shadow-xl transition-all hover:-translate-y-1 hover:shadow-emerald-500/40 active:translate-y-0"
          style={{
            background: "linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        >
          Ver Novedades
        </button>
      </div>

      {/* ── Arrow controls ── */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm text-white border border-white/20 hover:bg-black/50 hover:border-white/40 transition-all group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm text-white border border-white/20 hover:bg-black/50 hover:border-white/40 transition-all group"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 h-2.5 bg-emerald-400 shadow-md shadow-emerald-400/50"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 z-20 text-white/60 text-xs font-medium tabular-nums">
        {current + 1} / {SLIDES.length}
      </div>
    </div>
  );
}
