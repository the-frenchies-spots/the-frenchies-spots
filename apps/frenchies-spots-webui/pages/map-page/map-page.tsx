import React, { useContext, useState, useEffect } from "react";
import { styles } from "./map-page-style";
import {
  Page,
  InfoBar,
  DisplayMode,
  DisplayModeButton,
} from "../../components";
import { Box, Drawer, FilterInput } from "@frenchies-spots/materials";
import { AuthContext } from "../../context";
import { useQuery, useLazyQuery } from "@apollo/client";
import { ReadAllSpotRequestResult } from "../../types";
import { READ_SPOT_QUERY } from "../../graphql";
import { useIsFocused } from "@react-navigation/native";

interface MapPageProps {
  route?: {
    params: {
      lat?: number | undefined;
      lng?: number | undefined;
      id?: string | undefined;
    };
  };
}

export const MapPage = (props: MapPageProps) => {
  const lat = props?.route?.params?.lat;
  const lng = props?.route?.params?.lng;
  const id = props?.route?.params?.id;

  const [isOpen, setIsOpen] = useState(false);
  const [isMapMode, setIsMapMode] = useState<boolean>(true);
  const isFocused = useIsFocused();

  const [getSpots, { data, loading }] =
    useLazyQuery<ReadAllSpotRequestResult>(READ_SPOT_QUERY);

  useEffect(() => {
    console.log("use effetc");
    getSpots({ variables: { id } });
  }, [id, isFocused]);

  const handleToggleOpen = () => {
    setIsOpen((current) => !current);
  };

  return (
    <Page
      opacity={1}
      isPadding={false}
      isBackground={false}
      opaqueBackground={isOpen}
    >
      <Box style={styles.mapMenuContainer}>
        <InfoBar displayLocation={isMapMode} />
        <FilterInput onSearchPress={handleToggleOpen} />
      </Box>

      <DisplayMode
        isMapMode={isMapMode}
        spotList={data?.spots}
        displayFirst={!!id}
      />
      <DisplayModeButton isMapMode={isMapMode} onChange={setIsMapMode} />

      <Drawer
        isOpen={isOpen}
        heightMultiplier={0.8}
        onToggleOpen={handleToggleOpen}
      />
    </Page>
  );
};
