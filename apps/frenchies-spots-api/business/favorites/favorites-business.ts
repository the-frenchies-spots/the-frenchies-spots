import { favoritesRepository, spotsRepository } from '../../repositories';
import {
  CreateDeleteFavoriteResult,
  CreateFavoriteResult,
  DeleteFavoriteResult,
  FavoriteFindByProfileResult
} from '../../types';
import { codeErrors, GenericError } from '../../utils';

const { SPOT_NOT_FOUND, SPOT_ID_MATCH_PROFILE_ID } = codeErrors;

const favoritesBusiness = {
  getProfileFavorites: (
    profileId: string
  ): FavoriteFindByProfileResult => {
    return favoritesRepository.getProfileFavorites(profileId);
  },

  // create or delete favorite
  createOrDelete: async (
    spotId: string,
    favoriteId: string,
    profileId: string
  ): CreateDeleteFavoriteResult => {
    const spot = await spotsRepository.getById(spotId);

    if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
    if (profileId === spot.profileId)
      throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);

    if (favoriteId === '') {
      return favoritesRepository.create(spotId, profileId);
    }

    if (favoriteId !== '') {
      const favorite = await favoritesRepository.getById(favoriteId);

      if (profileId === favorite?.profileId) {
        return favoritesRepository.delete(spotId, favoriteId);
      }
    }
  }
};

export default favoritesBusiness;
