import Input from "@/components/user/send/Input";
import Header from "@/components/user/Header";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import Pay from "@/components/user/send/Pay";

const Send = () => {
  const [amount, setAmount] = useState<number>(1);

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
    <div
      style={{
        maxHeight: "-webkit-fill-available",
      }}
      className="flex h-screen w-full justify-center bg-black font-space text-white"
    >
      <div className="relative flex h-full w-full max-w-lg flex-col">
        <Header picture={data?.picture} username={data?.username!} />
        <div className="absoloute top-0 left-0 right-0 -mt-2 h-5 w-full bg-white"></div>
        <div className="flex h-full w-full flex-grow flex-col justify-between bg-white">
          <Input amount={amount} setAmount={setAmount} />

          <Pay username={data?.username} amount={amount} />
        </div>
      </div>
    </div>
  );
};

export default Send;
