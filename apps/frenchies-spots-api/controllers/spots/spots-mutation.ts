import { spotsBusiness } from "../../business";
import {
  SpotDto,
  UpdateSpotDto,
  SpotPicturesDto,
  UpdateSpotPicturesDto,
} from "../../dto/spot-dto";
import { TContext } from "../../graphql/context";
import { CreateSpotResult, UpdateExistingSpotResult } from "../../types";
import { GenericError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const spotsMutation = {
  createSpot: async (
    _: undefined,
    data: SpotDto & { spotPicture: SpotPicturesDto },
    context: TContext
  ): Promise<CreateSpotResult> => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);
    return await spotsBusiness.create(data, profileId);
  },

  updateSpot: async (
    _: undefined,
    data: UpdateSpotDto & { spotPicture: UpdateSpotPicturesDto },
    context: TContext
  ): Promise<UpdateExistingSpotResult> => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);
    return await spotsBusiness.update(data, profileId);
  },

  /**
   * @param {string} profileId
   * @param {string} spotId
   */
  deleteSpot: (
    _: undefined,
    data: UpdateSpotDto,
    context: TContext
  ): Promise<boolean> => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);
    return spotsBusiness.delete(data, profileId);
  },
};
