"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return (
    <div
      // onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      {children}
    </div>
  );
}
