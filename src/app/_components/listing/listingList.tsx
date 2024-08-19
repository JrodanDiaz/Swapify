'use server'
import { getListingsForUser } from "@/app/_lib/_database/postQueries"
import { cookies } from "next/headers"
import Image from "next/image"

export default async function ListingList() {

    const cookieStorage = cookies()
    const id = cookieStorage.get("userID")
    if (!id) {
        return 
    }
    const listings = await getListingsForUser(id.value)

    return(
        <>

        {listings?.map((object, idx ) => {
            return (
                <div>
                    <Image src={object.images[0]} alt="imageOne" width={250} height={250}/>
                    { object.images.length > 1 && <Image src={object.images[1]} alt="imageOne" width={250} height={250}/> }
                    { object.images.length > 2 && <Image src={object.images[2]} alt="imageOne" width={250} height={250}/> }
                    <p>{object.size}</p>
                </div>
            )
        })}
        

        </>
    )
}