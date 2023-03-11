import { Cluster } from "@solana/web3.js";

export const getRpcUrl = (network: Cluster) => {
  switch (network) {
    case "devnet":
      return "https://summer-light-dew.solana-devnet.discover.quiknode.pro/24fe6713fe1012af12aa16b58d3e4d9f95f7dec5/";
    case "testnet":
      return "https://api.testnet.solana.com";
    default:
      return "https://api.mainnet-beta.solana.com";
  }
};
