import { Rating, Spot } from "../../models";

const ratingsRepository = {
  getAll: () => {
    return Rating.findMany();
  },

  getById: (id: string) => {
    return Rating.findUnique({
      where: {
        id,
      },
    });
  },

  getSpotAverageRating: (spotId: string) => {
    return Rating.aggregate({
      where: { spotId },
      _avg: {
        rate: true,
      },
      _count: {
        rate: true,
      },
    });
  },

  createOrUpdate: (
    rate: number,
    ratingId: string | undefined,
    spotId: string,
    profileId: string
  ) => {
    return Rating.upsert({
      where: { id: ratingId },
      update: { rate, profileId },
      create: {
        rate,
        profileId,
        spotId,
      },
    });
  },
};

export default ratingsRepository;
