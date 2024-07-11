import RegisterForm from "./RegisterForm";
import { loginFormData } from "@/app/_lib/_data/RegisterFormData";
import { loginFormInputs } from "@/app/_lib/_data/RegisterFormData";
import registerServerAction from "@/app/_actions/registerAction";
import loginServerAction from "@/app/_actions/loginAction";
import LoginFooter from "./LoginFooter";

export default function LoginForm() {
  return (
    <RegisterForm
      mode="login"
      authAction={loginServerAction}
      formData={loginFormData}
      FormInputs={loginFormInputs}
      footer={<LoginFooter />}
    />
  );
}
