import { Box } from "@react-native-material/core";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../../hooks";
import { Icon } from "../../../materials/icon";
import { styles } from "./delete-button-style";

type EditButtonProps = {
  onClick: () => void;
};

export const DeleteSpotButton = (props: EditButtonProps) => {
  const { onClick } = props;
  const style = useTheme(styles);
  return (
    <TouchableOpacity onPress={onClick}>
      <Box style={{ ...style.container, marginLeft: 8 }}>
        <Icon
          name="trash-can-outline"
          size={25}
          color={style.icon.color as string}
        />
      </Box>
    </TouchableOpacity>
  );
};
