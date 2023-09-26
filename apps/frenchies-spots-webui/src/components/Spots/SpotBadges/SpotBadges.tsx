import React from "react";
import { IconAlertSmall, IconRun, ParkingPIcon } from "@frenchies-spots/icon";
import { Stack, type StackProps } from "@frenchies-spots/material";
import { CategoriesSpotAndTag, SpotEntity } from "@frenchies-spots/gql";
import Badge from "./../../Badge/Badge";

interface SpotBadgesProps extends StackProps {
  spot: SpotEntity;
}

const SpotBadges = (props: SpotBadgesProps) => {
  const { spot, ...other } = props;

  return (
    <Stack spacing="md" {...other} p="md">
      {spot?.isCanPark && (
        <Badge>
          <ParkingPIcon color="white" size={12} />
        </Badge>
      )}

      {spot?.category === CategoriesSpotAndTag.RESOURCES_SPOT && (
        <Badge>
          <IconAlertSmall style={{ color: "white" }} size={20} />
        </Badge>
      )}

      {spot?.category === CategoriesSpotAndTag.SPARE_TIME_SPOT && (
        <Badge>
          <IconRun style={{ color: "white" }} size={16} />
        </Badge>
      )}
    </Stack>
  );
};

export default SpotBadges;
