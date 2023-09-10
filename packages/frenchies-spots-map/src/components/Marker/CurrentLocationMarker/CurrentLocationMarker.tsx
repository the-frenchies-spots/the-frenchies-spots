import React from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Box } from "@frenchies-spots/material";
import { MapMarker } from "../MapMarker/MapMarker";
import type { MapMarkerProps } from "../MapMarker/MapMarker";

const circleAnimation = keyframes`
  0% {
    transform: scale(0.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: 0;
  left: 0;
  background: rgba(24, 145, 255, 1);
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-name: ${circleAnimation};
  opacity: 0;
`;

export const CurrentLocationMarker = (props: MapMarkerProps) => {
  return (
    <MapMarker {...props}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            top: 0,
            left: 0,
            backgroundColor: "#4285F4",
            border: "2px solid white",
            borderRadius: 50,
            height: 15,
            width: 15,
          }}
        />
        <Box sx={{ position: "absolute", top: -22, left: -22 }}>
          <Box sx={{ position: "relative" }}>
            <Circle style={{ position: "absolute" }} />
            <Circle style={{ animationDelay: "1.5s", position: "absolute" }} />
            <Circle style={{ animationDelay: "3s", position: "absolute" }} />
            <Circle style={{ animationDelay: "4.5s", position: "absolute" }} />
          </Box>
        </Box>
      </Box>
    </MapMarker>
  );
};
