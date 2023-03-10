import { prisma } from "@/server/db";
import { getBalance } from "@/utils/solana/getBalance";
import { PublicKey } from "@solana/web3.js";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const balance = protectedProcedure.query(async ({ ctx }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: ctx.user,
    },
    select: {
      publicKey: true,
    },
  });

  const publicKey = new PublicKey(user!.publicKey);
  const balance = await getBalance(publicKey);

  return balance;
});
