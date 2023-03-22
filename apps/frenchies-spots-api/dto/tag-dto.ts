import { z } from 'zod';

const tagDtoSchema = z.object({
  name: z.string(),
  tagPictureUrl: z.string(),
  isResources: z.boolean(),
  isSpareTime: z.boolean()
});

export type TagDto = z.infer<typeof tagDtoSchema>;
