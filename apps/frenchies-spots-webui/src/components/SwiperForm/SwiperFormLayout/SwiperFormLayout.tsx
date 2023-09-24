import React, { ReactNode } from "react";

import { Box } from "@frenchies-spots/material";
import { useStyles } from "./SwiperFormLayout.styles";
import { useSwiper } from "swiper/react";
import { Swiper } from "swiper/types";

interface SwiperFormLayoutProps {
  children: ReactNode;
  navigation: (param: Swiper) => ReactNode;
  h?: number;
}

export const SwiperFormLayout = (props: SwiperFormLayoutProps) => {
  const { children, navigation, h = 100 } = props;

  const swipper = useSwiper();

  const { classes } = useStyles(h);

  return (
    <Box className={classes.container}>
      <Box className={classes.children}>{children}</Box>
      <Box className={classes.navigation} py="md">
        {navigation(swipper)}
      </Box>
    </Box>
  );
};
