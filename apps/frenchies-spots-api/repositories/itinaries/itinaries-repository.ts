import { buysItinaryDto } from "../../dto";
import { Itinary, Profile } from "../../models";
import { CreateItinariesRepositoryDto } from "../../dto";

const itinariesRepository = {
  getAll: () => {
    return Itinary.findMany({
      include: { spots: true },
    });
  },

  /**
   * @param {CreateItinariesRepositoryDto} data
   */
  // create: (data: CreateItinariesRepositoryDto) => {
  //   const { spots } = data;
  //   return Itinary.create({
  //     data: {
  //       ...data,
  //       spots: {
  //         create: spots,
  //       },
  //     },
  //     include: { spots: true },
  //   });
  // },

  /**
   * Connect a user with an itinary
   * @param {buysItinaryDto} data
   */
  connectUser: (data: buysItinaryDto) => {
    const { profileId, itinaryId } = data;
    return Profile.update({
      where: {
        id: profileId,
      },
      data: {
        itinaries: {
          connect: {
            id: itinaryId,
          },
        },
      },
      include: { itinaries: true },
    });
  },
};

export default itinariesRepository;
