import Input from "@/components/deposit/Input";
import Lable from "@/components/deposit/Lable";
import Pay from "@/components/deposit/pay";
import { useState } from "react";

const Deposit = () => {
  const [amount, setAmount] = useState<number>(100);

  return (
    <div className="flex h-screen w-full justify-center bg-black font-space text-white">
      <div className="flex h-full w-full max-w-md flex-col items-center justify-between">
        <div className="flex w-full flex-col items-center">
          <Input amount={amount} setAmount={setAmount} />
          <Lable />
        </div>

        <Pay amount={amount} />
      </div>
    </div>
  );
};

export default Deposit;
