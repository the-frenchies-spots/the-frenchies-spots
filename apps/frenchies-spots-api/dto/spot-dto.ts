import { Spot } from "@prisma/client";
import { z } from "zod";

export const CATEGORIES_SPOT_AND_TAG = [
  "SPARE_TIME_SPOT",
  "RESOURCES_SPOT",
] as const;

export interface ProfileSpotDto
  extends Pick<Spot, "name" | "description" | "lat" | "lng"> {
  profileId: string;
}

const spotPictureDtoSchema = z.array(
  z.object({
    url: z
      .string({ invalid_type_error: "Url must be a string" })
      .url({ message: "Invalid url" }),
  })
);
export type SpotPicturesDto = z.infer<typeof spotPictureDtoSchema>;

const updateSpotPictureDtoSchema = z.array(
  z.object({
    id: z.string(),
    url: z
      .string({ invalid_type_error: "Url must be a string" })
      .url({ message: "Invalid url" }),
  })
);
export type UpdateSpotPicturesDto = z.infer<typeof updateSpotPictureDtoSchema>;

const spotDtoSchema = z.object({
  name: z.string(),
  description: z.string(),
  isCanPark: z.boolean(),
  isHidden: z.boolean(),
  category: z.enum(CATEGORIES_SPOT_AND_TAG),
  itinaryIDs: z.array(z.string()),
  lat: z.number(),
  lng: z.number(),
  region: z.string(),
  address: z.string(),
  averageRating: z.number(),
  tags: z.array(z.object({ id: z.string() })),
});

export type SpotDto = z.infer<typeof spotDtoSchema>;

const updateSpotDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  isCanPark: z.boolean(),
  isHidden: z.boolean(),
  category: z.enum(CATEGORIES_SPOT_AND_TAG),
  itinaryIDs: z.array(z.string()),
  lat: z.number(),
  lng: z.number(),
  region: z.string(),
  address: z.string(),
  averageRating: z.number(),
  tags: z.array(z.object({ id: z.string() })),
});

export type UpdateSpotDto = z.infer<typeof updateSpotDtoSchema>;

const spotFilterDtoSchema = z.object({
  id: z.string(),
  isCanPark: z.boolean(),
  isHidden: z.boolean(),
  category: z.enum(CATEGORIES_SPOT_AND_TAG),
  itinaryIDs: z.array(z.string()),
  lat: z.number(),
  lng: z.number(),
  profileId: z.string(),
  region: z.string(),
  address: z.string(),
  averageRating: z.number(),
  tags: z.array(z.string()),
});
export type SpotFilterDto = z.infer<typeof spotFilterDtoSchema>;

const spotPaginationDtoSchema = z.object({
  take: z.number(),
  skip: z.number(),
});
export type SpotPaginationDto = z.infer<typeof spotPaginationDtoSchema>;

export type SpotOrderDto = { orderBy: "asc" | "desc" };

export interface ReadSpotDto
  extends SpotFilterDto,
    SpotPaginationDto,
    SpotOrderDto {
  searchValue: string;
  tagListId: string[];
}
