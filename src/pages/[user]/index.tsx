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
      <div className="h-full w-full max-w-lg">
        <Header picture={data?.picture} username={data?.username!} />
      </div>
    </div>
  );
};

export default User;
