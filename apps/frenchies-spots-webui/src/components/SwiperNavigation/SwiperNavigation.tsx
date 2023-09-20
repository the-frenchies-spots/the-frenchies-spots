import React from "react";

import {
  Group,
  Button,
  ButtonProps,
  SecondaryButton,
} from "@frenchies-spots/material";
import type { Swiper } from "swiper/types";

export interface SwiperNavigationProps {
  swiper: Swiper;
  disabled?: boolean;
  type?: ButtonProps["type"];
  prevLabel?: string;
  nextLabel?: string;
}

const SwiperNavigation = (props: SwiperNavigationProps) => {
  const {
    swiper,
    disabled = false,
    type = "button",
    prevLabel = "Retour",
    nextLabel = "Suivant",
  } = props;
  return (
    <Group grow>
      <SecondaryButton
        variant="subtle"
        color="purple"
        onClick={() => swiper.slidePrev()}
      >
        {prevLabel}
      </SecondaryButton>
      <SecondaryButton
        type={type}
        onClick={() => swiper.slideNext()}
        disabled={disabled}
      >
        {nextLabel}
      </SecondaryButton>
    </Group>
  );
};

export default SwiperNavigation;
