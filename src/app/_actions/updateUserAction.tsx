"use server";

import { ServerResponse } from "../_lib/_types/types";
import { updateUser } from "../_lib/_database/queries";
import { registerBodySchema } from "../_lib/_types/schemas";


async function updateUserAction(
    state: any,
    formData: FormData
): Promise<number | ServerResponse> 

{

    const userBody = registerBodySchema.safeParse({
        email: formData.get("email") as string,
        username: formData.get("username") as string,
        location: formData.get("location") as string,
        password: formData.get("password") as string,
        });

    if (!userBody.success) {
        return {success: false, message: "Invalid from Input"}
    }

    await updateUser(userBody.data, state)
    return {success: true, message: "Google where you at????"}

}

export default updateUserAction