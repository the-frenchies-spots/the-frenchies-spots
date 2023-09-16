import { Injectable } from '@nestjs/common';

import ErrorService from '../service/error.service';
import { codeErrors } from '../enum/code-errors.enum';
import { RatingInput } from '../dto/input/rating/rating-input';
import { RatingRepository } from '../repository/rating.repository';
import { SpotRepository } from '../repository/spot.repository';
import { RatingResponse } from '../dto/response/rating-response';

const {
  RATING_OUT_OF_RANGE,
  SPOT_ID_MATCH_PROFILE_ID,
  SPOT_NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = codeErrors;

@Injectable()
export class RatingBusiness {
  constructor(
    private ratingRepository: RatingRepository,
    private spotRepository: SpotRepository,
  ) {}

  async createOrUpdate(
    ratingInput: RatingInput,
    profileId: string,
  ): Promise<RatingResponse> {
    const { rate, spotId } = ratingInput;

    if (rate < 0 || rate > 5) throw new ErrorService(RATING_OUT_OF_RANGE);

    const spot = await this.spotRepository.getById(spotId);

    if (!spot) throw new ErrorService(SPOT_NOT_FOUND, spotId);
    if (profileId === spot.profileId)
      throw new ErrorService(SPOT_ID_MATCH_PROFILE_ID);

    const userRating = await this.ratingRepository.createOrUpdate(
      ratingInput,
      profileId,
    );

    const average = await this.ratingRepository.getSpotAverageRating(spotId);

    const newAverage = average._avg.rate || 0;
    const maxVote = average._count.rate;

    const spotUpdated = await this.spotRepository.updateAverageRatingBySpotId(
      spotId,
      newAverage,
    );
    if (!spotUpdated) throw new ErrorService(INTERNAL_SERVER_ERROR);

    return { currentRating: userRating, avg: newAverage, maxVote };
  }
}
