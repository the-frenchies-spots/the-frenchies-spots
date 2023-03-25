import { Rating } from "./rating-type";
import { TFavorite } from "./favorite-type";

export type SpotPicture = { url: string; id?: string };

export type SpotType = {
  id: string;
  name: string;
  description: string;
  isCanPark: boolean;
  isCanVisit: boolean;
  isTouristic: boolean;
  region: string;
  profileId: string;
  spotPicture: SpotPicture[];
  lat: number;
  lng: number;
  averageRating: number;
  ratings: Rating[];
  favorites: TFavorite[];
};

export interface CreateSpotRequestParameters {
  name: string;
  description: string;
  lat: number;
  lng: number;
  isCanPark: boolean;
  isCanVisit: boolean;
  isTouristic: boolean;
  region: string;
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
  spot: SpotType;
}
