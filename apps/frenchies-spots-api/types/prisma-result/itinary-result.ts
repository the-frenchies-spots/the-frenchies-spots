import { Itinary, Prisma, Profile, Spot } from '@prisma/client';

export type ItinaryFindManyResult = Prisma.PrismaPromise<
  (Itinary & {
    spots: Spot[];
  })[]
>;

export type ConnectUserToItinary = Prisma.Prisma__ProfileClient<
  Profile & {
    itinaries: Itinary[];
  },
  never
>;
