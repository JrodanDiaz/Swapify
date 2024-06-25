"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex flex-row w-full items-center p-4 border border-black border-b-1 fixed z-10 bg-transparent  bg-opacity-50 backdrop-blur-sm ">
      <div className="">
        <h1
          className={`text-3xl text-bold font-bold ${
            darkMode ? "black" : "text-main-pink"
          }`}
        >
          Swapify
        </h1>
      </div>

      <div className="w-[200px] min-w-[10px] flex-shrink-1"></div>

      <div className="min-h-full w-full relative">
        <Image
          className="absolute left-2 top-2"
          src="/search.svg"
          height="20"
          width="20"
          alt="exit"
        ></Image>
        <input
          placeholder="Search"
          className="min-h-[35px] w-full max-w-[500px] min-w-[300px] text-center rounded-xl focus:outline-none border border-black border-1"
        ></input>
      </div>

      <div className="flex flex-row-reverse w-full gap-5 items-center justify-center">
        <Image
          src="/shopping-cart.svg"
          height="300"
          width="30"
          alt="exit"
        ></Image>
        <button
          onClick={toggleDarkMode}
          className="text-white bg-main-black min-h-full w-full max-w-[125px] border border-black border-1"
        >
          Dark Mode
        </button>
        <Link href="/account">Account</Link>
        <Link href="/register">Register</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
