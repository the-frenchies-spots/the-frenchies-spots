import { spotsRepository } from "../../repositories";
import { ReadSpotDto, SpotDto, SpotPicturesDto } from "../../dto";
import { codeErrors, GenericError } from "../../utils";
import { UpdateSpotDto, UpdateSpotPicturesDto } from "../../dto/spot-dto";
import {
  CreateSpotResult,
  SpotFindByIdResult,
  SpotFindManyResult,
  UpdateSpotResult,
} from "../../types";
const { SPOT_ID_NOT_MATCH_PROFILE_ID, SPOT_NOT_FOUND } = codeErrors;

const spotsBusiness = {
  getAll: (data: ReadSpotDto): SpotFindManyResult => {
    const { 
      searchValue, 
      orderBy, 
      skip, 
      take, 
      itinaryIDs, 
      tags, 
      ...other 
    } = data;
    const filterData = { ...other };
    const paginationData = { take, skip };

    return spotsRepository.getAll(
      filterData,
      paginationData,
      orderBy,
      searchValue
    );
  },

  getById: (spotId: string): SpotFindByIdResult => {
    return spotsRepository.getById(spotId);
  },

  create: (
    data: SpotDto & { pictures: SpotPicturesDto },
    profileId: string
  ): CreateSpotResult => {
    const { pictures, itinaryIDs, tags, ...other } = data;
    const spotData = { ...other };
    return spotsRepository.create(spotData, pictures, tags, profileId);
  },

   update: async (
    data: UpdateSpotDto & { pictures: UpdateSpotPicturesDto },
    currentProfileId: string
  ): Promise<UpdateSpotResult> => {
    const { id: spotId, pictures, tags, ...other } = data;

    await checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    
    return spotsRepository.update(
      data,
      pictures,
      tags
    );
  },

  delete: async (
    data: UpdateSpotDto,
    currentProfileId: string
  ): Promise<boolean> => {
    const { id: spotId } = data;
    await checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    return spotsRepository.delete(currentProfileId, spotId);
  },
};

async function checkCreatedByCurrentUserOrThrow(
  spotId: string,
  currentProfileId: string
): Promise<void> {
  const spot = await spotsRepository.getById(spotId);
  if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
  if (currentProfileId !== spot.profileId)
    throw new GenericError(SPOT_ID_NOT_MATCH_PROFILE_ID);
}

export default spotsBusiness;
