import { useContext } from "react";

import { SpotUiContext, TForm } from "../components/SpotsUi/SpotUI.context";
import { getFuncOrThrow } from "../utils/get-func-or-throw";
import { getValueOrThrow } from "../utils/get-value-or-throw";
import { SpotsInput } from "@frenchies-spots/gql";

export const useSpotUiContext = () => {
  const ctx = useContext(SpotUiContext);
  if (!ctx) {
    throw new Error("Sorry but no context found.");
  }
  return ctx;
};

export const useSpotUi = () => {
  const {
    form,
    coordPoint,
    isMapMode,
    isRayon,
    placeName,
    viewport,
    openFilter,
    closeFilter,
    filterOpened,
    getFilterSpots,
    setCoordPoint,
    setIsMapMode,
    setIsRayon,
    setPlaceName,
    onViewportChange,
  } = useSpotUiContext();

  const handleFilterSpot = (spotsInput: SpotsInput) => {
    const onFilterSpot = getFuncOrThrow(getFilterSpots);
    return onFilterSpot({ variables: { spotsInput } });
  };

  return {
    isRayon,
    viewport,
    isMapMode,
    placeName,
    coordPoint,
    filterOpened,
    onFilterSpot: handleFilterSpot,
    form: getValueOrThrow<TForm>(form),
    setIsRayon: getFuncOrThrow(setIsRayon),
    setViewPort: getFuncOrThrow(onViewportChange),
    openFilter: getFuncOrThrow(openFilter),
    closeFilter: getFuncOrThrow(closeFilter),
    setPlaceName: getFuncOrThrow(setPlaceName),
    setIsMapMode: getFuncOrThrow(setIsMapMode),
    setCoordPoint: getFuncOrThrow(setCoordPoint),
  };
};
