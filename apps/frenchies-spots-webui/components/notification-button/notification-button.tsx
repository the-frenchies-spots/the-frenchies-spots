import { Icon } from "@frenchies-spots/materials";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./notification-button-styles";

export const NotificationButton = () => {
  return (
    <TouchableOpacity style={styles.notifButton}>
      <Icon name="bell" color="purple" size={22} />
    </TouchableOpacity>
  );
};
