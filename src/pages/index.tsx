import Header from "@/components/Header";
import Balance from "@/components/home/Balance";
import Feed from "@/components/home/Feed";
import { api } from "@/utils/api";
import { magic } from "@/utils/magic";
import { InboxIcon } from "@heroicons/react/20/solid";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="relative flex h-[100svh] w-full flex-col items-center bg-black font-space text-white">
      <div className="relative flex w-full max-w-lg flex-grow flex-col">
        <Header />
        <Balance />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
