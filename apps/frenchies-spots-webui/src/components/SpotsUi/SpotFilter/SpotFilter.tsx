import React from "react";
import {
  Stack,
  Text,
  Group,
  Button,
  Checkbox,
  Slider,
  TextInput,
  Switch,
  Box,
} from "@frenchies-spots/material";
import { HSegmentControl, SelectTag } from "../../InputCustom";
import { CategoriesSpotAndTag } from "@frenchies-spots/gql";
import { tagsDataList } from "@frenchies-spots/utils";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import { formatPoint } from "../../../utils/format-point";

interface SpotFilterProps {}

const SpotFilter = (props: SpotFilterProps) => {
  const { onFilterSpot, closeFilter, form, setIsRayon, viewport, isRayon } =
    useSpotUi();

  const handleResetFilter = () => {
    form.reset();
  };

  const handleSearchClick = () => {
    closeFilter();
    onFilterSpot(form.values);
  };

  const handleRayonChange = (newIsRayon: boolean) => {
    setIsRayon(newIsRayon);
    if (newIsRayon) {
      const { latitude, longitude } = viewport;
      const point = formatPoint({ lat: latitude, lng: longitude, m: 10000 });
      form.setValues((prev) => ({ ...prev, point }));
    } else {
      form.setValues((prev) => ({ ...prev, point: undefined }));
    }
  };

  return (
    <>
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
            {
              name: "Ressources",
              value: CategoriesSpotAndTag.RESOURCES_SPOT,
            },
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
            onChange={(event) => handleRayonChange(event.currentTarget.checked)}
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
        <Button variant="outline" onClick={handleSearchClick}>
          Filtrer
        </Button>
      </Group>
    </>
  );
};

export default SpotFilter;
