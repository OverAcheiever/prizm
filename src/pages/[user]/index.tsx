import Header from "@/components/user/Header";
import { api } from "@/utils/api";
import { useRouter } from "next/router";

const User = () => {
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

  console.log(data);

  return (
    <div className="flex h-screen w-full justify-center bg-black font-space text-white">
      <div className="flex h-full w-full max-w-lg flex-col">
        <Header picture={data?.picture} username={data?.username!} />
        <div className="flex-grow"></div>
        <div className="flex w-full items-center justify-center p-5">
          <button className="h-14 w-full rounded bg-white font-aeonik text-xl text-black">PAY</button>
        </div>
      </div>
    </div>
  );
};

export default User;
