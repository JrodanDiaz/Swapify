import Link from "next/link";

export default function RegisterFooter() {
  return (
    <>
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
    </>
  );
}
