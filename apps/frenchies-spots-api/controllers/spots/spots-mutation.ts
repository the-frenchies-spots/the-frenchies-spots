import { spotsBusiness } from '../../business';
import {
  SpotDto,
  UpdateSpotDto,
  SpotPicturesDto,
  UpdateSpotPicturesDto
} from '../../dto/spot-dto';
import { TContext } from '../../graphql/context';
import { CreateSpotResult, UpdateExistingSpotResult } from '../../types';
import { GenericError, codeErrors } from '../../utils';
const { UNAUTHENTICATED } = codeErrors;

export const spotsMutation = {
  createSpot: (
    _: undefined,
    data: SpotDto & { pictures: SpotPicturesDto },
    context: TContext
  ): CreateSpotResult => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);
    return spotsBusiness.create(data, profileId);
  },

  updateSpot: (
    _: undefined,
    data: UpdateSpotDto & { pictures: UpdateSpotPicturesDto },
    context: TContext
  ): UpdateExistingSpotResult => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);
    return spotsBusiness.update(data, profileId);
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
  }
};
