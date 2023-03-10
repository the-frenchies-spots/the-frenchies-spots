import { SpotPicture } from '@prisma/client';
import { spotPicturesBusiness } from '../../business';
import { SpotPictureDto } from '../../dto/spot-pictures-dto';
import { TContext } from '../../graphql/context';
import { GenericError, codeErrors } from '../../utils';
const { UNAUTHENTICATED } = codeErrors;

export const spotPicturesMutation = {
  /**
   * @param {SpotPictureDto} data
   */
  addSpotPicture: (
    _: undefined,
    data: SpotPictureDto,
    context: TContext
  ): Promise<SpotPicture> => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);

    return spotPicturesBusiness.create(data);
  }
};
