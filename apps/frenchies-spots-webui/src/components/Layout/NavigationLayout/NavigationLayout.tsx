import React, { ReactNode } from "react";

import { Box, Flex, ScrollArea } from "@frenchies-spots/material";

import Navbar from "../../Navbar/Navbar";
import { useStyles } from "./NavigationLayout.styles";
import NotifProvider from "../../../provider/notif-provider";
import CornerBar from "./../../CornerBar/CornerBar";

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
        <CornerBar>
          <Navbar className={classes.navbar} />
        </CornerBar>
      </Flex>
    </NotifProvider>
  );
};

export default NavigationLayout;
