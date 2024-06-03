"use client";
import { useRouter } from "next/navigation";
import { FormInput } from "../_types/types";
import { FormData_t } from "../_types/types";
import Image from "next/image";
import CornerButton from "./CornerButton";

interface RegisterFormProps {
  formData: FormData_t;
  FormInputs: FormInput[];
  footer?: React.ReactNode;
}

const RegisterForm = ({ formData, FormInputs, footer }: RegisterFormProps) => {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  return (
    <>
      <div className=" relative h-[420px] max-w-sm w-full p-1 bg-white rounded-md shadow-lg border-black border-[1px] flex flex-col items-center justify-evenly">
        <div className="border-black-600 w-5/6 h-5/6 flex flex-col  justify-evenly animate-fadeIn">
          <CornerButton
            icon="/x.svg"
            onClick={closeModal}
            size={24}
            alt="Exit button"
            topRight={true}
          />
          <h2 className=" font-bold text-3xl animate-fadeIn">
            {formData.title}
          </h2>
          <div className="flex flex-col w-full animate-fadeIn">
            {FormInputs.map((item) => (
              <>
                <label htmlFor={item.id} className="font-semibold">
                  {item.label}
                </label>
                <input
                  type={item.type}
                  id={item.id}
                  name={item.id}
                  placeholder={item.placeholder}
                  className="border-black border-[1px] px-2 py-1 mb-3 w-full"
                />
              </>
            ))}
          </div>
          <div className="animate-fadeIn w-full">
            <button
              type="submit"
              className="bg-main-lightblack text-white px-4 py-2 rounded-sm w-full"
            >
              {formData.button}
            </button>
          </div>
          {footer}
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
