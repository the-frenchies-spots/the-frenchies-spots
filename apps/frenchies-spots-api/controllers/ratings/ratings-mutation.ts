import { ratingsBusiness } from "../../business/ratings";
import { UpdateRatingDto } from "../../dto/rating-dto";
import { TContext } from "../../graphql/context";
import { CreateOrUpdateRating } from "../../types";
import { codeErrors, GenericError } from "../../utils";

const { UNAUTHENTICATED } = codeErrors;

export const ratingsMutation = {
  createOrUpdateRating: (
    _: undefined,
    data: UpdateRatingDto,
    context: TContext
  ): CreateOrUpdateRating => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);

    const { spotId, ratingId, rate } = data;

    return ratingsBusiness.createOrUpdate(rate, ratingId, spotId, profileId);
  },
};
