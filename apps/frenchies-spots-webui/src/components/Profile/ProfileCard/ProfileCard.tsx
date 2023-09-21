import React, { ReactNode } from "react";

import {
  Avatar,
  Card,
  type CardProps,
  Group,
  Stack,
  Text,
  Font,
} from "@frenchies-spots/material";
import { ProfileEntity } from "@frenchies-spots/gql";
import { useStyles } from "./ProfileCard.styles";

export interface ProfileCardProps extends Omit<CardProps, "children"> {
  profile: ProfileEntity;
  children?: ReactNode;
  onClick?: (id: string) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { children, profile, onClick, ...cardProps } = props;
  const { id, pseudo, avatarUrl, photoUrl } = profile;

  const { classes } = useStyles();

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
          <Font>{pseudo}</Font>
        </Stack>
        {children && <Stack>{children}</Stack>}
      </Group>
    </Card>
  );
};

export default ProfileCard;
