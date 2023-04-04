import { Rating } from "./rating-type";
import { TFavorite } from "./favorite-type";

export type SpotPicture = { url: string; id?: string };

export type SpotType = {
  id: string;
  profileId: string;
  category: "SPARE_TIME_SPOT" | "RESOURCES_SPOT";
  tags: { id: string }[];
  name: string;
  description: string;
  isCanPark: boolean;
  region: string;
  lat: number;
  lng: number;
  spotPicture: SpotPicture[];
  averageRating: number;
  ratings: Rating[];
  favorites: TFavorite[];
  isHidden: boolean;
};

export interface CreateSpotRequestParameters {
  category: "SPARE_TIME_SPOT" | "RESOURCES_SPOT";
  tags: { id: string }[];
  name: string;
  description: string;
  isCanPark: boolean;
  region: string;
  lat: number;
  lng: number;
  pictures: SpotPicture[];
}

export interface UpdateSpotRequestParameters {
  name: string;
  description: string;
  lat: number;
  lng: number;
  isCanPark: boolean;
  isCanVisit: boolean;
  isTouristic: boolean;
  region: string;
}

export interface ReadAllSpotRequestResult {
  spots: SpotType[];
}

export interface ReadOneSpotRequestResult {
  spot: Omit<SpotType, "tags"> & { tags: { tag: { id: string } }[] };
}
