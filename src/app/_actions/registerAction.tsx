"use server";

import { registerBodySchema } from "../_lib/_types/schemas";
import { AuthResponse } from "../_lib/_types/types";
import { User } from "../_lib/_types/types";
import {
  createTable,
  createUser,
  userAlreadyExist,
  getUserId,
} from "../_lib/_database/queries";

async function registerServerAction(state: any, formData: FormData): Promise<AuthResponse> 
{
  const registerBody = registerBodySchema.safeParse({
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    location: formData.get("location") as string,
    password: formData.get("password") as string,
  });

  if (!registerBody.success) {
    console.log("invalid form input");
    return { success: false, message: "Invalid form input", user: undefined };
  }

  if (await userAlreadyExist(registerBody.data.username, registerBody.data.email)) {
    console.log(`Error: User ${registerBody.data.username} already exists`);
    return { success: false, message: "User already exists", user: undefined };
  }

  await createTable();

  await createUser(registerBody.data);

  const userId = await getUserId(registerBody.data.username);
  
  if (typeof userId === "object") {
    return {
      success: userId.success,
      message: userId.message,
      user: undefined,
    };
  }

  const user: User = {
    id: userId,
    email: registerBody.data.email,
    username: registerBody.data.username,
    location: registerBody.data.location,
    password: registerBody.data.password,
  };

  return { success: true, message: "success", user: user };
}

export default registerServerAction;
