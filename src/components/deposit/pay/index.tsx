"use client";

import { Toaster } from "react-hot-toast";
import ComingSoon from "./ComingSoon";
import MoneyGram from "./MoneyGram";
import Solana from "./Solana";
import SolanaPay from "./SolanaPay";

const Pay = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          className: "font-aeonik text-xl",
        }}
      />
      <div className="absolute left-0 right-0 bottom-0 flex w-full justify-center p-10">
        <div className="flex w-full max-w-md flex-col gap-y-5">
          <Solana />
          <SolanaPay />

          <div className="flex h-1 w-full items-center justify-center rounded bg-white">
            <div className="bg-black px-2 font-aeonik text-xs text-white">
              COMING SOON
            </div>
          </div>

          <ComingSoon />
          <MoneyGram />
        </div>
      </div>
    </>
  );
};

export default Pay;
