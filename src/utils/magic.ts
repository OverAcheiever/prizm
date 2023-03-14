import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import { SolanaExtension } from "@magic-ext/solana";
import { env } from "@/env.mjs";

const rpcUrl = "https://api.devnet.solana.com";

// Create client-side Magic instance
const createMagic = (key: string) => {
  return typeof window != "undefined"
    ? new Magic(key, {
        extensions: [
          new OAuthExtension(),
          new SolanaExtension({
            rpcUrl,
          }),
        ],
      })
    : undefined;
};

export const magic = createMagic(env.NEXT_PUBLIC_MAGIC_KEY);
