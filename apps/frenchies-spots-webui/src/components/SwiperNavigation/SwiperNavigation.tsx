import React from "react";

import {
  Group,
  type GroupProps,
  Button,
  ButtonProps,
  SecondaryButton,
  TColor,
} from "@frenchies-spots/material";
import type { Swiper } from "swiper/types";

export interface SwiperNavigationProps extends GroupProps {
  swiper: Swiper;
  disabled?: boolean;
  type?: ButtonProps["type"];
  prevLabel?: string;
  nextLabel?: string;
  nextColor?: TColor;
  prevColor?: TColor;
}

const SwiperNavigation = (props: SwiperNavigationProps) => {
  const {
    swiper,
    disabled = false,
    type = "button",
    prevLabel = "Retour",
    nextLabel = "Suivant",
    nextColor = "superLightGrey",
    prevColor = "purple",
    ...other
  } = props;
  return (
    <Group grow {...other}>
      <SecondaryButton
        variant="subtle"
        color={prevColor}
        onClick={() => swiper.slidePrev()}
      >
        {prevLabel}
      </SecondaryButton>
      <SecondaryButton
        type={type}
        onClick={() => swiper.slideNext()}
        disabled={disabled}
        color={nextColor}
      >
        {nextLabel}
      </SecondaryButton>
    </Group>
  );
};

export default SwiperNavigation;
