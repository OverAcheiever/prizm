import { connection, USDC_MINT } from "@/constants";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { Keypair, PublicKey } from "@solana/web3.js";
import base58 from "bs58";
import { env } from "@/env.mjs";

export const getATA = async (publicKey: PublicKey) => {
  const treasury = Keypair.fromSecretKey(base58.decode(env.TREASURY));

  return (
    await getOrCreateAssociatedTokenAccount(
      connection,
      treasury,
      USDC_MINT,
      publicKey
    )
  ).address;
};
