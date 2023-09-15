import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { RatingInput } from '../dto/input/rating/rating-input';
import { RatingBusiness } from '../business/rating.business';
import { RatingEntity } from '../entity/rating.entity';
import { RatingResponse } from '../dto/response/rating-response';

@Resolver(() => RatingEntity)
export class RatingResolver {
  constructor(private readonly ratingBusiness: RatingBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => RatingResponse)
  createOrUpdateRating(
    @Args('ratingInput') ratingInput: RatingInput,
    @CurrentProfileId() profileId: string,
  ): Promise<RatingResponse> {
    return this.ratingBusiness.createOrUpdate(ratingInput, profileId);
  }
}
