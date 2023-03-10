import { api } from "@/utils/api";

const Header = () => {
  const { data } = api.users.picture.useQuery();

  console.log(data);

  return (
    <div className="flex w-full items-center justify-between px-5 pt-8">
      <div className="w-1/3"></div>
      <div className="w-1/3 text-center text-lg"></div>
      <div className="flex w-1/3 justify-end">
        {data ? (
          <img
            src={data}
            alt=""
            className="h-12 w-12 rounded-full"
          />
        ) : (
          <div className="h-12 w-12 animate-pulse rounded-full bg-neutral-800"></div>
        )}
      </div>
    </div>
  );
};

export default Header;
