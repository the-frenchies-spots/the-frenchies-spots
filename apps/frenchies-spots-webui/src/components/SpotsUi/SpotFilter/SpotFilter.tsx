import React from "react";
import {
  Drawer,
  Stack,
  type DrawerProps,
  Text,
  Group,
  Button,
  Checkbox,
  Slider,
  TextInput,
  Log,
  Switch,
  Box,
} from "@frenchies-spots/material";
import { useForm, useMediaQuery } from "@frenchies-spots/hooks";
import { HSegmentControl, SelectTag } from "../../InputCustom";
import { CategoriesSpotAndTag, SpotsInput } from "@frenchies-spots/gql";
import { tagsDataList } from "@frenchies-spots/utils";
import type { TSpotFilterForm } from "../../../types";

interface SpotFilterProps extends DrawerProps {
  form: TSpotFilterForm;
  isRayon: boolean;
  onRayonChange: (isRayon: boolean) => void;
  onSearchClick: () => void;
}

const SpotFilter = (props: SpotFilterProps) => {
  const { form, isRayon, onRayonChange, onSearchClick, ...drawerProps } = props;

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleResetFilter = () => {
    form.reset();
  };

  return (
    <Drawer
      {...drawerProps}
      position={isSmallScreen ? "bottom" : "right"}
      padding={0}
    >
      <Stack spacing="xl" p="md">
        <TextInput
          placeholder="spot name"
          {...form.getInputProps("searchValue")}
        />

        <Text>Types de spot</Text>
        <HSegmentControl
          list={[
            { name: "Tout", value: undefined },
            { name: "Avanture", value: CategoriesSpotAndTag.SPARE_TIME_SPOT },
            { name: "Ressources", value: CategoriesSpotAndTag.RESOURCES_SPOT },
          ]}
          {...form.getInputProps("category")}
        />

        <Text>Spot aventure</Text>
        <SelectTag
          position="left"
          list={tagsDataList.filter(
            (tag) => tag.category === CategoriesSpotAndTag.SPARE_TIME_SPOT
          )}
          {...form.getInputProps("tagListId")}
        />

        <Text>Spot ressource</Text>
        <SelectTag
          position="left"
          list={tagsDataList.filter(
            (tag) => tag.category === CategoriesSpotAndTag.RESOURCES_SPOT
          )}
          {...form.getInputProps("tagListId")}
        />
        <Checkbox
          label="Afficher les spots où je peux me garer"
          checked={form.getInputProps("isCanPark").value}
          onChange={(event) =>
            form
              .getInputProps("isCanPark")
              .onChange(event.currentTarget.checked)
          }
        />
        {/* <Checkbox
          label="Afficher les spots les mieux notés"
          
        /> */}

        <Group>
          <Text>Localisation</Text>
          <Switch
            checked={isRayon}
            onChange={(event) => onRayonChange(event.currentTarget.checked)}
          />
        </Group>
        <Box h={50}>
          {isRayon && (
            <Slider
              pb="xl"
              mb="xl"
              marks={[
                { value: 20, label: "20 km" },
                { value: 50, label: "50 km" },
                { value: 80, label: "80 km" },
              ]}
              value={form.getInputProps("point.maxDistance").value / 1000}
              onChange={(value) => {
                form.getInputProps("point.maxDistance").onChange(value * 1000);
              }}
              labelAlwaysOn
            />
          )}
        </Box>
      </Stack>

      <Group
        grow
        sx={{
          position: "sticky",
          bottom: 0,
          borderTop: "1px solid grey",
          backgroundColor: "white",
          zIndex: 10,
        }}
        w="100%"
        p="md"
      >
        <Button onClick={handleResetFilter}>Réinitialiser</Button>
        <Button variant="outline" onClick={onSearchClick}>
          Filtrer
        </Button>
      </Group>
    </Drawer>
  );
};

export default SpotFilter;
