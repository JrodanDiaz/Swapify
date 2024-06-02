"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormItem } from "../_types/types";

export default function RegisterForm({ formItems }: { formItems: FormItem[] }) {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return (
    <>
      <div className="  h-[420px] max-w-sm w-full p-4 bg-white rounded-md shadow-lg border-black border-[1px] flex flex-col items-center justify-evenly">
        <h2 className=" font-bold text-3xl">Start Bartering</h2>
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
            Create Account
          </button>
        </div>
        <button
          onClick={closeModal}
          className=" bg-main-lightblack text-white px-4 py-2 rounded-sm"
        >
          Close Modal
        </button>
        <div className="text-center text-xs">
          <p className=" text-sm mb-2">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold underline">
              Log in
            </Link>
          </p>
          <p>
            By creating an account, I accept Swapify's{" "}
            <Link href="/terms-of-service" className="font-semibold">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
