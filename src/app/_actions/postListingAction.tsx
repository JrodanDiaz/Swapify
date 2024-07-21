import {createPostTable, postListing} from "../_lib/_database/postQueries"
import { postBodySchema } from "../_lib/_types/schemas"
import { ServerResponse } from "../_lib/_types/types"

async function postAction(state: any, formData: FormData): Promise<ServerResponse> {

    const postBody = postBodySchema.safeParse({
        id: formData.get("id") as string,
        title: formData.get("title") as string,
        size: formData.get("size") as string,
        description: formData.get("description") as string,
        swap: formData.get("swap") as string, 
        condition: formData.get("condition") as string, 
        imageOne: formData.get("image-1") as string, 
        imageTwo: formData.get("image-2") as string, 
        imageThree: formData.get("image-3") as string, 

    })
try{
        if (!postBody.success) {
            return {success: false, message: "invalid form data"}
        }

        const res = await createPostTable()
        if (!res.success) {
            return res
        }
        
        const post = await postListing(postBody.data)

        if (!post.success) {
            return {success: false, message: "postAction faild"}
        }
        console.log(postBody.data);
        
        return {success: true, message: "postAction success"}

    }
    catch(error) {
        console.log(error)
        return {success: false, message: "postAction faild"}
    }

}

export default postAction