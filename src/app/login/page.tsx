"use client";

import { useEffect } from "react";
import { Web3Auth } from "@web3auth/single-factor-auth";

const page = () => {
  const web3auth = new Web3Auth({
    clientId:
      "BBYv01hGq7raa6hfG1mb-hnO_nesIcVnxnOqSU7Dcl6S55bDlFhNHOGcZIBns_8_m1-QT9ZUnFwvFxCZaNtGvf4", // Get your Client ID from Web3Auth Dashboard
    chainConfig: {
      chainNamespace: "solana",
      chainId: "0x1",
    },
    // Available networks are "testnet", "mainnet", "cyan", "aqua", and "celeste".
    web3AuthNetwork: "testnet",
  });

  useEffect(() => {
    const init = async () => {
      await web3auth.init();
      console.log(1);
    };

    init();
  }, []);

  const login = async () => {
    try {
      await web3auth.connect({
        verifier: "verifier-name", // replace with your verifier name, and it has to be on the same network passed in init().
        verifierId: "verifier-Id", // replace with your verifier id(sub or email), setup while creating the verifier on Web3Auth's Dashboard
        idToken: "JWT Token", // replace with your newly created unused JWT Token.
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-24 font-aeonik text-7xl font-bold">LOGIN</div>

      <div className="absolute left-0 right-0 bottom-0 flex w-full justify-center p-10">
        <div className="flex w-full max-w-md flex-col gap-y-5">
          <button
            onClick={login}
            className="flex h-14 w-full items-center justify-center rounded bg-white"
          >
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
              className="h-10 w-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
