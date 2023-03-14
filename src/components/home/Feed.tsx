import { api } from "@/utils/api";
import { InboxIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Loading = () => {
  return (
    <div className="grid grid-cols-4 gap-y-6 px-5 pt-8 sm:grid-cols-5 [&>*:nth-child(5)]:hidden sm:[&>*:nth-child(5)]:block">
      {[...Array(5).keys()].map((i, key) => {
        return (
          <div className="flex w-full justify-center" key={key}>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="h-14 w-14 animate-pulse rounded-full bg-neutral-900"></div>
              <div className="h-3.5 w-10 animate-pulse rounded bg-neutral-900 text-sm text-neutral-500"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Feed = () => {
  const { data } = api.users.transfers.feed.useQuery(undefined, {});

  return (
    <div className="h-full w-full max-w-xl rounded-t-3xl border-t-0 border-white bg-[rgb(10,10,10)]">
      {data ? (
        <div className="grid grid-cols-4 gap-y-6 px-5 pt-8 sm:grid-cols-5">
          {data.map((user, key) => {
            return (
              <Link href={`/${user.username}`}>
                <div className="flex w-full justify-center">
                  <div
                    className="flex flex-col items-center justify-center gap-y-2"
                    key={key}
                  >
                    <div className="h-14 w-14 rounded-full">
                      <img
                        src={user.picture}
                        alt=""
                        className="h-full w-full rounded-full"
                      />
                    </div>
                    <div className="text-sm text-neutral-500">
                      {user.username.length > 10
                        ? user.username.slice(0, 10) + "..."
                        : user.username}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : data === undefined ? (
        <Loading />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <InboxIcon className="h-14 w-14 text-neutral-900" />
          <div className="mt-2 text-neutral-800">no friends?</div>
        </div>
      )}
    </div>
  );
};

export default Feed;
