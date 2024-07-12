"use client";

import Navbar from "@/app/_components/common/Navbar";
import UserCart from "@/app/_components/shoppingCart/UserCart";
import { UseDarkModeContext } from "@/app/_components/DarkModeContext";

export default function ShoppingCart() {
  const DarkModeContext = UseDarkModeContext();
  // if (userContext.id === "-1") {
  //   const fetchUser = async () => {
  //     const user = await fetch("/api/getuser");
  //     setUser(user);
  //   };
  // }
  const { darkMode, setDarkMode } = DarkModeContext;

  return (
    <div
      className={`${
        darkMode ? "bg-landing-gradient-dark-2" : "bg-landing-gradient-test"
      }`}
    >
      <Navbar />
      <UserCart />
    </div>
  );
}
