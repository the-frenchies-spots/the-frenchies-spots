import { itinariesRepository } from "../../repositories";
import { CreateItinaryDto, buysItinaryDto } from "../../dto";
// import { SpotCreateCoordinateDto } from "../../dto/spot-dto";
import { ProfileSpotDto } from "./../../dto/spot-dto";

const itinariesBusiness = {
  /**
   * Get all itinary
   */
  getAll: () => {
    return itinariesRepository.getAll();
  },

  /**
   * @param {CreateItinaryDto} data
   */
  // create: (data: CreateItinaryDto, profileId: string) => {
  //   const { spots } = data;

  //   // Asign the auth user to every spots
  //   const createItinary: ProfileSpotDto[] = spots.map((spot) => ({
  //     ...spot,
  //     profileId,
  //   }));

  //   return itinariesRepository.create({ ...data, spots: createItinary });
  // },

  /**
   * @param {buysItinaryDto} data
   */
  connectUser: (data: buysItinaryDto) => {
    return itinariesRepository.connectUser(data);
  },
};

export default itinariesBusiness;
