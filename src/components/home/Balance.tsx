import { api } from "@/utils/api";
import QuickLinks from "./QuickLinks";

const Balance = () => {
  const { data } = api.users.balance.useQuery();

  console.log(data);

  return (
    <div className="flex w-full flex-col items-center pt-5 pb-12 ">
      <div className="relative -ml-3 flex h-20 w-max items-center justify-center text-8xl font-semibold">
        {data ? (
          <>
            <span className="mr-1 mt-0 flex h-full flex-grow items-center justify-center text-7xl">
              $
            </span>
            <div>{data}</div>
          </>
        ) : (
          <div className="mt-2 h-20 w-48 animate-pulse rounded bg-neutral-800"></div>
        )}
      </div>

      <QuickLinks />
    </div>
  );
};

export default Balance;
