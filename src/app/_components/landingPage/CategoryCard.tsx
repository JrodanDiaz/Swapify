
import Image from "next/image"
import {useContext} from 'react'
import { DarkModeContext, UseDarkModeContext } from "../DarkModeContext"

export default function CategoryCard(props : {pic : string, title : string}) {

    const darkModeContext = UseDarkModeContext()
    const {darkMode, setDarkMode} = darkModeContext

    return (
        // <div className={`py-8 flex flex-col w-full justify-center items-center gap-3 whitespace-nowrap sm:pt-0 sm:w-[35%] sm:min-w-[300px]`}>
        //     <div className="relative w-full h-[400px] sm:max-w-[350px] sm:h-[450px] sm:max-h-[450px]">
        //         <Image className={`border border-1 ${darkMode ? "border-bone-white shadow-landing-dark" : "border-black shadow-landing"}`} src={props.pic} alt="exit" layout="fill" objectFit="cover" objectPosition="50% 40%"/>
        //     </div>
        //     <p className={`text-lg font-bold transition-colors duration-500 ease-in-out z-10 ${darkMode ? "text-white" : null}`}>{props.title}</p>
        // </div>

        <div className="w-full h-[300px] min-h-[300px] whitespace-nowrap text-center sm:w-1/3 sm:min-h-[450px] sm:min-w-[275px]">
            <div className="relative h-full w-full">
                <Image className={`border border-1 ${darkMode ? "border-bone-white shadow-landing-dark" : "border-black shadow-landing"}`} src={props.pic} alt="exit" layout="fill" objectFit="cover" objectPosition="50% 40%"/>
            </div>
            <p className={`relative py-4 text-lg font-bold transition-colors duration-500 ease-in-out z-10 ${darkMode ? "text-white" : null}`}>{props.title}</p>
        </div>
    )
}