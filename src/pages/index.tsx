import Balance from "@/components/home/Balance";
import { api } from "@/utils/api";

const Home = () => {
  const a = api.users.login.useQuery({});

  return (
    <div className="h-screen w-full bg-black font-space text-white">
      <Balance />
    </div>
  );
};

export default Home;
