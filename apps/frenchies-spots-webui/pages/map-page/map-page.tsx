import React, { useContext, useState, useEffect, useCallback } from "react";
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
import { SpotFilterForm } from "../../components/spot/spot-filter-form";
import { SpotFilterFormValues } from "../../components/spot/spot-filter-form/spot-filter-field";
import { debounce } from "lodash";

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
  const [searchValue, setSearchValue] = useState<string>("");
  const [defaultValues, setDefaultValues] = useState<SpotFilterFormValues>({
    tags: [],
    isCanPark: true,
    searchValue: "",
  });
  const isFocused = useIsFocused();

  const [getSpots, { data, loading }] =
    useLazyQuery<ReadAllSpotRequestResult>(READ_SPOT_QUERY);

  const handleChange = (value: string) => {
    setSearchValue(value);
    handleDebounceChange(value);
  };

  const handleDebounceChange = useCallback(
    debounce((searchValue: string) => {
      handleSubmit({ ...defaultValues, searchValue });
    }, 700),
    [defaultValues]
  );

  const handleSubmit = useCallback(
    (data: SpotFilterFormValues) => {
      setDefaultValues(data);
      const { tags, ...other } = data;
      const variables = { ...other, tagListId: tags };
      getSpots({ variables });
      setIsOpen(false);
    },
    [searchValue]
  );

  useEffect(() => {
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
        <FilterInput
          value={searchValue}
          onChange={handleChange}
          onSearchPress={handleToggleOpen}
        />
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
      >
        <SpotFilterForm defaultValues={defaultValues} onSubmit={handleSubmit} />
      </Drawer>
    </Page>
  );
};
