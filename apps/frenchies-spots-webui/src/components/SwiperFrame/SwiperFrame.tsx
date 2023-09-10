import React, { ReactNode } from "react";

import SwiperNavigation, {
  SwiperNavigationProps,
} from "../SwiperNavigation/SwiperNavigation";

import { SwiperFormLayout } from "../SwiperForm/SwiperFormLayout/SwiperFormLayout";
import { ButtonProps } from "@frenchies-spots/material";

interface SwiperFrameProps extends Omit<SwiperNavigationProps, "swiper"> {
  children: ReactNode;
}

export const SwiperFrame = (props: SwiperFrameProps) => {
  const { children, ...other } = props;
  return (
    <SwiperFormLayout
      navigation={(swiper) => <SwiperNavigation {...other} swiper={swiper} />}
    >
      {children}
    </SwiperFormLayout>
  );
};
