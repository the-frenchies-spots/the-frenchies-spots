import { Spot, SpotPicture } from '@prisma/client';
import { z } from 'zod';

const CATEGORIES_SPOT = ['SPARE_TIME_SPOT', 'RESOURCES_SPOT'] as const;

export interface ProfileSpotDto
  extends Pick<Spot, 'name' | 'description' | 'lat' | 'lng'> {
  profileId: string;
}

const spotPictureDtoSchema = z.array(
  z.object({
    url: z.string()
  })
);
export type SpotPicturesDto = z.infer<typeof spotPictureDtoSchema>;

const updateSpotPictureDtoSchema = z.array(
  z.object({
    id: z.string(),
    url: z.string()
  })
);
export type UpdateSpotPicturesDto = z.infer<
  typeof updateSpotPictureDtoSchema
>;

const spotDtoSchema = z.object({
  name: z.string(),
  description: z.string(),
  isCanPark: z.boolean(),
  isHidden: z.boolean(),
  category: z.enum(CATEGORIES_SPOT),
  itinaryIDs: z.array(z.string()),
  lat: z.number(),
  lng: z.number(),
  region: z.string(),
  averageRating: z.number(),
  tagIDs: z.array(z.string())
});
// export type SpotDto = z.infer<typeof spotDtoSchema>;
export interface SpotDto extends Omit<Spot, 'id' | 'tagIDs'> {
  tags: { id: string }[];
}

const updateSpotDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  isCanPark: z.boolean(),
  isHidden: z.boolean(),
  category: z.enum(CATEGORIES_SPOT),
  itinaryIDs: z.array(z.string()),
  lat: z.number(),
  lng: z.number(),
  region: z.string(),
  averageRating: z.number(),
  tagIDs: z.array(z.string())
});
export type UpdateSpotDto = z.infer<typeof updateSpotDtoSchema>;

const spotFilterDtoSchema = z.object({
  isCanPark: z.boolean(),
  isHidden: z.boolean(),
  category: z.enum(CATEGORIES_SPOT),
  itinaryIDs: z.array(z.string()),
  lat: z.number(),
  lng: z.number(),
  profileId: z.string(),
  region: z.string(),
  averageRating: z.number(),
  tagIDs: z.array(z.string())
});
export type SpotFilterDto = z.infer<typeof spotFilterDtoSchema>;

const spotPaginationDtoSchema = z.object({
  take: z.number(),
  skip: z.number()
});
export type SpotPaginationDto = z.infer<typeof spotPaginationDtoSchema>;

export type SpotOrderDto = { orderBy: 'asc' | 'desc' };

export interface ReadSpotDto
  extends SpotFilterDto,
    SpotPaginationDto,
    SpotOrderDto {
  searchValue: string;
}
