import { favoritesBusiness } from "../../business";
import { UpdateFavoriteDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { codeErrors, GenericError } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const favoritesMutation = {
    toggleFavorite: (
      _: undefined,
      data: UpdateFavoriteDto,
      context: TContext
    ) => {
      const { user } = context;
      const profileId = user?.profile.id;
      if (!profileId) throw new GenericError(UNAUTHENTICATED);

      const { spotId, id:favoriteId } = data;

      return favoritesBusiness.createOrDelete(spotId, favoriteId, profileId);
    },
};
