"use server";

import { registerBodySchema } from "../_types/schemas";

async function registerServerAction(state: any, formData: FormData) {
  const registerBody = registerBodySchema.safeParse({
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  });

  console.log(
    `email: ${registerBody.data?.email}, name: ${registerBody.data?.username}, password: ${registerBody.data?.password}`
  );
  return { success: true, message: "lovely" };
}

export default registerServerAction;
