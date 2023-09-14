import { TCoordinate } from "@frenchies-spots/map";
import { checkIsNumber } from "./check-is-number";

export const getCoordinates = (
  lat: string | number,
  lng: string | number
): TCoordinate | undefined => {
  if (!checkIsNumber(lat) || !checkIsNumber(lng)) {
    return undefined;
  }
  return { lat: +lat, lng: +lng };
};
