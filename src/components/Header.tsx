import { api } from "@/utils/api";
import Logo from "./Logo";

const Header = () => {
  const { data } = api.users.picture.useQuery();

  return (
    <div className="flex w-full items-center justify-between px-5 pt-8">
      <div className="-mt-2 flex h-full w-1/3 items-center justify-start">
        <Logo />
      </div>
      <div className="w-1/3 text-center text-lg"></div>
      <div className="flex w-1/3 justify-end">
        {data ? (
          <img src={data} alt="" className="h-12 w-12 rounded-full" />
        ) : (
          <div className="h-12 w-12 animate-pulse rounded-full bg-neutral-800"></div>
        )}
      </div>
    </div>
  );
};

export default Header;
