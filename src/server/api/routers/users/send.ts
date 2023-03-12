import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";
import { send as getTx } from "@/utils/solana/send";
import { connection } from "@/constants";

export const send = protectedProcedure
  .input(
    z.object({
      recipient: z.string(),
      amount: z.number(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.user,
      },
      select: {
        publicKey: true,
      },
    })!;

    const recipient = await ctx.prisma.user.findUnique({
      where: {
        username: input.recipient,
      },
      select: {
        publicKey: true,
      },
    });

    if (!user || !recipient) {
      throw new TRPCError({
        code: "BAD_REQUEST",
      });
    }

    console.log(user.publicKey, recipient.publicKey);

    return await getTx({
      sender: new PublicKey(user.publicKey),
      recipient: new PublicKey(recipient.publicKey),
      amount: input.amount,
    });
  });
