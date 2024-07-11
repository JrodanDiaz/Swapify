import { FormInput } from "../_types/types";
import { FormData_t } from "../_types/types";

const emailFormInput: FormInput = {
  label: "Email Address",
  type: "text",
  id: "email",
  placeholder: "Enter email",
};

const usernameFormInput: FormInput = {
  label: "Username",
  type: "text",
  id: "username",
  placeholder: "Enter username",
};

const locationFormInput: FormInput = {
  label: "Location",
  type: "text",
  id: "location",
  placeholder: "Enter Location",
};

const passwordFormInput: FormInput = {
  label: "Password",
  type: "password",
  id: "password",
  placeholder: "Enter password",
};

export const registerFormInputs: FormInput[] = [
  emailFormInput,
  usernameFormInput,
  locationFormInput,
  passwordFormInput,
];

export const loginFormInputs: FormInput[] = [
  usernameFormInput,
  passwordFormInput,
];

export const registerFormData: FormData_t = {
  title: "Start Bartering",
  button: "Create Account",
};

export const loginFormData: FormData_t = {
  title: "Welcome Back",
  button: "Login",
};