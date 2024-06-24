"use client";
import { useRouter } from "next/navigation";
import { FormInput } from "../_lib/_types/types";
import { FormData_t } from "../_lib/_types/types";
import { ServerAction } from "../_lib/_types/types";
import CornerButton from "./CornerButton";
import { useFormState } from "react-dom";
import { FormMode } from "../_lib/_types/types";
import { RegisterInputs } from "../_lib/_types/types";
import { InputsEdited } from "../_lib/_types/types";
import { useEffect, useState } from "react";

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
  const [inputEdited, setInputEdited] = useState<InputsEdited>({
    email: false,
    username: false,
    password: false,
  });

  const [inputError, setInputError] = useState({
    email: "",
    username: "",
    password: "",
  });

  const inputsAreFilled = () => {
    const { email, username, password } = formState;
    if (mode === "login") return username && password;
    if (mode === "register") return email && username && password;
    return false;
  };

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

    setInputEdited({
      ...inputEdited,
      [name]: true,
    });
  };

  useEffect(() => {
    const validateInput = () => {
      const errors = {
        email: "",
        username: "",
        password: "",
      };

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
                    <p className="text-red-600">
                      {inputError[item.id as keyof RegisterInputs]}
                    </p>
                  )}
                </>
              ))}
            </div>
            <div className="animate-fadeIn w-full mt-2">
              <button
                type={
                  inputsAreFilled() && inputsAreValid() ? "submit" : "button"
                }
                className={`${
                  inputsAreFilled() && inputsAreValid()
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
