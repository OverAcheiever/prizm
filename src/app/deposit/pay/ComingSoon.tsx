"use client";

import { CreditCardIcon } from "@heroicons/react/20/solid";

const ComingSoon = () => {
  return (
    <>
      <button onClick={()=> window.location.href = "/login"} className="flex h-14 w-full items-center justify-center rounded bg-white font-aeonik text-black">
        <CreditCardIcon className="h-8 w-8 text-black" />
        <div className="ml-3 text-xl">Credit, Debit, ACH</div>
      </button>
    </>
  );
};

export default ComingSoon;
