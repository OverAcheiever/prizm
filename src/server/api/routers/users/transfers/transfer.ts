import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../../trpc";
import { connection } from "@/constants";
import base58 from "bs58";
import { env } from "@/env.mjs";
import { prisma } from "@/server/db";

export const transfer = protectedProcedure
  .input(
    z.object({
      recipient: z.string(),
      amount: z.number(),
      tx: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.user,
      },
      select: {
        id: true,
        publicKey: true,
      },
    })!;

    const recipient = await ctx.prisma.user.findUnique({
      where: {
        username: input.recipient,
      },
      select: {
        id: true,
        publicKey: true,
      },
    });

    if (!user || !recipient) {
      throw new TRPCError({
        code: "BAD_REQUEST",
      });
    }

    const treasury = Keypair.fromSecretKey(base58.decode(env.TREASURY));
    const tx = Transaction.from(Buffer.from(input.tx, "base64"));
    tx.partialSign(treasury);

    console.log(tx.serialize().toString("base64"));

    await connection.sendRawTransaction(tx.serialize());

    await prisma.transfer.create({
      data: {
        fromUserId: user.id,
        toUserId: recipient.id,
        amount: input.amount,
      },
    });
  });
