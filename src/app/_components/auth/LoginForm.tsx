import RegisterForm from "../common/RegisterForm";
import { loginFormData } from "@/app/_lib/_data/RegisterFormData";
import { loginFormInputs } from "@/app/_lib/_data/RegisterFormData";
import registerServerAction from "@/app/_actions/registerAction";
import LoginFooter from "./LoginFooter";

export default function LoginForm() {
  return (
    <RegisterForm
      mode="login"
      authAction={registerServerAction}
      formData={loginFormData}
      FormInputs={loginFormInputs}
      footer={<LoginFooter />}
    />
  );
}
