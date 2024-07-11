import { z } from "zod";

export const registerBodySchema = z.object({
  email: z.string().min(1),
  username: z.string().min(1),
  location: z.string().min(1), 
  password: z.string().min(1),
});

export const loginBodySchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

export const userBodySchema = z.object({
  id: z.string().min(1),
  email: z.string().min(1),
  username: z.string().min(1),
  location: z.string().min(1), 
  password: z.string().min(1), 
})
