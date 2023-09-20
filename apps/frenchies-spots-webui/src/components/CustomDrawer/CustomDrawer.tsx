import { useMediaQuery } from "@frenchies-spots/hooks";
import { Box, Drawer, DrawerProps, Group } from "@frenchies-spots/material";
import React, { ReactNode } from "react";
import { useStyles } from "./CustomDrawer.styles";

interface CustomDrawerProps extends DrawerProps {
  children: ReactNode;
  phoneSize?: number;
}

const CustomDrawer = (props: CustomDrawerProps) => {
  const { children, phoneSize = 600, ...drawerProps } = props;

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const { classes } = useStyles(isSmallScreen);

  return (
    <Drawer
      {...drawerProps}
      position={isSmallScreen ? "bottom" : "right"}
      padding={0}
      size={isSmallScreen ? phoneSize : undefined}
      className={classes.drawer}
    >
      <Group position="center">
        <Box className={classes.bar} />
      </Group>
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
