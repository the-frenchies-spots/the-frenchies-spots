import { Prisma, SpotPicture } from '@prisma/client';

export type CreateSpotPictureResult = Prisma.Prisma__SpotPictureClient<
  SpotPicture,
  never
>;

export type createOrUpdateSpotPictureResult =
  Prisma.Prisma__SpotPictureClient<SpotPicture, never>;
