"use server";

import { ServerResponse } from "../_lib/_types/types";
import { updateUser, userAlreadyExist } from "../_lib/_database/queries";
import { userBodySchema } from "../_lib/_types/schemas";

async function updateUserAction(state: any, formData: FormData): Promise<ServerResponse> 
{
  const userBody = userBodySchema.safeParse({
    id: formData.get("id") as string, 
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    location: formData.get("location") as string,
    password: formData.get("password") as string,
  });

  if (!userBody.success) {
    return { success: false, message: "Invalid from Input" };
  }

  const {success, userExists} = await userAlreadyExist(userBody.data.username, userBody.data.email, userBody.data.id);
  if(!success) return { success: false, message: "Internal Server Error" }

  if (userExists) {
    return { success: false, message: "Username or Email Already Taken" };
  }

  const updateUserResult = await updateUser(userBody.data, userBody.data.id);
  if(!updateUserResult.success) return { success: false, message: "Internal Server Error" }
  
  return { success: true, message: "Google where you at????" };
}

export default updateUserAction;
