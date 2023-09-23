import React from "react";
import {
  Stack,
  Group,
  Checkbox,
  Slider,
  TextInput,
  Switch,
  Box,
  SecondaryButton,
  Font,
  Log,
} from "@frenchies-spots/material";
import { HSegmentControl, SelectTag } from "../../InputCustom";
import { CategoriesSpotAndTag } from "@frenchies-spots/gql";
import { tagsDataList } from "@frenchies-spots/utils";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import { formatPoint } from "../../../utils/format-point";
import { getZoomByRadius } from "../../../utils/get-zoom-by-radius";

interface SpotFilterProps {}

const SpotFilter = (props: SpotFilterProps) => {
  const {
    onFilterSpot,
    onFilterPeople,
    closeFilter,
    form,
    setIsRayon,
    viewport,
    isRayon,
    setViewPort,
    coordPoint,
  } = useSpotUi();

  const handleResetFilter = () => {
    form.reset();
  };

  const handleSearchClick = () => {
    closeFilter();
    onFilterSpot(form.values);
    onFilterPeople({ point: form.values.point });
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

  const handleRadiusChange = (value: number) => {
    const maxDistance = value * 1000;
    form.getInputProps("point.maxDistance").onChange(maxDistance);
    const zoom = getZoomByRadius(maxDistance);
    setViewPort((prev) => {
      if (coordPoint) {
        return {
          ...prev,
          zoom,
          latitude: coordPoint.lat,
          longitude: coordPoint.lng,
        };
      }
      return { ...prev, zoom };
    });
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
          onChange={(event) =>
            form
              .getInputProps("isCanPark")
              .onChange(event.currentTarget.checked)
          }
        />
        {/* <Checkbox
          label="Afficher les spots les mieux notés"
          
        /> */}

        <Stack>
          <Font variant="h4">Localisation</Font>
          <Switch
            label="Afficher mon rayon de recherche"
            checked={isRayon}
            onChange={(event) => handleRayonChange(event.currentTarget.checked)}
          />
        </Stack>
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
              onChange={handleRadiusChange}
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
