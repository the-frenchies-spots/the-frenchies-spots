import { Rating } from "./rating-type";
import { TFavorite } from "./favorite-type";
import { TCategory } from "./tags-type";

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
  address: string;
  favorites: TFavorite[];
  isHidden: boolean;
  _count: {
    ratings: number;
  };
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
  address: string;
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
export type ITag = {
  tag: {
    id: string;
    name: string;
    description: string;
    category: string;
    tagPictureUrl: string;
  };
};
export type ITags = { tags: ITag[] };

export interface ReadOneSpotRequestResult {
  spot: Omit<SpotType, "tags"> & ITags;
}
