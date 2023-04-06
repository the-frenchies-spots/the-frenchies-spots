import { Box, Card, CardButton, Wrap } from "@frenchies-spots/materials";
import React, { useContext } from "react";
import { MapBox, MapBoxMarker } from "../../map-box";
import { useMapBox } from "../../../hooks";
import { styles } from "./display-mode-styles";
import { SpotType } from "../../../types";
import { SpotList } from "../../spot";
import { LocationMarker, SpotMarkerList } from "../spot-marker-list";
import { useIsFocused } from "@react-navigation/native";
import { AppContext } from "../../../context";

interface DisplayModeProps {
  isMapMode: boolean;
  displayFirst?: boolean;
  spotList?: SpotType[];
}

export const DisplayMode = (props: DisplayModeProps) => {
  const { isMapMode, spotList, displayFirst } = props;
  const { viewport, onViewportChange, onCoordinateClick } = useMapBox();
  const { currentLocation } = useContext(AppContext);

  const isFocused = useIsFocused();

  return (
    <Box style={styles.container}>
      {isMapMode ? (
        <MapBox
          viewport={viewport}
          onViewportChange={onViewportChange}
          onCoordinateClick={onCoordinateClick}
        >
          {currentLocation && currentLocation.lat && currentLocation.lng && (
            <LocationMarker
              lat={currentLocation.lat}
              lng={currentLocation.lng}
            />
          )}
          {isFocused && spotList && (
            <SpotMarkerList spotList={spotList} displayFirst={displayFirst} />
          )}
        </MapBox>
      ) : (
        <SpotList spotList={spotList} style={styles.listContainer} />
      )}
    </Box>
  );
};
