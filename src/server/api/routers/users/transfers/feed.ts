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

export const feed = protectedProcedure.query(async ({ ctx, input }) => {
  const transfers = await prisma.transfer.findMany({
    where: {
      OR: [
        {
          toUserId: ctx.user,
        },
        {
          fromUserId: ctx.user,
        },
      ],
    },
    select: {
      from: {
        select: {
          id: true,
          username: true,
          picture: true,
        },
      },
      to: {
        select: {
          id: true,
          username: true,
          picture: true,
        },
      },
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // if from or to id is equal to ctx.user, then return the other user
  // format the data as
  const feed: {
    username: string;
    picture: string;
  }[] = transfers
    .map((transfer) => {
      if (transfer.from.id === ctx.user) {
        return {
          username: transfer.to.username!,
          picture: transfer.to.picture,
        };
      } else {
        return {
          username: transfer.from.username!,
          picture: transfer.from.picture,
        };
      }
    })
    .filter((item, index, self) => {
      return (
        index ===
        self.findIndex((t) => {
          return t.username === item.username;
        })
      );
    });

  return feed;
});
