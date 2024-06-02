"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return (
    <>
      <div className="  h-[380px] max-w-sm w-full p-2 bg-white rounded-md shadow-lg border-black border-[1px] flex flex-col items-center justify-evenly">
        <h2 className=" font-bold text-3xl">Start Bartering</h2>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter E-mail"
            className="border-black border-[1px] px-2 py-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="border-black border-[1px] px-2 py-1"
          />
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
          <p>
            By creating an account, I accept Swapify's{" "}
            <Link
              href="/terms-of-service"
              className="font-semibold text-blue-600"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
