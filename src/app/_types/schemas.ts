import { z } from "zod";

export const registerBodySchema = z.object({
  email: z.string().min(9),
  username: z.string().min(1),
  password: z.string().min(1),
});
