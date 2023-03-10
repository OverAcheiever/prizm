import { prisma } from "@/server/db";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const search = protectedProcedure
  .input(
    z.object({
      query: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const users = await prisma.user.findMany({
      where: {
        username: {
          search: input.query,
        },
      },
      select: {
        picture: true,
        username: true,
      },
    });

    return users;
  });
