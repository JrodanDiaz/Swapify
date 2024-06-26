import Image from "next/image"

const ShoppingCategories = () => {
    return (
        <div>

            <div className="pt-20">
                <h1 className="text-3xl text-center">Some Sort of Text Here</h1>
            </div>

            <div className="flex flex-col gap-10 pt-[5em]">

                <div className="flex flex-row w-full min-h-[500px] gap-10 justify-center align-center">

                    <div className="relative w-full max-w-[400px] aspect-w-10 asepct-h-8">
                        <Image src="/pants.jpg" alt="exit" layout="fill" objectFit="cover"/>
                    </div>

                    <div className="relative w-full max-w-[400px] aspect-w-10 asepct-h-8">
                        <Image src="/shirts.jpg" alt="exit" layout="fill" objectFit="cover"/>
                    </div>
                </div>

                <div className="flex flex-row w-full min-h-[500px] gap-10 justify-center align-center">

                    <div className="relative w-full max-w-[400px] aspect-w-10 asepct-h-8">
                        <Image src="/sunglasses.jpg" alt="exit" layout="fill" objectFit="cover"/>
                    </div>

                    <div className="relative w-full max-w-[400px] aspect-w-10 asepct-h-8">
                        <Image src="/shoes.jpg" alt="exit" layout="fill" objectFit="cover"/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShoppingCategories