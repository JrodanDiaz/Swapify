"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar"
import Hero from "./components/landingPage/Hero"
import ShoppingCategories from "./components/landingPage/ShoppingCategories";
import Slider from "./components/landingPage/Slider";
import Footer from "./components/landingPage/Footer";
import React, {useState} from "react"

export const Context = React.createContext(false)

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <Context.Provider value={[darkMode, setDarkMode]}>
      <div className={`animate-fadeIn ${darkMode ? 'bg-landing-gradient-dark-2' : 'bg-landing-gradient-test'}`}>
          <Navbar/>
          <Hero/>
          <Slider/>
          <ShoppingCategories/>
          <Footer/>
      </div>
    </Context.Provider>
  );
}


