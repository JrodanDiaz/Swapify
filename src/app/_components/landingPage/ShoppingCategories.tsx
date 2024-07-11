import Image from "next/image"
import {useContext} from 'react'
import {Context} from "../../page"
import CategoryCard from "./CategoryCard"

const ShoppingCategories = () => {

    const [darkMode, setDarkMode] = useContext<boolean>(Context)

    return (
        <div className="pb-10 overflow-hidden">


            <div className="flex flex-col gap-8 sm:gap-20 sm:block">

                <div className="pt-16 sm:pt-20">
                    <h1 className={`text-3xl text-center font-bold transition-colors duration-300 ease-in-out ${darkMode ? "text-white" : null}`}>Swap Now</h1>
                </div>

                <div className="flex flex-col gap-24 sm:gap-10 sm:pt-[5em]">

                    <div className="flex-col gap-24 sm:flex sm:flex-row w-full h-[200px] sm:h-[500px] sm:min-h-[500px] justify-center items-center sm:gap-5">
                        <CategoryCard pic="/pants.jpg" title="Popular Pants"/>
                        <CategoryCard pic="/shirts.jpg" title="Somewhat Decent Shirts"/>
                        <span className="sm:hidden">
                            <CategoryCard pic="/sunglasses.jpg" title="Alt Accessories"/>
                            <CategoryCard pic="/shoes.jpg" title="Sigma Shoes"/>
                        </span>
                    </div>

                    <div className="hidden sm:flex sm:flex-row w-full h-[500px] min-h-[500px] justify-center items-center gap-5">
                        <CategoryCard pic="/sunglasses.jpg" title="Alt Accessories"/>
                        <CategoryCard pic="/shoes.jpg" title="Sigma Shoes"/>
                    </div>

                </div>

            </div>

           
        </div>
    )
}

export default ShoppingCategories