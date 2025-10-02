export default function FoodCuisine() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="merienda-heading text-4xl md:text-4xl text-center text-black mb-16">
          Food & Cuisine
        </h2>
        
        <div className="w-full flex justify-center items-center gap-4 md:gap-6 overflow-x-auto py-8">
          <div className="relative w-48 h-64 md:w-56 md:h-112 overflow-hidden shadow-lg rotate-3 group cursor-pointer">
            <img 
              src="/tenf1.png" 
              alt="Coffee" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-4">
              <span className="text-white font-bold text-lg">Coffee</span>
            </div>
          </div>
          
          <div className="relative w-48 h-64 md:w-56 md:h-112 overflow-hidden shadow-lg rotate-3 group cursor-pointer">
            <img 
              src="/tenf2.png" 
              alt="Curry" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-4">
              <span className="text-white font-bold text-lg">Curry</span>
            </div>
          </div>
          
          <div className="relative w-48 h-64 md:w-56 md:h-112 overflow-hidden shadow-lg rotate-3 group cursor-pointer">
            <img 
              src="/tenf3.png" 
              alt="Biryani" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-4">
              <span className="text-white font-bold text-lg">Snacks</span>
            </div>
          </div>
          
          <div className="relative w-48 h-64 md:w-56 md:h-112 overflow-hidden shadow-lg rotate-3 group cursor-pointer">
            <img 
              src="/tenf4.png" 
              alt="Dessert" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-4">
              <span className="text-white font-bold text-lg">Dessert</span>
            </div>
          </div>
          
          <div className="relative w-48 h-64 md:w-56 md:h-112 overflow-hidden shadow-lg rotate-3 group cursor-pointer">
            <img 
              src="/tenf5.png" 
              alt="Snacks" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-4">
              <span className="text-white font-bold text-lg">Biryani</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
