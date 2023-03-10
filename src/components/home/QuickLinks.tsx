import {
  ArrowSmallDownIcon,
  ArrowSmallRightIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="mt-5 flex gap-x-5">
      <Link href="/deposit">
        <button className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-white p-3">
            <ArrowSmallDownIcon className="text-black" />
          </div>
          <div className="mt-2 text-sm text-neutral-500">Deposit</div>
        </button>
      </Link>
      <Link href="/send">
        <button className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-white bg-opacity-100 p-3">
            <ArrowSmallRightIcon className="text-black" />
          </div>
          <div className="mt-2 text-sm text-neutral-500">Send</div>
        </button>
      </Link>

      <button className="flex flex-col items-center">
        <div className="h-14 w-14 rounded-full bg-white p-3">
          <ArrowSmallUpIcon className="text-black" />
        </div>
        <div className="mt-2 text-sm text-neutral-500">Withdraw</div>
      </button>
    </div>
  );
};

export default QuickLinks;
