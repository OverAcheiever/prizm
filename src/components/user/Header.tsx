import { api } from "@/utils/api";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const username = router.query.user;

  const { data } = api.users.get.useQuery(
    {
      username: username as string,
    },
    {
      enabled: !!username,
    }
  );

  return (
    <div className="flex w-full items-center bg-white py-3 px-4 sm:rounded-b-xl">
      <div className="w-1/3">
        <div className="h-[3rem] w-[3rem] ">
          {data ? (
            <img
              src={data.picture}
              className="h-full w-full rounded-full border-[3px] border-black"
            />
          ) : (
            <div className="h-full w-full animate-pulse rounded-full bg-gray-200"></div>
          )}
        </div>
      </div>
      <div className="flex w-1/3 justify-center text-[1.5rem] font-semibold text-black">
        {data ? (
          data.username
        ) : (
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
        )}
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default Header;
