import { Rating, Spot } from '../../models';
import {
  RatingAverageBySpotIdResult,
  RatingCreateOrUpdate,
  RatingFindByIdResult,
  RatingFindManyResult
} from '../../types';

const ratingsRepository = {
  getAll: (): RatingFindManyResult => {
    return Rating.findMany();
  },

  getById: (id: string): RatingFindByIdResult => {
    return Rating.findUnique({
      where: {
        id
      }
    });
  },

  getSpotAverageRating: (spotId: string): RatingAverageBySpotIdResult => {
    return Rating.aggregate({
      where: { spotId },
      _avg: {
        rate: true
      },
      _count: {
        rate: true
      }
    });
  },

  createOrUpdate: (
    rate: number,
    ratingId: string | undefined,
    spotId: string,
    profileId: string
  ): RatingCreateOrUpdate => {
    return Rating.upsert({
      where: { id: ratingId },
      update: { rate, profileId },
      create: {
        rate,
        profileId,
        spotId
      }
    });
  }
};

export default ratingsRepository;
