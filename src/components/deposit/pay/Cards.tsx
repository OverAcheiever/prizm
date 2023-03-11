"use client";

import { CreditCardIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Cards = () => {
  return (
    <Link href="/deposit/">
      <button className="flex h-14 w-full items-center justify-center rounded bg-gray-100 font-aeonik text-black">
        <CreditCardIcon className="h-8 w-8" />
        <div className="ml-2 text-xl">Credit, Debit</div>
      </button>
    </Link>
  );
};

export default Cards;
