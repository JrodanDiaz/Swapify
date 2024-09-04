"use client";
import { getUsersAction } from "@/app/_actions/AdminActions";
import { getPostsAction } from "@/app/_actions/AdminActions";
import CornerButton from "@/app/_components/common/CornerButton";
import { useRouter } from "next/navigation";
export default function AdminBoard() {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  return (
    <>
      <div className=" relative h-[420px] w-[600px] p-1 bg-black rounded-md shadow-lg shadow-white border-white border-[1px] flex flex-col items-center justify-center">
        <div className="border-black-600 text-center w-5/6 h-5/6 flex flex-col justify-evenly items-center animate-fadeIn">
          <CornerButton
            icon="/x.svg"
            onClick={closeModal}
            size={24}
            alt="Exit button"
            topRight={true}
          />
          <form action={getUsersAction}>
            <button
              type="submit"
              className="w-full bg-orange-600 border-black border-[1px] text-black rounded-sm px-4 py-2 mb-2"
            >
              Print Users Table to Console
            </button>
          </form>
          <form action={getPostsAction}>
            <button
              type="submit"
              className="w-full bg-orange-600 border-black border-[1px] text-black rounded-sm px-4 py-2 mb-2"
            >
              Print Posts Table to Console
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
