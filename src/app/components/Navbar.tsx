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
        
        <nav className="flex flex-row w-full items-center p-4 border border-black border-b-1 fixed z-50 bg-transparent bg-opacity-50 backdrop-blur-sm h-[70px]">

            <div className="">
                <h1 className={`text-3xl font-bold transition-colors duration-500 ease-in-out ${darkMode ? 'text-white' : 'text-main-pink'}`}>Swapify</h1>
            </div>

            <div className="w-[200px] min-w-[10px] flex-shrink-1">

            </div>

            <div className="min-h-full w-full relative flex justify-center"> 
                <Image className="absolute left-2 top-2" src="/search.svg" height="20" width="20" alt="exit"></Image>
                <input placeholder="Search" className="min-h-[35px] w-full min-w-[300px] text-center rounded-xl focus:outline-none border border-black border-1 bg-bone-white"></input>
            </div>
            
            {darkMode ? (
                    <div className="flex flex-row-reverse w-full gap-10 items-center justify-center">
                        <Image className="cursor-pointer" src="/shopping-cart-dark.svg" height="300" width="30" alt="shopping cart"></Image>
                        <Image className="cursor-pointer" src="/shopping-bag-dark.svg" height="300" width="30" alt="shopping bag"></Image>
                        <Image className="cursor-pointer" src="/user-dark.svg" height="300" width="30" alt="user"></Image>
                        <Image onClick={toggleDarkMode} className="cursor-pointer" src="/moon.svg" height="300" width="30" alt="user"></Image>
                        {/* <button onClick={toggleDarkMode} className={`min-h-full w-full max-w-[125px] border border-black border-[2px] font-bold px-2 py-1 transition-colors duration-500 ease-in-out ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>Light Mode</button> */}
                    </div>
                ) : (
                    <div className="flex flex-row-reverse w-full gap-10 items-center justify-center">
                        <Image className="cursor-pointer"src="/shopping-cart.svg" height="300" width="30" alt="shopping cart"></Image>
                        <Image className="cursor-pointer" src="/shopping-bag.svg" height="300" width="30" alt="shopping bag"></Image>
                        <Image className="cursor-pointer" src="/user.svg" height="300" width="30" alt="user"></Image>
                        <Image onClick={toggleDarkMode} className="cursor-pointer" src="/sun.svg" height="300" width="30" alt="user"></Image>
                        {/* <button onClick={toggleDarkMode} className={`min-h-full w-full max-w-[125px] border border-black border-[2px] font-bold px-2 py-1 transition-colors duration-500 ease-in-out ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>Dark Mode</button> */}
                    </div>
                )}
        </nav>
    )
}

export default Navbar