import React, { useState } from "react";

import {
  Stack,
  TextInput,
  Group,
  Button,
  Container,
  Loader,
  Box,
  ActionIcon,
  Flex,
} from "@frenchies-spots/material";
import type { ContainerProps } from "@frenchies-spots/material";

import type { TSpotFilterForm } from "../../../types";
import { AutocompleteAddress, type TLocation } from "@frenchies-spots/map";
import { IconSearch, IconSortDescending } from "@frenchies-spots/icon";

interface SpotMenuProps extends Omit<ContainerProps, "onChange"> {
  onOpenFilter?: () => void;
  form: TSpotFilterForm;
  placeName: string;
  onPlaceNameChange: (newPlaceName: string) => void;
  onSearchPlaceName: () => void;
}

const SpotMenu = (props: SpotMenuProps) => {
  const {
    form,
    placeName,
    onSearchPlaceName,
    onOpenFilter,
    onPlaceNameChange,
    ...other
  } = props;

  return (
    <Container size="md" mt="xl" {...other}>
      <Stack>
        <Box sx={{ position: "relative" }}>
          <AutocompleteAddress
            placeholder="search address"
            value={placeName}
            onTextChange={onPlaceNameChange}
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
                  onClick={onOpenFilter}
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
              onClick={onSearchPlaceName}
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
