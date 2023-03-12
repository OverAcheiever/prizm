import {
  getAssociatedTokenAddressSync,
  getMint,
  getOrCreateAssociatedTokenAccount,
  transferChecked,
} from "@solana/spl-token";
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";
import { connection, USDC_MINT } from "@/constants";
import { env } from "@/env.mjs";
import base58 from "bs58";
import { getATA } from "@/utils/solana/getATA";

export const deposit = protectedProcedure
  .input(
    z.object({
      amount: z.number().min(1).max(1000),
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
    });

    const treasury = Keypair.fromSecretKey(base58.decode(env.TREASURY));
    const treasuryATA = getAssociatedTokenAddressSync(
      USDC_MINT,
      treasury.publicKey
    );

    const userPubKey = new PublicKey(user!.publicKey);
    const userATA = (
      await getOrCreateAssociatedTokenAccount(
        connection,
        treasury,
        USDC_MINT,
        userPubKey
      )
    ).address;

    const decimals = (await getMint(connection, USDC_MINT)).decimals;
    const amount = input.amount * 10 ** decimals;

    await transferChecked(
      connection,
      treasury,
      treasuryATA,
      USDC_MINT,
      userATA,
      treasury,
      amount,
      decimals
    );
  });
