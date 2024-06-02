import { Modal } from "@/app/components/Modal";
import SignupForm from "@/app/components/auth/SignupForm";

export default function RegisterModal() {
  return (
    <>
      <Modal>
        <SignupForm />
      </Modal>
    </>
  );
}
