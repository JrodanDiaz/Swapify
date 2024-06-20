"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar"
import Hero from "./components/landingPage/Hero"
import ShoppingCategories from "./components/landingPage/ShoppingCategories";
import ShoppingTest from "./components/landingPage/ShoppingTest";
import Slider from "./components/landingPage/Slider";
import Footer from "./components/landingPage/Footer";
import { UseDarkModeContext } from "./components/DarkModeContext";
import {useState} from "react"


export default function Home() {
  
  const darkModeContext = UseDarkModeContext()
  const {darkMode, setDarkMode} = darkModeContext

  return (
      <div className={`relative flex flex-col animate-fadeIn ${darkMode ? 'bg-landing-gradient-dark-2' : 'bg-landing-gradient-test'}`}>
          <Navbar/>
          <Hero/>
          <Slider/>
          <ShoppingTest/>
          <Footer/>
      </div>
  );
}