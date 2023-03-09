import QuickLinks from "./QuickLinks";

const Balance = () => {
  return (
    <div className="flex h-full w-full flex-col items-center pt-14">
      <div className="relative -ml-3 flex h-max w-max text-8xl font-semibold">
        <span className="mr-2.5 mt-3 flex h-full flex-grow items-center justify-center text-7xl">
          $
        </span>
        10M
      </div>

      <QuickLinks />

      <div className="flex h-full w-full justify-center ">
        <div className="mt-12 h-full w-full max-w-xl rounded-t-3xl border-t-0 border-white bg-[rgb(10,10,10)]"></div>
      </div>
    </div>
  );
};

export default Balance;
