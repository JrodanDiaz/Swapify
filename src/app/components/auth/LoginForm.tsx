import RegisterForm from "../RegisterForm";
import { loginFormData } from "@/app/_data/RegisterFormData";
import { loginFormInputs } from "@/app/_data/RegisterFormData";
import LoginFooter from "./LoginFooter";

export default function LoginForm() {
  return (
    <RegisterForm
      formData={loginFormData}
      FormInputs={loginFormInputs}
      footer={<LoginFooter />}
    />
  );
}
