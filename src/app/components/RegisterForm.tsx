"use client";
import { useRouter } from "next/navigation";
import { FormItem } from "../_types/types";
import { FormData_t } from "../_types/types";

interface RegisterFormProps {
  formData: FormData_t;
  formItems: FormItem[];
  footer?: React.ReactNode;
}

export default function RegisterForm({
  formData,
  formItems,
  footer,
}: RegisterFormProps) {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return (
    <>
      <div className="  h-[420px] max-w-sm w-full p-4 bg-white rounded-md shadow-lg border-black border-[1px] flex flex-col items-center justify-evenly">
        <h2 className=" font-bold text-3xl">{formData.title}</h2>
        <div className="flex flex-col">
          {formItems.map((item) => (
            <>
              <label htmlFor={item.id} className="font-semibold">
                {item.label}
              </label>
              <input
                type={item.type}
                id={item.id}
                name={item.id}
                placeholder={item.placeholder}
                className="border-black border-[1px] px-2 py-1 mb-3"
              />
            </>
          ))}
        </div>
        <div>
          <button
            type="submit"
            className=" bg-main-pink text-white px-4 py-2 rounded-sm"
          >
            {formData.button}
          </button>
        </div>
        <button
          onClick={closeModal}
          className=" bg-main-lightblack text-white px-4 py-2 rounded-sm"
        >
          Close Modal
        </button>
        {footer}
      </div>
    </>
  );
}
