import { Prisma, Rating } from '@prisma/client';

export type RatingFindManyResult = Prisma.PrismaPromise<Rating[]>;

export type RatingFindByIdResult = Prisma.Prisma__RatingClient<
  Rating | null,
  null
>;

export type RatingAverageBySpotIdResult = Prisma.PrismaPromise<
  Prisma.GetRatingAggregateType<{
    where: {
      spotId: string;
    };
    _avg: {
      rate: true;
    };
    _count: {
      rate: true;
    };
  }>
>;

export type RatingCreateOrUpdate = Prisma.Prisma__RatingClient<
  Rating,
  never
>;

export type CreateOrUpdateRating = Promise<{
  currentRating: Rating;
  avg: number;
  maxVote: number;
}>;
