"use client";
import { useRouter } from "next/navigation";
import { FormInput } from "../_types/types";
import { FormData_t } from "../_types/types";
import { ServerAction } from "../_types/types";
import CornerButton from "./CornerButton";
import { useFormState } from "react-dom";
import { FormMode } from "../_types/types";
import { RegisterInputs } from "../_types/types";
import { useState } from "react";

interface RegisterFormProps {
  mode: FormMode;
  serverAction: ServerAction;
  formData: FormData_t;
  FormInputs: FormInput[];
  footer?: React.ReactNode;
}

const RegisterForm = ({
  mode,
  serverAction,
  formData,
  FormInputs,
  footer,
}: RegisterFormProps) => {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  const [state, submitAction] = useFormState(serverAction, null);
  const [formState, setFormState] = useState<RegisterInputs>({
    email: "",
    username: "",
    password: "",
  });

  const inputsAreFilled = () => {
    const { email, username, password } = formState;
    const formattedEmail = email.trim();
    const formattedUsername = username.trim();
    const formattedPassword = password.trim();
    if (mode === "login") return formattedUsername && formattedPassword;
    if (mode === "register")
      return formattedEmail && formattedUsername && formattedPassword;
    return false;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className=" relative h-[420px] max-w-sm w-full p-1 bg-white rounded-md shadow-lg border-black border-[1px] flex flex-col items-center justify-evenly">
        <div className="border-black-600 w-5/6 h-5/6 flex flex-col justify-evenly animate-fadeIn">
          <CornerButton
            icon="/x.svg"
            onClick={closeModal}
            size={24}
            alt="Exit button"
            topRight={true}
          />
          <form action={submitAction}>
            <h2 className=" font-bold text-3xl animate-fadeIn">
              {formData.title}
            </h2>
            <div className="flex flex-col w-full animate-fadeIn">
              {FormInputs.map((item, i) => (
                <>
                  <label
                    htmlFor={item.id}
                    className="font-semibold"
                    key={`label-${i}`}
                  >
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.id}
                    placeholder={item.placeholder}
                    className="border-black border-[1px] px-2 py-1 mb-3 w-full"
                    onChange={handleInputChange}
                    autoComplete={item.id === "email" ? "on" : "off"}
                    key={`input-${i}`}
                  />
                </>
              ))}
            </div>
            <div className="animate-fadeIn w-full">
              <button
                type="submit"
                className={`${
                  inputsAreFilled()
                    ? "bg-main-lightblack text-white transition-colors duration-400"
                    : "bg-neutral-200 text-black text-opacity-20  cursor-not-allowed hover:bg-neutral-300 transition-colors duration-400"
                } border-black border-[1px] px-4 py-2 rounded-sm w-full`}
              >
                {formData.button}
              </button>
            </div>
          </form>
          {footer}
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
