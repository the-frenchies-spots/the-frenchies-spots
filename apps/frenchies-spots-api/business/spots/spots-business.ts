import { spotsRepository } from "../../repositories";
import { ReadSpotDto, SpotDto, SpotPicturesDto } from "../../dto";
import { codeErrors, GenericError } from "../../utils";
import { UpdateSpotDto, UpdateSpotPicturesDto } from "../../dto/spot-dto";
import {
  CreateSpotResult,
  SpotFindByIdResult,
  SpotFindManyResult,
  UpdateExistingSpotResult,
} from "../../types";
import { boolean } from "zod";
const { SPOT_ID_NOT_MATCH_PROFILE_ID, SPOT_NOT_FOUND } = codeErrors;

const spotsBusiness = {
  getAll: (data: ReadSpotDto): SpotFindManyResult => {
    const { searchValue, orderBy, skip, take, itinaryIDs, tagIDs, ...other } =
      data;
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
  ): UpdateExistingSpotResult => {
    const { id: spotId, pictures, tags, ...other } = data;
    const updateData = { ...other, tags };
    await checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);

    const oldTags = spotsRepository.getTagBySpotId(spotId);
    const connectTags: { id: string }[] = new Array();
    const disconnectTags: { id: string }[] = new Array();
    oldTags.arguments.forEach((oldTag: { id: string }) => {
      let tagToDelete: boolean = true;
      tags.forEach((tag: { id: string }) => {
        if (oldTag === tag) {
          connectTags.push(tag);
          tagToDelete = false;
        }
      });
      if (tagToDelete) {
        disconnectTags.push(oldTag);
      }
    });
    tags.forEach((tag) => {
      let tagToAdd: boolean = true;
      oldTags.arguments.forEach((oldTag: { id: string }) => {
        if (tag === oldTag) {
          tagToAdd = false;
        }
      });
      if (!tagToAdd) {
        connectTags.push(tag);
      }
    });

    return spotsRepository.update(
      updateData,
      spotId,
      connectTags,
      disconnectTags,
      pictures
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
