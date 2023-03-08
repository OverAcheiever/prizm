"use client";
import { magic } from "@/utils/magic";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const query = useSearchParams();
  const provider = query?.get("provider");

  const login = async () => {
    try {
      let result = await magic!.oauth.getRedirectResult();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (provider) {
      login();
    }
  }, [query]);

  return <div> Enter </div>;
};

export default page;
