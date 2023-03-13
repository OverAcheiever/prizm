import Input from "@/components/user/pay/Input";
import Header from "@/components/user/Header";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import Pay from "@/components/user/pay/Pay";

const Send = () => {
  const [amount, setAmount] = useState<number>(100);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    <div className="flex h-[100svh] w-full justify-center bg-black font-space text-white">
      <div className="relative flex h-full w-full max-w-lg flex-col">
        <Header />
        <div className="absoloute top-0 left-0 right-0 -mt-2 h-5 w-full bg-white"></div>
        <div className="flex h-full w-full flex-grow flex-col justify-between bg-white">
          <Input amount={amount} setAmount={setAmount} isLoading={isLoading} />

          <Pay
            username={data?.username}
            amount={amount}
            sender={data?.sender}
            recipient={data?.recipient}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Send;
