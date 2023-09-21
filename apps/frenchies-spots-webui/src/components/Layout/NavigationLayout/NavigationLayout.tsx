import React, { ReactNode } from "react";

import { Box, Flex, ScrollArea } from "@frenchies-spots/material";

import Navbar from "../../Navbar/Navbar";
import { useStyles } from "./NavigationLayout.styles";
import NotifProvider from "../../../provider/notif-provider";

interface NavigationLayoutProps {
  children: ReactNode;
}

const NavigationLayout = (props: NavigationLayoutProps) => {
  const { children } = props;

  const { classes } = useStyles();

  return (
    <NotifProvider>
      <Flex direction="column" h="100%" className={classes.mainContainer}>
        <Box h="100%" className={classes.children}>
          {children}
        </Box>
        <Navbar className={classes.navbar} />
      </Flex>
    </NotifProvider>
  );
};

export default NavigationLayout;
