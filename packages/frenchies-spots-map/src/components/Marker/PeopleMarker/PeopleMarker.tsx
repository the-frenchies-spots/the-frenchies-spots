import React, { ReactNode } from "react";

import { Box, Flex, Image } from "@frenchies-spots/material";
import { MapMarker } from "../MapMarker/MapMarker";
import type { MapMarkerProps } from "../MapMarker/MapMarker";
import { IconMapPinFilled } from "@frenchies-spots/icon";

interface PeopleMarkerProps extends MapMarkerProps {
  src: string;
  zoom: number;
}

export const PeopleMarker = ({ src, zoom, ...props }: PeopleMarkerProps) => {
  const isIconZoom = zoom > 13;
  return (
    <MapMarker {...props}>
      <Box sx={{ position: "relative" }} mb={isIconZoom ? 50 : 30}>
        <Flex
          sx={{
            position: "absolute",
            transitionDuration: "0ms",
            top: isIconZoom ? 10 : 7,
            left: isIconZoom ? 15 : 10,
            right: 0,
            bottom: 0,
            border: "1px solid white",
            borderRadius: 50,
            overflow: "hidden",
          }}
          h={isIconZoom ? 50 : 30}
          w={isIconZoom ? 50 : 30}
          justify="center"
          align="center"
        >
          <Image
            src={src}
            alt=""
            height="100%"
            width="100%"
            sx={{ transitionDuration: "0ms" }}
          />
        </Flex>
        <Box>
          <IconMapPinFilled
            size={isIconZoom ? 80 : 50}
            style={{ color: "#3F3979" }}
          />
        </Box>
      </Box>
    </MapMarker>
  );
};
