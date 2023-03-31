import React, { useState, useRef, type ReactNode } from "react";
import ReactMapGL from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { TViewport, TCoordinate } from "../../../types";

const MAPBOX_API_KEY =
  "pk.eyJ1IjoiZnJlbmNoaWVzcG90cyIsImEiOiJjbGZzbmZ3YjEwMDQwM25wZWM1bm96emc4In0.CrgJmxNyiLfQ4QUewh_jXg";
const MAPBOX_STYLE =
  "mapbox://styles/frenchiespots/clfsnj9dp00i501p4s22dqtw7?optimize=true";

interface MapWebProps {
  viewport: TViewport;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
  children?: ReactNode;
}

export const MapWeb = (props: MapWebProps) => {
  const { children, viewport, onViewportChange, onCoordinateClick } = props;
  const [loaded, setLoaded] = useState(false);

  const mapRef: any = useRef();

  const handleViewportChange = (viewState: TViewport) => {
    if (typeof onViewportChange === "function") {
      onViewportChange(viewState);
    }
  };

  const handleCoordinateClick = (coordinate: TCoordinate) => {
    if (typeof onCoordinateClick === "function") {
      onCoordinateClick(coordinate);
    }
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={MAPBOX_API_KEY}
      mapStyle={MAPBOX_STYLE}
      onMove={(evt) => handleViewportChange(evt.viewState)}
      onClick={(evt) => handleCoordinateClick(evt.lngLat)}
      onLoad={() => setLoaded(true)}
      ref={mapRef}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </ReactMapGL>
  );
};
