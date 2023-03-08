import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

// Create client-side Magic instance
const createMagic = (key: string) => {
  return typeof window != "undefined"
    ? new Magic(key, {
        extensions: [new OAuthExtension()],
      })
    : undefined;
};

export const magic = createMagic("pk_live_E3CFF805706B8B93");
