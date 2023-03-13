import { connection, USDC_MINT } from "@/constants";
import {
  createTransferCheckedInstruction,
  getAssociatedTokenAddress,
  getMint,
} from "@solana/spl-token";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import base58 from "bs58";
// import { env } from "@/env.mjs";
import { getATA } from "./getATA";

export const send = async ({
  sender,
  recipient,
  amount,
}: {
  sender: PublicKey;
  recipient: PublicKey;
  amount: number;
}) => {
  const senderATA = await getAssociatedTokenAddress(USDC_MINT, sender);
  const recipientATA = await getAssociatedTokenAddress(USDC_MINT, recipient);

  const decimals = (await await getMint(connection, USDC_MINT)).decimals;
  const _amount = amount * 10 ** decimals;

  const hash = await connection.getLatestBlockhash();

  const tx = new Transaction({
    feePayer: new PublicKey("HjAtUMRS2qSQjLXUVC12rcXR9jdL8rbEPmZoMmumpxYP"),
    recentBlockhash: hash.blockhash,
  }).add(
    createTransferCheckedInstruction(
      senderATA,
      USDC_MINT,
      recipientATA,
      sender,
      _amount,
      decimals
    )
  );

  return tx;
};
