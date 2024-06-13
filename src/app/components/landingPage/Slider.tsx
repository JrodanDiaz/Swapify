import {useContext} from 'react'
import {Context} from "../../page"


const Slider = () => {

    const [darkMode, setDarkMode] = useContext<boolean>(Context)

    return (
        <div className="pt-10">

            <div className="relative flex flex-row overflow-hidden">

                <div className={`absolute left-0 h-full min-w-[300px] z-30 transition-colors duration-500 ease-in-out ${darkMode ? "bg-landing-fade-left-dark" : "bg-landing-fade-left"}`}>

                </div>

                <div className={`absolute right-0 h-full min-w-[300px] z-30 transition-colors duration-500 ease-in-out ${darkMode ? "bg-landing-fade-right-dark" : "bg-landing-fade-right"}`}>

                </div>

                <div className={`whitespace-nowrap flex gap-2 min-w-full min-h-10 justify-around items-center text-center animate-slide border border-t-1 border-l-0 border-r-0 border-b-1 border-black ${darkMode ? "text-white" : null}`}>
                    <p>Swap Shoes</p>
                    <p>Swap Pants</p>
                    <p>Swap Shirts</p>
                    <p>Swap Glasses</p>
                    <p>Swap Shoes</p>
                    <p>Swap Pants</p>
                    <p>Swap Shirts</p>
                    <p>Swap Glasses</p>
                </div>

                <div className={`whitespace-nowrap flex min-w-full min-h-10 justify-around items-center text-center animate-slide border border-t-1 border-l-0 border-r-0 border-b-1 border-black ${darkMode ? "text-white" : null}`}>
                    <p>Swap Shoes</p>
                    <p>Swap Pants</p>
                    <p>Swap Shirts</p>
                    <p>Swap Glasses</p>
                    <p>Swap Shoes</p>
                    <p>Swap Pants</p>
                    <p>Swap Shirts</p>
                    <p>Swap Glasses</p>
                </div>
            </div>
        </div>
    )
}

export default Slider