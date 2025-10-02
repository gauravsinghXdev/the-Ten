import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/TenHome.png')" }}
    >
      <Navbar />
      <div className="relative z-10 text-center px-4 md:px-6 lg:px-40">
        <div className="flex justify-center mb-4">
          <img src="/tenLogo.jpg" alt="Ten Logo" className="h-20 md:h-40 w-auto" />
        </div>

        {/* Mobile smaller text & padding */}
        <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl text-white drop-shadow-md">
          Explore the realm of Indian heritage fused within a pet friendly ambiance, amidst hospitality brimming with love, warmth and compassion.
        </h1>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0" />
      <div className="absolute inset-0 bg-black/30 z-0" />
    </section>
  );
}
