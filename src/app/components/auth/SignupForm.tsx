import RegisterForm from "../RegisterForm";
import { registerFormData } from "@/app/_data/RegisterFormData";
import { registerFormInputs } from "@/app/_data/RegisterFormData";
import RegisterFooter from "./RegisterFooter";
export default function SignupForm() {
  return (
    <RegisterForm
      formData={registerFormData}
      FormInputs={registerFormInputs}
      footer={<RegisterFooter />}
    />
  );
}
