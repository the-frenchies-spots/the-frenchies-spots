import { Prisma } from '@prisma/client';
import { Spot, SpotPicture } from '@prisma/client';

export type PrismaSpotFindManyDto = Prisma.PrismaPromise<
  (Spot & {
    spotPicture: SpotPicture[];
  })[]
>;
