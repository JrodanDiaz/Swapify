import { z } from "zod";
import { registerBodySchema } from "./schemas";

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

export type User =
  | ({
      id: number;
    } & RegisterBody)
  | undefined;

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

