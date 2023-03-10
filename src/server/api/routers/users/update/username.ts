import { protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const username = protectedProcedure
  .input(
    z.object({
      username: z.string(),
    })
  )
  .mutation(async ({ ctx: { user, prisma }, input }) => {
    await prisma.user.update({
      where: {
        id: user,
      },
      data: {
        username: input.username,
      },
    });
  });
