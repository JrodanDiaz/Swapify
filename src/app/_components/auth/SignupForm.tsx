import RegisterForm from "./RegisterForm";
import { registerFormInputs } from "@/app/_lib/_data/RegisterFormData";
import { registerFormData } from "@/app/_lib/_data/RegisterFormData";
import registerServerAction from "@/app/_actions/registerAction";
import RegisterFooter from "./RegisterFooter";

export default function SignupForm() {
  return (
    <RegisterForm
      mode="register"
      authAction={registerServerAction}
      formData={registerFormData}
      FormInputs={registerFormInputs}
      footer={<RegisterFooter />}
    />
  );
}
