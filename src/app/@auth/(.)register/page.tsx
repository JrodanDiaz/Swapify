import { Modal } from "@/app/components/Modal";
import SignupForm from "@/app/components/auth/SignupForm";
import Delay from "@/app/components/Delay";
import RegisterFormSkeleton from "@/app/components/RegisterFormSkeleton";

export default function RegisterModal() {
  return (
    <>
      <Modal>
        <Delay placeholder={<RegisterFormSkeleton />} delay={500}>
          <SignupForm />
        </Delay>
      </Modal>
    </>
  );
}
