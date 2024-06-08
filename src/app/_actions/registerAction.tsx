"use server";

import { registerBodySchema } from "../_types/schemas";
import { createTable } from "../_database/queries";
import { createUser } from "../_database/queries";

async function registerServerAction(state: any, formData: FormData) {
  const registerBody = registerBodySchema.safeParse({
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    location: formData.get("location") as string,
    password: formData.get("password") as string,
  });

  console.log(
    `email: ${registerBody.data?.email}, name: ${registerBody.data?.username}, password: ${registerBody.data?.password}`
  );

  if (!registerBody.success) {
    console.log("invalid form input");

    return { success: false, message: "Invalid form input" };
  }

  await createTable();

  const res = await createUser(registerBody.data);

  return { success: true, message: "lovely" };
}

export default registerServerAction;
