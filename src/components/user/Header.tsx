const Header = ({
  picture,
  username,
}: {
  picture?: string;
  username?: string;
}) => {
  return (
    <div className=" flex h-[4.5rem] w-full items-center lg:rounded-b-xl bg-white px-4">
      <div className="w-1/3">
        <div className="h-[3rem] w-[3rem] ">
          {picture ? (
            <img src={picture} className="h-full w-full rounded-full border-black border-[3px]" />
          ) : (
            <div className="h-full w-full animate-pulse rounded-full bg-gray-200"></div>
          )}
        </div>
      </div>
      <div className="flex w-1/3 justify-center text-[1.5rem] font-semibold text-black">
        {username ? (
          username
        ) : (
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
        )}
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default Header;
