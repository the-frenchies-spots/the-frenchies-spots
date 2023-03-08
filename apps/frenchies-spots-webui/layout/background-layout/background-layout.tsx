import React, { ReactNode } from "react";
import { Image } from "react-native";
import { StyleParamType } from "./style-param-type";
import { Box } from "../../materials";
import { useTheme } from "../../hooks";
import { useMediaQuery } from "../../hooks";
import { styles } from "./background-layout-styles";
import { ScrollContainer } from "../../materials/scroll-container/scroll-container";
import { DrawerBottomLayout } from "../drawer-bottom-layout/drawer-bottom-layout";

interface BackGroundLayoutProps extends StyleParamType {
  children: ReactNode;
  isDrawer?: boolean;
  isDrawerRevealed?: boolean;
  isScrollable?: boolean;
  drawerChildren?: ReactNode;
}

const BackGroundLayout = (props: BackGroundLayoutProps) => {
  const {
    children,
    isOpacity = false,
    isAppBar = true,
    isBackground = true,
    isDrawer = false,
    isDrawerRevealed = true,
    isScrollable = true,
    drawerChildren = null,
  } = props;

  const { isPhone = true } = useMediaQuery();

  const style = useTheme<StyleParamType>(styles, {
    isOpacity,
    isAppBar,
    isBackground,
    isPhone,
  });

  return (
    <Box style={style.container}>
      <Box style={style.background}>
        {isBackground && (
          <Image
            source={require("../../assets/images/backgroundImg.jpg")}
            style={style.image}
          />
        )}
        {isOpacity && <Box style={style.opacity} />}
        {!isBackground && <Box style={style.blankBackground} />}
      </Box>
      <Box style={style.body}>
        <DrawerBottomLayout
          isDrawer={isDrawer}
          isRevealed={isDrawerRevealed}
          drawerChildren={drawerChildren}
        >
          <Box style={{ width: "100%", height: "100%" }}>
            <ScrollContainer
              isScrollable={isScrollable}
              style={style.scrollContainer}
            >
              {children}
            </ScrollContainer>
          </Box>
        </DrawerBottomLayout>
      </Box>
    </Box>
  );
};

export default BackGroundLayout;
