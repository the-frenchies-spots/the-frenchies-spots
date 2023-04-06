import { z } from "zod";

export const favoriteDtoSchema = z.object({
  profileId: z.string({ invalid_type_error: "Profile id must be a string" }),
  spotId: z.string({ invalid_type_error: "Spot id must be a string" }),
});

export type FavoriteDto = z.infer<typeof favoriteDtoSchema>;

export const updateFavoriteDtoSchema = z.object({
  id: z.string({ invalid_type_error: "id must be a string" }),
  profilId: z.string({ invalid_type_error: "Profile id must be a string" }),
  spotId: z.string({ invalid_type_error: "Spot id must be a string" }),
});

export type UpdateFavoriteDto = z.infer<typeof updateFavoriteDtoSchema>;
