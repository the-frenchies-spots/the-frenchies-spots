import React from "react";

import { SpotEntity } from "@frenchies-spots/gql";
import { IconStarFilled } from "@frenchies-spots/icon";
import {
  Button,
  Group,
  type GroupProps,
  Stack,
  Text,
  PrimaryButton,
  Font,
} from "@frenchies-spots/material";

import SpotPicture from "../../../Spots/SpotPicture/SpotPicture";
import { useRouter } from "next/router";

interface SpotPreviewProps extends GroupProps {
  spot: SpotEntity;
}

const SpotPreview = (props: SpotPreviewProps) => {
  const { spot, ...groupProps } = props;

  const picture = spot?.spotPicture ? spot?.spotPicture[0]?.url : undefined;

  const router = useRouter();
  console.log({ spot });

  return (
    <Group grow h={300} p="md" {...groupProps}>
      <SpotPicture src={picture} h="100%" sx={{ borderRadius: 8 }} />

      <Stack justify="space-between" h="100%">
        <Stack>
          <Font variant="h3">{spot.name}</Font>
          <Group spacing="xs">
            <IconStarFilled size={16} style={{ color: "#707070" }} />
            <Font color="#707070">
              {spot?.averageRating ? spot?.averageRating : 0}
            </Font>
          </Group>
          <Text lineClamp={3}>{spot.description}</Text>
        </Stack>

        <PrimaryButton onClick={() => router.push(`/spots/${spot.id}`)}>
          Voir le spot
        </PrimaryButton>
      </Stack>
    </Group>
  );
};

export default SpotPreview;
