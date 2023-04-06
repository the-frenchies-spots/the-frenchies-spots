import React, { useEffect, useState } from "react";
import { SpotType } from "../../../types";
import { SpotMarker } from "./spot-marker/spot-marker";
import { Drawer, Text } from "@frenchies-spots/materials";
import { useIsFocused } from "@react-navigation/native";
import { SpotPreviewCard } from "../../spot";

interface SpotMarkerListProps {
  spotList: SpotType[];
  lat?: number;
  lng?: number;
  displayFirst?: boolean;
}

export const SpotMarkerList = (props: SpotMarkerListProps) => {
  const { spotList, displayFirst = false } = props;

  const [selectedSpot, setSelectedSpot] = useState<SpotType | undefined>();

  const handleToggleOpen = () => {
    setSelectedSpot(undefined);
  };

  useEffect(() => {
    if (displayFirst && spotList.length) {
      setSelectedSpot(spotList[0]);
    }
  }, []);

  return (
    <>
      {spotList.map((spot, index) => {
        const { lat, lng } = spot;
        return (
          <SpotMarker
            key={index}
            lat={lat}
            lng={lng}
            onPress={() => setSelectedSpot(spot)}
          />
        );
      })}
      <Drawer
        isOpen={!!selectedSpot}
        heightMultiplier={0.4}
        onToggleOpen={handleToggleOpen}
      >
        {selectedSpot && (
          <SpotPreviewCard spot={selectedSpot} onViewClick={handleToggleOpen} />
        )}
      </Drawer>
    </>
  );
};
