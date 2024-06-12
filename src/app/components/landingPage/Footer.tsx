import {useContext} from 'react'
import {Context} from "../../page"

export default function Footer() {

    const [darkMode, setDarkMode] = useContext<boolean>(Context)

    return (
        <div className={`flex relative items-center h-[300px] min-h-[300px] w-full border-y border-1 ${darkMode ? "border-bone-white" : "border-black"}`}>

            <div className={`flex justify-center items-center relative min-h-[100%] w-full max-w-[30%] border-r border-1 ${darkMode ? "border-bone-white" : "border-black"}`}>
                LOGO HERE
            </div>

            <div className="flex flex-row h-full w-full">
                <div className="flex justify-center h-full w-full">
                    <ul className="flex flex-col gap-5 justify-center items-center">
                        <li className={`font-bold text-xl ${darkMode ? "text-bone-white" : null}`}>Swapify</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>Contact Us</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>About Us</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>GitHub Page</li>
                    </ul>
                </div>
                <div className={`flex justify-center h-full w-full border-x border-1 ${darkMode ? "border-bone-white" : "border-black"}`}>
                    <ul className="flex flex-col gap-5 justify-center items-center">
                        <li className={`font-bold text-xl ${darkMode ? "text-bone-white" : null}`}>Ishan</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>Portfolio</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>Linkedin</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>GitHub Page</li>
                    </ul>
                </div>
                <div className="flex justify-center h-full w-full">
                    <ul className="flex flex-col gap-5 justify-center items-center">
                        <li className={`font-bold text-xl ${darkMode ? "text-bone-white" : null}`}>Jordan</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>Portfolio</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>Linkedin</li>
                        <li className={`${darkMode ? "text-bone-white": null}`}>GitHub Page</li>
                    </ul>
                </div>
            </div>


        </div>

    )
}