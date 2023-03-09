"use client";
import { magic } from "@/utils/magic";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { setCookie } from "cookies-next";

const page = () => {
  const query = useSearchParams();
  const provider = query?.get("provider");

  const login = async () => {
    try {
      let result = await magic?.oauth.getRedirectResult();
      setCookie("session", result?.magic.idToken);

      const user = {
        email: result?.magic.userMetadata.email,
      };
      console.log(result?.oauth.userInfo.pi);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (provider) {
      // login();
    }
  }, [query]);

  return <div> Enter </div>;
};

export default page;
