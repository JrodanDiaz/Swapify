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
  pfp: z.string().nullable(),
})

export const postBodySchema = z.object({
  id: z.string().min(1), 
  title: z.string().min(1), 
  size: z.string().min(1), 
  description: z.string().min(1), 
  swap: z.string().min(1), 
  condition: z.string().min(1), 
  imageOne: z.string().min(1),
  imageTwo: z.string().min(1), 
  imageThree: z.string().min(1)
})