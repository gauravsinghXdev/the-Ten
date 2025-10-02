"use client";
import { useEffect, useState } from "react";

const IMAGES = ["/ten2.png", "/ten3.png", "/ten4.png"];

export default function ScrollGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Each image takes up one viewport of scroll
      const newIndex = Math.min(
        IMAGES.length - 1,
        Math.floor(scrollY / viewportHeight)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[300vh]">
      {/* Sticky heading container (spans only from half image 1 to half image 3) */}
      <div className="absolute top-[50vh] bottom-[50vh] w-full">
        <div className="sticky top-1/2 -translate-y-1/2 z-50 flex justify-center items-center">
          <h2 className="merienda-heading text-4xl md:text-4xl text-white drop-shadow-2xl px-8 py-4">
            Ambiance
          </h2>
        </div>
      </div>

      {/* Images stacked */}
      <div className="h-[100vh] w-full sticky top-0">
        <img
          src="/ten2.png"
          alt="img1"
          className="inset-0 w-full h-full object-cover object-[50%_65%]"
        />
      </div>
      <div className="h-[100vh] w-full sticky top-0">
        <img
          src="/ten3.png"
          alt="img2"
          className="inset-0 w-full h-full object-cover object-[50%_65%]"
        />
      </div>
      <div className="h-[100vh] w-full sticky top-0">
        <img
          src="/ten4.png"
          alt="img3"
          className="inset-0 w-full h-full object-cover object-[50%_65%]"
        />
      </div>
    </section>
  );
}
