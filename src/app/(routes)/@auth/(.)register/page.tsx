import { Modal } from "@/app/_components/common/Modal";
import SignupForm from "@/app/_components/auth/SignupForm";
import Delay from "@/app/_components/common/Delay";
import RegisterFormSkeleton from "@/app/_components/common/RegisterFormSkeleton";

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
