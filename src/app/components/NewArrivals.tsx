import { ShoppingCart } from "lucide-react";

export function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Suculenta Mini",
      price: "$15.00",
      image: "https://images.unsplash.com/photo-1666112017109-f32c9a52b714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGN1dGUlMjBwbGFudHxlbnwxfHx8fDE3NzkyMjUxODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Planta de Interior",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1583764819324-faadb5e3acb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudCUyMG1vZGVybnxlbnwxfHx8fDE3NzkyMjUxODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Maceta Elegante",
      price: "$30.00",
      image: "https://images.unsplash.com/photo-1646564486121-20b5e32f3ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50JTIwaW4lMjBwb3R8ZW58MXx8fHwxNzc5MjI1MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Maceta Decorativa",
      price: "$22.00",
      image: "https://images.unsplash.com/photo-1764321517924-13eae1bc36d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwcGxhbnRlcnxlbnwxfHx8fDE3NzkyMjUxODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-stone-800">
          Novedades Destacadas
        </h2>
        <button className="text-emerald-600 font-medium hover:text-emerald-700 hover:underline">
          Ver todo
        </button>
      </div>

      <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 snap-x">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex-none w-[260px] sm:w-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 group snap-center"
          >
            <div className="relative aspect-square overflow-hidden bg-stone-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Quick Add Button Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <button className="bg-white/90 backdrop-blur text-stone-800 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-emerald-500 hover:text-white">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-5 flex flex-col gap-1">
              <h3 className="text-stone-800 font-semibold text-lg line-clamp-1">{product.name}</h3>
              <p className="text-emerald-600 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
