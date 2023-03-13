import Header from "@/components/Header";
import Loading from "@/components/search/Loading";
import Search from "@/components/search/Search";
import { api } from "@/utils/api";
import {
  ArrowRightIcon,
  ArrowSmallRightIcon,
  AtSymbolIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Send = () => {
  const [handle, setHandle] = useState<string>();
  const { data, mutate, isLoading } = api.users.search.useMutation();

  useEffect(() => {
    if (handle) {
      mutate({
        query: handle,
      });
    }
  }, [handle]);

  return (
    <div className="flex  h-[100svh] w-full justify-center bg-black font-space text-white">
      <div className="w-full max-w-lg px-5 pt-5 lg:pt-10">
        <Search handle={handle} setHandle={setHandle} />

        <div className="flex flex-col gap-y-5 pt-3">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {data?.map((user) => (
                <Link href={`/${user.username}/pay`}>
                  <div className="group flex h-14 w-full cursor-pointer items-center justify-between rounded-full px-3 pl-2.5 transition-all duration-500 hover:bg-white hover:text-black">
                    <div className="flex items-center gap-x-3">
                      <img
                        src={user.picture}
                        className="h-10 w-10 rounded-full bg-neutral-900"
                      />
                      <div className="flex-grow rounded pb-0.5 font-space text-xl font-medium">
                        {user.username}
                      </div>
                    </div>
                    <div className="hidden pr-1 group-hover:block">
                      <ArrowSmallRightIcon className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Send;
