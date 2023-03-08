"use client";
import { magic } from "@/utils/magic";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Google = () => {
  const query = useSearchParams();
  const state = query?.get("state");

  useEffect(() => {
    if (state) {
      console.log(state, query);
      magic!.oauth
        .getRedirectResult()
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  const login = () => {
    magic!.oauth.loginWithRedirect({
      provider: "google",
      redirectURI: new URL("/callback", window.location.origin).href,
      scope: ["email"],
    });
  };

  return (
    <button
      className="flex h-14 w-full items-center justify-center rounded bg-white"
      onClick={login}
    >
      <img
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
        alt=""
        className="h-10 w-10"
      />
    </button>
  );
};

export default Google;
