"use client";

import { magic } from "@/utils/magic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();

  const logout = async () => {
    await magic!.user.logout();
    router.push("/login");
  };
  useEffect(() => {
    logout();
  }, []);

  return <div></div>;
};

export default page;
