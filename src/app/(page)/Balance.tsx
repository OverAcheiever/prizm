import {
  ArrowSmallDownIcon,
  ArrowSmallRightIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const Balance = () => {
  return (
    <div className="flex w-full flex-col items-center  justify-center pt-10">
      <div className="text-7xl font-semibold">$1,550</div>

      <div className="mt-8 flex gap-x-5">
        <Link href="/deposit">
          <button className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-green-900 p-3">
              <ArrowSmallDownIcon className="text-[#71ea84]" />
            </div>
            <div className="mt-2 text-sm text-neutral-500">Deposit</div>
          </button>
        </Link>
        <button className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-white bg-opacity-100 p-3">
            <ArrowSmallRightIcon className="text-black" />
          </div>
          <div className="mt-2 text-sm text-neutral-500">Send</div>
        </button>
        <button className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-red-900 bg-opacity-50 p-3">
            <ArrowSmallUpIcon className="text-red-500" />
          </div>
          <div className="mt-2 text-sm text-neutral-500">Withdraw</div>
        </button>
      </div>
    </div>
  );
};

export default Balance;
