import { useContext } from "react";

import { SpotUiContext, TForm } from "../components/SpotsUi/SpotUI.context";
import { getFuncOrThrow } from "../utils/get-func-or-throw";
import { getValueOrThrow } from "../utils/get-value-or-throw";
import { ProfilesInput, SpotsInput } from "@frenchies-spots/gql";

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
    openDrawer,
    closeFilter,
    drawerOpened,
    getFilterSpots,
    getPeoples,
    setCoordPoint,
    setIsMapMode,
    setIsRayon,
    setPlaceName,
    onViewportChange,
    currentSpotId,
    setCurrentSpotId,
    isFilter,
    setIsFilter,
    currentProfileId,
    setCurrentProfileId,
  } = useSpotUiContext();

  const handleFilterSpot = (spotsInput: SpotsInput) => {
    const onFilterSpot = getFuncOrThrow(getFilterSpots);
    return onFilterSpot({ variables: { spotsInput } });
  };

  const handleFilterPeople = (profilesInput: ProfilesInput) => {
    const onFilterPeople = getFuncOrThrow(getPeoples);
    return onFilterPeople({ variables: { profilesInput } });
  };

  const handleCurrentSpotIdChange = getFuncOrThrow(setCurrentSpotId);
  const handleCurrentProfileIdChange = getFuncOrThrow(setCurrentProfileId);
  const handleSetIsFilter = getFuncOrThrow(setIsFilter);

  const handleCloseFilter = () => {
    const close = getFuncOrThrow(closeFilter);
    close();
    handleCurrentSpotIdChange(null);
    handleCurrentProfileIdChange(null);
    handleSetIsFilter(false);
  };

  return {
    isFilter,
    isRayon,
    viewport,
    isMapMode,
    placeName,
    coordPoint,
    drawerOpened,
    currentSpotId,
    currentProfileId,
    setIsFilter: handleSetIsFilter,
    onFilterSpot: handleFilterSpot,
    onFilterPeople: handleFilterPeople,
    closeFilter: handleCloseFilter,
    form: getValueOrThrow<TForm>(form),
    setIsRayon: getFuncOrThrow(setIsRayon),
    openDrawer: getFuncOrThrow(openDrawer),
    setCurrentSpotId: handleCurrentSpotIdChange,
    setPlaceName: getFuncOrThrow(setPlaceName),
    setIsMapMode: getFuncOrThrow(setIsMapMode),
    setCoordPoint: getFuncOrThrow(setCoordPoint),
    setViewPort: getFuncOrThrow(onViewportChange),
    setCurrentProfileId: handleCurrentProfileIdChange,
  };
};
