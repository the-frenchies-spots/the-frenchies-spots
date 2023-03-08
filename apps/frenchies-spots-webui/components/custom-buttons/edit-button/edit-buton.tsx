import { Box } from "@react-native-material/core";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../../hooks";
import { Icon } from "../../../materials/icon";
import { styles } from "./edit-button-style";

type EditButtonProps = {
  onClick: () => void;
};

export const EditButton = (props: EditButtonProps) => {
  const { onClick } = props;
  const style = useTheme(styles);
  return (
    <TouchableOpacity onPress={onClick}>
      <Box style={style.container}>
        <Icon name="edit" size={25} color={style.icon.color as string} />
      </Box>
    </TouchableOpacity>
  );
};
