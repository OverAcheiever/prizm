import Loader from "@/components/Loader";
import Google from "@/components/login/Google";
import Social from "@/components/login/Social";
import Username from "@/components/login/Username";
import { api } from "@/utils/api";
import { magic } from "@/utils/magic";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface User {
  token: string;
  email: string;
  publicKey: string;
  picture: string;
}

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();
  const [hasUsername, setHasUsername] = useState<boolean>(true);

  const router = useRouter();
  const provider = router.query.provider;

  const { mutate, data } = api.users.login.useMutation({
    onSuccess: (data, { token }) => {
      setCookie("session", token);

      if (!data.username) {
        setIsLoading(false);
        setHasUsername(false);
      } else {
        router.push("/");
      }
    },
  });

  useEffect(() => {
    if (provider) {
      setIsLoading(true);
      magic?.oauth.getRedirectResult().then((result) => {
        setUser({
          token: result.magic.idToken,
          email: result.oauth.userInfo.email!,
          publicKey: result.magic.userMetadata.publicAddress!,
          picture: result.oauth.userInfo.picture!,
        });
      });
    }

    if (router.isReady && !provider) setIsLoading(false);
  }, [router.isReady]);

  useEffect(() => {
    if (user) {
      mutate({
        token: user.token,
        email: user.email,
        publicKey: user.publicKey,
        picture: user.picture,
      });
    }
  }, [user]);

  // useEffect(() => {
  //   try {
  //     magic!.user.getIdToken().then((token) => {
  //       if (!token) throw new Error();

  //       setCookie("session", token);
  //       router.push("/");
  //     });
  //   } catch {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-white">
      {/* <div className="-mt-96 font-circa text-8xl font-bold">Login</div> */}

      {!isLoading ? (
        <div className="absolute left-0 right-0 bottom-0 flex h-screen w-screen items-center justify-center p-10 ">
          <div className="flex w-full max-w-md flex-col gap-y-5">
            {hasUsername && !user ? <Social /> : <Username user={user!} />}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Login;
