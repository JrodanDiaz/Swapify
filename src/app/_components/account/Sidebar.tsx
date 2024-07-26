import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <ul className="flex flex-col items-center gap-4">
        <li className="font-bold text-base">My Account</li>
        <li className="text-sm">Profile</li>
        <li className="text-sm">Messages</li>
        <li className="text-sm">My Sizes</li>
        <Link href="/listings"><li className="text-sm">My Listings</li></Link>

      </ul>
    </>
  );
}
