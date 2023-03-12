"use client";

import { useState } from "react";

const Input = ({
  amount,
  setAmount,
  isLoading,
}: {
  amount: number;
  setAmount: (amount: number) => void;
  isLoading: boolean;
}) => {
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
      type="tel"
      pattern="[0-9]"
      className="w-full bg-white pt-10 text-center text-9xl font-semibold text-black outline-none"
      value={
        // if theres a zero infron of the number, remove it
        amount === 0 ? "" : amount
      }
      onChange={handleAmountChange}
      disabled={isLoading}
    />
  );
};

export default Input;
