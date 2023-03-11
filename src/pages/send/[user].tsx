const User = () => {
  return (
    <div className="flex h-screen w-full justify-center bg-black font-space text-white">
      <div className="flex h-full w-full max-w-lg flex-col justify-between">
        <div></div>
        <div className="grid w-full grid-cols-3 grid-rows-3 text-6xl font-bold divide-x-2 divide-y-2 divide-neutral-900">
          <button className="flex h-28 w-full items-center justify-center">
            1
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            2
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            3
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            4
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            5
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            6
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            7
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            8
          </button>
          <button className="flex h-28 w-full items-center justify-center">
            9
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
