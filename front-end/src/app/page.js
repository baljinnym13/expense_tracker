import Login from "@/components/login";
import SignUP from "@/components/signup";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Login />
      <SignUP />
    </main>
  );
}
