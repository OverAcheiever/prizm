import { createTRPCRouter } from "@/server/api/trpc";

import { transfer } from "./transfer";

import { get } from "./get";

export const transfers = createTRPCRouter({
  transfer,
  get,
});
