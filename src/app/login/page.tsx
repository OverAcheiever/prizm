import { useEffect } from "react";
import Google from "./Google";

const page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-24 font-aeonik text-7xl font-bold">LOGIN</div>

      <div className="absolute left-0 right-0 bottom-0 flex w-full justify-center p-10">
        <div className="flex w-full max-w-md flex-col gap-y-5">
          <Google />
        </div>
      </div>
    </div>
  );
};

export default page;
