import React, { ReactNode } from "react";

import { Box, Card, Image, Log, Text } from "@frenchies-spots/material";
import { SpotEntity } from "@frenchies-spots/gql";
import { useStyles } from "./SpotCard.styles";
import SpotPicture from "../SpotPicture/SpotPicture";
import SpotButton from "../SpotButton/SpotButton";
import FavoriteButton from "../SpotButton/FavoriteButton/FavoriteButton";

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
  const {
    id,
    name,
    description,
    spotPicture,
    favorites,
    address,
    category,
    isCanPark,
    profileId,
  } = spot;

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
      withBorder
    >
      <Card.Section h={150} className={classes.section}>
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

      <Text>{name}</Text>

      <Text size="sm" color="dimmed">
        {description}
      </Text>
    </Card>
  );
};

export default SpotCard;
