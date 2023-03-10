import { spotsBusiness } from '../../business';
import { ReadSpotDto } from '../../dto';
import { SpotFindByIdResult, SpotFindManyResult } from '../../types';

export const spotsQuery = {
  spots: (_: undefined, data: ReadSpotDto): SpotFindManyResult => {
    return spotsBusiness.getAll(data);
  },

  spot: (_: undefined, data: { id: string }): SpotFindByIdResult => {
    const { id: spotId } = data;
    return spotsBusiness.getById(spotId);
  }
};
