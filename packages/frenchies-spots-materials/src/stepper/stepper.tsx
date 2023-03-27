import React, { ReactNode } from "react";
import { Box } from "../box";
import { StepperButton, type StepperButtonProps } from "./stepper-button";
import { styles } from "./stepper-styles";

interface StepperProps {
  nb: ReactNode;
  goToIndex: (index: number) => void;
  swiperIndex: number;
}
export const Stepper = (props: StepperProps) => {
  const { nb = 1, goToIndex, swiperIndex } = props;
  return (
    <Box style={styles.paginationBar}>
      {[...Array(nb)].map((_, index) => (
        <StepperButton
          key={index}
          onPress={() => goToIndex(index)}
          isSelected={index === swiperIndex}
        />
      ))}
    </Box>
  );
};
