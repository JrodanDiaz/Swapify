
const Slider = () => {
    return (
        <div className="pt-10">

            <div className="relative flex flex-row overflow-hidden">

                <div className="bg-landing-fade-left absolute left-0 h-full min-w-[300px] z-50">

                </div>

                <div className="bg-landing-fade-right absolute right-0 h-full min-w-[300px] z-50">

                </div>

                <div className="whitespace-nowrap flex min-w-full min-h-10 justify-around items-center text-center animate-slide border border-t-1 border-l-0 border-r-0 border-b-1 border-black">
                    <p>Swap Shoes</p>
                    <p>Swap Pants</p>
                    <p>Swap Shirts</p>
                    <p>Swap Glasses</p>
                    <p>Swap Shoes</p>
                    <p>Swap Pants</p>
                    <p>Swap Shirts</p>
                    <p>Swap Glasses</p>
                </div>

                <div className="whitespace-nowrap flex min-w-full min-h-10 justify-around items-center text-center animate-slide border border-t-1 border-b-1 border-l-0 border-r-0 border-black">
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