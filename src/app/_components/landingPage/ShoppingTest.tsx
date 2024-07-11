import Image from "next/image"
import CategoryCard from "./CategoryCard"

export default function ShoppingTest() {
    return (
        <div className="pb-24">
            <p className="text-xl font-bold text-center py-12">Swap Now</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-24 justify-center items-center">
                <CategoryCard pic="/pants.jpg" title="Popular Pants"/>
                <CategoryCard pic="/shirts.jpg" title="Popular Pants"/>
                <CategoryCard pic="/sunglasses.jpg" title="Popular Pants"/>
                <CategoryCard pic="/shoes.jpg" title="Popular Pants"/>
            </div> 
        </div>
    )
}