'use client'

import Navbar from "../components/Navbar"
import UserCart from "../components/shoppingCart/UserCart"
import { UseDarkModeContext } from "../components/DarkModeContext"

export default function ShoppingCart() {

    const DarkModeContext = UseDarkModeContext()
    const {darkMode, setDarkMode} = DarkModeContext

    return(
        <div className={`${darkMode ? 'bg-landing-gradient-dark-2' : 'bg-landing-gradient-test'}`}>
            <Navbar/>
            <UserCart/>
        </div>
    )
} 