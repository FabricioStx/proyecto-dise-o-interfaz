export function Hero() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-stone-200"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzaGFwZSUyMHBsYW50ZXIlMjBwb3R8ZW58MXx8fHwxNzc5MjI1MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md tracking-tight">
          Decoración con Vida <span className="inline-block hover:scale-110 transition-transform">🌱</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-100 max-w-2xl font-medium drop-shadow">
          Descubre nuestra colección de macetas únicas y plantas para darle un toque especial a tu hogar.
        </p>
        <button className="mt-4 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1">
          Ver Novedades
        </button>
      </div>
    </div>
  );
}
