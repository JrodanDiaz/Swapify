import { Modal } from "@/app/_components/Modal";
import SignupForm from "@/app/_components/auth/SignupForm";
import Delay from "@/app/_components/Delay";
import RegisterFormSkeleton from "@/app/_components/RegisterFormSkeleton";

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
