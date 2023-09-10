import React, { ReactNode } from "react";

import { Box, Flex } from "@frenchies-spots/material";

import Navbar from "../../Navbar/Navbar";
import { useStyles } from "./NavigationLayout.styles";

interface NavigationLayoutProps {
  children: ReactNode;
}

const NavigationLayout = (props: NavigationLayoutProps) => {
  const { children } = props;

  const { classes } = useStyles();

  return (
    <Flex direction="column" h="100%">
      <Box h="100%" className={classes.children}>
        {children}
      </Box>
      <Navbar />
    </Flex>
  );
};

export default NavigationLayout;
