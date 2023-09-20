import React from "react";
import {
  Stack,
  Text,
  Group,
  Checkbox,
  Slider,
  TextInput,
  Switch,
  Box,
  SecondaryButton,
  Font,
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

        <Box>
          <Font variant="h4">Types de spot</Font>
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
        </Box>

        <Box>
          <Font variant="h4">Spot aventure</Font>
          <SelectTag
            position="left"
            list={tagsDataList.filter(
              (tag) => tag.category === CategoriesSpotAndTag.SPARE_TIME_SPOT
            )}
            {...form.getInputProps("tagListId")}
          />
        </Box>

        <Box>
          <Font variant="h4">Spot ressource</Font>
          <SelectTag
            position="left"
            list={tagsDataList.filter(
              (tag) => tag.category === CategoriesSpotAndTag.RESOURCES_SPOT
            )}
            {...form.getInputProps("tagListId")}
          />
        </Box>

        <Checkbox
          label="Afficher les spots où je peux me garer"
          checked={form.getInputProps("isCanPark").value}
          sx={{}}
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
          <Font variant="h4">Localisation</Font>
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
        <SecondaryButton
          variant="outline"
          color="purple"
          onClick={handleResetFilter}
        >
          Réinitialiser
        </SecondaryButton>
        <SecondaryButton onClick={handleSearchClick}>Filtrer</SecondaryButton>
      </Group>
    </>
  );
};

export default SpotFilter;
