import { api } from "@/utils/api";
import { useRouter } from "next/router";

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
    <div className="flex flex-grow flex-col-reverse gap-y-5 px-3 pb-5">
      {data?.map((transfer, key) => {
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
                src={
                  username === transfer.from.username
                    ? transfer.to.picture
                    : transfer.from.picture
                }
                className="h-12 w-12 rounded-full border-[4px] border-black"
                alt=""
              />
              <div className="flex h-12 w-max items-center justify-center rounded bg-black px-5 text-xl font-semibold">
                ${transfer.amount}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Transfers;
