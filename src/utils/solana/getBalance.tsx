import { PublicKey } from "@solana/web3.js";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { connection, USDC_MINT } from "@/constants";

export const getBalance = async (publicKey: PublicKey): Promise<string> => {
  const ATA = getAssociatedTokenAddressSync(USDC_MINT, publicKey);

  try {
    const balance = await connection.getTokenAccountBalance(ATA);

    return parseInt(
      (parseInt(balance.value.amount) / 10 ** balance.value.decimals)
        .toString()
        .split(".")[0]!
    ).toLocaleString();
  } catch (err) {
    console.log(err);
    return "0";
  }
};
