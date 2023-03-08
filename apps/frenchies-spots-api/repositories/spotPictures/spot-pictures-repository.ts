import { SpotPictureDto } from "../../dto";
import SpotPicture from "../../models/spotPicture";

const spotPicturesRepository = {
  create: (data: SpotPictureDto) => {
    return SpotPicture.create({
      data: {
        ...data,
      },
    });
  },

  createOrUpdate: (
    spotId: string,
    spotPictureId: string | undefined,
    url: string
  ) => {
    return SpotPicture.upsert({
      where: { id: spotPictureId },
      update: { url },
      create: {
        url,
        spot: {
          connect: { id: spotId },
        },
      },
    });
  },
};

export default spotPicturesRepository;
