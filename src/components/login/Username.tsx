import { api } from "@/utils/api";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { User } from "@/pages/login";
import Loader from "../Loader";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const Username = ({ user }: { user: User }) => {
  const [username, setUsername] = useState<string>();

  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { mutate, status } = api.users.update.username.useMutation({
    onSuccess: () => {
      router.push("/");
    },
  });

  useEffect(() => {
    input.current?.focus();
    input.current?.select();
  }, []);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    if (!username) toast.error("Please enter a username");
    else {
      mutate({
        username,
      });
    }
  };

  return (
    <>
      {status !== "loading" && status !== "success" ? (
        <div className="font-space font-medium ">
          <div className="relative">
            <div className="absolute left-2.5 top-0 bottom-0 flex h-14 items-center justify-center">
              <img
                src={user.picture}
                alt=""
                className="h-10 w-10 rounded-full"
              />
            </div>
            <input
              type="text"
              name=""
              id=""
              className="h-14 w-full rounded-full border border-white bg-white px-5 pl-14 pb-0.5 text-xl lowercase text-black outline outline-1 outline-offset-2 outline-white"
              ref={input}
              onChange={handleUsername}
              maxLength={20}
            />
          </div>

          <button
            className="mt-5 h-14 w-full rounded-full border border-white  text-lg text-white transition-all hover:bg-white hover:text-black"
            onClick={handleSubmit}
            type="submit"
          >
            Sign In
          </button>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Username;
