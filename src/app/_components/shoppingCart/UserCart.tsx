import CartCard from "./CartCard"
import { UseDarkModeContext } from "../DarkModeContext"

export default function UserCart() {
    
    const {darkMode, setDarkMode} = UseDarkModeContext()
    return (
        <div className="flex flex-col w-full pt-[70px] text-center">
            <p className={`text-3xl font-bold p-8 ${darkMode ? "text-white" : null}`}>Shopping Cart</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 w-full items-center justify-center">
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
            </div>
        </div>
        
    )
}