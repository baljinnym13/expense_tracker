import { PlusIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RecordModal } from "./record-modal";

export const Header = ({ user, logOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="flex items-center max-w-[1200px] mx-auto justify-between py-4">
      <div className="flex gap-6 items-center">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button
          className="btn bg-[#0166FF] text-white btn-sm"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <PlusIcon />
          Record
        </button>
        <RecordModal isOpen={isOpen} close={handleClose} />

        <div className="avatar w-12 h-12">
          <div className="w-24 rounded-full">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" />
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
