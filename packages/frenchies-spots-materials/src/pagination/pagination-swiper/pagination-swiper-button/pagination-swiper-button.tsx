import React from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { styles } from "./pagination-swiper-button-styles";
import { Box } from "../../../box";

export interface PaginationSwiperButtonProps extends TouchableOpacityProps {
  isSelected: boolean;
}

export const PaginationSwiperButton = (props: PaginationSwiperButtonProps) => {
  const { isSelected, ...other } = props;
  const style = styles(isSelected);
  return (
    <TouchableOpacity {...other} style={style.touchable}>
      <Box style={style.paginationButton} />
    </TouchableOpacity>
  );
};
