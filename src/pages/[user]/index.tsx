import Pay from "@/components/Pay";
import Header from "@/components/user/Header";
import Transfers from "@/components/user/Transfers";

const User = () => {
  return (
    <div className="flex h-[100svh] w-full justify-center font-space bg-black text-white">
      <div className="flex h-full w-full max-w-lg flex-col  bg-white">
        <Header />
        <Transfers />
        <Pay />
      </div>
    </div>
  );
};

export default User;
