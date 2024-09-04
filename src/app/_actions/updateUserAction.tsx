"use server";

import { AuthResponse } from "../_lib/_types/types";
import { updateUser, userAlreadyExist } from "../_lib/_database/queries";
import { userBodySchema } from "../_lib/_types/schemas";

async function updateUserAction(state: any, formData: FormData): Promise<AuthResponse> 
{
  const userBody = userBodySchema.safeParse({
    id: formData.get("id") as string, 
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    location: formData.get("location") as string,
    password: formData.get("password") as string,
    pfp: formData.get("pfp") as string,
  });

  if (!userBody.success) {
    return { success: false, message: "Invalid from Input", user: undefined };
  }

  const {success, userExists} = await userAlreadyExist(userBody.data.username, userBody.data.email, userBody.data.id);
  if(!success) return { success: false, message: "Internal Server Error", user: undefined }

  if (userExists) {
    return { success: false, message: "Username or Email Already Taken", user: undefined };
  }

  const updateUserResult = await updateUser(userBody.data);
  if(!updateUserResult.success) return { success: false, message: "Internal Server Error", user: undefined }
  
  return { success: true, message: "Google where you at????", user: userBody.data };
}

export default updateUserAction;
