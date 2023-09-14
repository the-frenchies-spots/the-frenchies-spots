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

  const phoneSize = isFilter ? 600 : 300;

  return (
    <CustomDrawer
      {...drawerProps}
      padding={0}
      opened={drawerOpened}
      onClose={closeFilter}
      phoneSize={phoneSize}
    >
      {children}
    </CustomDrawer>
  );
};

export default SpotDrawer;
