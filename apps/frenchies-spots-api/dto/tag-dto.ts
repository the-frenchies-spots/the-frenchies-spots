import { z } from 'zod';
import { CATEGORIES_SPOT_AND_TAG } from './spot-dto';

const tagDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  tagPictureUrl: z.string(),
  category: z.enum(CATEGORIES_SPOT_AND_TAG)
});

export type TagDto = z.infer<typeof tagDtoSchema>;
