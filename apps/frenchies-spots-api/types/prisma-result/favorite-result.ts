import {
  Favorite,
  Prisma,
  Profile,
  Spot,
  SpotPicture
} from '@prisma/client';

export type FavoriteFindByProfileResult = Prisma.Prisma__ProfileClient<
  | (Profile & {
      favorites: (Favorite & {
        spot: Spot & {
          spotPicture: SpotPicture[];
        };
      })[];
    })
  | null,
  null
>;

export type FavoriteByIdResult = Prisma.Prisma__FavoriteClient<
  Favorite | null,
  null
>;

export type CreateFavoriteResult = Prisma.Prisma__SpotClient<
  Spot & {
    favorites: Favorite[];
  },
  never
>;

export type DeleteFavoriteResult = Prisma.Prisma__SpotClient<
  Spot & {
    favorites: Favorite[];
  },
  never
>;

export type CreateDeleteFavoriteResult = Promise<
  | (Spot & {
      favorites: Favorite[];
    })
  | undefined
>;
