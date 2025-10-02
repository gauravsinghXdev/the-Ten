import { merienda } from "../layout";

export default function Ambiance() {
  return (
    <section className="w-full bg-white text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2
          className={`merienda-heading text-3xl md:text-4xl font-bold text-black`}
        >
          Ambiance that Feels Like Home
        </h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-black/80">
          Step into a space where the essence of Indian heritage meets a cozy, pet-friendly atmosphere...
        </p>
      </div>
    </section>
  );
}
