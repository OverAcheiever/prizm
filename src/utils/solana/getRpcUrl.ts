import { Cluster } from "@solana/web3.js";

export const getRpcUrl = (network: Cluster) => {
  switch (network) {
    case "devnet":
      return "https://rpc-devnet.helius.xyz/?api-key=849c1b69-965a-478e-919b-a53a9c8fe44f";
    case "testnet":
      return "https://api.testnet.solana.com";
    default:
      return "https://api.mainnet-beta.solana.com";
  }
};
