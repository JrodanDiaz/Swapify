"use client";
import RegisterForm from "../components/RegisterForm";
import { registerFormItems } from "../_data/RegisterFormData";

export default function Register() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <RegisterForm formItems={registerFormItems} />
      </div>
    </>
  );
}
