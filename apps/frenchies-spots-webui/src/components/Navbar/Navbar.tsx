import React, { useEffect } from "react";

import {
  IconHeartFilled,
  IconMapPinFilled,
  IconMessageCircle2Filled,
  IconShoppingCartFilled,
  IconUserCircle,
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

const Navbar = (props: NavbarProps) => {
  const { className, ...boxProps } = props;

  const router = useRouter();

  const { cx, classes } = useStyles();

  const { messageNotRead } = useNotif();

  const onNavigateClick = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <Box className={cx(classes.navbar, className)} {...boxProps}>
      <Container h={80} w="100%" size="md">
        <Group position="apart" h="100%" w="100%" p="md">
          <ActionIcon onClick={() => onNavigateClick("spots")}>
            <IconMapPinFilled />
          </ActionIcon>

          <ActionIcon onClick={() => onNavigateClick("spots/favorit")}>
            <IconHeartFilled />
          </ActionIcon>

          <ActionIcon onClick={() => onNavigateClick("chat")}>
            <BadgeIcon content={messageNotRead}>
              <IconMessageCircle2Filled />
            </BadgeIcon>
          </ActionIcon>

          <ActionIcon onClick={() => onNavigateClick("shop")}>
            <IconShoppingCartFilled />
          </ActionIcon>

          <ActionIcon onClick={() => onNavigateClick("profile")}>
            <IconUserCircle />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
};

export default Navbar;
