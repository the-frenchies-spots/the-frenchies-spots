import { ReadOneSpotRequestResult } from "../../types";

export const getDefaultSpotValues = (
  defaultValues?: ReadOneSpotRequestResult
) => {
  let defaultSpot = {
    image: "",
    name: "",
    isCanPark: false,
    isCanVisit: false,
    isTouristic: false,
    location: {},
    description: "",
  };

  if (defaultValues) {
    const {
      name,
      description,
      isCanPark,
      isCanVisit,
      isTouristic,
      region,
      lat,
      lng,
      spotPicture,
    } = defaultValues.spot;

    const { url } = spotPicture[0];
    const location = { codeRegion: region, coordinate: { lat, lng } };
    defaultSpot = {
      image: url,
      name,
      description,
      isCanPark,
      isCanVisit,
      isTouristic,
      location,
    };
  }

  return defaultSpot;
};
