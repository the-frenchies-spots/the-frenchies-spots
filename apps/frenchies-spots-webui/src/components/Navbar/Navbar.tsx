import React, { useEffect } from "react";

import {
  IconHeartFilled,
  IconMapPinFilled,
  IconMessageCircle2Filled,
  IconShoppingCartFilled,
  IconUserCircle,
  ProfileUserIcon,
} from "@frenchies-spots/icon";
import { useStyles } from "./NavBar.styles";
import {
  ActionIcon,
  BadgeIcon,
  Box,
  type BoxProps,
  Container,
  Group,
} from "@frenchies-spots/material";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { queries } from "@frenchies-spots/gql";
import { client } from "../../utils/client.gql";
import { useNotif } from "../../hooks/use-notif";

interface NavbarProps extends Omit<BoxProps, "children"> {}

function getLastPath(path: string): string | null {
  const pathParts = path.split("/");
  if (pathParts.length === 0) {
    return null; // Si le chemin est vide, renvoie null
  }
  return pathParts[pathParts.length - 1];
}

const Navbar = (props: NavbarProps) => {
  const { className, ...boxProps } = props;

  const router = useRouter();

  const { cx, classes } = useStyles();

  const { messageNotRead } = useNotif();

  const onNavigateClick = (route: string) => {
    router.push(`/${route}`);
  };

  const isSelected = (path: string) => {
    if (getLastPath(router.pathname) === path) {
      return "selected";
    }
    return "default";
  };

  return (
    <Box className={cx(classes.navbar, className)} {...boxProps}>
      <Container h={80} w="100%" size="md">
        <Group position="apart" h="100%" w="100%" p="md">
          <ActionIcon
            onClick={() => onNavigateClick("spots")}
            className={classes[isSelected("spots")]}
          >
            <IconMapPinFilled style={{ color: "white" }} />
          </ActionIcon>

          <ActionIcon
            onClick={() => onNavigateClick("spots/favorit")}
            className={classes[isSelected("spots/favorit")]}
          >
            <IconHeartFilled style={{ color: "white" }} />
          </ActionIcon>

          <ActionIcon
            onClick={() => onNavigateClick("chat")}
            className={classes[isSelected("chat")]}
          >
            <BadgeIcon content={messageNotRead}>
              <IconMessageCircle2Filled style={{ color: "white" }} />
            </BadgeIcon>
          </ActionIcon>

          <ActionIcon
            onClick={() => onNavigateClick("shop")}
            className={classes[isSelected("shop")]}
          >
            <IconShoppingCartFilled style={{ color: "white" }} />
          </ActionIcon>

          <ActionIcon
            onClick={() => onNavigateClick("profile")}
            className={classes[isSelected("profile")]}
          >
            <ProfileUserIcon color="white" size={22} />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
};

export default Navbar;
