import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar"
import Hero from "./components/landingPage/Hero"
import ShoppingCategories from "./components/landingPage/ShoppingCategories";
import Slider from "./components/landingPage/Slider";

export default function Home() {
  return (
    <div>

      <div className="bg-landing-gradient min-h-[100vh]">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      
      <div className="bg-landing-gradient-2">
        <Slider></Slider>
        <ShoppingCategories></ShoppingCategories>
      </div>

    </div>
  );
}
