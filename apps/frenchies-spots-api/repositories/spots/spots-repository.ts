import {
  type SpotDto,
  type SpotOrderDto,
  type SpotPaginationDto,
  type SpotPicturesDto,
  type UpdateSpotPicturesDto,
} from "../../dto";
import {
  CreateSpotResult,
  SpotFindByIdResult,
  UpdateSpotResult,
  type UpdateRatingAverageBySpotIdResult,
  type SpotFindManyResult,
} from "../../types";
import { Spot, Profile } from "../../models";

import { Prisma } from "@prisma/client";

const spotsRepository = {
  updateAverageRatingBySpotId: (
    spotId: string,
    avg: SpotDto["averageRating"]
  ): UpdateRatingAverageBySpotIdResult => {
    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        averageRating: avg,
      },
    });
  },

  getAll: (
    filterData: Prisma.SpotWhereInput,
    paginationData: SpotPaginationDto,
    orderBy: SpotOrderDto["orderBy"],
    nameContains: string
  ): SpotFindManyResult => {
    return Spot.findMany({
      orderBy: {
        averageRating: orderBy,
      },

      where: {
        ...filterData,
        name: {
          contains: nameContains,
        },
      },

      ...paginationData,

      include: { spotPicture: true },
    });
  },

  getById: (id: string): SpotFindByIdResult => {
    return Spot.findUnique({
      where: {
        id,
      },
      include: { spotPicture: true, ratings: true, favorites: true },
    });
  },

  /**
   * @param {SpotDto} data
   * @param {SpotPicturesDto} pictures
   * @param {string} profileId
   */
  create: (
    data: Omit<Prisma.SpotCreateInput, "profile">,
    pictures: SpotPicturesDto,
    tags: { id: string }[],
    profileId: string
  ): CreateSpotResult => {
    return Spot.create({
      data: {
        ...data,
        tags: {
          connect: tags,
        },
        profile: {
          connect: { id: profileId },
        },
        spotPicture: {
          create: [...pictures],
        },
      },
      include: { spotPicture: true, tags: true },
    });
  },

  update: (
    data: SpotDto,
    spotId: string,
    connectTagsId: { id: string }[],
    disconnectTagsId: { id: string }[],
    pictures: UpdateSpotPicturesDto = []
  ): UpdateSpotResult => {
    const spotPicture = {
      upsert: pictures.map((picture) => {
        const { id = undefined, url } = picture;
        return { where: { id }, update: { url }, create: { url } };
      }),
    };
    return Spot.update({
      where: {
        id: spotId,
      },
      data: pictures
        ? {
            ...data,
            spotPicture,
          }
        : {
            data,
          },

      include: { spotPicture: true },
    });
  },

  /**
   * @param {string} profileId
   * @param {string} spotId
   */
  delete: (profileId: string, spotId: string): Promise<boolean> => {
    return Profile.update({
      where: {
        id: profileId,
      },
      data: {
        spots: {
          delete: {
            id: spotId,
          },
        },
      },
    })
      .then(() => true)
      .catch(() => false);
  },

  getTagBySpotId: (id: string) => {
    const spotFind = Spot.findUnique({
      where: {
        id,
      },
      include: { spotPicture: true, ratings: true, favorites: true },
    });
    return spotFind.tags;
  },
};

export default spotsRepository;
