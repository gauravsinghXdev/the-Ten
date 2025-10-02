import HeroSection from "./components/HeroSection";
import Ambiance from "./components/Ambiance";
import ScrollGallery from "./components/ScrollGallery";
import FoodCuisine from "./components/FoodCuisine";
import Footer from "./components/Footer";
import CustomerReviews from "./components/CustomerReview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ambiance />
      <ScrollGallery />
      <FoodCuisine />
      <CustomerReviews />
      <Footer />
    </>
  );
}
