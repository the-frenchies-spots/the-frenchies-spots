import React, { useState } from "react";
import { styles } from "./map-page-style";
import { useMapBox } from "../../hooks";
import {
  Page,
  MapBox,
  MapBoxMarker,
  NotificationButton,
} from "../../components";
import {
  Box,
  Drawer,
  HStack,
  FilterInput,
  FloatingButton,
} from "@frenchies-spots/materials";

interface MapPageProps {
  route?: { params: { lat: number | undefined; lng: number | undefined } };
}

export const MapPage = (props: MapPageProps) => {
  const lat = props?.route?.params?.lat;
  const lng = props?.route?.params?.lng;

  const { viewport, onViewportChange, onCoordinateClick } = useMapBox();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((current) => !current);
  };

  return (
    <Page isBackground={false} isPadding={false}>
      <Box style={styles.mapMenuContainer}>
        <HStack justify="end" style={styles.topIconContainer}>
          <NotificationButton />
        </HStack>
        <FilterInput onSearchPress={handleToggleOpen} />
      </Box>

      <Box style={styles.displayModeButtonContainer}>
        <Box style={styles.displayModeButton}>
          <FloatingButton icon="map">Liste</FloatingButton>
        </Box>
      </Box>

      <Box style={styles.container}>
        <MapBox
          viewport={viewport}
          onViewportChange={onViewportChange}
          onCoordinateClick={onCoordinateClick}
        >
          {lat && lng && <MapBoxMarker lat={lat} lng={lng} />}
        </MapBox>
      </Box>

      <Drawer isOpen={isOpen} onToggleOpen={handleToggleOpen} />
    </Page>
  );
};
