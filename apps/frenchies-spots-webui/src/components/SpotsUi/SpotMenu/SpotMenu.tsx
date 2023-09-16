import React from "react";

import {
  Stack,
  Group,
  Button,
  Container,
  Box,
  ActionIcon,
  Flex,
} from "@frenchies-spots/material";
import type { ContainerProps } from "@frenchies-spots/material";

import { AutocompleteAddress, useGeocoding } from "@frenchies-spots/map";
import { IconSearch, IconSortDescending } from "@frenchies-spots/icon";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import toast from "react-hot-toast";
import StatusBar from "../../StatusBar/StatusBar";

interface SpotMenuProps extends Omit<ContainerProps, "onChange"> {}

const SpotMenu = (props: SpotMenuProps) => {
  const { ...other } = props;

  const { searchPlace } = useGeocoding();
  const {
    form,
    placeName,
    setPlaceName,
    openDrawer,
    setCoordPoint,
    setViewPort,
    setIsFilter,
    isMapMode,
  } = useSpotUi();

  const handleOpenDrawer = () => {
    setIsFilter(true);
    openDrawer();
  };

  const handleSearchPlaceName = () => {
    searchPlace(placeName).then((address) => {
      if (!address.placeName) {
        toast.error("L'address saisie est incorrecte !");
      } else {
        setPlaceName(address.placeName);
        setCoordPoint(address.coordinates);
        setViewPort((current) => ({
          ...current,
          latitude: address.coordinates.lat,
          longitude: address.coordinates.lng,
          zoom: 12,
        }));
        const point = {
          coordinates: [address.coordinates.lng, address.coordinates.lat],
          maxDistance: 10000,
        };
        form.setValues((prev) => ({ ...prev, point }));
      }
    });
  };

  return (
    <Container size="md" mt="md" {...other}>
      <Stack>
        <StatusBar isMapMode={isMapMode} />
        <Box sx={{ position: "relative" }}>
          <AutocompleteAddress
            placeholder="search address"
            value={placeName}
            onTextChange={setPlaceName}
            sx={{ position: "relative" }}
            rightSection={
              <Flex
                sx={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "white",
                }}
                justify="center"
                w={50}
              >
                <ActionIcon
                  w="100%"
                  h="100%"
                  onClick={handleOpenDrawer}
                  sx={{ borderRadius: 0, borderLeft: "1px solid grey" }}
                >
                  <IconSortDescending size={16} />
                </ActionIcon>
              </Flex>
            }
            icon={<IconSearch size={16} />}
          />
          <Flex
            h="100%"
            sx={{
              position: "absolute",
              left: 2,
              top: 0,
              zIndex: 100,
            }}
            justify="center"
            align="center"
            w={35}
          >
            <ActionIcon
              w="100%"
              h="80%"
              sx={{ backgroundColor: "white" }}
              onClick={handleSearchPlaceName}
            >
              <IconSearch size={16} />
            </ActionIcon>
          </Flex>
        </Box>

        <Group grow>
          <Button onClick={() => null}>Tout</Button>
          <Button onClick={() => null}>Spots</Button>
          <Button onClick={() => null}>Entraide</Button>
        </Group>
      </Stack>
    </Container>
  );
};

export default SpotMenu;
