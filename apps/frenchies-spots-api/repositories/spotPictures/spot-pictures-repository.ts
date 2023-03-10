import { SpotPictureDto } from '../../dto';
import SpotPicture from '../../models/spotPicture';
import {
  createOrUpdateSpotPictureResult,
  CreateSpotPictureResult
} from '../../types';

const spotPicturesRepository = {
  create: (data: SpotPictureDto): CreateSpotPictureResult => {
    return SpotPicture.create({
      data: {
        ...data
      }
    });
  },

  createOrUpdate: (
    spotId: string,
    spotPictureId: string | undefined,
    url: string
  ): createOrUpdateSpotPictureResult => {
    return SpotPicture.upsert({
      where: { id: spotPictureId },
      update: { url },
      create: {
        url,
        spot: {
          connect: { id: spotId }
        }
      }
    });
  }
};

export default spotPicturesRepository;
