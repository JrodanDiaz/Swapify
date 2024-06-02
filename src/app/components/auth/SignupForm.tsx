import RegisterForm from "../RegisterForm";
import { registerFormData } from "@/app/_data/RegisterFormData";
import { registerFormItems } from "@/app/_data/RegisterFormData";
import RegisterFooter from "./RegisterFooter";
export default function SignupForm() {
  return (
    <RegisterForm
      formData={registerFormData}
      formItems={registerFormItems}
      footer={<RegisterFooter />}
    />
  );
}
