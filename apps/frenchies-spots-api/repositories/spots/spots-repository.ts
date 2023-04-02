import {
  UpdateSpotDto,
  type SpotDto,
  type SpotOrderDto,
  type SpotPaginationDto,
  type SpotPicturesDto,
  type UpdateSpotPicturesDto,
} from "../../dto";
import {
  CreateSpotResult,
  SpotFindByIdResult,
  type UpdateRatingAverageBySpotIdResult,
  type SpotFindManyResult,
  UpdateSpotResult,
  UpdateExistingSpotResult,
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

      include: { spotPicture: true, tags: { include: { tag: true } } },
    });
  },

  getById: (id: string): SpotFindByIdResult => {
    return Spot.findUnique({
      where: {
        id,
      },
      include: { spotPicture: true, tags: { include: { tag: true }}, ratings: true, favorites: true },
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
          create: tags.map((tag) => {
            return {
              tag: {
                connect: { id: tag.id },
              },
            };
          }),
        },
        profile: {
          connect: { id: profileId },
        },
        spotPicture: {
          create: [...pictures],
        },
      },
      include: { spotPicture: true, tags: { include: { tag: true }} },
    });
  },

  // update: (
  //   data: UpdateSpotDto,
  //   pictures: UpdateSpotPicturesDto = [],
  //   tags: {id: string}[]
  // ): any => {
  //   const spotPicture = {
  //     upsert: pictures.map((picture) => {
  //       const { id = undefined, url } = picture;
  //       return { where: { id }, update: { url }, create: { url } };
  //     }),
  //   };

    // const tagOnSpot = {
    //   upsert: tags.map((tag) => {
    //     const { id = undefined } = tag;
    //     return { where: { id }, update: { id }, create: { id } };
    //   }),
    // };

    // const tagsOnSpot = {
    //   create: tags.map((tag) => {
    //       console.log("---------je suis dedans ! ---------", tag);
    //       return {
    //         tag: {
    //           connect: { id: tag.id }
    //         }
    //       }
    //     })
    // }

    // const { id: spotId, ...other } = data;
    // const updateData = { ...other };
    // console.log( "je suis dans le REPO");
    // return Spot.update({
    //   where: {
    //     id: spotId,
    //   },
      
    //   data: {
    //     ...updateData,
    //     spotPicture: spotPicture
    //   },
      // data: pictures
      //     ? {
      //         ...data,
      //         spotPicture,
      //       }
      //     : {
      //         data,
      //       },
  //     include: { spotPicture: true, tags: { include: { tag: true }} },
  //   });
  // },

// data: pictures 
      //   ? { 
      //     ...updateData,
      //     spotPicture,
      //     // tags: {
      //     //   deleteMany: {},
      //     // },
      //     tags: {
      //       deleteMany: {},
      //       create: {
      //         tag: {
      //           connect: {
      //             id: "coucou"
      //           }
      //         }
      //       }
      //     },
      //     }
      //   : {
      //     data,
      //   },
      //   // spotPicture: spotPicture
      // },

  update: (
    data: SpotDto,
    spotId: string,
    tags: { id: string }[],
    // pictures: UpdateSpotPicturesDto = []
  ): any => {
    // const spotPicture = {
    //   upsert: pictures.map((picture) => {
    //     const { id = undefined, url } = picture;
    //     return { where: { id }, update: { url }, create: { url } };
    //   })
    // };

    return Spot.update({
      where: {
        id: spotId
      },

      data: {
        ...data,
        tags: {
          deleteMany: {},
          create: tags.map((tag) => {
            return {
              tag: {
                connect: { id: tag.id },
              },
            };
          }),
        },
        // spotPicture: spotPicture,
      },

      // data: pictures ? { ...data, spotPicture } : data,
      include: { tags: { include: { tag: true }} },
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
  }
};

export default spotsRepository;
