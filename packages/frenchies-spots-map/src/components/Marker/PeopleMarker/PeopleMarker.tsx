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
      <Box sx={{ position: "relative" }}>
        <Flex
          sx={{
            position: "absolute",
            transitionDuration: "0ms",
            bottom: 0,
            left: -((isIconZoom ? 50 : 30) / 2),
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
      </Box>
    </MapMarker>
  );
};
