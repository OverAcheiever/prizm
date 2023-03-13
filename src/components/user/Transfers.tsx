import { api } from "@/utils/api";
import { useRouter } from "next/router";
import Loading from "./Loading";

const From = () => {
  return <div></div>;
};

const Transfers = () => {
  const router = useRouter();
  const username = router.query.user as string;

  const { data } = api.users.transfers.get.useQuery(
    {
      username: username,
    },
    {
      enabled: !!username,
    }
  );

  console.log(data);

  return (
    <div className="flex h-full flex-col justify-end gap-y-5 overflow-y-auto p-5 pb-3 text-black">
      {data ? (
        data?.map((transfer, key) => {
          return (
            <div
              key={key}
              className={`flex w-full ${
                username === transfer.from.username
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div
                className={`flex items-end gap-x-2 ${
                  username === transfer.from.username
                    ? "flex-row"
                    : "flex-row-reverse"
                }`}
              >
                <img
                  src={transfer.from.picture}
                  className="h-12 w-12 rounded-full border-[4px] border-black"
                  alt=""
                />
                <div
                  className={`rounded-bl-0 flex h-12 w-max items-center justify-center rounded-xl bg-black px-5 text-xl font-semibold text-white ${
                    username === transfer.from.username
                      ? "rounded-bl-none"
                      : "rounded-br-none"
                  }`}
                >
                  ${transfer.amount}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

export default Transfers;
