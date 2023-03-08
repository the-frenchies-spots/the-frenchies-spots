import {
  type SpotDto,
  type SpotFilterDto,
  type SpotOrderDto,
  type SpotPaginationDto,
  type SpotPicturesDto,
  type UpdateSpotPicturesDto,
  type PrismaSpotFindManyDto
} from '../../dto';
import { Spot, Profile } from '../../models';

import { Prisma } from '@prisma/client';
import {
  Spot as SpotType,
  SpotPicture as SpotPictureType
} from '@prisma/client';

const spotsRepository = {
  updateAverageRatingBySpotId: (
    spotId: string,
    avg: SpotDto['averageRating']
  ) => {
    return Spot.update({
      where: {
        id: spotId
      },
      data: {
        averageRating: avg
      }
    });
  },

  getAll: (
    filterData: Prisma.SpotWhereInput,
    paginationData: SpotPaginationDto,
    orderBy: SpotOrderDto['orderBy'],
    nameContains: string
  ): PrismaSpotFindManyDto => {
    return Spot.findMany({
      orderBy: {
        averageRating: orderBy
      },

      where: {
        ...filterData,
        name: {
          contains: nameContains
        }
      },

      ...paginationData,

      include: { spotPicture: true }
    });
  },

  getById: (id: string) => {
    return Spot.findUnique({
      where: {
        id
      },
      include: { spotPicture: true, ratings: true, favorites: true }
    });
  },

  /**
   * @param {SpotDto} data
   * @param {SpotPicturesDto} pictures
   * @param {string} profileId
   */
  create: (
    data: Omit<Prisma.SpotCreateInput, 'profile'>,
    pictures: SpotPicturesDto,
    profileId: string
  ) => {
    return Spot.create({
      data: {
        ...data,
        profile: {
          connect: { id: profileId }
        },
        spotPicture: {
          create: [...pictures]
        }
      },
      include: { spotPicture: true }
    });
  },

  update: (
    data: SpotDto,
    spotId: string,
    pictures: UpdateSpotPicturesDto = []
  ) => {
    const spotPicture = {
      upsert: pictures.map((picture) => {
        const { id = undefined, url } = picture;
        return { where: { id }, update: { url }, create: { url } };
      })
    };

    return Spot.update({
      where: {
        id: spotId
      },
      data: pictures ? { ...data, spotPicture } : data,
      include: { spotPicture: true }
    });
  },

  /**
   * @param {string} profileId
   * @param {string} spotId
   */
  delete: (profileId: string, spotId: string) => {
    return Profile.update({
      where: {
        id: profileId
      },
      data: {
        spots: {
          delete: {
            id: spotId
          }
        }
      }
    })
      .then(() => true)
      .catch(() => false);
  }
};

export default spotsRepository;
