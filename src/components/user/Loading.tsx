const From = () => {
  return (
    <div className={`flex flex-row items-end gap-x-2`}>
      <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200"></div>
      <div className="flex h-12 w-20 animate-pulse items-center justify-center rounded bg-gray-200 px-5 text-xl font-semibold text-white"></div>
    </div>
  );
};

const To = () => {
  return (
    <div className={`flex flex-row-reverse items-end gap-x-2`}>
      <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200"></div>
      <div className="flex h-12 w-20 animate-pulse items-center justify-center rounded bg-gray-200 px-5 text-xl font-semibold text-white"></div>
    </div>
  );
};

const Loading = () => {
  return (
    <>
      <From />
      <From />
      <To />
      <From />
      <To />
      <From />
    </>
  );
};

export default Loading;
