import { z } from "zod";
import { publicProcedure } from "../../trpc";

export const login = publicProcedure
  .input(
    z.object({
      token: z.string(),
      email: z.string(),
      publicKey: z.string(),
      picture: z.string(),
      username: z.string().optional(),
    })
  )
  .output(
    z.object({
      username: z.string().nullable(),
    })
  )
  .mutation(async ({ ctx: { prisma }, input }) => {
    const user = await prisma.user.findUnique({
      where: {
        email: input.email,
      },
      select: {
        id: true,
        username: true,
      },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          email: input.email,
          publicKey: input.publicKey,
          picture: input.picture,
        },
      });
    }

    return {
      username: user ? user.username : null,
    };
  });
