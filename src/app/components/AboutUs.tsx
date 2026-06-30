import { Dog, Sprout, Heart } from "lucide-react";

export function AboutUs() {
  return (
    <section className="max-w-4xl mx-auto px-4 w-full text-center">
      <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-4 text-emerald-600">
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Sprout className="w-8 h-8" />
            </div>
            <Heart className="w-6 h-6 text-red-400 fill-red-400 animate-pulse" />
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Dog className="w-8 h-8" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
              Quiénes Somos
            </h2>
            <p className="text-lg md:text-xl text-stone-600 font-medium max-w-2xl mx-auto leading-relaxed">
              "Amamos las plantas y las mascotas. Hechas con cariño."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
