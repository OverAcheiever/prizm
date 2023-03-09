import Google from "./Google";

const page = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="-mt-80 font-circa text-8xl font-bold">Login</div>

      <div className="absolute left-0 right-0 bottom-0 flex h-screen w-screen items-center justify-center p-10 ">
        <div className="flex w-full max-w-md flex-col gap-y-5">
          <Google />
        </div>
      </div>
    </div>
  );
};

export default page;
