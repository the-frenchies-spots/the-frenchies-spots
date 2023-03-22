import { SpotPicture } from '@prisma/client';
import { z } from 'zod';

const spotPictureDtoSchema = z.object({
  url: z.string(),
  spotId: z.string()
});
export type SpotPictureDto = z.infer<typeof spotPictureDtoSchema>;
