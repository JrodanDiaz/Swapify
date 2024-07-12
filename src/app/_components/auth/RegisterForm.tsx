"use client";
import { useRouter } from "next/navigation";
import { FormInput } from "@/app/_lib/_types/types";
import { FormData_t } from "@/app/_lib/_types/types";
import { AuthAction } from "@/app/_lib/_types/types";
import CornerButton from "../common/CornerButton";
import { useFormState, useFormStatus } from "react-dom";
import { FormMode } from "@/app/_lib/_types/types";
import { RegisterInputs } from "@/app/_lib/_types/types";
import { useEffect, useState } from "react";
import { useUserDispatchContext } from "@/app/_lib/_context/UserContext";

interface RegisterFormProps {
  mode: FormMode;
  authAction: AuthAction;
  formData: FormData_t;
  FormInputs: FormInput[];
  footer?: React.ReactNode;
}

const RegisterForm = ({
  mode,
  authAction,
  formData,
  FormInputs,
  footer,
}: RegisterFormProps) => {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  const [serverResponse, submitAction] = useFormState(authAction, null);
  const [formState, setFormState] = useState<RegisterInputs>({
    email: "",
    username: "",
    password: "",
  });

  const [inputError, setInputError] = useState({
    email: "",
    username: "",
    password: "",
  });

  const inputsAreValid = () => {
    const { email, username, password } = inputError;
    if (mode === "login") return !username && !password;
    if (mode === "register") return !email && !username && !password;
    return false;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value.trim(),
    });
  };

  useEffect(() => {
    const validateInput = () => {
      const errors = {
        email: "",
        username: "",
        password: "",
      };

      if (!formState.email.includes("@") && formState.email.length > 0) {
        errors.email = "Must be valid email address";
      }

      if (formState.username.length > 0 && formState.username.length < 4) {
        errors.username = "Username must be at least 4 characters";
      } else {
        errors.username = "";
      }

      if (formState.password.length > 0 && formState.password.length < 6) {
        errors.password = "Password must be atleast 6 characters";
      } else {
        errors.password = "";
      }

      setInputError(errors);
    };

    validateInput();
  }, [formState]);

  const setUserContext = useUserDispatchContext();
  useEffect(() => {
    if (serverResponse === null) {
      console.log("Arctic Monkeys #1");
    } else if (serverResponse.success) {
      console.log(
        `RegisterForm useEffect User: ${serverResponse.user?.username}`
      );

      setUserContext(serverResponse.user);
    }
  }, [serverResponse, setUserContext]);

  return (
    <>
      <div className=" relative min-h-[480px] max-w-sm w-full p-1 bg-white rounded-md shadow-lg border-black border-[1px] flex flex-col items-center justify-evenly">
        <div className="border-black-600 w-5/6 h-5/6 flex flex-col p-3 justify-evenly animate-fadeIn">
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
            {serverResponse?.success === false && (
              <h3 className="text-red-600">{serverResponse.message}</h3>
            )}
            <div className="flex flex-col w-full animate-fadeIn">
              {FormInputs.map((item, i) => (
                <>
                  <label
                    htmlFor={item.id}
                    className="font-semibold mt-3"
                    key={`label-${i}`}
                  >
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.id}
                    placeholder={item.placeholder}
                    className="border-black border-[1px] px-2 py-1 mb-0 w-full"
                    onChange={handleInputChange}
                    autoComplete={item.id === "email" ? "on" : "off"}
                    key={`input-${i}`}
                  />
                  {inputError[item.id as keyof RegisterInputs] && (
                    <p key={`error-${i}`} className="text-red-600">
                      {inputError[item.id as keyof RegisterInputs]}
                    </p>
                  )}
                </>
              ))}
            </div>
            <div className="animate-fadeIn w-full mt-2">
              <button
                type={inputsAreValid() ? "submit" : "button"}
                className={`${
                  inputsAreValid()
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
