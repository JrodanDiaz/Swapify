"use server";

import { AuthResponse } from "../_lib/_types/types";
import {getUserFromID} from "../_lib/_database/queries"
import { cookies } from "next/headers";

async function getUserFromCookie(): Promise<AuthResponse> {
    try 
    {
        const cookie = cookies().get("userID")

        if (!cookie) return { success: false, message: "cookie does not exist", user: undefined }
    
        const userResult = await getUserFromID(cookie.value)

        return {success: true, message: "all works", user: userResult.user}
    } 
    catch(err) 
    {
        console.log(err);
        return { success: false, message: "Internal Server Error", user: undefined }
    }
}

export default getUserFromCookie