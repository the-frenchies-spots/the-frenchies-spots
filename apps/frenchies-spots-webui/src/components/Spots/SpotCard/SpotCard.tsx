import React, { ReactNode } from "react";

import {
  Box,
  Card,
  Font,
  Group,
  Image,
  Log,
  Text,
} from "@frenchies-spots/material";
import { SpotEntity } from "@frenchies-spots/gql";
import { useStyles } from "./SpotCard.styles";
import SpotPicture from "../SpotPicture/SpotPicture";
import SpotBadges from "../SpotBadges/SpotBadges";
import { IconStarFilled } from "@frenchies-spots/icon";

const noImage =
  "https://res.cloudinary.com/dw2hb8vmu/image/upload/v1693846473/default_ac2sl7.webp";

export interface SpotCardProps {
  spot: SpotEntity;
  children?: (params: {
    spotId: string;
    favoriteId: string | undefined;
    profileId: string;
  }) => ReactNode;
  onClick?: (id: string) => void;
}

const SpotCard = (props: SpotCardProps) => {
  const { children, spot, onClick } = props;
  const { id, name, description, spotPicture, favorites, profileId } = spot;

  const { classes } = useStyles();

  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick(id);
    }
  };

  const favorite = Array.isArray(favorites) ? favorites[0] : undefined;

  return (
    <Card
      className={classes.container}
      shadow="sm"
      padding="lg"
      radius="md"
      onClick={handleClick}
      sx={{ backgroundColor: "#FBFBFB" }}
      withBorder
    >
      <Card.Section h={150} className={classes.section}>
        <SpotBadges spot={spot} sx={{ position: "absolute" }} />
        <SpotPicture
          src={spotPicture ? spotPicture[0]?.url : undefined}
          h="100%"
        />

        {children && (
          <Box className={classes.spotButton}>
            {children({ spotId: id, favoriteId: favorite?.id, profileId })}
          </Box>
        )}
      </Card.Section>

      <Font variant="h3" pt="md">
        {name}
      </Font>

      <Group spacing="xs">
        <IconStarFilled size={16} style={{ color: "#707070" }} />
        <Font color="#707070">
          {spot?.averageRating ? spot?.averageRating : 0}
        </Font>
      </Group>

      <Font size="sm" color="dimmed" lineClamp={1}>
        {description}
      </Font>
    </Card>
  );
};

export default SpotCard;
