/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useCallback, useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client";
import { queries, SpotEntity, SpotsInput } from "@frenchies-spots/gql";
import {
  useMap,
  useLocationCtx,
  useGeocoding,
  TLocation,
  TCoordinate,
} from "@frenchies-spots/map";
import { Box, LoadingOverlay, createStyles } from "@frenchies-spots/material";

import { useDisclosure, useForm } from "@frenchies-spots/hooks";
import SpotMenu from "../../components/SpotsUi/SpotMenu/SpotMenu";
import SpotFilter from "../../components/SpotsUi/SpotFilter/SpotFilter";
import { PageLayout } from "./../../components/Layout/PageLayout/PageLayout";
import SpotModeButton from "../../components/SpotsUi/SpotModeButton/SpotModeButton";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import toast from "react-hot-toast";
import SpotUiMode from "../../components/SpotsUi/SpotUiMode/SpotUiMode";
import { SpotUiProvider } from "../../components/SpotsUi/SpotUI.provider";

export const useStyles = createStyles((theme) => ({
  container: {},
  spotMenu: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
  },
  buttonMode: {
    position: "absolute",
    left: "50%",
    bottom: 100,
    transform: "translate(-50%, -50%)",
  },
}));

const SpotsPage = () => {
  const [filterOpened, { open, close }] = useDisclosure(false);
  const [isMapMode, setIsMapMode] = useState<boolean>(true);
  const [placeName, setPlaceName] = useState<string>("");
  const [isRayon, setIsRayon] = useState<boolean>(false);

  const [coordPoint, setCoordPoint] = useState<TLocation["coordinates"] | null>(
    null
  );

  const { classes } = useStyles();

  const { searchPlace } = useGeocoding();
  const { location: userPosition } = useLocationCtx();
  const { viewport, onViewportChange } = useMap();

  const [getFilterSpots, { data, loading }] = useLazyQuery<
    { spots: SpotEntity[] },
    { spotsInput: SpotsInput }
  >(queries.spots, { variables: { spotsInput: { searchValue: "" } } });

  const form = useForm<SpotsInput>({
    initialValues: {
      address: undefined,
      category: undefined,
      isCanPark: undefined,
      isHidden: undefined,
      orderBy: "asc",
      point: undefined,
      searchValue: "",
      skip: 0,
      tagListId: [],
      take: 100,
    },
  });

  const handleSearchClick = () => {
    close();
    getFilterSpots({
      variables: {
        spotsInput: form.values,
      },
    });
  };

  const handleSearchPlaceName = useCallback(() => {
    searchPlace(placeName).then((address) => {
      if (!address.placeName) {
        toast.error("L'address saisie est incorrecte !");
      } else {
        setPlaceName(address.placeName);
        setCoordPoint(address.coordinates);
        onViewportChange((current) => ({
          ...current,
          latitude: address.coordinates.lat,
          longitude: address.coordinates.lng,
          zoom: 12,
        }));
        const point = {
          coordinates: [address.coordinates.lng, address.coordinates.lat],
          maxDistance: 10000,
        };
        form.setValues((prev) => ({ ...prev, point }));
      }
    });
  }, [placeName]);

  const handleRayonChange = useCallback(
    (newIsRayon: boolean) => {
      setIsRayon(newIsRayon);
      if (newIsRayon) {
        const point = {
          coordinates: [viewport.longitude, viewport.latitude],
          maxDistance: 10000,
        };
        form.setValues((prev) => ({ ...prev, point }));
      } else {
        form.setValues((prev) => ({ ...prev, point: undefined }));
      }
    },
    [form, viewport]
  );

  useEffect(() => {
    if (userPosition) {
      const { lat, lng } = userPosition.coordinates;
      setCoordPoint(userPosition.coordinates);
      setPlaceName(userPosition.value);
      setIsRayon(true);
      onViewportChange((current) => ({
        ...current,
        latitude: lat,
        longitude: lng,
        zoom: 12,
      }));
      const point = {
        coordinates: [lng, lat],
        maxDistance: 5000,
      };
      getFilterSpots({
        variables: {
          spotsInput: {
            ...form.values,
            point,
          },
        },
      });
      form.setValues((prev) => ({ ...prev, point }));
    } else {
      getFilterSpots();
    }
  }, [userPosition]);

  return (
    <SpotUiProvider form={form} getFilterSpots={getFilterSpots}>
      <LoadingOverlay visible={loading} overlayBlur={2} />

      <Box w="100%" h="100%" className={classes.container}>
        <SpotMenu
          form={form}
          onOpenFilter={open}
          placeName={placeName}
          className={classes.spotMenu}
          onPlaceNameChange={setPlaceName}
          onSearchPlaceName={handleSearchPlaceName}
        />
        <SpotUiMode
          form={form}
          isRayon={isRayon}
          viewport={viewport}
          isMapMode={isMapMode}
          spotList={data?.spots}
          coordPoint={coordPoint}
          userPosition={userPosition?.coordinates as TCoordinate}
          onViewportChange={onViewportChange}
        />
        <SpotModeButton
          isMapMode={isMapMode}
          className={classes.buttonMode}
          onClick={() => setIsMapMode((prev) => !prev)}
        />
        <SpotFilter
          form={form}
          isRayon={isRayon}
          onRayonChange={handleRayonChange}
          onClose={close}
          opened={filterOpened}
          onSearchClick={handleSearchClick}
        />
      </Box>
    </SpotUiProvider>
  );
};

SpotsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};

export default SpotsPage;
