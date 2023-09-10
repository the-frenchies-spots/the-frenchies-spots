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
} from "@frenchies-spots/material";
import { useMediaQuery } from "@frenchies-spots/hooks";
import { SelectCard, SelectCardLittle, SelectTag } from "../../InputCustom";
import { CategoriesSpotAndTag } from "@frenchies-spots/gql";
import { tagsDataList } from "@frenchies-spots/utils";

interface SpotFilterProps extends DrawerProps {}

const SpotFilter = (props: SpotFilterProps) => {
  const { ...drawerProps } = props;

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Drawer
      {...drawerProps}
      position={isSmallScreen ? "bottom" : "right"}
      padding={0}
    >
      <Stack spacing="xl" p="md">
        <Text>Types de spot</Text>
        <SelectCardLittle
          value="ressource"
          list={[
            { name: "Tout", value: "" },
            { name: "Avanture", value: CategoriesSpotAndTag.SPARE_TIME_SPOT },
            { name: "Ressources", value: CategoriesSpotAndTag.RESOURCES_SPOT },
          ]}
        />

        <Text>Spot aventure</Text>
        <SelectTag
          position="left"
          value={[]}
          list={tagsDataList.filter(
            (tag) => tag.category === CategoriesSpotAndTag.SPARE_TIME_SPOT
          )}
        />

        <Text>Spot ressource</Text>
        <SelectTag
          position="left"
          value={[]}
          list={tagsDataList.filter(
            (tag) => tag.category === CategoriesSpotAndTag.RESOURCES_SPOT
          )}
        />
        <Checkbox label="Afficher les spots où je peux me garer" checked />
        <Checkbox label="Afficher les spots les mieux notés" checked />

        <Text>Localisation</Text>
        <Slider
          pb="xl"
          mb="xl"
          marks={[
            { value: 20, label: "20km" },
            { value: 50, label: "5km" },
            { value: 80, label: "80km" },
          ]}
        />
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
        <Button>Réinitialiser</Button>
        <Button variant="outline">Filtrer</Button>
      </Group>
    </Drawer>
  );
};

export default SpotFilter;
