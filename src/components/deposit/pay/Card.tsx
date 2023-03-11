import Logo from "@/components/Logo";

const Card = () => {
  return (
    <div className="flex h-60 w-full flex-col justify-between rounded-xl border bg-gray-100 text-black">
      <div>
        <div className="mt-8 flex w-full justify-center bg-black py-2 text-3xl font-semibold text-white">
          4123 5653 8977 3113
        </div>
      </div>
      <div className="flex justify-between px-5 pb-3">
        <div className="pb-3 pl-3 text-xl font-semibold">12/24</div>
        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Card;
