const Loading = () => {
  return (
    <div className="px-3">
      <div className="flex h-16 w-11/12 items-center gap-x-5">
        <div className="h-10 w-10 animate-pulse rounded-full bg-neutral-900"></div>
        <div className="h-6 flex-grow animate-pulse rounded bg-neutral-900 "></div>
      </div>
      <div className="flex h-16 w-full items-center gap-x-5">
        <div className="h-10 w-10 animate-pulse rounded-full bg-neutral-900"></div>
        <div className="h-6 w-40 animate-pulse rounded bg-neutral-900 "></div>
      </div>
      <div className="flex h-16 w-full items-center gap-x-5">
        <div className="h-10 w-10 animate-pulse rounded-full bg-neutral-900"></div>
        <div className="h-6 w-60 animate-pulse rounded bg-neutral-900 "></div>
      </div>
    </div>
  );
};

export default Loading;
