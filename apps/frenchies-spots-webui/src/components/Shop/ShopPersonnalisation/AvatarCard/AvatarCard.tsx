import { AvatarEntity } from "@frenchies-spots/gql";
import {
  Badge,
  Box,
  Font,
  Group,
  Image,
  Stack,
} from "@frenchies-spots/material";

import React from "react";

import { useStyles } from "./AvatarCard.styles";
import { IconLock, IconLockOpen } from "@frenchies-spots/icon";

interface AvatarCardProps {
  avatar: AvatarEntity;
  onClick: (avatar: AvatarEntity) => void;
  isUnlocked: boolean;
  isSelected: boolean;
}

const AvatarCard = ({
  avatar,
  isUnlocked,
  isSelected,
  onClick,
}: AvatarCardProps) => {
  const { id, pointsRequire, isPublic, avatarUrl } = avatar;

  const { classes } = useStyles(isPublic || isUnlocked);

  const handleClick = () => {
    onClick(avatar);
  };

  return (
    <Group
      className={classes.container}
      p="md"
      align="center"
      position="apart"
      onClick={handleClick}
    >
      <Box h={120} sx={{ position: "relative", width: 80 }}>
        <Image src={avatarUrl} alt={id} />
      </Box>
      <Stack h="100%">
        <Font
          variant="h5"
          color={isPublic || isUnlocked ? "#3F3979" : "#707070"}
        >
          Personnalise ton avatar
        </Font>
        <Font variant="subtitle2" color="back">
          {isUnlocked ? 0 : pointsRequire} points
        </Font>
        {isSelected && (
          <Badge sx={{ backgroundColor: "#B68973", color: "white" }}>
            Utilisé
          </Badge>
        )}
      </Stack>

      {isPublic || isUnlocked ? (
        <IconLockOpen color="#EBA701" />
      ) : (
        <IconLock color="#707070" />
      )}
    </Group>
  );
};

export default AvatarCard;
