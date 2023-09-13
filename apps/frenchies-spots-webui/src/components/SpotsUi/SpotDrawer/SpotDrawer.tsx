import { useMediaQuery } from "@frenchies-spots/hooks";
import { Drawer, DrawerProps } from "@frenchies-spots/material";
import React, { ReactNode } from "react";
import { useSpotUi } from "../../../hooks/use-spot-ui";

interface SpotDrawerProps extends Omit<DrawerProps, "opened" | "onClose"> {
  children: ReactNode;
}

const SpotDrawer = (props: SpotDrawerProps) => {
  const { children, ...drawerProps } = props;

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { drawerOpened, closeFilter, isFilter } = useSpotUi();

  const phoneSize = isFilter ? 600 : 300;

  return (
    <Drawer
      {...drawerProps}
      position={isSmallScreen ? "bottom" : "right"}
      padding={0}
      opened={drawerOpened}
      onClose={closeFilter}
      size={isSmallScreen ? phoneSize : undefined}
      overlayProps={{ opacity: isFilter ? 0.5 : 0 }}
      sx={
        isSmallScreen
          ? {
              "	.mantine-Drawer-content": {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              },
            }
          : {}
      }
    >
      {children}
    </Drawer>
  );
};

export default SpotDrawer;
