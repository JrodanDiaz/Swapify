import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar"
import Hero from "./components/landingPage/Hero"
import ShoppingCategories from "./components/landingPage/ShoppingCategories";
import Slider from "./components/landingPage/Slider";

export default function Home() {
  return (
    <div className="bg-landing-gradient-test">

      <div className="">
        {/* <button className="absolute right-0 text-white bg-main-black min-h-[40px] w-full max-w-[125px] border border-black border-1">Dark Mode</button> */}
        <Navbar/>
        <Hero/>
      </div>
      
      <div className="">
        <Slider/>
        <ShoppingCategories/>
      </div>

    </div>
  );
}
