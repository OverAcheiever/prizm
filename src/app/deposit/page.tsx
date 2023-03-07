import Input from "./Input";
import Lable from "./Lable";
import Pay from "./pay";

const page = () => {
  return (
    <>
      <div className="mt-6 flex w-full flex-col items-center justify-center">
        <Input />
        <Lable />
      </div>

      <Pay />
    </>
  );
};

export default page;
