import { FormItem } from "../_types/types";

const emailInput: FormItem = {
  label: "Email Address",
  type: "text",
  id: "email",
  placeholder: "Enter email",
};

const passwordInput: FormItem = {
  label: "Password",
  type: "text",
  id: "password",
  placeholder: "Enter password",
};

export const registerFormItems: FormItem[] = [emailInput, passwordInput];
