"use client";
import Link from "next/link";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <RegisterForm />
      </div>
    </>
  );
}
