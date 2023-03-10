import { magic } from "@/utils/magic";

const Google = () => {
  const login = () => {
    magic!.oauth.loginWithRedirect({
      provider: "google",
      redirectURI: new URL("/login", window.location.origin).href,
      scope: ["email"],
    });
  };

  return (
    <button
      className="flex h-14 w-full items-center justify-center rounded-full border border-white bg-black transition-all duration-500 hover:border-0 hover:bg-white"
      onClick={login}
    >
      <img src="/images/logos/google.png" alt="" className="h-8 w-8" />
    </button>
  );
};

export default Google;
