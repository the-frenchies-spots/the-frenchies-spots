import React, { useContext } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { HStack, SubTitle, Box, Icon, Title } from "@frenchies-spots/materials";
import { NotificationButton } from "../app-button/notification-button";
import { styles } from "./info-bar-styles";
import { AddressBlock } from "./address-block";
import { AuthButton } from "./../app-button/auth-button/auth-button";
import { AuthContext } from "../../../context";
type SxProps = ViewStyle | TextStyle | ImageStyle;

interface InfoBarProps {
  displayLocation?: boolean;
  style?: SxProps;
}

export const InfoBar = (props: InfoBarProps) => {
  const { style = {}, displayLocation = true } = props;
  const { currentUser } = useContext(AuthContext);

  return (
    <HStack
      justify={displayLocation ? "end" : "between"}
      style={{ ...styles.topIconContainer, ...style }}
    >
      {!displayLocation && (
        <Box>
          <SubTitle variant="sub2">Actuellement à</SubTitle>
          <AddressBlock />
        </Box>
      )}

      {currentUser ? (
        <NotificationButton withShadow={displayLocation} />
      ) : (
        <AuthButton />
      )}
    </HStack>
  );
};
