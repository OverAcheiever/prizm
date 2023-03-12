import { getRpcUrl } from "@/utils/solana/getRpcUrl";
import { Cluster, Connection, Keypair, PublicKey } from "@solana/web3.js";
import base58 from "bs58";
import { env } from "@/env.mjs";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

const network: Cluster = "devnet";

export const connection = new Connection(getRpcUrl(network), "processed");

export const USDC_MINT = new PublicKey(
  "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"
);
