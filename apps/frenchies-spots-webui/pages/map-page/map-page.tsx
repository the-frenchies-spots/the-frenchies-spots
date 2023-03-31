import React, { useState } from "react";
import { styles } from "./map-page-style";
import { useMapBox } from "../../hooks";
import {
  Page,
  MapBox,
  MapBoxMarker,
  NotificationButton,
  InfoBar,
} from "../../components";
import {
  Box,
  Card,
  Drawer,
  HStack,
  FilterInput,
  FloatingButton,
  CardButton,
  PrimaryButton,
  SubTitle,
  Icon,
  Title,
} from "@frenchies-spots/materials";
import { Touchable, TouchableOpacity } from "react-native";

interface MapPageProps {
  route?: { params: { lat: number | undefined; lng: number | undefined } };
}

export const MapPage = (props: MapPageProps) => {
  const lat = props?.route?.params?.lat;
  const lng = props?.route?.params?.lng;

  const { viewport, onViewportChange, onCoordinateClick } = useMapBox();
  const [isOpen, setIsOpen] = useState(false);
  const [isMapMode, setIsMapMode] = useState<boolean>(true);

  const handleToggleOpen = () => {
    setIsOpen((current) => !current);
  };

  const handleToggleDisplayMode = () => {
    setIsMapMode((current) => !current);
  };

  return (
    <Page isBackground={false} isPadding={false} opacity={1}>
      <Box style={styles.mapMenuContainer}>
        <InfoBar displayLocation={isMapMode} />
        <FilterInput onSearchPress={handleToggleOpen} />
      </Box>

      <Box style={styles.displayModeButtonContainer}>
        <Box style={styles.displayModeButton}>
          <FloatingButton icon="map" onPress={handleToggleDisplayMode}>
            {isMapMode ? "Liste" : "Carte"}
          </FloatingButton>
        </Box>
      </Box>

      <Box style={styles.container}>
        {isMapMode ? (
          <MapBox
            viewport={viewport}
            onViewportChange={onViewportChange}
            onCoordinateClick={onCoordinateClick}
          >
            {lat && lng && <MapBoxMarker lat={lat} lng={lng} />}
          </MapBox>
        ) : (
          <Box style={styles.listContainer}>
            <Card
              name="Forêt Magique"
              description="Lorem ipsum dolor sit amet amet..."
              averageRating={4.7}
              isCanPark={true}
              picture="https://previews.123rf.com/images/marisha5/marisha51601/marisha5160100276/50703619-paysage-magnifique-for%C3%AAt-le-matin.jpg"
              cardButton={<CardButton />}
            />
          </Box>
        )}
      </Box>
      <Drawer isOpen={isOpen} onToggleOpen={handleToggleOpen} />
    </Page>
  );
};
