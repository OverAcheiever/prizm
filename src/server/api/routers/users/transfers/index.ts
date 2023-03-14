import { createTRPCRouter } from "@/server/api/trpc";

import { transfer } from "./transfer";
import { get } from "./get";
import { feed } from "./feed";

export const transfers = createTRPCRouter({
  transfer,
  get,
  feed,
});
