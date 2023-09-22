import React, { ReactNode } from "react";

import { useSpotUi } from "../../../hooks/use-spot-ui";
import { DrawerProps } from "@frenchies-spots/material";

import CustomDrawer from "../../CustomDrawer/CustomDrawer";

interface SpotDrawerProps extends Omit<DrawerProps, "opened" | "onClose"> {
  children: ReactNode;
}

const SpotDrawer = (props: SpotDrawerProps) => {
  const { children, ...drawerProps } = props;

  const { drawerOpened, closeFilter, isFilter } = useSpotUi();

  const phoneSize = isFilter ? 300 : 300;

  return (
    <CustomDrawer
      {...drawerProps}
      padding={0}
      opened={drawerOpened}
      onClose={closeFilter}
      phoneSize={phoneSize}
      overlayProps={{
        opacity: isFilter ? undefined : 0,
      }}
    >
      {children}
    </CustomDrawer>
  );
};

export default SpotDrawer;
