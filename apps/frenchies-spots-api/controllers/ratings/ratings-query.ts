import { ratingsBusiness } from "../../business/ratings";

export const ratingsQuery = {
  ratings: () => {
    return ratingsBusiness.getAll();
  },
  
  rating: (_: undefined, data: { id: string }) => {
      const { id: ratingId } = data;
      return ratingsBusiness.getById(ratingId);
    },
};
