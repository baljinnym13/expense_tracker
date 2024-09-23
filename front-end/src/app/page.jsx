// import Login from "@/app/components/login";
// import SignUP from "@/app/components/signup";
// import Image from "next/image";

import Login from "./(auth)/login/page";

// export default function Home() {
//   return (
//     <main>
//       <Login />
//       <SignUP />
//     </main>
//   );
// }
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Login />
      <div className="bg-green-400 w-[24px] h-[24px]">
        <img
          className="w-[20px] h-[20px]"
          src="/categorimg/ForkKnife.png"
          alt=""
        />
      </div>
    </main>
  );
}
