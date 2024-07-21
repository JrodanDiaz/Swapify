import { z } from "zod";
import { registerBodySchema, userBodySchema } from "./schemas";

export type FormInput = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
};

export type FormData_t = {
  title: string;
  button: string;
};

export type RegisterInputs = {
  email: string;
  username: string;
  password: string;
};

export type RegisterBody = z.infer<typeof registerBodySchema>;

export type InputsEdited = {
  email: false;
  username: false;
  password: false;
};

export type ServerResponse = {
  success: boolean;
  message: string;
};

export type User = z.infer<typeof userBodySchema> | undefined

export type RealUser = z.infer<typeof userBodySchema>

export type AuthResponse = {
  success: boolean;
  message: string;
  user: User;
};

export type AuthAction = (
  state: any,
  formData: FormData
) => Promise<AuthResponse>;

export type ServerAction = (
  state: any,
  formData: FormData
) => Promise<ServerResponse>;

export type FormMode = "register" | "login" | "admin";

export type AsyncFunctionResult<T extends {}> = {
    success: boolean;
} & T;

export type Listing = {
  id: string, 
  title: string,
  size: string,
  description: string,
  swap: string, 
  condition: string, 
  imageOne: string, 
  imageTwo: string | null, 
  imageThree: string | null 
}

