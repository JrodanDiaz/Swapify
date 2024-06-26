import Link from "next/link";

export default function LoginFooter() {
  return (
    <>
      <div className="text-center text-xs animate-fadeIn">
        <p className=" text-sm mb-2">
          {`Don't have an account? `}
          <Link href="/register" className="font-semibold underline">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
