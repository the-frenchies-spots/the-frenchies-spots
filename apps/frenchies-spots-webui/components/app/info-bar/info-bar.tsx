import React from "react";
import { HStack, SubTitle, Box, Icon, Title } from "@frenchies-spots/materials";
import { NotificationButton } from "../app-button/notification-button";
import { styles } from "./info-bar-styles";
import { AddressBlock } from "./address-block";

interface InfoBarProps {
  displayLocation?: boolean;
}

export const InfoBar = (props: InfoBarProps) => {
  const { displayLocation = true } = props;

  return (
    <HStack
      justify={displayLocation ? "end" : "between"}
      style={styles.topIconContainer}
    >
      {!displayLocation && (
        <Box>
          <SubTitle variant="sub2">Actuellement à</SubTitle>
          <AddressBlock />
        </Box>
      )}

      <NotificationButton withShadow={displayLocation} />
    </HStack>
  );
};
