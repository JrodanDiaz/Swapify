import Navbar from "../components/Navbar";
import Image from "next/image";
import Sidebar from "../components/account/Sidebar";
export default function AccountPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 flex justify-between">
        <Sidebar />
        <div>
          <Image src="/pfp.png" alt="profile picture" height={24} width={24} />
          <h1>Change PFP</h1>
        </div>
      </div>
    </>
  );
}
