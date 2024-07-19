import {createPostTable} from "../_lib/_database/postQueries"
import { postBodySchema } from "../_lib/_types/schemas"

async function postAction(state: any, formData: FormData) {

    const postBody = postBodySchema.safeParse({
        id: formData.get("id") as string,
        title: formData.get("title") as string,
        size: formData.get("size") as string,
        description: formData.get("description") as string,
        swap: formData.get("swap") as string, 
        condition: formData.get("condition") as string, 
        imageOne: formData.get("imageOne") as string, 
        imageTwo: formData.get("imageTwo") as string, 
        imageThree: formData.get("imageThree") as string, 

    })

}