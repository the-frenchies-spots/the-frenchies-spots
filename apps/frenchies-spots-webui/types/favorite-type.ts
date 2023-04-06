import { SpotType } from "./spot-type";

export interface TFavorite {
  id: string;
  spotId: string;
  profileId: string;
}

export interface FavoriteRequestResult {
  profile: { favorites: { id: string; spot: SpotType }[] };
}
