import React from "react";

import * as turf from "@turf/turf";
import type { Units } from "@turf/turf";
import { Source, Layer } from "react-map-gl";
import { Box } from "@frenchies-spots/material";

interface MapPerimeterProps {
  lat: number;
  lng: number;
  radius: number;
}

export const MapPerimeter = ({ lat, lng, radius }: MapPerimeterProps) => {
  var center = [lng, lat];

  const units: Units = "kilometers";
  var options = { steps: 50, units };
  var circle = turf.circle(center, radius, options);

  var lineCoords = circle.geometry.coordinates[0];
  lineCoords.push(lineCoords[0]);

  var line = turf.lineString(lineCoords);

  return (
    <Box>
      <Box style={{ position: "absolute", bottom: 200, left: 100 }}></Box>
      <Source id="my-data" type="geojson" data={circle}>
        <Layer
          id="point-90-hi"
          type="fill"
          paint={{
            "fill-color": "#088",
            "fill-opacity": 0.1,
          }}
        />
      </Source>

      <Source id="my-ata" type="geojson" data={line}>
        <Layer
          id="point-9-hi"
          type="line"
          paint={{
            "line-color": "#3F3979",
            "line-width": 1,
          }}
        />
      </Source>
    </Box>
  );
};
