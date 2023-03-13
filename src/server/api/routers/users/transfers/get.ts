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

export const get = protectedProcedure
  .input(
    z.object({
      username: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    const transfers = await prisma.transfer.findMany({
      where: {
        OR: [
          {
            from: {
              username: input.username,
            },
            toUserId: ctx.user,
          },
          {
            fromUserId: ctx.user,
            to: {
              username: input.username,
            },
          },
        ],
      },
      select: {
        from: {
          select: {
            username: true,
            picture: true,
          },
        },
        to: {
          select: {
            username: true,
            picture: true,
          },
        },
        amount: true,
      },
    });

    return transfers;
  });
