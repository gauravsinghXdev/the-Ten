import HeroSection from "./components/HeroSection";
import Ambiance from "./components/Ambiance";
import ScrollGallery from "./components/ScrollGallery";
import FoodCuisine from "./components/FoodCuisine";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ambiance />
      <ScrollGallery />
      <FoodCuisine />
      <Footer />
    </>
  );
}
