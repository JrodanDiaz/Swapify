"use server";

import { AuthResponse } from "../_lib/_types/types";
import { loginBodySchema } from "../_lib/_types/schemas";
import {login} from "../_lib/_database/queries"
import { User } from "../_lib/_types/types";
import setCookie from "./utl/cookies";


async function loginServerAction(state: any, formData: FormData): Promise<AuthResponse> 
{

    const registerBody = loginBodySchema.safeParse({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      });


    if (!registerBody.success) {
        console.log("invalid form input");
        return { success: false, message: "Invalid form input", user: undefined };
      }

    const User = await login(registerBody.data.username, registerBody.data.password)

    if (!User.success || User.user === undefined){
        return { success: false, message: "user does not exist", user: undefined };
    }

    setCookie(User.user.id);
    return { success: true, message: "working", user: User.user };
}



export default loginServerAction