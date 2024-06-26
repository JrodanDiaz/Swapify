import Image from "next/image";
export default function RegisterFormSkeleton() {
  return (
    <>
      <div className=" relative h-[420px] max-w-sm w-full p-1 bg-white rounded-md shadow-lg border-black border-[1px] flex flex-col items-center justify-evenly">
        <div className="border-black-600 w-5/6 h-5/6 flex flex-col  justify-evenly ">
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
            <Image src="/x.svg" alt="exit" width={24} height={24} />
          </button>
          <h2 className="text-3xl w-full h-8 bg-shimmer-pattern bg-200% animate-shimmer "></h2>
          <div className="flex flex-col w-full ">
            {Array.from({ length: 2 }, (_, i) => (
              <>
                <p className="w-1/2 h-5 mb-2 mt-2 bg-shimmer-pattern bg-200% animate-shimmer"></p>
                <input className=" px-2 py-1 mb-3 w-full bg-shimmer-pattern bg-200% animate-shimmer" />
              </>
            ))}
          </div>
          <div className="w-full">
            <button className="h-9 rounded-sm w-full bg-shimmer-pattern bg-200% animate-shimmer"></button>
          </div>
        </div>
      </div>
    </>
  );
}
