
import Navbar from "@/app/_components/common/Navbar";
import FormPost from "@/app/_components/post/PostForm";
export default function Post() {
  return (
    <>
      <Navbar />
      <div className="pt-[80px] border-red-700 border-2">
        <FormPost/>
      </div>


    </>
  );
}
