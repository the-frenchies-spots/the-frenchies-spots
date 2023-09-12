import React, { Dispatch } from "react";

import { SpotEntity } from "@frenchies-spots/gql";
import type { TCoordinate, TLocation, TViewport } from "@frenchies-spots/map";

import SpotsMapUi from "./SpotsMapUi/SpotsMapUi";
import SpotList from "../Spots/SpotList/SpotList";
import FavoriteButton from "../Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "../../hooks/use-auth";
import { Box, Text } from "@frenchies-spots/material";
import { TSpotFilterForm } from "../../types";
import SpotMenu from "./SpotMenu/SpotMenu";
import SpotUiMode from "./SpotUiMode/SpotUiMode";
import SpotModeButton from "./SpotModeButton/SpotModeButton";
import SpotFilter from "./SpotFilter/SpotFilter";
import { useStyles } from "./SpotsUi.styles";

interface SpotsUiProps {}

const SpotsUi = (props: SpotsUiProps) => {
  const {} = props;

  const { classes } = useStyles();

  return (
    <Box w="100%" h="100%" className={classes.container}>
      {/* <SpotMenu
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
      /> */}
    </Box>
  );
};

export default SpotsUi;
