import { spotsRepository, tagsRepository } from "../../repositories";
import { ReadSpotDto, SpotDto, SpotPicturesDto, TagDto } from "../../dto";
import { codeErrors, GenericError } from "../../utils";
import { UpdateSpotDto, UpdateSpotPicturesDto } from "../../dto/spot-dto";
import {
  CreateSpotResult,
  SpotFindByIdResult,
  SpotFindManyResult,
  UpdateExistingSpotResult,
} from "../../types";
const { SPOT_ID_NOT_MATCH_PROFILE_ID, SPOT_NOT_FOUND, SPOT_CATEGORY_NOT_MATCH_TAG_CATEGORY, TAG_NOT_FOUND } = codeErrors;

const spotsBusiness = {
  getAll: (data: ReadSpotDto): SpotFindManyResult => {
    const { 
      searchValue,
      namesTag, 
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
      searchValue,
      namesTag,
    );
  },

  getById: (
    spotId: string,
    profileId: string | undefined
  ): SpotFindByIdResult => {
    return spotsRepository.getById(spotId, profileId);
  },


  create: async (
    data: SpotDto & { spotPicture: SpotPicturesDto },
    profileId: string
  ): Promise<CreateSpotResult> => {
    const { spotPicture, itinaryIDs, tags, ...other } = data;
    const spotData = { ...other };

    const { category: spotCategory } = data;
    await Promise.all(tags.map( async (tag) => {
      const tagData = await tagsRepository.getById(tag.id)
      if (tagData === null) {
        throw new GenericError(TAG_NOT_FOUND);
      }
      const tagCategory = tagData?.category
      await checkSpotCategoryAndTagCategoryAreTheSame(spotCategory, tagCategory);
    }));
    
    return await spotsRepository.create(spotData, spotPicture, tags, profileId);
  },

  update: async (
    data: UpdateSpotDto & { spotPicture: UpdateSpotPicturesDto },
    currentProfileId: string
  ): UpdateExistingSpotResult => {
    const { id: spotId, tags, spotPicture, ...other } = data;
    const updateData = { tags, ...other };
    
    await checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    
    const { category: spotCategory } = data;
    await Promise.all(tags.map( async (tag) => {
      const tagData = await tagsRepository.getById(tag.id)
      if (tagData === null) {
        throw new GenericError(TAG_NOT_FOUND);
      }
      const tagCategory = tagData?.category
      await checkSpotCategoryAndTagCategoryAreTheSame(spotCategory, tagCategory);
    }));
    
    return spotsRepository.update(updateData, spotId, tags, spotPicture);
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

function checkSpotCategoryAndTagCategoryAreTheSame (
  spotCategory: String,
  tagCategory: String,
): void {

  if (tagCategory !== spotCategory)
    throw new GenericError(SPOT_CATEGORY_NOT_MATCH_TAG_CATEGORY);
}

export default spotsBusiness;
