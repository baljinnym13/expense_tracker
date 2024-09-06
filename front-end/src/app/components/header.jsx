// import { PlusIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ user, logOut }) => {
  console.log("user-harah", user);
  return (
    <header className="flex items-center max-w-[1200px] mx-auto justify-between py-4">
      <div className="flex gap-6 items-center">
        <Image src="/images/logo.png" width={100} height={100} alt="logo" />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button className="btn bg-[#0166FF] text-white btn-sm">
          {/* <PlusIcon /> */}
          Records
        </button>
        <div className="avatar w-12 h-12">
          <div className="w-24 rounded-full">
            <img src="https://unsplash.com/photos/man-in-black-formal-suit-wearing-eyeglasses-EQFtEzJGERg" />
          </div>
        </div>
        <div>{user.name}</div>
        <button className="btn btn-sm" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};
