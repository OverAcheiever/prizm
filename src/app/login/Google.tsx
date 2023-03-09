"use client";
import { magic } from "@/utils/magic";

const Google = () => {
  const login = () => {
    magic!.oauth.loginWithRedirect({
      provider: "google",
      redirectURI: new URL("/", window.location.origin).href,
      scope: ["email"],
    });
  };

  return (
    <button
      className="flex h-14 w-full items-center justify-center rounded-full border border-white transition-all duration-300 hover:bg-gray-100"
      onClick={login}
    >
      <img
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
        alt=""
        className="h-8 w-8"
      />
    </button>
  );
};

export default Google;
