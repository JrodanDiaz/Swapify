"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UseDarkModeContext } from "../DarkModeContext";

const Navbar = () => {
  const darkModeContext = UseDarkModeContext();
  const { darkMode, setDarkMode } = darkModeContext;
  const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);

  const handleHamburgerClick = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed flex flex-col w-full z-50 border border-black border-b-1  bg-transparent bg-opacity-50 backdrop-blur-sm ">
      <div className={`flex flex-row w-full gap-5 items-center p-4 h-[70px]`}>
        <div className="flex flex-row gap-8 w-full">
          <h1
            className={`text-3xl font-bold transition-colors duration-500 ease-in-out ${
              darkMode ? "text-white" : "text-main-pink"
            }`}
          >
            <Link href="/">Swapify</Link>
          </h1>
          <div className="hidden sm:block relative w-full">
            <Image
              className="absolute left-2 top-2"
              src="/search.svg"
              height="20"
              width="20"
              alt="exit"
            ></Image>
            <input
              placeholder="Search"
              className="md:max-w-[500px] min-h-[35px] w-full min-w-[300px] max-w-[300px] text-center rounded-xl focus:outline-none border border-black border-1 bg-bone-white"
            ></input>
          </div>
        </div>

        {darkMode ? (
          <div className="flex flex-row gap-6 pr-4">
            <Image
              className="sm:hidden"
              src="/search-dark.svg"
              height="24"
              width="24"
              alt="exit"
            ></Image>
            <Link
              href="/admin"
              className="relative hidden md:block min-h-[25px] max-h-[25px] min-w-[25px] max-w-[25px]"
            >
              <Image
                className="cursor-pointer"
                src="/command_light.svg"
                layout="fill"
                alt="admin"
              />
            </Link>
            <Image
              className="block md:hidden"
              src="/menu-dark.svg"
              height="24"
              width="24"
              alt="exit"
            ></Image>
            <Link
              className="relative hidden md:block min-h-[25px] max-h-[25px] min-w-[25px] max-w-[25px]"
              href="/shoppingcart"
            >
              <Image
                className="cursor-pointer"
                src="/shopping-cart-dark.svg"
                layout="fill"
                alt="shopping cart"
              />
            </Link>
            <Image
              className="hidden md:block cursor-pointer"
              src="/shopping-bag-dark.svg"
              height="300"
              width="30"
              alt="shopping bag"
            ></Image>
            <Image
              className="hidden md:block cursor-pointer"
              src="/user-dark.svg"
              height="300"
              width="30"
              alt="user"
            ></Image>
            <Image
              onClick={toggleDarkMode}
              className="hidden md:block cursor-pointer"
              src="/moon.svg"
              height="300"
              width="30"
              alt="user"
            ></Image>
          </div>
        ) : (
          <div className="flex flex-row gap-6 pr-4">
            <Link
              href="/admin"
              className="relative hidden md:block min-h-[25px] max-h-[25px] min-w-[25px] max-w-[25px]"
            >
              <Image
                className="cursor-pointer"
                src="/command_dark.svg"
                layout="fill"
                alt="exit"
              />
            </Link>
            <Image
              className="sm:hidden"
              src="/search.svg"
              height="24"
              width="24"
              alt="exit"
            ></Image>
            <Image
              onClick={handleHamburgerClick}
              className="block md:hidden"
              src="/menu.svg"
              height="24"
              width="24"
              alt="exit"
            ></Image>
            <Link
              className="relative hidden md:block min-h-[25px] max-h-[25px] min-w-[25px] max-w-[25px]"
              href="/shoppingcart"
            >
              <Image
                className="cursor-pointer"
                src="/shopping-cart.svg"
                layout="fill"
                alt="shopping cart"
              />
            </Link>
            <Image
              className="hidden md:block cursor-pointer"
              src="/shopping-bag.svg"
              height="300"
              width="30"
              alt="shopping bag"
            ></Image>
            <Link
              href="/account"
              className="relative hidden md:block min-h-[25px] max-h-[25px] min-w-[25px] max-w-[25px]"
            >
              <Image
                className="hidden md:block cursor-pointer"
                src="/user.svg"
                layout="fill"
                alt="user"
              ></Image>
            </Link>
            <Image
              onClick={toggleDarkMode}
              className="hidden md:block cursor-pointer"
              src="/sun.svg"
              height="300"
              width="30"
              alt="user"
            ></Image>
          </div>
        )}
      </div>
      <div
        className={`relative flex w-full h-[70px] gap-8 justify-center md:hidden ${
          hamburgerClicked ? "block" : "hidden"
        }`}
      >
        <Image src="/user.svg" height={24} width={24} alt="user"></Image>
        <Image
          src="/shopping-cart.svg"
          height={24}
          width={24}
          alt="shopping-cart"
        ></Image>
        <Image src="/sun.svg" height={24} width={24} alt="sun"></Image>
        <Image
          src="/shopping-bag.svg"
          height={24}
          width={24}
          alt="shopping-bag"
        ></Image>
      </div>
    </nav>
  );
};
export default Navbar;
