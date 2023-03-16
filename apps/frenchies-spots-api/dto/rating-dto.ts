import { Rating } from '@prisma/client';
import { z } from 'zod';

const ratingtoSchema = z.object({
  rate: z.number(),
  spotId: z.string(),
  profilId: z.string()
});

export type RatingDto = z.infer<typeof ratingtoSchema>;

export interface UpdateRatingDto
  extends Pick<Rating, 'rate' | 'profileId' | 'spotId'> {
  ratingId: Rating['id'];
}

const averageRatingDtoSchema = z.object({
  rate: z.number(),
  spotId: z.string()
});
export type AverageRatingDto = z.infer<typeof averageRatingDtoSchema>;
