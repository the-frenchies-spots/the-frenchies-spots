import React, { ReactNode } from "react";

import { Box } from "@frenchies-spots/material";
import { StyleParams, useStyles } from "./PageLayout.styles";
import Image from "next/image";

interface PageLayoutProps extends StyleParams {
  children: ReactNode;
}

export const PageLayout = ({ children, ...style }: PageLayoutProps) => {
  const { classes } = useStyles(style);

  return (
    <Box className={classes.container}>
      <Image
        src="/images/frenchies-spot-background.webp"
        alt="frenchies-spot-background"
        layout="fill"
        objectFit="cover"
      />
      <Box className={classes.opacity} />
      <Box className={classes.children}>{children}</Box>
    </Box>
  );
};
