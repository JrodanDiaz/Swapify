"use client";
import Navbar from "../_components/common/Navbar";
import Hero from "../_components/landingPage/Hero";
import ShoppingTest from "../_components/landingPage/ShoppingTest";
import Slider from "../_components/landingPage/Slider";
import Footer from "../_components/landingPage/Footer";
import { UseDarkModeContext } from "../_components/DarkModeContext";
import { useUserDispatchContext } from "@/app/_lib/_context/UserContext";

export default function Home() {
  const darkModeContext = UseDarkModeContext();
  const setUserContext = useUserDispatchContext();
  const { darkMode } = darkModeContext;

  return (
    <div
      className={`relative flex flex-col animate-fadeIn ${
        darkMode ? "bg-landing-gradient-dark-2" : "bg-landing-gradient-test"
      }`}
    >
      <Navbar />
      <Hero />
      <Slider />
      <ShoppingTest />
      <Footer />
    </div>
  );
}
