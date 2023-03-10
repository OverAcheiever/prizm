import { createTRPCRouter } from "../../trpc";

import { login } from "./login";
import { picture } from "./picture";
import { balance } from "./balance";
import { search } from "./search";

import { update } from "./update";

export const users = createTRPCRouter({
  login,
  picture,
  balance,
  search,
  update,
});
