import { favoritesBusiness } from '../../business/favorites';
import { FavoriteFindByProfileResult } from '../../types';

export const favoritesQuery = {
  favorites: (
    _: undefined,
    data: { profileId: string }
  ): FavoriteFindByProfileResult => {
    const { profileId } = data;
    return favoritesBusiness.getProfileFavorites(profileId);
  }
};
