import { FormItem } from "../_types/types";
import { FormData_t } from "../_types/types";

const emailFormInput: FormItem = {
  label: "Email Address",
  type: "text",
  id: "email",
  placeholder: "Enter email",
};

const usernameFormInput: FormItem = {
  label: "Username",
  type: "text",
  id: "username",
  placeholder: "Enter username",
};

const passwordFormInput: FormItem = {
  label: "Password",
  type: "text",
  id: "password",
  placeholder: "Enter password",
};

export const registerFormItems: FormItem[] = [
  emailFormInput,
  passwordFormInput,
];
export const loginFormItems: FormItem[] = [
  usernameFormInput,
  passwordFormInput,
];

export const registerFormData: FormData_t = {
  title: "Start Bartering",
  button: "Create Account",
};

export const loginFormData: FormData_t = {
  title: "Login Now",
  button: "Login",
};
