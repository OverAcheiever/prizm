import { api } from "@/utils/api";
import { AtSymbolIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";

const Search = ({
  handle,
  setHandle,
}: {
  handle?: string;
  setHandle: (handle: string | undefined) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setHandle(undefined);
    } else {
      setHandle(e.target.value);
    }
  };

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
    input.current?.select();
  }, []);

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 flex h-14 items-center justify-center">
        <AtSymbolIcon className="right-8 top-0 h-6 w-6 text-black" />
      </div>
      <input
        type="text"
        name=""
        id=""
        className="leading-0 h-14 w-full rounded-full border border-gray-400 bg-white pb-0.5 pl-[2.6rem] text-xl font-medium lowercase text-black outline-none"
        value={handle}
        onChange={handleChange}
        ref={input}
      />
      <div className="absolute right-6 top-0 bottom-0 flex h-14 items-center justify-center">
        <MagnifyingGlassIcon className="right-8 top-0 h-6 w-6 text-black" />
      </div>
    </div>
  );
};

export default Search;
