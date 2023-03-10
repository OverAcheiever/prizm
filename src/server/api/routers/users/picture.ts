import { prisma } from "@/server/db";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const picture = protectedProcedure.query(async ({ ctx }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: ctx.user,
    },
    select: {
      picture: true,
    },
  });

  return user!.picture;
});
