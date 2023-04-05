import { spotsBusiness } from "../../business";
import { ReadSpotDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { SpotFindByIdResult, SpotFindManyResult } from "../../types";

export const spotsQuery = {
  spots: (
    _: undefined,
    data: ReadSpotDto,
    context: TContext
  ): SpotFindManyResult => {
    const { user } = context;
    const profileId = user?.profile?.id;
    return spotsBusiness.getAll(data, profileId);
  },

  spot: (
    _: undefined,
    data: { id: string },
    context: TContext
  ): SpotFindByIdResult => {
    const { id: spotId } = data;
    const { user } = context;
    const profileId = user?.profile?.id;

    return spotsBusiness.getById(spotId, profileId);
  },
};
