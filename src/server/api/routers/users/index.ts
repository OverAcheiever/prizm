import { createTRPCRouter } from "../../trpc";

import { login } from "./login";
import { picture } from "./picture";
import { search } from "./search";
import { deposit } from "./deposit";
import { balance } from "./balance";
import { get } from "./get";
import { transfers } from "./transfers";

import { update } from "./update";

export const users = createTRPCRouter({
  login,
  picture,
  search,
  deposit,
  get,
  balance,
  transfers,
  update,
});
