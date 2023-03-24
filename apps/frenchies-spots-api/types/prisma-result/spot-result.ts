import { Favorite, Prisma, Rating } from "@prisma/client";
import { Spot, SpotPicture } from "@prisma/client";

export type SpotFindManyResult = Prisma.PrismaPromise<
  (Spot & {
    spotPicture: SpotPicture[];
  })[]
>;

export type UpdateRatingAverageBySpotIdResult = Prisma.Prisma__SpotClient<
  Spot,
  never
>;

export type SpotFindByIdResult = Prisma.Prisma__SpotClient<
  | (Spot & {
      spotPicture: SpotPicture[];
      ratings: Rating[];
      favorites: Favorite[];
    })
  | null,
  null
>;

export type CreateSpotResult = Prisma.Prisma__SpotClient<
  Spot & {
    spotPicture: SpotPicture[];
  },
  never
>;

export type UpdateSpotResult = Prisma.Prisma__SpotClient<
  Spot & {
    spotPicture: SpotPicture[];
  },
  never
>;

export type UpdateExistingSpotResult = Promise<
  Spot & {
    spotPicture: SpotPicture[];
  }
>;
