export function ProductGrid() {
  const categories = [
    {
      id: 1,
      name: "Macetas de Perros",
      image: "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzaGFwZSUyMHBsYW50ZXIlMjBwb3R8ZW58MXx8fHwxNzc5MjI1MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Macetas de Gatos",
      image: "https://images.unsplash.com/photo-1623006715986-a37ce6be31ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBzaGFwZSUyMHBsYW50ZXIlMjBwb3R8ZW58MXx8fHwxNzc5MjI1MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Plantas",
      image: "https://images.unsplash.com/photo-1550207477-85f418dc3448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHMlMjBpbmRvb3J8ZW58MXx8fHwxNzc5MjI1MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Macetas de Navidad",
      image: "https://images.unsplash.com/photo-1764666429996-6f0e212df59e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBnbm9tZSUyMGRlY29yYXRpb258ZW58MXx8fHwxNzc5MjI1MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      name: "Diseños",
      image: "https://images.unsplash.com/photo-1589635824172-22e0fddbfdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5vc2F1ciUyMHBsYW50JTIwcG90fGVufDF8fHx8MTc3OTIyNTE3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      name: "Otros",
      image: "https://images.unsplash.com/photo-1535882832-ac75c142f79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwbmF0dXJlJTIwcGxhbnR8ZW58MXx8fHwxNzc5MjI1MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-bold text-stone-800">
          Nuestros Productos <span className="text-emerald-500">🌱</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="group relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-100"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-stone-200 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content Label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 inline-block">
                <h3 className="text-white font-bold text-lg tracking-wide drop-shadow-sm">
                  {category.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
