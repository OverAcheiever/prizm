import { api } from "@/utils/api";

const keep = () => {
  const a = api.users.login.useQuery({});

  return <div>Enter</div>;
};

export default keep;
