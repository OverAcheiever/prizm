import { createTRPCRouter } from "@/server/api/trpc";

import { username } from "./username";

export const update = createTRPCRouter({
  username,
});
