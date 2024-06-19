"use client"

import Image from "next/image"
import {useContext} from 'react'
import { UseDarkModeContext } from "./DarkModeContext"

const Navbar = () => {

    const darkModeContext = UseDarkModeContext()
    const {darkMode, setDarkMode} = darkModeContext

    const toggleDarkMode = () => {
      setDarkMode(!darkMode)
    }
    
    return (
        
        <nav className="flex flex-row w-full gap-5 items-center justify-between p-4 border border-black border-b-1 fixed z-50 bg-transparent bg-opacity-50 backdrop-blur-sm h-[70px]">

            <div className="flex flex-row gap-8 w-full">
                <h1 className={`text-3xl font-bold transition-colors duration-500 ease-in-out ${darkMode ? 'text-white' : 'text-main-pink'}`}>Swapify</h1>
                <div className="hidden sm:block relative w-full">
                    <Image className="absolute left-2 top-2" src="/search.svg" height="20" width="20" alt="exit"></Image>
                    <input placeholder="Search" className="md:max-w-[500px] min-h-[35px] w-full min-w-[300px] max-w-[300px] text-center rounded-xl focus:outline-none border border-black border-1 bg-bone-white"></input>
                </div>
            </div>

            {darkMode ? (
                <div className="flex flex-row gap-6 pr-4">
                    <Image className="sm:hidden" src="/search-dark.svg" height="24" width="24" alt="exit"></Image>
                    <Image className="block md:hidden" src="/menu-dark.svg" height="24" width="24" alt="exit"></Image>
                    <Image className="hidden md:block cursor-pointer" src="/shopping-cart-dark.svg" height="300" width="30" alt="shopping cart"></Image>
                    <Image className="hidden md:block cursor-pointer" src="/shopping-bag-dark.svg" height="300" width="30" alt="shopping bag"></Image>
                    <Image className="hidden md:block cursor-pointer" src="/user-dark.svg" height="300" width="30" alt="user"></Image>
                    <Image onClick={toggleDarkMode} className="hidden md:block cursor-pointer" src="/moon.svg" height="300" width="30" alt="user"></Image>
                </div>
            ) : (
                <div className="flex flex-row gap-6 pr-4">
                    <Image className="sm:hidden" src="/search.svg" height="24" width="24" alt="exit"></Image>
                    <Image className="block md:hidden" src="/menu.svg" height="24" width="24" alt="exit"></Image>
                    <Image className="hidden md:block cursor-pointer" src="/shopping-cart.svg" height="300" width="30" alt="shopping cart"></Image>
                    <Image className="hidden md:block cursor-pointer" src="/shopping-bag.svg" height="300" width="30" alt="shopping bag"></Image>
                    <Image className="hidden md:block cursor-pointer" src="/user.svg" height="300" width="30" alt="user"></Image>
                    <Image onClick={toggleDarkMode} className="hidden md:block cursor-pointer" src="/sun.svg" height="300" width="30" alt="user"></Image>
                </div>
            )}
           
        </nav>
    )
}
export default Navbar