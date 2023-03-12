import { createTRPCRouter } from "../../trpc";

import { login } from "./login";
import { picture } from "./picture";
import { balance } from "./balance";
import { search } from "./search";
import { deposit } from "./deposit";
import { get } from "./get";
import { send } from "./send";

import { update } from "./update";

export const users = createTRPCRouter({
  login,
  picture,
  balance,
  search,
  deposit,
  get,
  send,
  update,
});
