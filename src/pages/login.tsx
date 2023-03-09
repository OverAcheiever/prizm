import Loader from "@/components/Loader";
import Google from "@/components/login/Google";
import { magic } from "@/utils/magic";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    try {
      magic!.user.getIdToken().then((token) => {
        if (!token) throw new Error();

        setCookie("session", token);
        router.push("/");
      });
    } catch {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-white">
      {/* <div className="-mt-96 font-circa text-8xl font-bold">Login</div> */}

      <Loader />

      {isLoggedIn && (
        <div className="absolute left-0 right-0 bottom-0 flex h-screen w-screen items-center justify-center p-10 ">
          <div className="flex w-full max-w-md flex-col gap-y-5">
            <Google />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
