"use server";

import { AuthResponse } from "../_lib/_types/types";
import { loginBodySchema } from "../_lib/_types/schemas";
import {login} from "../_lib/_database/queries"
import setCookie from "./utils/cookies";


async function loginServerAction(state: any, formData: FormData): Promise<AuthResponse> 
{

    const loginBody = loginBodySchema.safeParse({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      });


    if (!loginBody.success) {
        console.log("invalid form input");
        return { success: false, message: "Invalid form input", user: undefined };
      }

    const User = await login(loginBody.data.username, loginBody.data.password)

    if (!User.success || User.user === undefined){
        console.log("loginAction || statement");
        
        return { success: false, message: "user does not exist loginACtion", user: undefined };
    }

    setCookie(User.user.id);
    console.log(`loginActionUser: ${User.user.username}`);
    
    return { success: true, message: "working", user: User.user };
}

export default loginServerAction