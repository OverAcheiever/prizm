"use client";

import Loader from "@/components/Loader";
import Logo from "@/components/Logo";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Card from "./Card";
import Cards from "./Cards";
import ComingSoon from "./ComingSoon";
import MoneyGram from "./MoneyGram";
import Solana from "./Solana";
import SolanaPay from "./SolanaPay";

const Pay = ({ amount }: { amount: number }) => {
  const [cards, setCards] = useState<boolean>(false);

  const router = useRouter();

  const { mutate, status } = api.users.deposit.useMutation({
    onSuccess: () => {
      router.push("/");
    },
  });

  const buy = async () => {
    mutate({
      amount,
    });
  };

  return (
    <div className="h-full w-full">
      <Toaster
        toastOptions={{
          className: "font-aeonik text-xl",
        }}
      />

      <div className="flex h-full w-full flex-col justify-end p-8">
        <div>{cards && <Card />}</div>

        <div className="w-full max-w-md">
          {!cards ? (
            <div className="flex flex-col gap-y-5">
              <div onClick={() => setCards(true)}>
                <Cards />
              </div>
              <ComingSoon />
              <MoneyGram />
            </div>
          ) : (
            <button
              className="mt-10 flex h-14 w-full items-center justify-center rounded bg-white font-aeonik text-xl text-black"
              onClick={buy}
            >
              {status !== "loading" && status !== "success" ? (
                "DEPOSIT"
              ) : (
                <div className="bgb flex h-6 w-6 animate-spin items-center justify-center rounded-full p-1">
                  <div className="h-full w-full rounded-full bg-white"></div>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pay;
