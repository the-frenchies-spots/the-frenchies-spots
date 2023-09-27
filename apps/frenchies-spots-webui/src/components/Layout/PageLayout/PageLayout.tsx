import React, { ReactNode } from "react";

import { Box } from "@frenchies-spots/material";
import { StyleParams, useStyles } from "./PageLayout.styles";
import Image from "next/image";

interface PageLayoutProps extends StyleParams {
  children: ReactNode;
  h?: number | string;
}

export const PageLayout = ({
  children,
  h = "100%",
  ...style
}: PageLayoutProps) => {
  const { classes } = useStyles(style);

  return (
    <Box className={classes.container}>
      <Box className={classes.children}>{children}</Box>

      <Box sx={{ position: "relative", height: h }}>
        <Image
          src="/images/FRENCHIES_BACK_GROUND.svg"
          alt="frenchies-spot-background"
          layout="fill"
          objectFit="cover"
        />
        <Box className={classes.opacity} />
      </Box>
    </Box>
  );
};
