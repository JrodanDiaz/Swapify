import RegisterForm from "../RegisterForm";
import { registerFormData } from "@/app/_data/RegisterFormData";
import { registerFormInputs } from "@/app/_data/RegisterFormData";
import registerServerAction from "@/app/_actions/registerAction";
import RegisterFooter from "./RegisterFooter";

export default function SignupForm() {
  return (
    <RegisterForm
      mode="register"
      serverAction={registerServerAction}
      formData={registerFormData}
      FormInputs={registerFormInputs}
      footer={<RegisterFooter />}
    />
  );
}
