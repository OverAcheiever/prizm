import { connection } from "@/constants";
import { magic } from "@/utils/magic";
import { getATA } from "@/utils/solana/getATA";
import { PublicKey, Transaction } from "@solana/web3.js";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const get = protectedProcedure
  .input(
    z.object({
      username: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    const sender = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.user,
      },
      select: {
        publicKey: true,
      },
    });

    const recipient = await ctx.prisma.user.findUnique({
      where: {
        username: input.username,
      },
      select: {
        username: true,
        picture: true,
      },
    });

    if (!recipient || !sender) {
      throw new TRPCError({
        code: "NOT_FOUND",
      });
    }

    return {
      username: recipient.username!,
      picture: recipient.picture,
    };
  });
