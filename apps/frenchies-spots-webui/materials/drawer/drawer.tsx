import React, { useState, ReactNode } from "react";
import { View, Text, OpenCameraDialogOptions, Dimensions } from "react-native";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box } from "../box";

interface DrawerBottomProps {
  children: ReactNode;
  isRevealed: boolean;
  header?: null | ReactNode;
  drawerChildren?: ReactNode;
}

const { height } = Dimensions.get("window");

export const DrawerBottom = (props: DrawerBottomProps) => {
  const {
    children,
    isRevealed = true,
    header = null,
    drawerChildren = null,
  } = props;

  return (
    <Backdrop
      revealed={isRevealed}
      header={<>{header}</>}
      backLayer={<>{children}</>}
      subheader={
        // <BackdropSubheader title="Subheader"/>
        <Box>{drawerChildren}</Box>

        // <Box>Subheader</Box>
      }
      style={{
        backgroundColor: "transparent",
      }}
      subheaderContainerStyle={{}}
      frontLayerContainerStyle={{
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: "blue",
        marginTop: height / 3,
      }}
      backLayerContainerStyle={{}}
      headerContainerStyle={{}}
      // headerHeight={10}
      // backLayerHeight={10}
      // subheaderHeight={10}
    />
  );
};
