import { Favorite, Spot, Profile } from '../../models';
import {
  CreateFavoriteResult,
  DeleteFavoriteResult,
  FavoriteByIdResult,
  FavoriteFindByProfileResult
} from '../../types';

const favoritesRepository = {
  getProfileFavorites: (
    profileId: string
  ): FavoriteFindByProfileResult => {
    return Profile.findUnique({
      where: {
        id: profileId
      },
      include: {
        favorites: {
          include: { spot: { include: { spotPicture: true } } }
        }
      }
    });
  },

  getById: (id: string): FavoriteByIdResult => {
    return Favorite.findUnique({
      where: {
        id
      }
    });
  },

  create: (spotId: string, profileId: string): CreateFavoriteResult => {
    return Spot.update({
      where: {
        id: spotId
      },
      data: {
        favorites: {
          create: {
            profileId
          }
        }
      },
      include: { favorites: true }
    });
  },

  delete: (spotId: string, favoriteId: string): DeleteFavoriteResult => {
    return Spot.update({
      where: {
        id: spotId
      },
      data: {
        favorites: {
          delete: {
            id: favoriteId
          }
        }
      },
      include: { favorites: true }
    });
  }
};

export default favoritesRepository;
