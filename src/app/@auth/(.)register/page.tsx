import { Modal } from "@/app/components/Modal";
import RegisterForm from "@/app/components/RegisterForm";
import { registerFormItems } from "@/app/_data/RegisterFormData";

export default function RegisterModal() {
  return (
    <>
      <Modal>
        <RegisterForm formItems={registerFormItems} />
      </Modal>
    </>
  );
}
