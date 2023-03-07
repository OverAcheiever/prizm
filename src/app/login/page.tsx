const page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-24 font-aeonik text-7xl font-bold">LOGIN</div>

      <div className="absolute left-0 right-0 bottom-0 flex w-full justify-center p-10">
        <div className="flex w-full max-w-md flex-col gap-y-5">
          <button className="flex h-14 w-full items-center justify-center rounded bg-white">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
              className="h-10 w-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
