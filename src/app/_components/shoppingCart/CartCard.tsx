import Image from "next/image"

export default function CartCard() {
    return (
        <div className="relative w-full h-[300px] max-h-[300px] sm:w-1/3">
            <Image className={`border border-1`} src="/pants.jpg" alt="exit" layout="fill" objectFit="cover"/>
        </div>
    )
}