import React, { ReactNode } from "react";
import { Box } from "../../box";
import {
  PaginationSwiperButton,
  type PaginationSwiperButtonProps,
} from "./pagination-swiper-button";
import { styles } from "./pagination-swiper-styles";

interface PaginationSwiperProps {
  nb: ReactNode;
  goToIndex: (index: number) => void;
  swiperIndex: number;
}
export const PaginationSwiper = (props: PaginationSwiperProps) => {
  const { nb = 1, goToIndex, swiperIndex } = props;
  return (
    <Box style={styles.paginationBar}>
      {[...Array(nb)].map((_, index) => (
        <PaginationSwiperButton
          key={index}
          onPress={() => goToIndex(index)}
          isSelected={index === swiperIndex}
        />
      ))}
    </Box>
  );
};
