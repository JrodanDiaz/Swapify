import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/landingPage/Hero";
import ShoppingCategories from "./components/landingPage/ShoppingCategories";
import Slider from "./components/landingPage/Slider";

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
