import React, { ReactNode, ReactFragment } from "react";
import { styles } from "./page-layout-styles";
import { BackGroundLayout } from "../background-layout";
import { Container, ContainerProps } from "../../materials";
import { useMediaQuery } from "../../hooks";
import AppBar from "../../components/app-bar/app-bar";

interface PageLayoutProps extends ContainerProps {
  children: ReactNode;
  isBackground?: boolean;
  isOpacity?: boolean;
  isAppBar?: boolean;
  isDrawer?: boolean;
  isDrawerRevealed?: boolean;
  isScrollable?: boolean;
  drawerChildren?: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { isPhone } = useMediaQuery();

  const {
    children,
    isBackground = true,
    isOpacity = true,
    isAppBar = true,
    isDrawer = false,
    isDrawerRevealed = true,
    isScrollable = true,
    style: extStyle = {},
    drawerChildren = null,
    ...other
  } = props;

  const AppContainer = (
    <Container direction="column" justify="space-between" h="100%">
      {!isPhone && isAppBar && <AppBar h="10%" />}
      <BackGroundLayout
        isOpacity={isOpacity}
        isAppBar={isAppBar}
        isBackground={isBackground}
        isDrawer={isDrawer}
        isDrawerRevealed={isDrawerRevealed}
        isScrollable={isScrollable}
        drawerChildren={drawerChildren}
      >
        <Container
          {...other}
          h={"100%"}
          style={{
            ...styles.container,
            ...(extStyle as Record<string, string>),
          }}
        >
          {children}
        </Container>
      </BackGroundLayout>

      {isPhone && isAppBar && <AppBar h="10%" />}
    </Container>
  );

  return AppContainer;
};

export default PageLayout;
