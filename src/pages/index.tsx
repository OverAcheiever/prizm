import Header from "@/components/Header";
import Balance from "@/components/home/Balance";
import { api } from "@/utils/api";
import { magic } from "@/utils/magic";
import { InboxIcon } from "@heroicons/react/20/solid";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="relative flex max-h-[dvh] h-screen w-full flex-col items-center bg-black font-space text-white">
      <div className="relative flex w-full max-w-xl flex-grow flex-col">
        <Header />
        <Balance />
        <div className="flex h-full w-full max-w-xl flex-col items-center justify-center rounded-t-3xl border-t-0 border-white bg-[rgb(10,10,10)]">
          <InboxIcon className="h-14 w-14 text-neutral-900" />
          <div className="mt-2 text-neutral-800">no friends?</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
