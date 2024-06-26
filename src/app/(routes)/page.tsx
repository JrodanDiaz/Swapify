import Navbar from "../_components/common/Navbar";
import Hero from "../_components/landingPage/Hero";
import ShoppingCategories from "../_components/landingPage/ShoppingCategories";
import Slider from "../_components/landingPage/Slider";

export default function Home() {
  return (
    <div className="bg-landing-gradient-test">
      <Navbar />
      <Hero />

      <Slider />
      <ShoppingCategories />
    </div>
  );
}
