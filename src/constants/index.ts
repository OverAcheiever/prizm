import { getRpcUrl } from "@/utils/solana/getRpcUrl";
import { Cluster, Connection, PublicKey } from "@solana/web3.js";

const network: Cluster = "devnet";

export const connection = new Connection(getRpcUrl(network), "processed");

export const USDC_MINT = new PublicKey(
  "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"
);
