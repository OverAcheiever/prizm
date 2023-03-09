import { z } from "zod";
import { publicProcedure } from "../../trpc";

export const login = publicProcedure.input(z.union)