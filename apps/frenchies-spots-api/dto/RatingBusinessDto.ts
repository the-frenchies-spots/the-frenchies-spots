import { Rating } from '@prisma/client';
import { z } from 'zod';

const ratingBusinessDtoSchema = z.object({
  rate: z.number(),
  profilId: z.string(),
  spotId: z.string()
});
export type RatingBusinessDto = z.infer<typeof ratingBusinessDtoSchema>;
