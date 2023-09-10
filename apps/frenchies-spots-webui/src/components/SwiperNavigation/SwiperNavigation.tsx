import React from "react";

import { Group, Button, ButtonProps } from "@frenchies-spots/material";
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
      <Button variant="text" onClick={() => swiper.slidePrev()}>
        {prevLabel}
      </Button>
      <Button
        type={type}
        onClick={() => swiper.slideNext()}
        disabled={disabled}
      >
        {nextLabel}
      </Button>
    </Group>
  );
};

export default SwiperNavigation;
