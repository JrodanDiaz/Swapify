import Image from "next/image";

const Hero = () => {
    return(
        <div className="flex flex-row pt-[120px]">

            <div className="flex flex-col justify-center items-center flex-1 gap-8">

                <div>
                    <h1 className="text-3xl text-center">Barter Smarter</h1>
                </div>

                <div className="max-w-[600px] text-center leading-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui consequatur suscipit dolorem! Molestiae explicabo et architecto excepturi, veritatis non nihil voluptas animi! Recusandae reiciendis iure sunt magni ex sed.</p>
                </div>
                
                <button className="w-full min-h-[75px] max-w-[300px] p-[0.75em] bg-main-pink border border-1 border-black">
                    <p className="text-white font-bold">Shop Now</p>
                </button>
            </div>

            <div className="flex flex-1 justify-center items-center">
                <div className="relative  w-full max-w-[500px] min-h-full aspect-w-16 aspect-h-12">
                    <Image src="/hero.jpg" alt="exit" layout="fill" objectFit="cover"/>
                </div>
            </div>
        </div>
    )
}

export default Hero