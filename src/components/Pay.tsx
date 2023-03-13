import Link from "next/link";
import { useRouter } from "next/router";

const Pay = () => {
  const router = useRouter();
  const username = router.query.user;

  return (
    <Link href={`/${username}/pay`}>
      <div className="flex w-full items-center justify-center p-3 py-5">
        <button className="h-14 w-full rounded-full bg-black font-aeonik text-xl text-white">
          PAY
        </button>
      </div>
    </Link>
  );
};

export default Pay;
