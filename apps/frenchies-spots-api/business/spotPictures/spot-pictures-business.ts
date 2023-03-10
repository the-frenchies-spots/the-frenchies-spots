import {
  spotPicturesRepository,
  spotsRepository
} from '../../repositories';
import { SpotPictureDto } from '../../dto';
import { codeErrors, GenericError } from '../../utils';
import { SpotPicture } from '@prisma/client';
const { SPOT_NOT_FOUND } = codeErrors;

const spotPicturesBusiness = {
  /**
   * @param {SpotPictureDto} data
   */
  create: async (data: SpotPictureDto): Promise<SpotPicture> => {
    const { spotId } = data;
    const spot = await spotsRepository.getById(spotId);
    if (!spot) {
      throw new GenericError(SPOT_NOT_FOUND, spotId);
    }

    return spotPicturesRepository.create(data);
  }
};

export default spotPicturesBusiness;
