import React from "react";
import { PageLayout } from "../../layout";
import { Box, MapBox, MapBoxMarker } from "../../materials";
import { useTheme, useMediaQuery, useMapBox } from "../../hooks";
import { styles } from "./map-page-style";

const franceViewPort = {
  bearing: 0,
  latitude: 46.851348046414415,
  longitude: 3.2371168456396333,
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
  pitch: 0,
  zoom: 5.5,
};

interface MapPageProps {
  route?: { params: { lat: number | undefined; lng: number | undefined } };
}

export const MapPage = (props: MapPageProps) => {
  const lat = props?.route?.params?.lat;
  const lng = props?.route?.params?.lng;

  const { isPhone } = useMediaQuery();
  const style = useTheme(styles, isPhone);

  const { viewport, onViewportChange, onCoordinateClick } =
    useMapBox(franceViewPort);

  return (
    <PageLayout direction="column" justify={undefined} align="center">
      <Box style={style.container}>
        <MapBox
          viewport={viewport}
          onViewportChange={onViewportChange}
          onCoordinateClick={onCoordinateClick}
        >
          {lat && lng && <MapBoxMarker lat={lat} lng={lng} />}
        </MapBox>
      </Box>
    </PageLayout>
  );
};
