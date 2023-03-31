import { Icon } from "@frenchies-spots/materials";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./notification-button-styles";

interface NotificationButtonProps {
  withShadow?: boolean;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { withShadow = false } = props;

  const style = styles(withShadow);

  return (
    <TouchableOpacity style={style.notifButton}>
      <Icon name="bell" color="purple" size={22} />
    </TouchableOpacity>
  );
};
