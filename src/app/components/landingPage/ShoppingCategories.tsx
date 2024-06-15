import Image from "next/image"
import {useContext} from 'react'
import {Context} from "../../page"

const ShoppingCategories = () => {

    const [darkMode, setDarkMode] = useContext<boolean>(Context)

    return (
        <div className="pb-10">

            <div className="pt-20">
                <h1 className={`text-3xl text-center font-bold transition-colors duration-300 ease-in-out ${darkMode ? "text-white" : null}`}>Swap Now</h1>
            </div>

            <div className="flex flex-col gap-10 pt-[5em]">

                <div className="flex flex-row w-full h-[500px] min-h-[500px] justify-center items-center gap-5">

                    <div className={`flex flex-col w-[35%] justify-center items-center gap-3 whitespace-nowrap`}>
                        <div className="relative w-full max-w-[350px] h-[450px] max-h-[450px]">
                            <Image className={`border border-1 ${darkMode ? "border-bone-white shadow-landing-dark" : "border-black shadow-landing"}`} src="/pants.jpg" alt="exit" layout="fill" objectFit="cover"/>
                        </div>
                        <p className={`text-lg font-bold transition-colors duration-500 ease-in-out z-10 ${darkMode ? "text-white" : null}`}>Popular Pants</p>
                    </div>

                    <div className="flex flex-col w-[35%] justify-center items-center gap-3 whitespace-nowrap">
                        <div className="relative w-full max-w-[350px] h-[450px] max-h-[450px]">
                            <Image className={`border border-1 ${darkMode ? "border-bone-white shadow-landing-dark" : "border-black shadow-landing"}`} src="/shirts.jpg" alt="exit" layout="fill" objectFit="cover"/>
                        </div>
                        <p className={`text-lg font-bold transition-colors duration-500 ease-in-out z-10 ${darkMode ? "text-white" : null}`}>Somewhat Decent Shirts</p>
                    </div>

                </div>

                <div className="flex flex-row w-full h-[500px] min-h-[500px] justify-center items-center gap-5">

                    <div className="flex flex-col w-[35%] justify-center items-center gap-3 whitespace-nowrap">
                        <div className="relative w-full max-w-[350px] h-[450px] max-h-[450px]">
                            <Image className={`border border-1 ${darkMode ? "border-bone-white shadow-landing-dark" : "border-black shadow-landing"}`} src="/sunglasses.jpg" alt="exit" layout="fill" objectFit="cover"/>
                        </div>
                        <p className={`text-lg font-bold transition-colors duration-500 ease-in-out z-10 ${darkMode ? "text-white" : null}`}>Alt Accessories</p>
                    </div>

                    <div className="flex flex-col w-[35%] justify-center items-center gap-3 whitespace-nowrap">
                        <div className="relative w-full max-w-[350px] h-[450px] max-h-[450px]">
                            <Image className={`border border-1 ${darkMode ? "border-bone-white shadow-landing-dark" : "border-black shadow-landing"}`} src="/shoes.jpg" alt="exit" layout="fill" objectFit="cover"/>
                        </div>
                        <p className={`text-lg font-bold transition-colors duration-500 ease-in-out z-10 ${darkMode ? "text-white" : null}`}>Sigma Shoes</p>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default ShoppingCategories