import { Favorite } from "@prisma/client";

export type FavoriteDto = Pick<Favorite, "profileId" | "spotId">;

export type UpdateFavoriteDto = Pick<Favorite, "id" | "profileId" | "spotId">;
