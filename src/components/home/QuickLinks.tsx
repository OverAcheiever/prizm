import {
  ArrowSmallDownIcon,
  ArrowSmallRightIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { toast } from "react-hot-toast";

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
      <Link href="/search">
        <button className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-white bg-opacity-100 p-3">
            <ArrowSmallRightIcon className="text-black" />
          </div>
          <div className="mt-2 text-sm text-neutral-500">Send</div>
        </button>
      </Link>

      <button
        className="flex flex-col items-center"
        onClick={() => {
          toast("Coming Soon!");
        }}
      >
        <div className="h-14 w-14 rounded-full bg-white p-3">
          <ArrowSmallUpIcon className="text-black" />
        </div>
        <div className="mt-2 text-sm text-neutral-500">Withdraw</div>
      </button>
    </div>
  );
};

export default QuickLinks;
