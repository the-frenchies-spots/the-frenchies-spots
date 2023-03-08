import React, { ReactNode } from "react";
import { Box } from "../../materials";
import { DrawerBottom } from "../../materials/drawer/drawer";
import { useMediaQuery } from "../../hooks";

type DrawerBottomLayoutProps = {
  children: ReactNode;
  isRevealed?: boolean;
  isDrawer?: boolean;
  drawerChildren?: ReactNode;
};

export const DrawerBottomLayout = (props: DrawerBottomLayoutProps) => {
  const {
    children,
    isDrawer = false,
    isRevealed = true,
    drawerChildren = null,
  } = props;

  const { isPhone } = useMediaQuery();

  const isShowing = isDrawer && !isRevealed;

  if (isShowing) {
    return (
      <DrawerBottom isRevealed={isRevealed} drawerChildren={drawerChildren}>
        {children}
      </DrawerBottom>
    );
  }

  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};
