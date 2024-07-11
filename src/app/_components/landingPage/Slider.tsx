import { UseDarkModeContext } from '../DarkModeContext'

const Slider = () => {

    const darkModeContext = UseDarkModeContext()
    const {darkMode, setDarkMode} = darkModeContext

    return (
        <div className="pt-10">
            <div className="relative inline-block whitespace-nowrap overflow-hidden w-full">

                <div className={`absolute left-0 h-full min-w-[80px] sm:min-w-[300px] z-30 transition-colors duration-500 ease-in-out ${darkMode ? "bg-landing-fade-left-dark" : "bg-landing-fade-left"}`}>

                </div>

                <div className={`absolute right-0 h-full min-w-[80px] sm:min-w-[300px] z-30 transition-colors duration-500 ease-in-out ${darkMode ? "bg-landing-fade-right-dark" : "bg-landing-fade-right"}`}>

                </div>

                <div className={`whitespace-nowrap inline-block min-w-full max-h-24 animate-slide border border-l-0 border-r-0 border-y-1 border-black text-center ${darkMode ? "text-white" : null}`}>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                </div>

                <div className={`whitespace-nowrap inline-block min-w-full max-h-24 animate-slide border border-l-0 border-r-0 border-y-1 border-black text-center ${darkMode ? "text-white" : null}`}>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                    <p className="whitespace-nowrap inline-block px-6 sm:px-20">Swap Shoes</p>
                </div>

            </div>
        </div>
    )
}

export default Slider