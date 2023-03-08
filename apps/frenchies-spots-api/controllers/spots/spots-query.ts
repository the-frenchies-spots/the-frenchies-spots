import { spotsBusiness } from "../../business";
import { ReadSpotDto } from "../../dto";

export const spotsQuery = {
  spots: (_: undefined, data: ReadSpotDto) => {
    return spotsBusiness.getAll(data);
  },

  spot: (_: undefined, data: { id: string }) => {
    const { id: spotId } = data;
    return spotsBusiness.getById(spotId);
  },
};
