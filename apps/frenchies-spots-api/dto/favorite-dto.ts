import { z } from 'zod';

const favoriteDtoSchema = z.object({
  profileId: z.string(),
  spotId: z.string()
});

export type FavoriteDto = z.infer<typeof favoriteDtoSchema>;

const updateFavoriteDtoSchema = z.object({
  id: z.string(),
  profilId: z.string(),
  spotId: z.string()
});

export type UpdateFavoriteDto = z.infer<typeof updateFavoriteDtoSchema>;
