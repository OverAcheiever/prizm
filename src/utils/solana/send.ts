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
import { env } from "@/env.mjs";

export const send = async ({
  sender,
  recipient,
  amount,
}: {
  sender: PublicKey;
  recipient: PublicKey;
  amount: number;
}) => {
  const treasury = Keypair.fromSecretKey(base58.decode(env.TREASURY));

  const senderATA = await getAssociatedTokenAddress(sender, USDC_MINT, true);
  const recipientATA = await getAssociatedTokenAddress(
    recipient,
    USDC_MINT,
    true
  );

  const decimals = (await await getMint(connection, USDC_MINT)).decimals;
  const _amount = amount * 10 ** decimals;

  await sendGas({
    treasury,
    publicKey: sender,
  });

  const transfer = new Transaction({
    feePayer: sender,
    recentBlockhash: (await await connection.getLatestBlockhash()).blockhash,
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

  // const transfer = new VersionedTransaction(
  //   new TransactionMessage({
  //     payerKey: treasury.publicKey,
  //     recentBlockhash: (await connection.getLatestBlockhash()).blockhash,
  //     instructions: [
  //       createTransferCheckedInstruction(
  //         senderATA,
  //         USDC_MINT,
  //         recipientATA,
  //         sender,
  //         _amount,
  //         decimals
  //       ),
  //     ],
  //   }).compileToV0Message()
  // );

  return Buffer.from(
    transfer.serialize({
      requireAllSignatures: false,
    })
  ).toString("base64");
};

const sendGas = async ({
  treasury,
  publicKey,
}: {
  treasury: Keypair;
  publicKey: PublicKey;
}) => {
  const hash = await connection.getLatestBlockhash();

  const isSenderInitialized = await connection.getAccountInfo(publicKey);

  const gas = new VersionedTransaction(
    new TransactionMessage({
      payerKey: treasury.publicKey,
      recentBlockhash: hash.blockhash,
      instructions: [
        SystemProgram.transfer({
          fromPubkey: treasury.publicKey,
          toPubkey: publicKey,
          lamports: !isSenderInitialized
            ? (await getMinimumBalance()) + 5000
            : 5000,
        }),
      ],
    }).compileToV0Message()
  );

  gas.sign([treasury]);

  await connection.sendTransaction(gas);
};

const getMinimumBalance = async () => {
  return await connection.getMinimumBalanceForRentExemption(0);
};
