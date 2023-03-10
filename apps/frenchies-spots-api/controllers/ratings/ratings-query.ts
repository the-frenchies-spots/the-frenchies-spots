import { ratingsBusiness } from '../../business/ratings';
import { RatingFindByIdResult, RatingFindManyResult } from '../../types';

export const ratingsQuery = {
  ratings: (): RatingFindManyResult => {
    return ratingsBusiness.getAll();
  },

  rating: (_: undefined, data: { id: string }): RatingFindByIdResult => {
    const { id: ratingId } = data;
    return ratingsBusiness.getById(ratingId);
  }
};
