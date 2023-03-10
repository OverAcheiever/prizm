"use client";

import { useState } from "react";

const Input = () => {
  const [amount, setAmount] = useState<number>(100);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // minimum amount is 0, maximum amount is 1000, allow only numbers with no decimals

    if (Number(e.target.value) < 0) {
      setAmount(0);
    } else if (Number(e.target.value) > 1000) {
      setAmount(1000);
    } else if (Number(e.target.value) % 1 !== 0) {
      setAmount(amount);
    } else setAmount(Number(e.target.value));
  };

  return (
    <input
      type="number"
      className="w-full bg-black text-center text-8xl font-semibold outline-none"
      value={
        // if theres a zero infron of the number, remove it
        amount === 0 ? "" : amount
      }
      onChange={handleAmountChange}
    />
  );
};

export default Input;
