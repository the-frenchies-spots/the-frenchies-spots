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
import { truncate } from "@frenchies-spots/utils";
import ConnexionButton from "../ConnexionButton/ConnexionButton";

export interface ProfileCardProps extends Omit<CardProps, "children"> {
  profile: ProfileEntity;
  children?: ReactNode;
  content?: ReactNode;
  onClick?: (id: string) => void;
  customSlogan?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { children, customSlogan, profile, onClick, content, ...cardProps } =
    props;
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
      sx={{ backgroundColor: "#FBFBFB" }}
      {...cardProps}
    >
      <Group position="apart">
        <Group>
          <Avatar
            src={src}
            sx={{
              border: !photoUrl ? "1px solid #3F3979" : undefined,
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
          />
          <Stack spacing={2}>
            <Font variant="h3">{pseudo}</Font>
            {!customSlogan ? (
              <Font>{truncate(profile?.slogan || "Pas de slogan", 23)}</Font>
            ) : (
              <Font>{customSlogan}</Font>
            )}
          </Stack>
        </Group>

        {children && <Stack>{children}</Stack>}
      </Group>
      {content && <>{content}</>}
    </Card>
  );
};

export default ProfileCard;
