/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { SpotUiContext, type SpotUiContextData } from "./SpotUI.context";
import {
  TCoordinate,
  useGeocoding,
  useLocationCtx,
  useMap,
} from "@frenchies-spots/map";
import { getFuncOrThrow } from "../../utils/get-func-or-throw";
import { formatPoint } from "../../utils/format-point";
import { useDisclosure } from "@frenchies-spots/hooks";

interface SpotUiProviderProps
  extends Pick<SpotUiContextData, "getFilterSpots" | "form" | "getPeoples"> {
  children: React.ReactNode;
  coordinates?: TCoordinate;
  spotId: string | null;
}

export const SpotUiProvider = (props: SpotUiProviderProps) => {
  const {
    children,
    getFilterSpots,
    coordinates,
    form,
    spotId = null,
    getPeoples,
    ...values
  } = props;

  const { viewport, onViewportChange } = useMap();
  const { searchPlace } = useGeocoding();
  const { location: userPosition } = useLocationCtx();
  const [drawerOpened, { open, close }] = useDisclosure(false);

  const [currentSpotId, setCurrentSpotId] = useState<string | null>(spotId);
  const [currentProfileId, setCurrentProfileId] = useState<string | null>(
    spotId
  );
  const [placeName, setPlaceName] = useState<string>("");
  const [isRayon, setIsRayon] = useState<boolean>(false);
  const [isMapMode, setIsMapMode] = useState<boolean>(true);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [coordPoint, setCoordPoint] = useState<TCoordinate | null>(null);

  const initViewPortMap = (coordinates: TCoordinate) => {
    const initFilterSpot = getFuncOrThrow(getFilterSpots);
    const initFilterPeople = getFuncOrThrow(getPeoples);
    const { lat, lng } = coordinates;
    const point = formatPoint({ lat, lng, m: 5000 });
    setIsRayon(true);
    setCoordPoint(coordinates);
    form?.setValues((prev) => ({ ...prev, point }));
    onViewportChange((current) => ({
      ...current,
      latitude: lat,
      longitude: lng,
      zoom: 12,
    }));
    initFilterSpot({
      variables: {
        spotsInput: {
          ...form?.values,
          point,
        },
      },
    });
    initFilterPeople({ variables: { profilesInput: { point } } });
  };

  const openPreviewSpot = () => {
    if (currentSpotId) {
      open();
    }
  };

  useEffect(() => {
    openPreviewSpot();

    const initFilterSpot = getFuncOrThrow(getFilterSpots);
    if (userPosition && !coordinates) {
      setPlaceName(userPosition.value);
      initViewPortMap(userPosition.coordinates);
    } else {
      if (coordinates) {
        initViewPortMap(coordinates);
        searchPlace(`${coordinates.lng},${coordinates.lat}`).then((address) => {
          setPlaceName(address.placeName);
        });
      } else {
        initFilterSpot();
      }
    }
  }, [userPosition]);

  return (
    <SpotUiContext.Provider
      value={{
        ...values,
        coordPoint,
        setCoordPoint,
        isRayon,
        setIsRayon,
        isMapMode,
        setIsMapMode,
        placeName,
        setPlaceName,
        getFilterSpots,
        viewport,
        onViewportChange,
        form,
        drawerOpened,
        openDrawer: open,
        closeFilter: close,
        currentSpotId,
        setCurrentSpotId,
        isFilter,
        setIsFilter,
        getPeoples,
        currentProfileId,
        setCurrentProfileId,
      }}
    >
      {children}
    </SpotUiContext.Provider>
  );
};
