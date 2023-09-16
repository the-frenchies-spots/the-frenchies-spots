import React from "react";

import {
  ActionIcon,
  Avatar,
  Card,
  type CardProps,
  Group,
  Stack,
  Text,
} from "@frenchies-spots/material";
import { ProfileEntity } from "@frenchies-spots/gql";
import { useStyles } from "./ProfileCard.styles";
import { IconMessages, IconUserPlus } from "@frenchies-spots/icon";
import useContact from "../../../hooks/use-contact";

export interface ProfileCardProps extends Omit<CardProps, "children"> {
  profile: ProfileEntity;
  onClick?: (id: string) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { profile, onClick, ...cardProps } = props;
  const { id, pseudo, avatarUrl, photoUrl } = profile;

  const { classes } = useStyles();
  const { onContactClick } = useContact({ profile });

  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick(id);
    }
  };

  const src = photoUrl || avatarUrl;

  return (
    <Card
      className={classes.container}
      shadow="sm"
      padding="lg"
      radius="md"
      onClick={handleClick}
      withBorder
      {...cardProps}
    >
      <Group position="apart">
        <Avatar src={src} />
        <Stack>
          <Text>{pseudo}</Text>
        </Stack>
        <Stack>
          <ActionIcon>
            <IconUserPlus />
          </ActionIcon>
          <ActionIcon onClick={onContactClick}>
            <IconMessages />
          </ActionIcon>
        </Stack>
      </Group>
    </Card>
  );
};

export default ProfileCard;
